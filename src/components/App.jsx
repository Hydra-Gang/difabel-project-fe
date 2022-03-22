import React from 'react';
import ContentHero from './ContentPage/ContentHero';
import Header from './Header';
import RegisterPage from './AuthenticationPage/RegisterPage';
import LoginPage from './AuthenticationPage/LoginPage';
import ArticlePage from './ArticlePage/ArticlePage';
import ReportPage from './ReportPage/ReportPage';

import Footer from './Footer';
import ContentArticle from './ContentPage/ContentArticle';

// import ArticlePost from './ArticlePage/ArticlePost';


function App() {
    return (
        <>
            <Header />
            {/* <RegisterPage /> */}
            <LoginPage />
            {/* <ContentHero /> */}
            {/* <ContentArticle /> */}
            {/* <ArticlePage /> */}
            {/* <ReportPage /> */}
            {/* <ArticlePost /> */}
            <Footer />
        </>
    );
}

export default App;