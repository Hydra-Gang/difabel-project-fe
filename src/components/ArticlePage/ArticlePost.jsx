import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Image } from 'react-bootstrap';
import axios from '../../axios-instance';
import styled from 'styled-components';

const Body = styled.div`
    padding: 28px 25px 27px 25px;
    border: none !important;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Title = styled.h5`
    font-weight: bold;
    font-size: 32px;
    color: #01634B;
    text-align: center;
    padding: 0;
    margin: 0;
    margin-bottom: 12px;
`;

const ArticlePost = () => {
    const [data, setData] = useState({
        title: '',
        content: ''
    });

    const [successMessage, setSuccessMessage] = useState(false);

    const sendReport = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('difabel');

        if (token) {
            const accessToken = JSON.parse(token).accessToken;

            if (accessToken) {
                axios.post('/articles/add', data, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                }).then(() => {
                    setData({
                        title: '',
                        content: ''
                    });

                    setSuccessMessage(true);
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    };

    return (
        <div className="container min-vh-100 d-flex align-items-center pb-5">
            <div className="row w-100 m-0">
                <div className="col-lg-6 col-12">
                    <Image className="w-75 d-block m-auto" src="/assets/add_article.png" alt="Add Article" />
                </div>
                <div className="col-lg-6 col-12 p-0">
                    <Card className="border-0 w-100">
                        <Title className="mb-3 text-center">ADD ARTICLE PAGE</Title>
                        <Body>
                            <Form>
                                {successMessage && <div className="alert alert-success w-100 py-2 mb-2 m-auto float-lg-start text-start" role="alert">Article posted</div>}

                                <Form.Control type="text"
                                    style={{ color: 'white', textAlign: 'left', backgroundColor: '#88D4AB', borderRadius: '10px' }}
                                    className="mb-3" value={data.title}
                                    onChange={(e) => setData({ ...data, title: e.target.value })}
                                    placeholder="Enter your title" />

                                <textarea
                                    style={{ color: 'white', textAlign: 'left', backgroundColor: '#88D4AB', borderRadius: '10px' }}
                                    className="form-control mb-3"
                                    placeholder="Enter your content"
                                    id="content" value={data.content}
                                    onChange={(e) => setData({ ...data, content: e.target.value })}
                                    rows="4">
                                </textarea>

                                <button type="submit" style={{ color: 'white', backgroundColor: '#01634B', borderRadius: '10px' }} className="btn w-100 mb-2" onClick={sendReport}>Post</button>

                                <Link to="/article" style={{ color: 'white', backgroundColor: '#56AB91', borderRadius: '10px' }} className="btn w-100">Cancel</Link>
                            </Form>
                        </Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ArticlePost;