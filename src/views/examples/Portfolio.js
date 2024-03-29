
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/5aleha3alena2.PNG";
import promo2 from "assets/img/theme/pizza.PNG";
import promo3 from "assets/img/theme/cookiesStand.PNG";
import promo4 from "assets/img/theme/busMall.PNG";
import promo5 from "assets/img/theme/HornedBeast.PNG";
import promo6 from "assets/img/theme/CityExplorer.PNG";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Portfolio extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        The Next With Technology !{" "}
                      </h1>
                      <p className="lead text-white">
                        I believe that the software development is the future language, so learning it lead us to improve the way of life. every new day is having a new challenge, new information and new programming ideas. Nice to learn everything in technology and apply it.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div><img src={promo1} width={'250.100px'}></img></div>
                          <h6 className="text-primary text-uppercase">
                            5aleha 3alena (201 Project)
                          </h6>
                          <p className="description mt-3">
                            5aleha 3alena is A website for tourists to view our recommended places in Jordan according to previous people who were in Jordan using our guidance through the website.
                            Based on HTML, Java Script and CSS.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              JS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://group-7-201.github.io/5aleha-3alena/"
                          >
                            visit My webSite
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div><img src={promo2} width={'250.100px'}></img></div>
                          <h6 className="text-success text-uppercase">
                            Chocolate Pizza
                          </h6>
                          <p className="description mt-3">
                            Webpage We made it at the same of given page using HTML and CSS only.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://sukina12.github.io/chocolate-pizza/"
                          >
                            visit My webSite
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div><img src={promo3} width={'250.200px'}></img></div>
                          <h6 className="text-warning text-uppercase">
                            CookiesStand
                          </h6>
                          <p className="description mt-3">
                            Webpage shows cookies stores in more one center, and shows sales data and you can add new center.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              JS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://sukina12.github.io/cookie-stand/"
                          >
                            visit My webSite
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Row>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div><img src={promo4} width={'250.100px'}></img></div>
                            <h6 className="text-primary text-uppercase">
                              Bus Mall
                          </h6>
                            <p className="description mt-3">
                              Bus Mall is A website for showing images and you can vote to any image, and then give you information about every image how many votes and shows time
                          </p>
                            <div>
                              <Badge color="primary" pill className="mr-1">
                                Design
                            </Badge>
                              <Badge color="primary" pill className="mr-1">
                                Useful
                            </Badge>
                              <Badge color="primary" pill className="mr-1">
                                Website
                            </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="primary"
                              href="https://sukina12.github.io/bus-mall/"
                            >
                              visit My webSite
                          </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                          <div><img src={promo5} width={'250.100px'}></img></div>
                            <h6 className="text-success text-uppercase">
                              HornedBeast
                          </h6>
                            <p className="description mt-3">
                              This Project Web is Application displays images,description and name of horned animals.
                              You Can rate for your favourite image by click on button.
                              Put Each information in card .
                          </p>
                            <div>
                              <Badge color="success" pill className="mr-1">
                                React
                            </Badge>
                              <Badge color="success" pill className="mr-1">
                                React-Bootstrap
                            </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="success"
                              href="https://blissful-engelbart-880b12.netlify.app/"
                            >
                              visit My webSite
                          </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                          <div><img src={promo6} width={'250.100px'}></img></div>
                            <h6 className="text-warning text-uppercase">
                              City-Explorer
                          </h6>
                            <p className="description mt-3">
                             This Project Web is Application displays map,weather and movies of specific city.
                          </p>
                            <div>
                              <Badge color="warning" pill className="mr-1">
                                React
                            </Badge>
                              <Badge color="warning" pill className="mr-1">
                               React-Bootstrap
                            </Badge>
                              <Badge color="warning" pill className="mr-1">
                                API
                            </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="warning"
                              href="https://city-explorer-sukina.netlify.app/"
                            >
                              visit My webSite
                          </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                              <i className="ni ni-istanbul" />
                            </div>
                            <h6 className="text-success text-uppercase">
                              301 Project
                          </h6>
                            <p className="description mt-3">
                             
                          </p>
                            <div>
                              <Badge color="success" pill className="mr-1">
                                ??
                            </Badge>
                              <Badge color="success" pill className="mr-1">
                                ??
                            </Badge>
                              <Badge color="success" pill className="mr-1">
                                ??
                            </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="success"
                              href="#"
                            >
                              visit My webSite
                          </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                              <i className="ni ni-planet" />
                            </div>
                            <h6 className="text-warning text-uppercase">
                              401 Project
                          </h6>
                            <p className="description mt-3">
                              
                          </p>
                            <div>
                              <Badge color="warning" pill className="mr-1">
                                ??
                            </Badge>
                              <Badge color="warning" pill className="mr-1">
                                ??
                            </Badge>
                              <Badge color="warning" pill className="mr-1">
                                ??
                            </Badge>
                            </div>
                            <Button
                              className="mt-4"
                              color="warning"
                              href="#"
                            >
                              visit My webSite
                          </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Portfolio;
