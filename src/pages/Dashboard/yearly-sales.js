import React, { Component } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"
import ReactApexChart from "react-apexcharts"

class YearlySales extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        colors: ["#7A6FBE", "#28BBE3"],
        plotOptions: {
          bar: {
            columnWidth: "70%",
            dataLabels: {
              show: false,
            },
          },
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: false,
          row: {
            colors: ["transparent", "transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          labels: {
            show: false,
          },
          categories: [],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
      series: [
        {
          name: "count",
          data: ["2000", 6, 4, 7],
        },
      ],
    }
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">contact</h4>
            <Row>
              <Col md="4">
                <div>
                  <h3>52</h3>
                  <p className="text-muted"></p>
                </div>
              </Col>
              <Col md="8" className="text-end">
                <div id="sparkline">
                  <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height="130"
                    className="apex-charts"
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

export default YearlySales
