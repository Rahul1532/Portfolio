import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rahul Pandey </span>
            from <span className="purple"> Lucknow, UttarPradesh, India.</span>
            <br />I am currently Working as a{" "}
            <b className="purple"> Software Engineer (Trainee)</b> at{" "}
            <b className="purple"> SOFTEVIA LLP.</b>
            <br />
            <br />I am a Computer Science Engineer Student at{" "}
            <b className="purple">
              RustamJi Institute of Technology, BSF Academy Tekanpur
            </b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand"{" "}
          </p>
          <footer className="blockquote-footer">Rahul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
