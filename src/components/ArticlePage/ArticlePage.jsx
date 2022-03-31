import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';

const TitlePage = styled.h1`
    color: #01634B;
    font-size: 40px;
    font-weight: 700;
    margin-top: 72px;
    margin-top: 37px;
`;

const ArticlePage = () => {

    return (
        <div className="container">
            <div className="row">
                <TitlePage className="text-center">ARTICLE PAGE</TitlePage>
            </div>
            <div className="row">
                <Link to='/article/add' className='btn d-block m-auto text-white' style={{ width: '150px', backgroundColor: '#01634B' }}>Add Article</Link>
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