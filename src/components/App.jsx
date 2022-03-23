import React from 'react';
import ContentHero from './ContentPage/ContentHero';
import Header from './Header';
import RegisterPage from './AuthenticationPage/RegisterPage';
import LoginPage from './AuthenticationPage/LoginPage';
import ArticlePage from './ArticlePage/ArticlePage';
import ReportPage from './ReportPage/ReportPage';

import Footer from './Footer';
import ContentArticle from './ContentPage/ContentArticle';
import ContentReportPage from './ContentPage/ContentReportPage';
import ReportListPage from './ReportPage/ReportListPage';
import Map from './Map/Map';
import ContentCarousel from './ContentCarousel';

// import ArticlePost from './ArticlePage/ArticlePost';


function App() {
    return (
        <>
            <Header />
            {/* <RegisterPage /> */}
            {/* <LoginPage /> */}
            {/* <ContentHero /> */}
            {/* <ContentArticle /> */}
            <ContentHero />
            {/* <ArticlePage /> */}
            {/* <ReportListPage /> */}
            <ContentArticle />
            <Map widthMap="50vw" heightMap="50vh"/>
            {/* <ReportPage /> */}
            {/* <ArticlePost /> */}
            <ContentCarousel />
            <ContentReportPage />
            <Footer />
        </>
    );
}

// http://localhost:5000/v1/reports/

export default App;