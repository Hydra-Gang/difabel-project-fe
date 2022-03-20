import React from 'react';
import ContentHero from './ContentPage/ContentHero';
import Header from './Header';
import ArticlePage from './ArticlePage/ArticlePage';
import ReportPage from './ReportPage/ReportPage';
import Footer from './Footer';
import ContentArticle from './ContentPage/ContentArticle';

function App() {
    return (
        <>
            <Header />
            <ContentHero />
            <ContentArticle />
            {/* <ArticlePage /> */}
            {/* <ReportPage /> */}
            <Footer />
        </>
    );
}

export default App;