import { useEffect } from "react";
import Comments from "../components/About/Comments";
import Banner1 from "../components/Banners/Banner1";
import DoodleBanner from "../components/Doodle/DoodleBanner";
import DoodleRoom from "../components/Doodle/DoodleRoom";
import DoodleSection from "../components/Doodle/DoodleSection";
import Article from "../components/Home/Article";
import LatestPost from "../components/News/LatestPost";
import '../css/doodle.css';

function Doodle() {


    useEffect(()=>{

        // Dynamic routing started 
        const pathName = window.location.pathname;
        let path = pathName.split('/');
        let pageName = pathName == '/' ? " || Home" : ' || '+path[1][0].toUpperCase()+path[1].substring(1);
        document.title = "Podcast" + pageName;
        // Dynamic routing ended 
        window.scrollTo(0, 0)
    });
    return ( 

        <>
         <DoodleBanner/>
         <DoodleRoom/>
         <LatestPost/>
         <Comments/>
         <DoodleSection/>
         <Article/>
         <Banner1/>
        </>
     );
}

export default Doodle;