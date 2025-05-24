import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming — and over time, I’ve built
              real-world solutions in both academic and applied settings. From AI
              projects to cloud deployments, I continue to grow with every line
              of code I write. 🤷
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> C++, Python, and JavaScript </b>
              </i>
              and have applied them in areas like IoT, HPC, and security automation.
              <br />
              <br />
              My field of interest includes developing impactful&nbsp;
              <i>
                <b className="purple">Web Technologies</b> and{" "}
                <b className="purple">AI-based products</b>, especially those that
                empower underserved communities and enhance system automation.
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion to building real-world tools
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> modern JavaScript libraries and frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js </b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ahsan719"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100006125287375"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahsan-naseer-3617aa25b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
