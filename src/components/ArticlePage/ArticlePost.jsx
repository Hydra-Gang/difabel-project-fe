import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Form } from 'react-bootstrap';

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

const ArticlePost = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <img className="w-100" src="assets/add_article.png" alt="user"/>
                </div>
                <div className="col-lg-6 col-md-12 d-flex flex-column">
                    <Card className="border-0 w-100" style={{ float: 'none', margin: 'auto' }}>
                        <Title className="mb-3">ADD ARTICLE PAGE</Title>
                        <Body>
                            <form action="">
                                <Form.Control type="text" style={{ color: 'white', textAlign: 'left', backgroundColor: '#88D4AB', borderRadius: '10px' }} className="mb-3" placeholder="Enter your title" />

                                {/* value={data.content} onChange={(e) => setData({ ...data, content: e.target.value })} */}
                                <textarea style={{ color: 'white', textAlign: 'left', backgroundColor: '#88D4AB', borderRadius: '10px' }} className="form-control mb-3" placeholder="Enter yout content" id="content" rows="4"></textarea>

                                {/* onClick={() => sendReport(data)} */}
                                <button type="submit" style={{ color: 'white', backgroundColor: '#01634B', borderRadius: '10px' }} className="btn w-100 mb-2">Request post approval</button>

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