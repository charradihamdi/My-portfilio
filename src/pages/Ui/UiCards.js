import React, { useEffect } from "react"
import MetaTags from "react-meta-tags"

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
} from "reactstrap"

// import images
import img1 from "../../assets/images/small/img-1.jpg"
import img2 from "../../assets/images/small/img-2.jpg"
import img3 from "../../assets/images/small/img-3.jpg"
import img4 from "../../assets/images/small/img-4.jpg"
import img5 from "../../assets/images/small/img-5.jpg"
import img6 from "../../assets/images/small/img-6.jpg"
import img7 from "../../assets/images/small/img-7.jpg"
import img8 from "../../assets/images/small/img-8.png"
import { Link } from "react-router-dom"

import { connect } from "react-redux"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"

const UiCards = props => {
  const breadcrumbItems = [
    { title: " ", link: "#" },
    { title: "UI Elements", link: "#" },
    { title: "Cards", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Cards", breadcrumbItems)
  })

  return (
    <React.Fragment>
      <MetaTags>
        <title>Charradi Hamdi Full Stack Js Developer</title>
      </MetaTags>

      <Row>
        <Col mg={6} lg={6} xl={3}>
          <Card>
            <CardImg
              top
              className="img-fluid"
              src={img1}
              alt=" "
              style={{ height: "180px" }}
            />
            <CardBody>
              <CardTitle className="h4">KPdesign</CardTitle>
              <CardText>Graphic Design Agency.</CardText>
              <Link
                to="https://kpdesign.netlify.app/?fbclid=IwAR0X9MiVrS7Mo-9U9x7FD85Wcw7-tv-EGZ8Wj8RVkeZN2TTXwnjfUVtRKL8"
                className="btn btn-primary waves-effect waves-light"
              >
                <i class="mdi mdi-earth font-size-24"></i>
              </Link>
            </CardBody>
          </Card>
        </Col>

        <Col mg={6} lg={6} xl={3}>
          <Card>
            <img
              top
              className="img-fluid"
              src={img2}
              alt=" "
              style={{ width: "100%", heigt: "200px" }}
            />
            <CardBody>
              <CardTitle className="h4">SeoMarket</CardTitle>
              <CardText>SeoMarket Agency.</CardText>
              <Link
                to="https://seomarket.netlify.app/"
                className="btn btn-primary waves-effect waves-light"
              >
                <i class="mdi mdi-earth font-size-24"></i>
              </Link>
            </CardBody>
          </Card>
        </Col>
        <Col mg={6} lg={6} xl={3}>
          <Card>
            <CardImg
              top
              className="img-fluid"
              src={img5}
              alt=" "
              style={{ height: "180px" }}
            />
            <CardBody>
              <CardTitle className="h4">Workoo</CardTitle>
              <CardText>Recrutement agency template.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col mg={6} lg={6} xl={3}>
          <Card>
            <CardImg
              top
              className="img-fluid"
              src={img4}
              alt=" "
              style={{ height: "180px" }}
            />
            <CardBody>
              <CardTitle className="h4">Hicotech</CardTitle>
              <CardText>Hicotech project.</CardText>
              <Link
                to="https://github.com/charradihamdi/Hicotech"
                className="btn btn-dark waves-effect waves-light"
              >
                <i class="mdi mdi-github font-size-24"></i>
              </Link>
            </CardBody>
          </Card>
        </Col>
        <Col mg={6} lg={6} xl={3}>
          <Card>
            <CardImg
              top
              className="img-fluid"
              src={img3}
              alt=" "
              style={{ height: "180px" }}
            />
            <CardBody>
              <CardTitle className="h4">EditPiture</CardTitle>
              <CardText>EditPicture Freelance Project.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col mg={6} lg={6} xl={3}>
          <Card>
            <CardImg
              top
              className="img-fluid"
              src={img6}
              alt=" "
              style={{ height: "180px" }}
            />
            <CardBody>
              <CardTitle className="h4">old Portfilio</CardTitle>
              <CardText>Old full stack js Portfilio.</CardText>
            </CardBody>
          </Card>
          <Link
            to="https://hamdicharradi.netlify.app/"
            className="btn btn-primary waves-effect waves-light"
          >
            <i class="mdi mdi-earth font-size-24"></i>
          </Link>
        </Col>

        <Col mg={6} lg={6} xl={3}>
          <Card>
            <CardImg
              top
              className="img-fluid"
              src={img7}
              alt=" "
              style={{ height: "180px" }}
            />
            <CardBody>
              <CardTitle className="h4"> Portfilio</CardTitle>
              <CardText> full stack js Portfilio.</CardText>
            </CardBody>
          </Card>
          <Link
            to="https://hamdicharradi.netlify.app/"
            className="btn btn-primary waves-effect waves-light"
          >
            <i class="mdi mdi-earth font-size-24"></i>
          </Link>
        </Col>
        <Col mg={6} lg={6} xl={3}>
          <Card>
            <CardImg
              top
              className="img-fluid"
              src={img8}
              alt=" "
              style={{ height: "180px" }}
            />
            <CardBody>
              <CardTitle className="h4"> StudioTale</CardTitle>
              <CardText> </CardText>
            </CardBody>
          </Card>
          <Link
            to="https://github.com/charradihamdi/studiotale"
            className="btn btn-dark waves-effect waves-light"
          >
            <i class="mdi mdi-github font-size-24"></i>
          </Link>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(UiCards)
