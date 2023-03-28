import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";

const Footer = () => {
  let footerOptions = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookies Preferences",
    "Corporate Infomation",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];
  return (
    <div className="footer-section">
      <Container>
        <Row>
          {footerOptions.map((item) => (
            <Col className="footer-opt" md={3} sm={6}>
              {item}
            </Col>
          ))}
        </Row>
        <div>
          <a className="footer-link" href="https://www.naver.com">
            <GoMarkGithub />
          </a>
          <a className="footer-link" href="https://www.naver.com">
            <img src="../image/naverBlog.png" />
          </a>
          <span className="footer-email">Email : beanbeeean@naver.com</span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
