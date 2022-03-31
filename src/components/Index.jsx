import ContentHero from './ContentPage/ContentHero';
// import ContentArticle from './ContentPage/ContentArticle';
import Map from './Map/Map';
import ContentCarousel from './ContentCarousel';
import ContentReportPage from './ContentPage/ContentReportPage';
import ArticleLandingPage from './ArticlePage/ArticleLandingPage';
import ReportListPage from './ReportPage/ReportListPage';

const Index = () => {
    return (
        <>
            <ContentHero />
            <ArticleLandingPage />
            <Map widthMap="50vw" heightMap="50vh" />
            <ContentCarousel />
            <ContentReportPage />
        </>
    );
};

export default Index;