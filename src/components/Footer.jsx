// import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const background = '#01634B';

const NavbarFooter = styled.div`
    margin-top: 15%;
    width: 100%;
    background-color: ${background};
    border-top: 1px solid #e2e2e2;
`;

const Logo = styled.img`
    margin-top: 0px;
`;

const LinkText = styled.a`
    color: white;
    text-decoration: none;
    text-align: center;

    &:hover {
        cursor: pointer;
        color: white;
        text-decoration: underline;
    }
`;

function Footer() {

    return (
        <NavbarFooter>
            <div className='container py-5'>
                <div className='row d-flex align-items-center'>
                    <div className='col-lg-5'>
                        <Logo src='/assets/logo_footer.png' alt='logo'/>
                        <div className='row'>
                            <p className='copyright'>Copyright &copy; 2022, Difabel</p>
                        </div>

                        <div className='row slogan'>
                            <p>Your reliable, accurate, and trusted <br/>difabel information</p>
                        </div>
                    </div>


                    <div className='col-lg-2 col-sm-6'>
                        <div className='row'>
                            <Nav.Link as={Link} to="/dashboard" style={{ color: '#FFF' }} className="center">Dashboard</Nav.Link>
                            {/* <LinkText href='/dashboard'>Dashboard</LinkText> */}
                        </div>
                        <div className='row mt-4'>
                            {/* <LinkText href='http://www.google.com'>Map</LinkText> */}
                            <Nav.Link as={Link} to="/map" style={{ color: '#FFF' }} className="center">Map</Nav.Link>
                        </div>
                    </div>

                    <div className='col-lg-2 col-sm-6'>
                        <div className='row'>
                            {/* <LinkText href='http://www.google.com'>Article</LinkText> */}
                            <Nav.Link as={Link} to="/article" style={{ color: '#FFF' }} className="center">Article</Nav.Link>
                        </div>
                        <div className='row mt-4'>
                            {/* <LinkText href='http://www.google.com'>Report</LinkText> */}
                            <Nav.Link as={Link} to="/report" style={{ color: '#FFF' }} className="center">Report</Nav.Link>
                        </div>
                    </div>

                    <div className='col-lg-3 col-sm-12 text-center'>
                        <div className='row'>
                            <div className='col-lg-4 col-sm-4 mt-4'>
                                <LinkText href="#">
                                    <FaFacebook className='icon' />
                                </LinkText>
                            </div>

                            <div className='col-lg-4 col-sm-4 mt-4'>
                                <LinkText href="#">
                                    <FaInstagram className='icon' />
                                </LinkText>
                            </div>

                            <div className='col-lg-4 col-sm-4 mt-4'>
                                <LinkText href="#">
                                    <FaWhatsapp className='icon'/>
                                </LinkText>
                            </div>
                        </div>

                        <div className='row text-center'>
                            <Button className='w-100 mt-3 btn btn-success'>CONTACT US</Button>
                        </div>
                    </div>
                </div>

            </div>
        </NavbarFooter>
    );
}

export default Footer;