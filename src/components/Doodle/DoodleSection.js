import DoodleImage from "../images/banner/Doodle.png";
import DoodleImage2 from "../images/banner/Doodle 2.png";
import { Link } from "react-router-dom";
function DoodleSection() {
  return (
    <>
      <section id="doodle">
        <div className="gap_40"></div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="chart">
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quam pellentesque at bibendum euismod tellus duis curs us
                    dignissim odio. Sit vulputate et integer in.
                  </li>

                  <li>
                    Lorem ipsum dolor sit amet, <b>consectetur adipiscing </b>{" "}
                    elit. Quam pellentesque at bibendum euismod tellus duis
                    cursus dignissim odio. Sit vulputate et integer in. Sit vel,
                    senectus iaculis morbi. <b>Amet</b> interdum imperdiet
                    laoreet morbi tincidunt fermentum, libero. Ante enim eget.
                    Viverra at porttitor accumsan.{" "}
                    <Link
                      className="text-black text-decoration-underline"
                      to=""
                    >
                      Orci non here
                    </Link>
                  </li>

                  <li>
                    Quis dictum cursus faucibus mattis dignissim. Pellent que{" "}
                    <b>purus in sed</b> sodales in mauris molestie. Eleifend est
                    consctetur interdum eu in auctor. Gravida leo et.
                  </li>
                </ul>
                <div className="gap_64"></div>
                <div className="doodle_img max-auto">
                  <img
                    data-aos="wake-up"
                    data-aos-duration="1200"
                    className="img-fluid"
                    src={DoodleImage}
                    alt=""
                  />
                  <p className="text-black  text-center mt-3">
                    this is an image with a caption example
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="chart">
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quam pellentesque at <b>bibendum euismod </b> tellus duis
                    curs us dignissim odio. Sit vulputate et integer in.
                  </li>

                  <li>
                    Lorem ipsum dolor sit amet, <b>consectetur adipiscing </b>{" "}
                    elit. Quam pellentesque at bibendum euismod tellus duis
                    cursus dignissim odio. Sit vulputate et integer in. Sit vel,
                    senectus iaculis morbi. <b>Amet</b> interdum imperdiet
                    laoreet morbi tincidunt fermentum, libero. Ante enim eget.
                    Viverra at porttitor accumsan.{" "}
                    <Link
                      className="text-black text-decoration-underline"
                      to=""
                    >
                      Orci non here
                    </Link>
                  </li>

                  <li>
                    Quis dictum cursus faucibus mattis dignissim. Pellent
                    <b>que purus in</b> sed sodales in mauris molestie. Eleifend
                    est consctetur interdum eu in auctor. Gravida leo et.
                  </li>
                </ul>
                <div className="gap_64"></div>
                <div className="doodle_img mx-auto">
                  <img
                    data-aos="wake-up"
                    data-aos-duration="1200"
                    className="img-fluid"
                    src={DoodleImage2}
                    alt=""
                  />
                  <p className="text-black  text-center mt-3  text-decoration-underline">
                    <Link className="text_first_color" to="">
                      download here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap_64"></div>
      </section>
    </>
  );
}

export default DoodleSection;
