import Banner1 from "../components/Banners/Banner1";
import EpisodeInfo from "../components/Episode/EpisodeInfo";
import LatestEpisodes from "../components/Episode/LatestEpisodes";
import '../css/episode.css';
import useTitle from "../hooks/useTitle";

function Details() {

    useTitle("Details");
    return ( 
        <>
            <EpisodeInfo/>
            <LatestEpisodes/>
            <Banner1/>
        </>
     );
}

export default Details;