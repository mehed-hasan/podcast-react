import Banner1 from "../components/Banners/Banner1";
import HeroSection from "../components/Home/HeroSection";
import CatSlider from "../components/Home/CatSlider";
import SupportSlider from "../components/Home/SupportSlider";
import Membership from "../components/Home/Membership";
import Episodes from "../components/Home/Episodes";
import Sponsor from "../components/Home/Sponsor";
import Article from "../components/Home/Article";
import '../css/index.css'; 
import Preloader from "../components/common/Preloader";
import '../js/test.js';
import { useEffect } from "react";

function Index() {

    useEffect(()=>{

        // Dynamic routing started 
        const pathName = window.location.pathname;
        let pageName = pathName == '/' ? "/home" : pathName;
        document.title = "Podcast" + pageName;
        // Dynamic routing ended 
        window.scrollTo(0, 0)

    });

    return (   
      
        <>  
            <HeroSection/>
            <CatSlider />
            <SupportSlider/>
            <Membership/> 
            <Episodes/>
            <Sponsor/>
            <Article/>
            <Banner1/>
        </>
     );
}

export default Index;






