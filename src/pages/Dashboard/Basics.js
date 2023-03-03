import React from "react"
import { Card, CardBody, Row, Col, Progress } from "reactstrap"
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
import Slider from "react-rangeslider"

const Basics = props => {
  return (
    <React.Fragment>
      <Row>
        <Col xl={4} sm={6}>
          <Card className="mini-stat bg-white">
            <CardBody className="card-body mini-stat-img">
              <h5 className="">Basics</h5>
              <h4 className="mb-4 text-black">C/C++</h4>
              <div className="mb-4">
                <Progress color="primary" value={50} />
              </div>
              <br />
              <h4 className="mb-4 text-black">java</h4>
              <br />
              <div className="mb-4">
                <Progress color="primary" value={30} />
              </div>
              <h4 className="mb-4 text-black">Python</h4>
              <br />
              <div className="mb-4">
                <Progress color="primary" value={50} />
              </div>
              <h4 className="mb-4 text-black">TypeScript</h4>
              <br />
              <div className="mb-4">
                <Progress color="primary" value={60} />
              </div>
              <h4 className="mb-4 text-black">SQL</h4>
              <br />
              <div className="mb-4">
                <Progress color="primary" value={70} />
              </div>
              <h4 className="mb-4 text-black">PL/SQL</h4>
              <br />
              <div className="mb-4">
                <Progress color="primary" value={40} />
              </div>
              <h4 className="mb-4 text-black">DAX</h4>
              <br />
              <div className="mb-4">
                <Progress color="primary" value={60} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} sm={6}>
          <Card className="mini-stat bg-white">
            <CardBody className="card-body mini-stat-img">
              <h5 className="">Dev Tools</h5>
              <h4 className="mb-4 text-black">POO</h4>
              <div className="mb-4">
                <Progress color="primary" value={90} />
              </div>
              <br />
              <h4 className="mb-4 text-black">JWT</h4>
              <br />
              <div className="mb-4">
                <Progress color="primary" value={80} />
              </div>
              <h4 className="mb-4 text-black">API | AJAX</h4>
              <br />
              <div className="mb-4">
                <Progress color="primary" value={100} />
              </div>
              <h4 className="mb-4 text-black">MVC</h4>
              <br />
              <div className="mb-4">
                <Progress color="primary" value={90} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} sm={6}>
          <Card className="mini-stat bg-white">
            <CardBody className="card-body mini-stat-img">
              <h5 className="">Others</h5>

              <h4 className="mb-4 text-black">UI/UX</h4>
              <div className="mb-4">
                <Progress color="primary" value={50} />
              </div>
              <br />
              <h4 className="mb-4 text-black">UML</h4>
              <div className="mb-4">
                <Progress color="primary" value={80} />
              </div>
              <br />
              <h4 className="mb-4 text-black">Scrum</h4>
              <div className="mb-4">
                <Progress color="primary" value={60} />
              </div>
              <br />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Basics
