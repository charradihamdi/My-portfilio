import React from "react"
import {
  Card,
  CardBody,
  Row,
  Col,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap"
import react from "../../assets/images/flags/react.png"
import sass from "../../assets/images/flags/sass.png"
import css from "../../assets/images/flags/css.png"
import pug from "../../assets/images/flags/pug.png"
import node from "../../assets/images/flags/node.png"
import express from "../../assets/images/flags/express.png"
import mogodb from "../../assets/images/flags/mongodb).png"
import sql from "../../assets/images/flags/sql.png"
import isgb from "../../assets/images/flags/isgb.png"
import lycee from "../../assets/images/flags/lycee.jpeg"
import git from "../../assets/images/flags/git.png"
import github from "../../assets/images/flags/github.png"
import { Link } from "react-router-dom"

const Others = props => {
  return (
    <React.Fragment>
      <Row>
        <h3>Formations</h3>
        <Col mg={12} lg={12} xl={5}>
          <Card>
            <CardImg top className="img-fluid" src={isgb} alt="Lexa" />
            <CardBody>
              <CardTitle className="h4">
                Bachelor’s degree in Business Computing
              </CardTitle>
              <CardText>
                Higher Institute of Management at Bizerte ISGB
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col mg={12} lg={12} xl={5}>
          <Card>
            <CardImg top className="img-fluid" src={lycee} alt="Lexa" />
            <CardBody>
              <CardTitle className="h4">High School diploma</CardTitle>
              <CardText>Siliana High school</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Others
