import React from "react"
import { Card, CardBody, Row, Col } from "reactstrap"
import react from "../../assets/images/flags/react.png"
import sass from "../../assets/images/flags/sass.png"
import css from "../../assets/images/flags/css.png"
import pug from "../../assets/images/flags/pug.png"
import node from "../../assets/images/flags/node.png"
import express from "../../assets/images/flags/express.png"
import mogodb from "../../assets/images/flags/mongodb).png"
import sql from "../../assets/images/flags/sql.png"
import git from "../../assets/images/flags/git.png"
import github from "../../assets/images/flags/github.png"

const Miniwidget = props => {
  return (
    <React.Fragment>
      <Row>
        <Col xl={3} sm={6}>
          <Card className="mini-stat bg-white">
            <CardBody className="card-body mini-stat-img">
              <h5 className="">Front-End</h5>
              <h2 className="mb-4 text-white">
                <img src={react} style={{ width: "60%" }} />
                <img src={sass} style={{ width: "60%" }} />
                <img src={css} style={{ width: "60%" }} />
                <img src={pug} style={{ width: "60%" }} />
              </h2>
            </CardBody>
          </Card>
        </Col>
        <Col xl={3} sm={6}>
          <Card className="mini-stat bg-white">
            <CardBody className="card-body mini-stat-img">
              <h5 className="">Back-End</h5>
              <h2 className="mb-4 text-white">
                <img src={node} style={{ width: "60%" }} />
                <img src={express} style={{ width: "60%" }} />
              </h2>
            </CardBody>
          </Card>
        </Col>
        <Col xl={3} sm={6}>
          <Card className="mini-stat bg-white">
            <CardBody className="card-body mini-stat-img">
              <h5 className="">Data-Base</h5>
              <h2 className="mb-4 text-white">
                <img src={mogodb} style={{ width: "60%" }} />
                <img src={sql} style={{ width: "60%" }} />
              </h2>
            </CardBody>
          </Card>
        </Col>
        <Col xl={3} sm={6}>
          <Card className="mini-stat bg-white">
            <CardBody className="card-body mini-stat-img">
              <h5 className="">Versioning</h5>
              <h2 className="mb-4 text-white">
                <img src={git} style={{ width: "60%" }} />
                <img src={github} style={{ width: "60%" }} />
              </h2>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Miniwidget
