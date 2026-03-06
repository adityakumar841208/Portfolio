import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
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
              I’m all about building things that *actually* come alive — whether it’s a multiplayer chess game or a chat app that sparks real conversations in real time.
              <br />
              <br />
              I enjoy writing code in
              <i>
                <b className="purple"> Python, C and JavaScript.</b>
              </i>
              — they’re not just languages to me, they’re tools to bring ideas into motion.
              <br />
              <br />
              These days, I’m diving into
              <b className="purple"> Generative AI</b>, chasing that next big “whoa, I built this” moment.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src='./adityaimg.jpg'
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: "50%", display: "inline-block" }}
              />
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
                  href="https://github.com/adityakumar841208"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditya246/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
