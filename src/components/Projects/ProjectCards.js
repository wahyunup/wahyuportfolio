import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { CardHeader, CardSubtitle } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{ height: "220px", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>

      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <CardHeader
          style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <Card.Title style={{ margin: "0" }} className="purple">
            {props.title}
          </Card.Title>
          {props.OnProgress && (
            <Card.Text className="blinking-text">Development</Card.Text>
          )}
        </CardHeader>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <CardSubtitle className="purple" style={{ paddingBottom: "16px" }}>
          {props.techstack}
        </CardSubtitle>

        <div style={{display:"flex", width:"100%"}}>
          <Button variant="primary" href={props.ghLink} target="_blank" style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", gap:"5px"}}>
            {props.isBlog ? null : <BsGithub />}
            {props.isBlog ? <CgWebsite /> : null}
            {props.isBlog ? "Demo" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px", width:"100%"}}>
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
