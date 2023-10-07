import { Row, Col, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

//local
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.main}>
      <Container>
        <Row>
          <Col md="4">
            <h6 className={classes["footer-header"]}>Site Links</h6>
            <LinkContainer className={classes.link} to="/">
              <p className={classes["footer-items"]}>Home</p>
            </LinkContainer>
            <LinkContainer className={classes.link} to="/menu">
              <p className={classes["footer-items"]}>Menu</p>
            </LinkContainer>

            <LinkContainer className={classes.link} to="/auth">
              <p className={classes["footer-items"]}>Login</p>
            </LinkContainer>
          </Col>
          <Col md="4">
            <h6 className={classes["footer-header"]}>Contact Us</h6>
            <p className={classes["footer-items"]}>305 9111 993</p>
            <p className={classes["footer-items"]}>ujaved21@gmail.com</p>
            <p className={classes["footer-items"]}>
              Gulshan Hameed town, Canal Rd, Haroonabad, Bahawalnagar, Punjab
              62100
            </p>
          </Col>
          <Col md="4">
            <h6 className={classes["footer-header"]}> Opening Hours</h6>
            <p className={classes["footer-items"]}>
              Monday - Sunday (12:00 PM - 12:00 AM)
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
