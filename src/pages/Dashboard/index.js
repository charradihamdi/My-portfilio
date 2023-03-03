import React, { useEffect } from "react"
import MetaTags from "react-meta-tags"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"

// Pages Components
import Miniwidget from "./Miniwidget"
import MonthlyEarnings from "./montly-earnings"
import EmailSent from "./email-sent"
import MonthlyEarnings2 from "./montly-earnings2"
import Inbox from "./inbox"
import RecentActivity from "./recent-activity"
import WidgetUser from "./widget-user"
import YearlySales from "./yearly-sales"
import LatestTransactions from "./latest-transactions"
import LatestOrders from "./latest-orders"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"
import Basics from "./Basics"
import Others from "./Others"

const Dashboard = props => {
  const breadcrumbItems = [
    { title: " ", link: "#" },
    { title: "Dashboard", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Dashboard", breadcrumbItems)
  })

  const reports = [
    {
      title: "Orders",
      iconClass: "cube-outline",
      total: "1,587",
      average: "+11%",
      badgecolor: "info",
    },
    {
      title: "Revenue",
      iconClass: "buffer",
      total: "$46,782",
      average: "-29%",
      badgecolor: "danger",
    },
    {
      title: "Average Price",
      iconClass: "tag-text-outline",
      total: "$15.9",
      average: "0%",
      badgecolor: "warning",
    },
    {
      title: "Product Sold",
      iconClass: "briefcase-check",
      total: "1890",
      average: "+89%",
      badgecolor: "info",
    },
  ]

  return (
    <React.Fragment>
      <MetaTags>
        <title>Charradi hamdi - full stack js developer</title>
      </MetaTags>

      {/*mimi widgets */}

      <Row>
        <Col xl="12">
          {/* widget user */}
          <WidgetUser />

          {/* yearly sales */}
        </Col>
      </Row>

      <Row>
        <Col xl="6" lg="6">
          <LatestTransactions />
        </Col>
        <Col xl="6">
          <h3>Skills</h3>
          <Miniwidget reports={reports} />
        </Col>
      </Row>

      <Row>
        <Col xl="6">
          <Others reports={reports} />
        </Col>
        <Col xl="6">
          <Basics reports={reports} />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(Dashboard)
