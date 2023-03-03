import React, { Component } from "react"
import { Table, Card, Badge, Button } from "reactstrap"

//Import Images
import user1 from "../../assets/images/users/user-1.jpg"
import user2 from "../../assets/images/users/user-2.png"
import user3 from "../../assets/images/users/user-3.jpg"
import user4 from "../../assets/images/users/user-4.jpg"
import user5 from "../../assets/images/users/user-5.jpg"
import user6 from "../../assets/images/users/user-6.jpg"

class LatestOrders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [
        {
          imgUrl:
            "https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-1/310490062_1692001587863218_2209345608634660732_n.jpg?stp=c0.73.200.200a_dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Qn-cqDrw1r8AX-5ygg1&_nc_ht=scontent.ftun10-1.fna&oh=00_AfAewrOeZZxYilQ6fEGoj9fs8l7yDbMY8SP5yLZ7k2scUw&oe=6404E1DD",
          id: "52140300",
          name: "Raed Laabidi",
          status: "Delivered",
          amount: "1,024",
          date: "22/02/2023",
          color: "success",
        },
        {
          imgUrl:
            "https://www.doyoubuzz.com/var/users/_/2010/12/15/22/86957/avatar/82242/avatar_cp_big.jpg?t=1677707960",
          id: "12354781",
          name: "Aymen Wazni",
          status: "Delivered",
          amount: "200",
          date: "20/2022",
          color: "success",
        },
        {
          imgUrl:
            "https://media.licdn.com/dms/image/C4D03AQGQJQSJAr7gkg/profile-displayphoto-shrink_200_200/0/1635958427487?e=1683158400&v=beta&t=KGfT2Pf2hyk8ci8iMtQSlnjxoG57rNqNyboxM_VcvAk",
          id: "12354781",
          name: "Bessem Zbidi",
          status: "Delivered",
          amount: "50",
          date: "14/10/2016",
          color: "success",
        },
        {
          imgUrl:
            "https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/323134405_3446940428907984_5879167643780385234_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Xt23261l1VMAX8NFvI2&_nc_oc=AQnPttvg6Q1AYgsMyGS1BWHp0BJhwDODIhvFCpEUTKtRDgWZ0csACUbkc_DkpIH-jlI&_nc_ht=scontent.ftun10-1.fna&oh=00_AfCIIuuXHYpWLN16yC3ry-Sx_NXfp19M_m_mgdsK1sIFEA&oe=6404E6A0",
          id: "85214796",
          name: "Fayrooz Boughdiri",
          status: "Delivered",
          amount: "100",
          date: "5/09/2022",
          color: "success",
        },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <div className="card-body">
            <h4 className="card-title mb-4">Clients Orders</h4>

            <div className="table-responsive">
              <Table className="align-middle table-centered table-vertical table-nowrap mb-1">
                <tbody>
                  {this.state.orders.map((order, key) => (
                    <tr key={key}>
                      <td>
                        <img
                          src={order.imgUrl}
                          alt="user"
                          className="avatar-xs me-2 rounded-circle"
                        />{" "}
                        {order.name}
                      </td>
                      <td>
                        <Badge className={"rounded-pill bg-" + order.color}>
                          {order.status}
                        </Badge>
                      </td>
                      <td>${order.amount}</td>
                      <td>{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Card>
      </React.Fragment>
    )
  }
}

export default LatestOrders
