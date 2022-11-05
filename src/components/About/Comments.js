import { comments } from "../../data/about";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Comment from "../Comment";

function Comments() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="gap_96"></div>
      <section id="comments">
        <div className="container comments_wrapper d-flex flex-column justify-content-center align-items-center gap-5">
          <svg
            width="42"
            height="34"
            viewBox="0 0 42 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8015 16.0612C15.4007 16.7648 16.648 17.8202 17.5436 19.2275C18.4391 20.6348 18.8869 22.2979 18.8869 24.2169C18.8869 26.9675 18.0233 29.2063 16.2962 30.9334C14.5691 32.5965 12.3623 33.4281 9.67565 33.4281C6.98905 33.4281 4.75022 32.5645 2.95915 30.8374C1.23205 29.1103 0.368501 26.9035 0.368501 24.2169C0.368501 22.9376 0.528418 21.6582 0.848251 20.3789C1.16808 19.0996 1.87172 17.1806 2.95915 14.6219L8.52425 0.805098H18.0233L13.8015 16.0612ZM36.4457 16.0612C38.0449 16.7648 39.2922 17.8202 40.1878 19.2275C41.0833 20.6348 41.5311 22.2979 41.5311 24.2169C41.5311 26.9675 40.6675 29.2063 38.9404 30.9334C37.2133 32.5965 35.0065 33.4281 32.3199 33.4281C29.6333 33.4281 27.3944 32.5645 25.6034 30.8374C23.8763 29.1103 23.0127 26.9035 23.0127 24.2169C23.0127 22.9376 23.1726 21.6582 23.4925 20.3789C23.8123 19.0996 24.5159 17.1806 25.6034 14.6219L31.1685 0.805098H40.6675L36.4457 16.0612Z"
              fill="black"
            />
          </svg>

          <div className="comment_slider">
            <Slider
              {...settings}
              className="comment_slider_wrapper d-flex flex-column gap-5"
            >
              {comments.map((item) => (
                <Comment data={item} />
              ))}
            </Slider>
          </div>

          <svg
            className="chorki img1"
            width="147"
            height="153"
            viewBox="0 0 147 153"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.9887 4.87672C53.3442 -0.705837 61.4555 -0.155127 62.044 5.5594L65.6395 40.4751C66.0381 44.3452 70.4411 46.3701 73.6387 44.1538L109.872 19.0398C114.413 15.8926 120.026 21.1847 117.152 25.9027L99.5972 54.7149C97.7956 57.672 99.3924 61.5272 102.757 62.3443L142.68 72.0374C147.588 73.2291 147.98 80.0588 143.24 81.8045L102.008 96.991C98.8376 98.1586 97.651 102.025 99.6203 104.77L115.053 126.281C118.301 130.807 112.996 136.527 108.238 133.628L80.2851 116.597C77.328 114.796 73.4728 116.392 72.6557 119.757L65.7196 148.325C64.3741 153.866 56.3387 153.379 55.6724 147.716L50.7185 105.607C50.246 101.591 45.5186 99.6866 42.3941 102.254L15.36 124.467C10.8054 128.21 4.57888 122.546 7.87398 117.658L33.0832 80.2626C35.4422 76.7633 32.7859 72.0742 28.5717 72.2984L5.65256 73.5178C-0.451023 73.8426 -1.87764 65.1227 4.0112 63.4854L23.5438 58.0546C27.1391 57.055 28.4874 52.6655 26.073 49.82L8.79029 29.4511C5.0341 25.0242 10.3917 18.7556 15.3497 21.7763L37.7149 35.4028C40.672 37.2044 44.5272 35.6076 45.3443 32.2426L51.9887 4.87672Z"
              fill="#FF6C6C"
            />
          </svg>
          <svg
            className="spring"
            width="124"
            height="124"
            viewBox="0 0 124 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86.3474 2C76.4722 11.0172 63.6396 29.7092 31.2177 32.9779C-0.450531 36.1705 74.6031 3.02726 97.5111 17.6517C124.289 34.7467 -8.1881 84.113 8.77193 64.9345C18.2604 54.205 106.907 33.3564 106.907 50.2606C106.907 71.7648 8.77179 104.986 2.66813 97.3922C-8.09955 83.9963 114.757 54.8902 121.001 72.7607C128.447 94.07 50.0547 119.321 35.4387 111.169C23.7459 104.647 110.256 89.7993 122 122"
              stroke="#5F5FFF"
              stroke-width="2.5"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
        <div className="gap_64"></div>
      </section>
    </>
  );
}

export default Comments;
