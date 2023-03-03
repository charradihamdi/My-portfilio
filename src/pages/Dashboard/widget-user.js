import React, { Component } from "react"
import { Card } from "reactstrap"

//Import Images
import user2 from "../../assets/images/users/user-2.png"
import github from "../../assets/images/flags/github.png"
class WidgetUser extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="widget-user">
          <div className="widget-user-desc p-4 text-center bg-primary position-relative">
            <i className="fas fa-solid fa-code h2 text-white-50"></i>
          </div>
          <div className="p-4">
            <div
              className="float-start mt-2 me-3 d-none d-lg-flex"
              style={{
                border: "0px solid black",
                width: "30%",
                height: "13rem",
              }}
            >
              <img
                src={user2}
                alt=""
                className="rounded-circle avatar-lg"
                style={{ width: "340px", height: "600px", marginTop: "-30%" }}
              />
            </div>
            <h6 className="mb-1 font-size-16 mt-2">Charradi Hamdi</h6>
            <strong className="text-muted mb-0">MERN STACK developer</strong>
            <h5 className="text-black mb-0 mt-3 font-size-30"></h5>
            <div className="row d-flex ">
              <i class="mdi mdi-gmail font-size-16">Charradihamdi1@gmail.com</i>
              <i class="mdi mdi-guitar-pick font-size-16">Tunis ,tunisie</i>
            </div>

            <a href="https://github.com/charradihamdi/">
              <i class="mdi mdi-github font-size-24"></i>
            </a>
            <a href="https://www.instagram.com/charradihamido/">
              <i class="mdi mdi-instagram font-size-24"></i>
            </a>
            <a href="https://www.facebook.com/charradihamido/">
              {""}
              <i class="mdi mdi-facebook font-size-24"></i>
            </a>
            <a href="https://www.linkedin.com/in/hamdi-charradi-3721291bb/">
              {" "}
              <i class="mdi mdi-linkedin font-size-24"></i>
            </a>
          </div>
        </Card>
      </React.Fragment>
    )
  }
}

export default WidgetUser
