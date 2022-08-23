import { useEffect, useState } from "react";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import About from "./pages/About";
import Details from "./pages/Details";
import Doodle from "./pages/Doodle";
import Home from "./pages/Home";
import News from "./pages/News";
import "aos/dist/aos.css";
import AOS from "aos";
import './css/parallax.css';
import './js/parallax.js';
import './js/chorki.js';
// import './js/preloader.js';





function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  

  return (
  <BrowserRouter>
    <Navbar/>
    <section id="page_content">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/episodes/:id" element={<Details/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/news" element={<News/>}></Route>
      <Route path="/doodle" element={<Doodle/>}></Route>
    </Routes>
    </section>
    <Footer/>
  </BrowserRouter>
  )
}

export default App;
