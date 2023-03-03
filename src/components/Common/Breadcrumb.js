import React from "react"
import { Row, Col } from "reactstrap"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Sparklines, SparklinesBars } from "react-sparklines"

const Breadcrumb = props => {
  const itemLength = (props.breadcrumbItems || []).length || 1

  return (
    <Row>
      <Col sm={6}></Col>
    </Row>
  )
}

const mapStatetoProps = state => {
  const Layout = state.Layout
  const BreadcrumbData = state.Breadcrumb
  return {
    layoutType: Layout.layoutType,
    title: BreadcrumbData.title,
    breadcrumbItems: BreadcrumbData.breadcrumbItems,
  }
}

export default connect(mapStatetoProps, {})(Breadcrumb)
