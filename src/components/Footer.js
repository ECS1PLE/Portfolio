import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";

export const Footer = () => {
  const LogoStyle = {
    marginTop: "50px",
  };
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={LogoStyle} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end"></Col>
        </Row>
      </Container>
    </footer>
  );
};
