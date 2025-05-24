import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahsan Naseer </span>
            from <span className="purple"> Haripur, Pakistan</span>
            <br />
            I am currently a 7th Semester Software Engineering Student at{" "}
            <span className="purple">
              Pak-Austria Fachhochschule Institute of Applied Sciences and Technology.
            </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring AI & IoT Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on Cloud & DevOps Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with System Automation & Virtualization
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ahsan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
