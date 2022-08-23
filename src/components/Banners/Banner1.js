import shopifyIcon from '../../components/images/icon/spotify.png';
import podcastIcon from '../../components/images/icon/podcast.png';
import youtubeIcon from '../../components/images/icon/youtube.png';
import bannerLeftImage from '../../components/images/banner/mobile1.png';
import bannerRightImage from '../../components/images/banner/mobile2.png'
import Button from '../common/Button';





function Banner1() {

    const banner1Infos = 
        {
            verson:'Beta',
            title:"Available now Pod of Cast App",
            subTitle:'We just launched our podcast app!',
        }

    

    return ( 
        <>
        <section id="app_ad">
        <div className="gap_32"></div>
        <div className="banner1 position-relative overflow-hidden">
          <div style={{gap:'100px'}} className="banner_el_wrapper d-flex flex-column ">
            <div className="banner_text text-center text-center">

              <div className="red_badge mx-auto">{banner1Infos.verson}</div>
              <h2 className="text-black mx-auto">{banner1Infos.title}</h2>
  
                <p className="text-dark mt-2">{banner1Infos.subTitle}</p>
            </div>
  
            <div className="banner_actions text-center">
              <div>
                <Button link={'/#'} href="ff" btnColors={'yellow_btn text-dark'} btnText={'Download Now'} />

                <p className="text-dark mt-4">Content also available on:</p>

              </div>
              
              <div className="mt-3 d-flex justify-content-center gap-2">
                <a href="/#"><img src={podcastIcon} alt={podcastIcon}/></a>
                <a href="/#"><img src={shopifyIcon} alt={podcastIcon}/></a>
                <a href="/#"><img src={youtubeIcon} alt={podcastIcon}/></a>
              </div>
            </div>
          </div>

          <img className="l_moving_img" data-aos="zoom-out-up" data-aos-duration="1200" src={bannerLeftImage} alt=""/>
          <img className="r_moving_img" data-aos="zoom-out-down" data-aos-duration="1200" src={bannerRightImage} alt=""/>
        </div>
        </section> 
        </>
     );
}

export default Banner1;