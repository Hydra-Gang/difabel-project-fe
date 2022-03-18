import React from "react";
import { Navbar, Button, Container, Nav } from "react-bootstrap";

function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Dashboard</Nav.Link>
            <Nav.Link href="#map">Map</Nav.Link>
            <Nav.Link href="#forum">Forum</Nav.Link>
            <Nav.Link href="#report">Report</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">
                <Button>Sign Up</Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                <Button>Login</Button>
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
};

export default Header;