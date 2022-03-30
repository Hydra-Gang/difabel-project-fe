import ContentHero from './ContentPage/ContentHero';
import ContentArticle from './ContentPage/ContentArticle';
import Map from './Map/Map';
import ContentCarousel from './ContentCarousel';
import ContentReportPage from './ContentPage/ContentReportPage';

const Index = () => {
    return (
        <>
            <ContentHero />
            {/* <ContentArticle /> */}
            <Map widthMap="50vw" heightMap="50vh" />
            <ContentCarousel />
            <ContentReportPage />
        </>
    );
};

export default Index;