import React from 'react';
import ContentHero from './ContentPage/ContentHero';
import Header from './Header';
import ReportPage from './ReportPage/ReportPage';

import Footer from './Footer';
import ContentArticle from './ContentPage/ContentArticle';

import ArticlePost from './ArticlePage/ArticlePost';
import ArticlePage from './ArticlePage/ArticlePage';
import ArticleListPage from './ArticlePage/ArticleListPage';


function App() {
    return (
        <>
            <Header />
            {/* <ContentHero /> */}
            {/* <ContentArticle /> */}
            {/* <ArticlePost /> */}
            {/* <ArticlePage /> */}
            <ArticleListPage />
            {/* <ReportPage /> */}
            <Footer />
        </>
    );
}

export default App;