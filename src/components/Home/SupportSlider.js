import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { supporters } from "../../data/home";


function SupportSlider() {


    const settings2={
        infinite: true,
        slidesToShow: 3,
        arrows:false,
        autoplay:true,
        responsive: [
    
      
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
      
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              autoplay:true
      
            }
          }
      
        ]
      }


    return ( 

        <>
            <div id="support_slider">
                <h4 className="fw-bold text-center mb-3 text-black"> Supported by: </h4>
                <Slider {...settings2} className="support_slider_wrapper ">
                    {
                        supporters.map((item)=>
                        <div key={item.id}>
                            <img className="img-fluid" src={item.image} alt={item.image}/>
                        </div>
                        )
                    }
                </Slider>
            </div>

            <div className="gap_64"></div>
        </>
     );
}

export default SupportSlider;