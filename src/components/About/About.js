import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import profile from "../../Assets/about.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row
          style={{
            justifyContent: "center",
            padding: "10px",
            alignItems: "center",
          }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "120px",
              paddingBottom: "50px",
              overflow: "hidden",
             
            }}
            className="about-img w-[200px] h-[200px]">
            <img
              src={profile}
              alt="about"
              style={{ filter: "grayscale(70%)", transition: "0.3s ease" }}
              className="img-fluid"
              onMouseOver={(e) => (e.currentTarget.style.filter = "none")}
              onMouseOut={(e) =>
                (e.currentTarget.style.filter = "grayscale(70%)")
              }
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
