import styled from '@emotion/styled';
import React from 'react';
import { Button } from 'react-bootstrap';

const Heading = styled.h1`
    color: #01634B;
    text-align: left;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-top: 15%;
`;

const Image = styled.img`
    text-align: center;
    display: block;
    margin: 5% auto;
`;

function ContentReportPage() {
    return (
        <div className='container'>
            <Heading>REPORT</Heading>
            <Image src='assets/bg-report-landing-page.png'></Image>

            <div className='row'>
                <Button style={{ backgroundColor: '#01634B', padding: 16 }} className="w-50 center">Go to Report Page</Button>
            </div>
        </div>
    );
}

export default ContentReportPage;