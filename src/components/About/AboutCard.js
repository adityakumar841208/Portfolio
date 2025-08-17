import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I’m <span className="purple">Aditya Kumar</span> from
            <span className="purple"> Bihar, India.</span>
            <br />
            At <span className="purple">Animation Media</span>, I work as a Full Stack Developer—building, learning, and growing with every line of code.
            <br />
            I completed my Diploma in Computer Science and Engineering from Govt. Polytechnic Aadampur, Gonda.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving DSA Problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Software System Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Great products require a strong mindset!"
          </p>
          <footer className="blockquote-footer">Aditya</footer>
        </blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
