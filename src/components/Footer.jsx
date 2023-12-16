import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <h5>Company Name</h5>
            <p>Address, City, Country</p>
          </Col>
          <Col md={4} sm={6}>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} sm={12}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
