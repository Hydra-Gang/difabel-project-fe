import React from 'react';
import ContentHero from './ContentPage/ContentHero';
import Header from './Header';
import ArticlePage from './ArticlePage/ArticlePage';
import ReportPage from './ReportPage/ReportPage';
import Footer from './Footer';
import ContentArticle from './ContentPage/ContentArticle';
import ContentReportPage from './ContentPage/ContentReportPage';
import ReportListPage from './ReportPage/ReportListPage';
import Map from './Map/Map';

function App() {
    return (
        <>
            <Header />
            <Map/>
            {/* <ContentHero /> */}
            {/* <ContentArticle /> */}
            {/* <ArticlePage /> */}
            {/* <ReportPage /> */}
            {/* <ReportListPage /> */}
            {/* <ContentReportPage /> */}
            <Footer />
        </>
    );
}

// http://localhost:5000/v1/reports/

export default App;