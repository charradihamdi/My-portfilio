import React, { useEffect } from "react"
import { Col, Row, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

import MetaTags from "react-meta-tags"

import { connect } from "react-redux"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"

//Import Images
import img1 from "../../assets/images/small/mn.jpeg"
import img2 from "../../assets/images/small/mern.png"
import RecentActivity from "pages/Dashboard/recent-activity"
import LatestOrders from "pages/Dashboard/latest-orders"

const PagesTimeline = props => {
  const breadcrumbItems = [
    { title: " ", link: "#" },
    { title: "Pages", link: "#" },
    { title: "Timeline", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Timeline", breadcrumbItems)
  })

  return (
    <React.Fragment>
      <MetaTags>
        <title>My history </title>
      </MetaTags>
      <Row>
        <Col xl="6">
          <RecentActivity />
        </Col>

        <Col xl="6">
          <h3 className="d-flex ali">Formations</h3>

          <LatestOrders />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Card>
            <CardBody>
              <section id="cd-timeline" className="cd-container" dir="ltr">
                <div className="cd-timeline-block timeline-right">
                  <div className="cd-timeline-img bg-success">
                    <i className="mdi mdi-adjust"></i>
                  </div>

                  <div className="cd-timeline-content">
                    <h3>Programmation & Web design </h3>
                    <p className="mb-0 text-muted">
                      1-started with simple HTML5 & CSS3 & Bootstrap pages in
                      the early days of the internet.
                      <br />
                      2- Designing site web with html and css
                    </p>
                    <span className="cd-date">May-2020</span>
                  </div>
                </div>

                <div className="cd-timeline-block timeline-left">
                  <div className="cd-timeline-img bg-danger">
                    <i className="mdi mdi-adjust"></i>
                  </div>

                  <div className="cd-timeline-content">
                    <h3>WEB DESIGN</h3>
                    <p className="mb-4 text-muted">
                      meet with the client to understand their goals, target
                      audience, and requirements for the website.
                      <br />
                      2-Creating wireframe
                      <br />
                      3-Designing visual elements
                      <br />
                      4-Creating mockups
                    </p>

                    <span className="cd-date">Juin 2020</span>
                  </div>
                </div>

                <div className="cd-timeline-block timeline-right">
                  <div className="cd-timeline-img bg-info">
                    <i className="mdi mdi-adjust"></i>
                  </div>

                  <div className="cd-timeline-content">
                    <h3>JS DEVELOPMENT</h3>
                    <p className="mb-0 text-muted">
                      1-Build a strong foundation in core JavaScript concepts
                      like data types and functions.
                      <br />
                      2-Learn about closures, functional programming, and
                      object-oriented programming.
                      <br />
                      3-Stay up-to-date with the latest features and updates to
                      JavaScript.
                    </p>
                    <span className="cd-date">2021</span>
                  </div>
                </div>

                <div className="cd-timeline-block timeline-left">
                  <div className="cd-timeline-img bg-pink">
                    <i className="mdi mdi-adjust"></i>
                  </div>

                  <div className="cd-timeline-content">
                    <h3>MERN STACK DEVELOPER</h3>
                    <p className="mb-0 text-muted">
                      1-Familiarize yourself with MongoDB, Express.js, React,
                      and Node.js.
                      <br />
                      2-Learn how to build and deploy full-stack web
                      applications using the MERN stack.
                      <br />
                      3-Understand how to use Mongoose, a MongoDB object
                      modeling tool, with Node.js and Express.js.
                      <br />
                      4-Explore third-party libraries and frameworks that can be
                      used with the MERN stack, such as Redux and HOOKS.
                    </p>
                    <br></br>
                    <img
                      src={img1}
                      alt=""
                      className="rounded"
                      width="120"
                    />{" "}
                    <span className="cd-date">Jun 2021</span>
                  </div>
                </div>
                <div className="cd-timeline-block timeline-right">
                  <div className="cd-timeline-img bg-warning">
                    <i className="mdi mdi-adjust"></i>
                  </div>

                  <div className="cd-timeline-content">
                    <h3>MSBI Consultant</h3>
                    <p className="mb-4 text-muted">
                      -Building a dashboard to help banking sectors understand
                      their customers
                      <br />
                      -Work with azure machine learning studio to find churners
                      and break clients into smaller groups that are similar on
                      certain criteria
                    </p>

                    <span className="cd-date">Fev 2022 to jun 2022</span>
                  </div>
                </div>

                <div className="cd-timeline-block">
                  <div className="cd-timeline-img bg-primary d-xl-none">
                    <i className="mdi mdi-adjust"></i>
                  </div>

                  <div className="cd-timeline-content">
                    <h3>Freelance</h3>
                    <p className="mb-0 text-muted">
                      i create +5 projects (e-commerce, blog site, portfolio...)
                      and responsive websites, with 99.9% customer satisfaction.
                      It doesn't matter if you need mern stack technology or an
                      e-commerce platform using react and node js, I can create
                      highly customizable designs that you can modify later
                      easily.
                    </p>
                    <span className="cd-date">present </span>
                  </div>
                </div>
              </section>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(PagesTimeline)
