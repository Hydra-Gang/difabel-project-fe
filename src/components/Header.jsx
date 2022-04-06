import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Button, Container, Nav, Dropdown, Form } from 'react-bootstrap';
import { FaSignOutAlt, FaUser, FaEdit } from 'react-icons/fa';
import axios from '../axios-instance';

const image = '/assets/Logo.png';
const whiteColor = 'white';
const greenColor = '#01634B';

function Header({ isAuthenticated, userFullName, setIsAuthenticated }) {
    const logout = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('difabel');
        const { refreshToken } = JSON.parse(token);

        axios.delete('/auth/logout', {}, {
            headers: {
                'Authorization': `Bearer ${refreshToken}`
            }
        });

        localStorage.removeItem('difabel');
        setIsAuthenticated(false);
    };

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
                    <Navbar.Brand as={Link} to="/">
                        <img src={image} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/dashboard" className="bold margin-left">Dashboard</Nav.Link>
                            <Nav.Link as={Link} to="/map" className="bold margin-left">Map</Nav.Link>
                            <Nav.Link as={Link} to="/article" className="bold margin-left">Article</Nav.Link>
                            <Nav.Link as={Link} to="/report" className="bold margin-left">Report</Nav.Link>
                            <Nav.Link as={Link} to="/donate" className="bold margin-left">Donate</Nav.Link>
                        </Nav>

                        {isAuthenticated ? (
                            <Dropdown>
                                <Button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" variant="green"><FaUser /> {userFullName}</Button>
                                <ul className="dropdown-menu bg-transparent p-0" aria-labelledby="dropdownMenuButton">
                                    <Form>
                                        <li>
                                            <Nav.Link as={Link} to="/profile">
                                                <Button variant="white" className='p-0'> <FaEdit /> Profile</Button>
                                            </Nav.Link>
                                        </li>
                                        <li><Button type="submit" className="dropdown-item py-2 rounded" variant="green" onClick={logout}><FaSignOutAlt /> Logout</Button></li>
                                    </Form>
                                </ul>
                            </Dropdown>
                        ) : (
                            <Nav>
                                <Nav.Link as={Link} to="/register">
                                    <Button variant="white">Register</Button>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/login" eventKey={2}>
                                    <Button variant="green">Login</Button>{' '}
                                </Nav.Link>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

Header.propTypes = {
    isAuthenticated: PropTypes.bool,
    userFullName: PropTypes.string,
    setIsAuthenticated: PropTypes.func
};

export default Header;