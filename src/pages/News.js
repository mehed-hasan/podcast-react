import { useEffect } from "react";
import Banner1 from "../components/Banners/Banner1";
import LatestEpisodes from "../components/Episode/LatestEpisodes";
import LatestPost from "../components/News/LatestPost";
import NewsHero from "../components/News/NewsHero";
import '../css/news.css';

function News() {

    useEffect(()=>{

        // Dynamic routing started 
        const pathName = window.location.pathname;
        let pageName = pathName == '/' ? "/home" :pathName;
        console.log(pageName);
        document.title = "Podcast"  + pageName;
        // Dynamic routing ended 
        window.scrollTo(0, 0)
  
    });
    return ( 

        <>
            <NewsHero/>
            <LatestPost/>
            <Banner1/>
        </>
     );
}

export default News;