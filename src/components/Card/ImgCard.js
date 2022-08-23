

import shopifyIcon from '../../components/images/icon/spotify_white.png'
import podcastIcon from '../../components/images/icon/podcast_white.png'
import youtubeIcon from '../../components/images/icon/youtube_white.png'
import pausIcon from '../../components/images/icon/pause.png';
import playingIcon from '../../components/images/icon/play.gif';
import BorderedBtn from '../common/BorderdBtn';



function ImgCard({data, hasShadowBlue, isPlaying}) {

const {cat,id,cardThumbnail} = data;


    return ( 
 

                <div key={id}  className='img_card_wrapper'>
                  <div className={`img_card ${hasShadowBlue}`} style={{backgroundImage:`url(../../${cardThumbnail})`}} data-aos="flip-left" data-aos-duration="1500">
                    <div className="overlay">
                      <div className="card_links d-flex gap-3">
                        <a href=""><img src={podcastIcon} alt=""/></a>
                        <a href=""><img src={shopifyIcon} alt=""/></a>
                        <a href=""><img src={youtubeIcon} alt=""/></a>
                      </div>

                      <h5 className="caption text-white">{cat}</h5> 
                      <img className="play" style={{width:"70px"}}  src={isPlaying ? playingIcon  :pausIcon} alt={pausIcon}/>
                    </div>
                  </div> 

                  {
                  hasShadowBlue  ? 
                  
                  <div className="btn_group tags ms-3 mt-4 ml-2 pb-2">
                    <div className='d-flex gap-1'>
                    <span className="fw-bold">Tags : </span>

                    <BorderedBtn link={data.link1} btnText={'mind-behaviour'}/>
                    <BorderedBtn link={data.link2} btnText={'health'}/>
                    </div>
                </div>


                  :''
                  
                  }
                </div>

   
     );
}

export default ImgCard;