import { Container, Nav, Navbar } from "react-bootstrap";

//local
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Navbar bg="light" variant="light" expand="md" collapseOnSelect>
      <Container>
        <Navbar.Brand>Bandhan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
