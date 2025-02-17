import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CaptureCloud from "../../Assets/Projects/CaptureCloud.png";
import KTNA from "../../Assets/Projects/KTNA.png";
import suarakuNFC from "../../Assets/Projects/suarakuNFC.jpg";
import TravelZone from "../../Assets/Projects/TravelZone.png";
import tjakrawala from "../../Assets/Projects/tjakrawala batik.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TravelZone}
              isBlog={false}
              OnProgress={true}
              title="TravelZone"
              description="TravelZone is a travel service application that allows users to travel easily to various destinations in Indonesia."
              techstack ="ReactJs, Tailwind"
              ghLink="https://github.com/Kelompok-03-harisenin"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CaptureCloud}
              isBlog={false}
              title="CaptureCloud"
              description="this is an application that I made with the harisenin.com bootcamp group, CaptureCloud is a social media application and search engine that focuses on visual content."
              techstack ="ReactJs, Tailwind, Cloudinary, ExpressJS, Mysql, Sequelize"
              ghLink="https://github.com/Kelompok-03-harisenin"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KTNA}
              isBlog={false}
              title="KTNA Comprof"
              description="KTNA Comprof is a semi-marketing inventory application developed in order to fulfill the assignment of the Practical Work course, has a sorting feature to make it easier for prospective buyers to select the products they want to look for, and stock management for admin."
              techstack ="Laravel, Cloudinary, Filament, Tailwind"
              ghLink="https://github.com/wahyunup/ktna-comprof"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tjakrawala}
              isBlog={true}
              title="Cakrawala Batik & Craft"
              description="Tjakrawala Batik & Craft is a web-based e-commerce application that sells various batik products, such as clothing and handicrafts. I developed this application during my internship at Dipdop Universe Corp."
              techstack ="Wordpress"
              ghLink="https://tjakrawalabatik.com/"
              // demoLink="https://tjakrawalabatik.com/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suarakuNFC}
              isBlog={false}
              OnProgress={true}
              title="Suaraku NFC"
              description="SuarakuNFC is a voting application that utilizes NFC technology to enhance the efficiency of the election process, equipped with a CMS and real-time monitoring features."
              techstack ="NextJS, Typescript, Tailwind"
              ghLink="https://github.com/wahyunup/suarakunfc"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suarakuNFC}
              isBlog={false}
              OnProgress={true}
              title="suaraku API"
              description="SuarakuNFC is a voting application that utilizes NFC technology to enhance the efficiency of the election process, equipped with a CMS and real-time monitoring features."
              techstack ="ExpressJS"
              ghLink="https://github.com/wahyunup/suaraku_api"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
