import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Wahyu Nur Pambuko </span>
            from <span className="purple"> Tangerang Selatan, Indonesian.</span>
            <br />
            Im 7th semester informatics engineering student, who is enthusiastic about web programming, especially Frontend, and also a student of Harisenin.com bootcamp.

            I spend every day to explore a code that I learned, especially javascript. having a person who believes in the process makes me not tired to keep learning.

            3 years I pioneered a career that is opposite to my educational background, namely Graphic designer, be it in Corporate, In house, even printing. and now I give myself the opportunity to have a career that is in line with my educational background
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Something new
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
