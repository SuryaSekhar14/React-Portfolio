import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaGamepad, FaMusic , FaCoffee} from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Surya Sekhar Datta </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />I am a junior pursuing B.Tech in Computer Science and Engineering in IEM.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaGamepad />  Playing Games
            </li>
            <li className="about-activity">
              <FaMusic />  Listening to Music
            </li>
            <li className="about-activity">
              <FaCoffee />  Having Coffee!
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
