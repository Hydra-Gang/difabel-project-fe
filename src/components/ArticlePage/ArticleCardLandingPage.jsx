import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

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

const ArticleCardLandingPage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('difabel');

                if (token) {
                    const accessToken = JSON.parse(token).accessToken;

                    if (accessToken) {
                        const { data: response } = await axios.get('http://localhost:5000/v1/articles/', {
                            headers: {
                                'Authorization': `Bearer ${accessToken}`
                            }
                        });

                        setData(response.data.articles);
                    }
                }
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='d-flex flex-wrap'>
            {data.slice(0, 3).map((item) => (
                <div className="col-lg-4 col-md-6 col-12 mb-3" key={item.id}>
                    <Card className="border-0 mx-2" style={{ borderRadius: '10px' }}>
                        <Body>
                            <TitleArticle>{item.title}</TitleArticle>
                            <UserArticle>
                                <div className="row">
                                    <div className="col-2">
                                        <img src="assets/user.png" alt="user" />
                                    </div>
                                    <div className="col-10 ps-3">
                                        <UserInfo>{item.author.fullName}</UserInfo>
                                        <UserInfo className="text-muted">{item.createdAt}</UserInfo>
                                    </div>
                                </div>
                            </UserArticle>
                            <Card.Text className="mt-3 text-start">
                                <div style={{ backgroundColor: '#01634B', fontSize: '16px' }} className="p-3 rounded text-white text-start">
                                    {item.content}
                                </div>
                            </Card.Text>
                            <Link to={`/article/${item.id}`} style={{ backgroundColor: '#56AB91', color: '#FFF' }} className="btn w-100 border-0">See Details</Link>
                        </Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default ArticleCardLandingPage;