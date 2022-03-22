import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

const Body = styled.div`
    padding: 28px 25px 27px 25px;
    border: none !important;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const UserInfo = styled.p`
    text-align: left;
    margin: 0;
`;

const UserArticle = styled.div`
    margin-top: 15px;
`;

const TitleArticle = styled.h5`
    font-size: 20px;
    color: #01634B;
    text-align: left;
    width: 100%;
`;

const ArticleCard = () => {
    return (
        <div className="col-lg-4 col-md-6 col-12 mb-3">
            <Card className="border-0" style={{ borederRadius: '10px' }}>
                <Body>
                    <TitleArticle>How to Master Everything in 1 Year</TitleArticle>
                    <UserArticle>
                        <div className="row">
                            <div className="col-2">
                                <img src="assets/user.png" alt="user"/>
                            </div>
                            <div className="col-10 ps-3">
                                <UserInfo>Master Alvian</UserInfo>
                                <UserInfo className="text-muted">5h ago</UserInfo>
                            </div>
                        </div>
                    </UserArticle>
                    <Card.Text className="mt-3 text-start">
                        <div style={{ backgroundColor: '#01634B', fontSize: '16px' }} className="p-3 rounded text-white text-start">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </Card.Text>
                    <Button style={{ backgroundColor: '#56AB91' }} className="w-100 border-0">See Details</Button>
                </Body>
            </Card>
        </div>
    );
};

export default ArticleCard;