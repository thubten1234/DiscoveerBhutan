import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} md={4} className="footer-column">
            <h5>About Us</h5>
            <p>
              Bhutan is a land of stunning natural beauty, rich culture, and
              deep spirituality. We invite you to explore all that this mystical
              kingdom has to offer.
            </p>
          </Col>

          <Col xs={12} md={4} className="footer-column">
            <h5>Contact</h5>
            <ul>
              <li>Email: info@bhutan.com</li>
              <li>Phone: +975 123 4567</li>
              <li>Address: Thimphu, Bhutan</li>
            </ul>
          </Col>

          <Col xs={12} md={4} className="footer-column">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom">
        <Container>
          <p className="text-center">
            &copy; {new Date().getFullYear()} Bhutan Travel. All Rights
            Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
