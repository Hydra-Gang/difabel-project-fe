import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import axios from '../../axios-instance';

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

const ArticleDetails = () => {
    const [data, setData] = useState([]);
    const [authorFullName, setAuthorFullName] = useState('');

    const { pathname } = useLocation();
    const id = pathname.substring(pathname.lastIndexOf('/') + 1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('difabel');

                if (token) {
                    const accessToken = JSON.parse(token).accessToken;

                    if (accessToken) {
                        const { data: response } = await axios.get(`/articles/${id}`, {
                            headers: {
                                'Authorization': `Bearer ${accessToken}`
                            }
                        });

                        console.log(response);
                        setData(response.data.article);
                        setAuthorFullName(response.data.article.author.fullName);
                    }
                }
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, [id]);

    return (
        <Container className="min-vh-100 w-75 mt-5">
            <Row >
                <Col>
                    <h1 className="text-center fw-bold mb-3" style={{ color: '#01634B' }}>ARTICLE DETAILS</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="border-0 mx-2" style={{ borderRadius: '10px' }}>
                        <Body>
                            <TitleArticle>{data.title}</TitleArticle>
                            <UserArticle>
                                <div className="row">
                                    <div className="col-2">
                                        <img src="/assets/user.png" alt="User" />
                                    </div>
                                    <div className="col-10 ps-3">
                                        <UserInfo>{authorFullName}</UserInfo>
                                        <UserInfo className="text-muted">{data.createdAt}</UserInfo>
                                    </div>
                                </div>
                            </UserArticle>
                            <Card.Text className="mt-3 text-start">
                                <div style={{ backgroundColor: '#01634B', fontSize: '16px' }} className="p-3 rounded text-white text-start">
                                    {data.content}
                                </div>
                            </Card.Text>
                            <Link to="/article" style={{ backgroundColor: '#56AB91', color: '#FFF' }} className="btn w-100 border-0">Back</Link>
                        </Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ArticleDetails;