import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo-img.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/navIcon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aaron-jimenez-robles-442550381/">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://github.com/aaronjimenez18">
                <img src={navIcon2} alt="github" />
              </a>
              <a href="https://www.instagram.com/wtj.aaron/?locale=dehttps%3A%2F555ten.com%2F%3Flocale%3Ddehttps%3A%2F%2F555ten.com%2F">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Aarón Jiménez | 2025</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
