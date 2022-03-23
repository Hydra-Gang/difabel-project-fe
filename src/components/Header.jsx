import React from 'react';
import { Navbar, Button, Container, Nav } from 'react-bootstrap';

const image = 'assets/Logo.png';
const whiteColor = 'white';
const greenColor = '#01634B';

function Header() {
    return (
        <>
            <style type="text/css">
                {`
                    .btn-green {
                        background-color: ${greenColor};
                        color: ${whiteColor};
                        font-weight: 700;
                    }

                    .btn-green:hover {
                        background-color: ${whiteColor};
                        color: ${greenColor};
                        border: solid 1px;
                    }

                    .btn-white {
                        background-color: ${whiteColor};
                        color: ${greenColor};
                        font-weight: 700;
                    }

                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }

                    `}
            </style>

            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={image} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features" className="bold margin-left">Dashboard</Nav.Link>
                            <Nav.Link href="#map" className="bold margin-left">Map</Nav.Link>
                            <Nav.Link href="#forum" className="bold margin-left">Article</Nav.Link>
                            <Nav.Link href="#report" className="bold margin-left">Report</Nav.Link>
                            <Nav.Link href="#report" className="bold margin-left">Donate</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#signup">
                                <Button variant="white">Register</Button>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="green">Login</Button>{' '}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default Header;