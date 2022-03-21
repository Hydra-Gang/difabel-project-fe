import styled from '@emotion/styled';
import React from 'react';
import ArticleCard from '../ArticlePage/ArticleCard';
import { Button } from 'react-bootstrap';

const Heading = styled.h1`
    color: #01634B;
    text-align: left;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-top: 15%;
`;

function ContentArticle() {
    return (
        <div className="container">
            <Heading>ARTICLE PAGE</Heading>
            <div className="row">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
            <div className='row'>
                <Button style={{ backgroundColor: '#01634B', padding: 10 }} className="w-75 center">See All Article</Button>
            </div>
        </div>
    );
}

export default ContentArticle;