import React, { Component } from "react"
import { Table, Card, CardBody, Button } from "reactstrap"

//Import Images
import user2 from "../../assets/images/users/user-2.png"
import user3 from "../../assets/images/users/user-3.jpg"
import user4 from "../../assets/images/users/user-4.jpg"
import user5 from "../../assets/images/users/user-5.jpg"
import user6 from "../../assets/images/users/user-6.jpg"
import intro from "../../assets/images/logoIntro.mp4"
class LatestTransactions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transactions: [
        {
          imgUrl: user2,
          name: "Herbert C. Patton",
          status: "Confirm",
          amount: "14,584",
          date: "5/12/2016",
          color: "success",
        },
        {
          imgUrl: user3,
          name: "Mathias N. Klausen",
          status: "Waiting payment",
          amount: "8,541",
          date: "10/11/2016",
          color: "warning",
        },
        {
          imgUrl: user4,
          name: "Nikolaj S. Henriksen	",
          status: "Confirm",
          amount: "954",
          date: "8/11/2016",
          color: "success",
        },
        {
          imgUrl: user5,
          name: "Lasse C. Overgaard",
          status: "Payment expired",
          amount: "44,584",
          date: "7/11/2016",
          color: "danger",
        },
        {
          imgUrl: user6,
          name: "Kasper S. Jessen",
          status: "Confirm",
          amount: "8,844",
          date: "1/11/2016",
          color: "success",
        },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4"></h4>
            <video src={intro} width="100%" controls loop autoPlay></video>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

export default LatestTransactions
