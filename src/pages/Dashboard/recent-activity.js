import React, { Component } from "react"
import { Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

class RecentActivity extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Recent Activity Feed</h4>
            <ol className="activity-feed mb-0">
              <li className="feed-item">
                <div className="feed-item-list">
                  <span className="date">Fev 2023</span>
                  <span className="activity-text">
                    KP design: create blog website for Design Agencies <br></br>
                    <a href="https://kpdesign.netlify.app/?fbclid=IwAR0X9MiVrS7Mo-9U9x7FD85Wcw7-tv-EGZ8Wj8RVkeZN2TTXwnjfUVtRKL8">
                      website link
                    </a>
                  </span>
                </div>
              </li>
              <li className="feed-item">
                <div className="feed-item-list">
                  <span className="date">Fev 2023</span>
                  <span className="activity-text">
                    Rayen Hamdi: create template with sass html5 for pfe project{" "}
                    <br></br>
                  </span>
                </div>
              </li>
              <li className="feed-item">
                <div className="feed-item-list">
                  <span className="date">july 2022</span>
                  <span className="activity-text">
                    FLASK PROJECT: build front application with react for image
                    processing APK{" "}
                  </span>
                </div>
              </li>
              <li className="feed-item">
                <div className="feed-item-list">
                  <span className="date">Jun 2022</span>
                  <span className="activity-text">
                    HiCoach: create HiCoach application
                    <a href="https://github.com/charradihamdi/Hicotech">
                      <i
                        className="fas fa-solid fa-code h2 text-black-50 "
                        style={{
                          border: "1px solid grey",
                          borderRadius: "50%",
                          fontSize: "15px",
                          marginLeft: "10px",
                        }}
                      ></i>
                    </a>
                  </span>
                </div>
              </li>
            </ol>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

export default RecentActivity
