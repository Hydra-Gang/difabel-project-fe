import styled from 'styled-components';
import ArticleCard from './ArticleCard';

const TitlePage = styled.h1`
    color: #01634B;
    font-size: 40px;
    font-weight: 700;
    margin-top: 37px;
`;

const ArticlePage = () => {

    return (
        <div className="container">
            <div className="row">
                <TitlePage className="mb-3">ARTICLE PAGE</TitlePage>
            </div>
            <div className="row">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </div>
    );
};

export default ArticlePage;