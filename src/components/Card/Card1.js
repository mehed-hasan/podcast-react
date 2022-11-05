import shopifyIcon from "../../components/images/icon/spotify_white.png";
import podcastIcon from "../../components/images/icon/podcast_white.png";
import youtubeIcon from "../../components/images/icon/youtube_white.png";
import BorderedBtn from "../common/BorderdBtn";
import { Link } from "react-router-dom";

function card1({ grid, data }) {
  return (
    <>
      {data.length > 0 ? (
        data.map((data) => (
          <div
            
            key={data.id}
            className={`episode_wrapper ${grid}`}
          >
            <div
              className="card card1 p-2 p-md-3 mb-3 "
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="card_body ">
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <div className="left_img">
                      <div className="card_links d-flex gap-3">
                        <Link to="">
                          <img src={podcastIcon} alt="" />
                        </Link>
                        <Link to="">
                          <img src={shopifyIcon} alt="" />
                        </Link>
                        <Link to="">
                          <img src={youtubeIcon} alt="" />
                        </Link>
                      </div>
                      <img
                        className="w-100 img-fluid"
                        src={require(`../../images/cards/${data.cardThumbnail}`)}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-8">
                    <div className="card_info">
                      <div className="card_heading d-flex flex-column justify-content-between pb-1 pb-md-3 mt-2 mt-md-0">
                        <h5 className="text-brown fw-bold">
                          Eps. {data.episode_no}
                        </h5>
                        <Link to={"/episodes/" + data.id}> 
                        <h3 className="text-black fw-bold">{data.title}</h3>
                        </Link>
                      </div>

                      <div className="card_details mt-1 mt-md-3">
                        <p className="text-dark">{data.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_footer d-flex justify-content-between mt-2 mt-md-4">
                <div className="btn_group d-flex gap-1">
                  <BorderedBtn link={data.link1} btnText={"mind-behaviour"} />
                  <BorderedBtn link={data.link2} btnText={"health"} />
                </div>

                <div className="hosters">
                  <span className="fw-bold text-black">Hosted by: </span>
                  <span className="hosters_img">
                    {data.hoster.map((hosters) => (
                      <Link key={hosters.id} to={hosters.profileLink}>
                        <img className="avatar" src={require(`../../images/avatar/${hosters.image}`)} alt="" />
                      </Link>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h5 className="text-center mt-5"> No episodes in this category !</h5>
      )}
    </>
  );
}

export default card1;
