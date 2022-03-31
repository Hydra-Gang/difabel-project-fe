import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card, Form, Image } from 'react-bootstrap';

const Body = styled.div`
    padding: 28px 25px 27px 25px;
    border: none !important;
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

const sendReport = (data) => {
    axios.post('http://localhost:5000/v1/articles', data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
};

const ArticlePost = () => {

    const [data, setData] = useState({
        title: '',
        content: ''
    });

    return (
        <div className="container min-vh-100">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <Image className="w-100" src="assets/add_article.png" alt="Add Article"/>
                </div>
                <div className="col-lg-6 col-md-12 d-flex flex-column">
                    <Card className="border-0 w-100" style={{ float: 'none', margin: 'auto' }}>
                        <Title className="mb-3 text-center">ADD ARTICLE PAGE</Title>
                        <Body>
                            <form action="">
                                <Form.Control type="text"
                                    style={{ color: 'white', textAlign: 'left', backgroundColor: '#88D4AB', borderRadius: '10px' }}
                                    className="mb-3" value={data.title}
                                    onChange={(e) => setData({ ...data, title: e.target.value })}
                                    placeholder="Enter your title" />

                                <textarea
                                    style={{ color: 'white', textAlign: 'left', backgroundColor: '#88D4AB', borderRadius: '10px' }}
                                    className="form-control mb-3"
                                    placeholder="Enter yout content"
                                    id="content" value={data.content}
                                    onChange={(e) => setData({ ...data, content: e.target.value })}
                                    rows="4">
                                </textarea>

                                <button type="submit" style={{ color: 'white', backgroundColor: '#01634B', borderRadius: '10px' }} className="btn w-100 mb-2" onClick={() => sendReport(data)}>Request post approval</button>

                                <button type="button" style={{ color: 'white', backgroundColor: '#56AB91', borderRadius: '10px' }} className="btn w-100">Cancel</button>
                            </form>
                        </Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ArticlePost;