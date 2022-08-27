import { useEffect } from "react";
import AboutHero from "../components/About/AboutHero";
import Comments from "../components/About/Comments";
import Contact from "../components/About/Contact";
import History from "../components/About/History";
import Inspiration from "../components/About/Inspiration";
import Listeners from "../components/About/Listeners";
import MainHost from "../components/About/MainHost";
import Banner1 from "../components/Banners/Banner1";

import SupportSlider from "../components/Home/SupportSlider";
import '../css/about.css';

function About() {

   useEffect(()=>{

      const pathName = window.location.pathname;
      let path = pathName.split('/');
      let pageName = pathName == '/' ? " || Home" : ' || '+path[1][0].toUpperCase()+path[1].substring(1);
      document.title = "Podcast" + pageName;
      // Dynamic routing ended 
      window.scrollTo(0, 0)

  });

    return ( 

        <>
           <AboutHero/>
           <SupportSlider/>
           <Listeners/>
           <History/>
           <MainHost/>
           <Inspiration/>
           <Comments/>
           <Contact/>
           <Banner1/>
           
           
        </>
     );
}

export default About;