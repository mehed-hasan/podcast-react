import { useEffect } from "react";
import Banner1 from "../components/Banners/Banner1";
import EpisodeInfo from "../components/Episode/EpisodeInfo";
import LatestEpisodes from "../components/Episode/LatestEpisodes";
import '../css/episode.css';

function Details() {

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
            <EpisodeInfo/>
            <LatestEpisodes/>
            <Banner1/>
        </>
     );
}

export default Details;