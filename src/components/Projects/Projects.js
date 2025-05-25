import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. <br />
          Most of my projects are minimal builds focused on learning and functionality.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='./ChessImg.png'
              isBlog={false}
              title="ChessWar"
              description="A real-time multiplayer chess game that lets users play with friends remotely. Includes built-in chat for communication during the match, ensuring a smooth and engaging user experience."
              ghLink="https://github.com/adityakumar841208/Chess-Frontend"
              demoLink="https://chesswar.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='./Virtual_Deal_Room.png'
              isBlog={false}
              title="Virtual Deal Room"
              description="A virtual deal room designed for two individuals to negotiate and finalize deals in a secure environment."
              ghLink="https://github.com/adityakumar841208/virtual-deal-room"
              demoLink="https://virtualdealroom.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='./Vedika_Restaurant.png'
              isBlog={false}
              title="Vedika Restaurant"
              description="A restaurant management system that allows users to view the menu, place orders and make payment using Payment Gateway. It provides a seamless experience for both customers and restaurant Owners."
              ghLink="https://github.com/adityakumar841208/restaurant-management"
              demoLink="https://vedikarestaurant.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='./Blog_App.png'
              isBlog={false}
              title="Blog Website"
              description="A blog website that allows users to read and write blogs. It provides a platform for users to share their thoughts and ideas with the world."
              ghLink="https://github.com/adityakumar841208/Blog-app---frontend"
              demoLink="https://reactblogapp123.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='./Chat_Website.png'
              isBlog={false}
              title="Chat Website"
              description="A chat website that allows users to chat in a virtual room in real-time. It provides a platform for users to communicate with each other."
              ghLink="https://github.com/adityakumar841208/Chat_App_Frontend"
              demoLink="https://chattingforfree.netlify.app/"
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          My Ongoing <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='./Codelabs.png'
              isBlog={false}
              title="CodeLabs"
              description="An e-learning plaform that provided a wide range of courses and resources for learners of all levels. It features a user-friendly interface, interactive content, and a community forum for discussions."
              ghLink="https://github.com/adityakumar841208/Codelabs_Frontend"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='./Needify.png'
              isBlog={false}
              title="Needify"
              description="A service marketplace platform that connects service providers with customers. It allows users to find and book services easily, ensuring a seamless experience for both parties."
              ghLink="https://github.com/adityakumar841208/Need"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
