import React, { useEffect } from "react"
import MetaTags from "react-meta-tags"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

// Carousel
import Slide from "./CarouselTypes/slide"
import Slidewithcontrol from "./CarouselTypes/slidewithcontrol"
import Slidewithindicator from "./CarouselTypes/slidewithindicator"
import Slidewithcaption from "./CarouselTypes/slidewithcaption"
import Slidewithfade from "./CarouselTypes/slidewithfade"

import { connect } from "react-redux"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"

const UiCarousel = props => {
  const breadcrumbItems = [
    { title: " ", link: "#" },
    { title: "UI Elements", link: "#" },
    { title: "Carousel", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Carousel", breadcrumbItems)
  })

  return (
    <React.Fragment>
      <MetaTags>
        <title>CHarradi Hamdi - full stack js Developer</title>
      </MetaTags>

      <Row>
        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4"> SeoMarket</CardTitle>
              <p className="card-title-desc">
                It is not enough to create and put a website online for it to be
                seen and known by Internet users and your target audience. It is
                necessary to take the necessary measures to ensure its
                visibility in the midst of the many responses on the Google
                search engine
              </p>
              <img src="../../assets/images/small/img-1.jpg" />
            </CardBody>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4">With controls</CardTitle>
              <p className="card-title-desc">
                Adding in the previous and next controls:
              </p>
              <Slidewithcontrol />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4">With indicators</CardTitle>
              <p className="card-title-desc">
                You can also add the indicators to the carousel, alongside the
                controls, too.
              </p>
              <Slidewithindicator />
            </CardBody>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <CardBody>
              <CardTitle className="h4">With captions</CardTitle>
              <p className="card-title-desc">
                Add captions to your slides easily with the{" "}
                <code>.carousel-caption</code> element within any{" "}
                <code>.carousel-item</code>.
              </p>
              <Slidewithcaption />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Card>
            <CardBody>
              <CardTitle className="h4">Crossfade</CardTitle>
              <p className="card-title-desc">
                Add <code>.carousel-fade</code> to your carousel to animate
                slides with a fade transition instead of a slide.
              </p>
              <Slidewithfade />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(UiCarousel)
