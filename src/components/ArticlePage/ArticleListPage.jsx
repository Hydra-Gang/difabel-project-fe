import React from 'react';
import styled from 'styled-components';
import '../../index.css';
import Article from './Article';

const TitlePage = styled.h1`
    color: #01634B;
    font-size: 40px;
    font-weight: 700;
    margin-top: 72px;
    margin-bottom: 65px;
`;

const ButtonDetails = styled.button`
    background-color: #88D4AB;
    border-radius: 10px;
    border: 0;
    display: inline-block;
    cursor: pointer;
    color: #01634B;
    font-size: 15px;
    text-decoration: none;
    justify-content: start;

    &:hover {
        background-color: white;
        color: #88D4AB;
    }

    &:active {
        position:relative;
        top:1px;
    }
`;

const ButtonApprove = styled.button`
    background-color: #56AB91;
    border-radius: 10px;
    border: 0;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 15px;
    text-decoration: none;
    justify-content: start;

    &:hover {
        background-color: white;
        color: #88D4AB;
    }

    &:active {
        position:relative;
        top:1px;
    }
`;

const ArticleListPage = () => {
    return (
        <div className="container">
            <div className="row">
                <TitlePage className="mb-5 text-center">ARTICLE LIST</TitlePage>
            </div>
            <div className="item-list w-75" style={{ float: 'none', margin: '0 auto' }}>
                <div className="row header">
                    <div className="col-2">
                        Date
                    </div>
                    <div className="col-6">
                        Location
                    </div>
                    <div className="col-4">
                        Action
                    </div>
                </div>
                <Article />
                <Article />
                <Article />
            </div>
        </div>
    );
};

export default ArticleListPage;