import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get('http://localhost:5000/v1/articles/');
                setData(response.data.reports);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="col-lg-4 col-md-6 col-12 mb-3">
            {data.map((item) => (
                <Card className="border-0" style={{ borederRadius: '10px' }} key={item.id}>
                    <Body>
                        <TitleArticle>{item.title}</TitleArticle>
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
                                {item.content}
                            </div>
                        </Card.Text>
                        <Button style={{ backgroundColor: '#56AB91' }} className="w-100 border-0">See Details</Button>
                    </Body>
                </Card>
            ))}
        </div>
    );
};

export default ArticleCard;