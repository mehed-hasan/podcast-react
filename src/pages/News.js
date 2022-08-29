import Banner1 from "../components/Banners/Banner1";
import LatestPost from "../components/News/LatestPost";
import NewsHero from "../components/News/NewsHero";
import '../css/news.css';
import useTitle from "../hooks/useTitle";

function News() {

   useTitle('News & Blogs');

    return ( 

        <>
            <NewsHero/>
            <LatestPost/>
            <Banner1/>
        </>
     );
}

export default News;