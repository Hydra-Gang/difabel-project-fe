import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';
import ArticleCardLandingPage from './ArticleCardLandingPage';

const TitlePage = styled.h1`
    color: #01634B;
    font-size: 40px;
    font-weight: 700;
    margin-top: 72px;
    margin-top: 37px;
`;

const ArticleLandingPage = () => {

    return (
        <div className="container" style={{ marginTop: '5%', marginBottom: '20%' }}>
            <div className="row">
                <TitlePage className="text-center">ARTICLE PAGE</TitlePage>
            </div>
            <div className="row">
                <ArticleCardLandingPage />
            </div>
        </div>
    );
};

export default ArticleLandingPage;