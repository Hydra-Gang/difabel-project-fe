import styled from '@emotion/styled';
import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Heading = styled.h1`
    color: #01634B;
    text-align: left;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-top: 30%;
    margin-bottom: 5%;
`;


function ContentCarousel() {
    return (
        <div className='container'>
            <Heading>Your donation means a lot to us</Heading>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/donation-page.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Donation 1</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/donation-page.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Donation 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/donation-page.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Donation 3</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='row'>
                <Link to="/donate">
                    <Button
                        style={{ backgroundColor: '#01634B', padding: 20, marginTop: 15 }}
                        className="w-100 center"
                    >
                        Go to Donation Page
                    </Button>
                </Link>

            </div>
        </div>
    );
}

export default ContentCarousel;