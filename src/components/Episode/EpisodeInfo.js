import ImgCard from "../Card/ImgCard";
import { useParams } from "react-router-dom";
import { recentEpisodes } from "../../data/home";
import btnPlayIcon from '../../components/images/icon/play_icon.png';
import btnPauseIcon from '../../components/images/icon/pause_icon.png';
import audio_file from '../../audio/test.mp3';
import pausIcon from '../../components/images/icon/pause.png';
import playingIcon from '../../components/images/icon/play.gif';

import { useState } from "react";



function EpisodeInfo() {
    let params = useParams();
 


  let singleEpisode =   recentEpisodes.find(item => {return item.id == params.id});

  const [isPlaying, setisPlaying] = useState(false);
  const audio = new Audio(audio_file);


  const play = () =>{


      if(isPlaying){
        setisPlaying(false);
        audio.pause();
        console.log("paused");
        
      }else{
        setisPlaying(true);
        audio.play();
        console.log("played");
      }
  }

    return ( 

        <>
        <div className="gap_64"></div>
        <section id="episod_banner" className="first_content">
            <div className="container">
                <div className="episod_wrapper">
                    <div className="row">
                        <div className="col-12 col-md-6">
                           <ImgCard isPlaying={isPlaying} hasShadowBlue={'has_shadow_blue'} data={singleEpisode}/>
                        </div>
                        <div className="col-12 col-md-6">
                            <div style={{minHeight:'auto'}} className="card banner_card p-1 p-md-3 border-0">
                                <div className="card_body ">
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="card_info">
                                          <div className="card_heading d-flex flex-column justify-content-between pb-1 pb-md-3 mt-2 mt-md-0 mb-4">
                                            <div className="eps_name d-flex align-items-center justify-content-between mb-2">
                                                <h5 className="text_first_color fw-bold ">Eps. {singleEpisode.episode_no}</h5>
                                                <div className="badge text_first_color">FEATURED EPISODE</div>
                                            </div>
                                            <h3 className="text-black fw-bold">{singleEpisode.title}</h3>
                                          </div>
                        
                                          <div className="card_details mt-1 mt-md-3">
                                            <p>
                                               {singleEpisode.details}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                                <div className="card_footer d-flex justify-content-between mt-2 mt-md-4">
                                  <div className="hosters">
                                    <span className="hosters_img">
                                      <a href=""><img className="avatar" src="../assets/images/avatar/avatar1.png" alt=""/></a>
                                    </span>
                                    <span className="fw-bold">Hosted by: </span> 
                                    <span className="text_first_color fw-bold">{singleEpisode.hostedBy}</span>
                                  </div>
                                </div>

                                <div className="btn_group mt-5 d-flex gap-3">
                                  <a className="them_btn text-dark yellow_btn" href="">SUBSCRIBE</a>
                                  <button onClick={play} style={{ backgroundColor:"transparent"}} className="them_btn  blue_btn d-flex align-items-center listen" href="#">
                                    <img src={isPlaying ? btnPauseIcon : btnPlayIcon} alt=""/>

                                      <span className="text-white btn_text">LISTEN </span> <span className="text_first_color ms-1"> ( 46 min )</span>
                                      
                                  </button>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="gap_96"></div>
        </>
     );
}

export default EpisodeInfo;