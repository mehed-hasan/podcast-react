
import bannerSpringImg from '../../components/images/banner/banner_spring.png';
import linesImg from '../../components/images/banner/lines.png';
import { newsHero } from '../../data/news';

const title = newsHero.title.split(" ");

function NewsHero() {
    return ( 

        <>
            <section style={{minHeight:'450px', backgroundColor:'var(--third-color)'}} id="banner2" className="animated_banner d-flex align-items-center position-relative overflow-hidden ">
            <div className="banner2_text text-center mx-auto first_content">
                <div className="gap_40"></div>
              <h1 className="text-black text-capitalize">
                {title[0]}
              </h1>
              <h1 className=" text-capitalize text-black">
                {title[1]} <span className="text_first_color">{title[2]}</span>
              </h1>
    
              <p className="my-2 my-md-5 mx-auto banner_moto px-2 px-md-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
              </p>
              <br/>

              <div className="gap_40"></div>
              <div className="input_wrapper">
                <input placeholder="Search..." className="form-control has_shadow_blue" type="text" name="" id=""/>  
              </div>
              <div className="gap_64"></div>

            </div>

            <svg style={{width:'50px', top:'20px', right:'10%'}} className="animate_star position-absolute" width="120" height="167" viewBox="0 0 120 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="ele" fillRule="evenodd" clipRule="evenodd" d="M58.6233 112.966C58.593 113.074 58.5625 113.182 58.5321 113.289C58.2653 114.233 57.9948 115.175 57.7193 116.115C57.5218 116.804 57.3886 117.493 57.2569 118.175C57.0593 119.196 56.8653 120.2 56.4631 121.158C56.3433 121.444 56.205 121.725 56.0426 122.002C55.9963 122.081 55.948 122.159 55.8977 122.237C55.2904 123.415 53.1652 124.828 51.9507 124.828C50.7363 124.828 48.6111 123.179 48.6111 122.002C48.4856 120.835 48.4638 119.627 48.4815 118.413C48.486 118.099 48.4932 117.784 48.5019 117.47C48.5141 117.029 48.5294 116.588 48.5445 116.149C48.5754 115.256 48.606 114.37 48.6105 113.505C48.6106 113.485 48.6107 113.466 48.6108 113.446C48.611 113.394 48.6111 113.341 48.6111 113.289C48.559 112.644 48.507 111.998 48.4535 111.353C48.1945 108.231 47.8998 105.109 47.3966 101.987C47.3579 101.788 47.3174 101.591 47.2751 101.394C45.6593 93.8806 41.4267 87.4964 33.7342 82.6776C33.1421 82.3034 32.5516 81.928 31.9615 81.5529C26.6478 78.1748 21.3699 74.8195 15.2921 72.5883C14.0953 72.149 12.8676 71.7533 11.6024 71.4095C10.1279 71.0089 8.60271 70.679 7.0166 70.4329C6.7908 70.3979 6.55828 70.3524 6.32304 70.2974C6.21211 70.2714 6.10058 70.2433 5.98886 70.2131C4.74473 69.8769 3.47754 69.2849 2.76608 68.5491C2.6416 68.4043 2.51074 68.2545 2.37645 68.1009C1.20054 66.7551 -0.238888 65.1077 0.0336009 63.8396C0.337209 62.4268 2.76608 60.543 4.89135 60.3075C6.18751 60.1218 7.45163 59.9122 8.68466 59.6794C10.0621 59.4194 11.4007 59.1305 12.7019 58.8137C12.7356 58.8055 12.7693 58.7973 12.803 58.789C12.8108 58.7871 12.8186 58.7852 12.8265 58.7833C13.7997 58.5445 14.7519 58.2901 15.6836 58.0204C34.3596 52.6145 44.8075 41.0729 51.4707 26.6194C52.1776 25.0862 52.8418 23.5201 53.4688 21.9251C53.703 21.3197 53.9221 20.7064 54.1288 20.0869C54.1356 20.0664 54.1425 20.0458 54.1493 20.0253C55.0075 17.4406 55.6504 14.7476 56.2649 12.055C56.3468 11.696 56.4283 11.337 56.5097 10.9783C56.5445 10.8248 56.5793 10.6714 56.6141 10.518C56.7278 10.0174 56.8417 9.51756 56.9571 9.01915C57.1066 8.37325 57.2586 7.72976 57.4157 7.09021C57.5895 6.77569 57.7191 6.46118 57.8213 6.14831C57.8807 5.96648 57.9309 5.7852 57.9752 5.60479C58.0507 5.29696 58.109 4.99166 58.1665 4.69051C58.3211 3.88026 58.4701 3.09997 58.9338 2.38071C59.8446 1.20334 61.6662 -0.209513 62.8807 0.0259618C64.0951 0.0259618 65.6131 1.67429 66.524 2.85166C66.9774 3.55506 66.9229 4.38979 66.8662 5.25777C66.847 5.55207 66.8276 5.85019 66.8276 6.14831C66.8015 6.57356 66.7753 6.99708 66.7492 7.41915C66.7294 7.74046 66.7095 8.06093 66.6896 8.3807C66.6694 8.70545 66.6492 9.02947 66.6291 9.35291C66.572 10.2678 66.5148 11.178 66.4577 12.0866C66.4305 12.5204 66.4032 12.9538 66.376 13.3872C66.3747 13.4081 66.3733 13.429 66.372 13.4499C66.2203 15.8629 66.0685 18.2759 65.9167 20.7477C65.8155 22.5531 65.6806 24.3584 65.5457 26.1637C65.5352 26.3039 65.5247 26.4441 65.5142 26.5843C65.5124 26.6089 65.5106 26.6334 65.5088 26.6579C65.4246 27.7865 65.3416 28.915 65.2681 30.0436C65.1171 32.3609 65.0059 34.6782 65.0059 36.9955C64.729 45.1583 70.7685 50.3817 78.7452 53.9171C78.7739 53.9298 78.8026 53.9424 78.8313 53.9551C79.5713 54.2814 80.3277 54.5932 81.0972 54.8916C86.8657 57.0109 93.2415 58.1882 100.225 57.4818C101.473 57.3435 102.721 57.327 103.978 57.3848C104.033 57.3873 104.087 57.3899 104.142 57.3927C105.258 57.4496 106.38 57.5634 107.514 57.7005C108.24 57.7882 108.97 57.8856 109.707 57.9838C110.88 58.1401 112.069 58.2985 113.28 58.4237C113.941 58.5262 114.602 58.6288 115.213 58.7702C115.298 58.79 115.382 58.8105 115.466 58.8319C116.155 59.009 116.768 59.2453 117.227 59.6011C118.441 60.7785 119.959 62.4268 119.959 63.6042C119.959 65.7234 117.227 65.9589 114.798 65.7234C114.05 65.6788 113.313 65.6342 112.583 65.588C112.568 65.5871 112.554 65.5861 112.539 65.5852C112.417 65.5775 112.294 65.5696 112.172 65.5618C111.945 65.5471 111.718 65.5323 111.491 65.5172C109.668 65.3959 107.875 65.2593 106.046 65.082C105.13 64.9932 104.204 64.8941 103.261 64.7815C102.506 64.7084 101.758 64.658 101.016 64.6284C100.993 64.6275 100.97 64.6266 100.947 64.6258C94.548 64.3821 88.5816 65.689 82.6152 67.3718C81.368 67.7587 80.1207 68.3046 78.9787 68.9605C77.3408 69.9012 75.9194 71.0681 75.025 72.3167C71.6853 76.3198 68.3456 80.3229 66.8276 84.7969C64.8065 90.5445 63.1591 96.3646 61.5745 102.177C61.2859 103.235 60.9994 104.293 60.7132 105.351C60.069 107.73 59.4259 110.105 58.7624 112.471C58.7162 112.636 58.6698 112.801 58.6233 112.966ZM53.1511 81.5073C53.2987 81.0749 53.4477 80.6444 53.5981 80.216C55.987 73.2417 60.8091 67.4859 63.7803 63.9393C63.866 63.837 63.9501 63.7367 64.0325 63.6381C64.377 63.1865 64.7372 62.7505 65.1109 62.3299C60.5754 59.261 56.259 55.12 53.6204 49.5846C51.3452 52.3464 48.8122 54.977 45.981 57.4324C42.2078 60.7049 38.0332 63.555 33.4293 65.9612C35.534 67.2158 37.4798 68.4601 39.2739 69.6073C39.9339 70.0293 40.5733 70.4382 41.1926 70.8297C46.0352 73.8672 50.0146 77.4589 53.1511 81.5073Z" fill="#5F5FFF"/>
                <path className="ele" fillRule="evenodd" clipRule="evenodd" d="M97.307 145.001C97.082 145.832 96.8566 146.661 96.6248 147.488C96.5956 147.592 96.5663 147.697 96.5368 147.801C96.4349 148.161 96.3316 148.521 96.2264 148.88C96.1509 149.143 96.1 149.407 96.0497 149.667C95.9743 150.057 95.9001 150.44 95.7465 150.806C95.7008 150.915 95.6479 151.023 95.5859 151.129C95.5682 151.159 95.5498 151.189 95.5305 151.219C95.2986 151.668 94.4868 152.208 94.0229 152.208C93.5591 152.208 92.7473 151.578 92.7473 151.129C92.6994 150.683 92.691 150.221 92.6978 149.758C92.6995 149.638 92.7023 149.517 92.7056 149.397C92.7102 149.229 92.7161 149.061 92.7218 148.893C92.7336 148.552 92.7453 148.214 92.747 147.883C92.7471 147.876 92.7471 147.868 92.7472 147.86C92.7472 147.84 92.7473 147.821 92.7473 147.801C92.6556 146.663 92.5639 145.526 92.415 144.388C92.3755 144.087 92.332 143.785 92.2834 143.483C91.9909 141.986 91.4327 140.603 90.5643 139.358C89.7113 138.134 88.5589 137.044 87.0647 136.108C86.8386 135.965 86.613 135.822 86.3876 135.678C85.4784 135.1 84.5719 134.524 83.6394 133.987C82.8461 133.531 82.0339 133.103 81.1853 132.726C79.8555 132.137 78.4362 131.675 76.8593 131.431C76.7731 131.417 76.6843 131.4 76.5944 131.379C76.5521 131.369 76.5094 131.358 76.4668 131.347C75.9916 131.218 75.5075 130.992 75.2358 130.711C75.1882 130.656 75.1382 130.599 75.0869 130.54C74.6378 130.026 74.088 129.397 74.192 128.912C74.308 128.373 75.2358 127.653 76.0476 127.563C76.5427 127.492 77.0255 127.412 77.4965 127.323C78.0464 127.219 78.5802 127.104 79.0983 126.976C79.3321 126.919 79.5627 126.859 79.7901 126.796C80.4191 126.624 81.0242 126.434 81.6065 126.227C82.4463 125.929 83.2386 125.595 83.9869 125.228C86.9539 123.774 89.2275 121.8 91.0153 119.459C91.2156 119.197 91.4098 118.93 91.5981 118.659C91.6547 118.577 91.7108 118.495 91.7664 118.413C92.9062 116.724 93.8289 114.871 94.6028 112.902C94.6922 112.671 94.7759 112.437 94.8549 112.2C94.8575 112.192 94.8601 112.184 94.8627 112.176C94.9044 112.051 94.9448 111.924 94.984 111.798C95.2939 110.794 95.5298 109.755 95.7643 108.721C95.7776 108.662 95.7909 108.604 95.8042 108.545C95.8476 108.354 95.8912 108.163 95.9352 107.972C95.9923 107.726 96.0504 107.48 96.1104 107.236C96.1768 107.115 96.2263 106.995 96.2653 106.876C96.288 106.806 96.3072 106.737 96.3241 106.668C96.3529 106.551 96.3752 106.434 96.3972 106.319C96.4562 106.009 96.5131 105.711 96.6902 105.437C97.0382 104.987 97.734 104.447 98.1979 104.537C98.6617 104.537 99.2416 105.167 99.5895 105.617C99.7627 105.885 99.7419 106.204 99.7202 106.536C99.7129 106.648 99.7055 106.762 99.7055 106.876C99.6955 107.038 99.6855 107.2 99.6755 107.361C99.668 107.484 99.6604 107.606 99.6528 107.729C99.6451 107.853 99.6374 107.976 99.6296 108.1C99.6078 108.449 99.586 108.797 99.5642 109.144C99.5533 109.318 99.5424 109.491 99.5315 109.664C99.4743 110.574 99.417 111.484 99.3598 112.416C99.3591 112.428 99.3583 112.44 99.3576 112.452C99.3189 113.142 99.2674 113.832 99.2158 114.521C99.2118 114.575 99.2078 114.628 99.2038 114.682C99.2031 114.691 99.2024 114.701 99.2017 114.71C99.1035 116.026 99.0096 117.342 99.0096 118.659C98.9785 119.576 99.1564 120.397 99.5006 121.132C99.909 122.004 100.551 122.757 101.357 123.41C102.145 124.05 103.089 124.594 104.123 125.062C104.178 125.087 104.234 125.112 104.291 125.137C104.573 125.261 104.862 125.38 105.156 125.494C107.339 126.296 109.75 126.745 112.389 126.491C112.413 126.489 112.438 126.486 112.462 126.484C112.939 126.431 113.416 126.425 113.896 126.447C113.917 126.448 113.938 126.449 113.959 126.45C114.658 126.485 115.363 126.579 116.084 126.676C116.532 126.735 116.987 126.796 117.449 126.844C117.701 126.883 117.954 126.922 118.187 126.976C118.22 126.983 118.252 126.991 118.284 126.999C118.547 127.067 118.781 127.157 118.956 127.293C119.42 127.743 120 128.373 120 128.822C120 129.632 118.956 129.722 118.029 129.632C117.743 129.615 117.462 129.598 117.183 129.58C117.177 129.58 117.172 129.579 117.166 129.579C117.119 129.576 117.073 129.573 117.026 129.57C116.939 129.564 116.852 129.559 116.766 129.553C115.72 129.483 114.701 129.401 113.622 129.272C113.334 129.244 113.048 129.225 112.765 129.214C112.756 129.213 112.747 129.213 112.738 129.213C112.494 129.203 112.251 129.2 112.01 129.202C109.838 129.221 107.787 129.683 105.736 130.261C104.576 130.621 103.417 131.341 102.837 132.15C102.762 132.24 102.687 132.33 102.612 132.42C102.523 132.527 102.434 132.634 102.346 132.74C102.295 132.802 102.244 132.864 102.194 132.926C101.15 134.201 100.187 135.497 99.7055 136.917C99.5128 137.465 99.3291 138.015 99.1523 138.566C98.7479 139.826 98.3804 141.093 98.0277 142.361C98.0086 142.43 97.9896 142.498 97.9706 142.567C97.7673 143.301 97.5685 144.035 97.3699 144.768C97.349 144.846 97.328 144.923 97.307 145.001ZM93.6933 131.053C94.2248 130.175 94.7878 129.391 95.3031 128.726C94.9642 128.406 94.6347 128.068 94.3189 127.711C94.0467 127.967 93.7673 128.22 93.4805 128.469C92.9765 128.906 92.4568 129.324 91.921 129.724C92.5456 130.144 93.1364 130.587 93.6933 131.053Z" fill="#FFD049"/>
                <path className="ele" fillRule="evenodd" clipRule="evenodd" d="M28.4848 161.469C28.4032 161.768 28.3223 162.066 28.2416 162.365C28.0895 162.926 27.9377 163.487 27.7811 164.046C27.763 164.11 27.7449 164.174 27.7267 164.239C27.6637 164.461 27.5998 164.684 27.5348 164.906C27.4882 165.068 27.4567 165.231 27.4256 165.392C27.379 165.633 27.3332 165.87 27.2383 166.096C27.21 166.164 27.1773 166.23 27.139 166.295C27.128 166.314 27.1166 166.333 27.1048 166.351C26.9614 166.629 26.4597 166.963 26.173 166.963C25.8863 166.963 25.3846 166.573 25.3846 166.295C25.355 166.02 25.3498 165.735 25.354 165.448C25.3551 165.374 25.3567 165.3 25.3588 165.225C25.3617 165.121 25.3653 165.017 25.3689 164.914C25.3761 164.703 25.3834 164.494 25.3844 164.29C25.3845 164.285 25.3845 164.28 25.3845 164.276C25.3845 164.263 25.3846 164.251 25.3846 164.239C25.3129 163.349 25.2412 162.46 25.0979 161.57C25.0662 161.408 25.0295 161.248 24.9876 161.091C24.6854 159.953 24.1134 158.932 23.2158 158.058C22.8297 157.681 22.3834 157.332 21.8725 157.012C21.7327 156.924 21.5933 156.835 21.454 156.746C21.2759 156.633 21.098 156.52 20.9196 156.408C20.3529 156.051 19.7822 155.703 19.1894 155.387C18.0947 154.804 16.9246 154.332 15.5651 154.121C15.5118 154.113 15.4569 154.102 15.4014 154.089C15.3752 154.083 15.3489 154.077 15.3225 154.069C15.0288 153.99 14.7297 153.85 14.5617 153.677C14.5323 153.642 14.5014 153.607 14.4697 153.571C14.1921 153.253 13.8523 152.864 13.9166 152.565C13.9883 152.231 14.5617 151.787 15.0634 151.731C15.3694 151.687 15.6678 151.638 15.9589 151.583C16.2988 151.519 16.6287 151.447 16.9489 151.368C17.0934 151.333 17.2359 151.296 17.3765 151.257C18.132 151.05 18.8317 150.802 19.4806 150.516C20.0685 150.256 20.6147 149.966 21.1229 149.647C21.9661 149.118 22.7048 148.511 23.3562 147.837C23.8417 147.336 24.2788 146.797 24.6744 146.228C24.7093 146.177 24.744 146.127 24.7783 146.076C25.4218 145.123 25.9533 144.084 26.405 142.984C26.4478 142.88 26.4899 142.775 26.5314 142.67C26.5866 142.527 26.6384 142.382 26.6872 142.236C26.6888 142.231 26.6904 142.226 26.692 142.221C26.9216 141.53 27.0859 140.805 27.2492 140.086C27.2575 140.049 27.2657 140.013 27.2739 139.977C27.3007 139.859 27.3276 139.741 27.3549 139.623C27.3902 139.471 27.4261 139.319 27.4631 139.168C27.5042 139.093 27.5347 139.019 27.5589 138.945C27.5729 138.902 27.5848 138.86 27.5952 138.817C27.613 138.744 27.6268 138.672 27.6404 138.601C27.6769 138.41 27.712 138.226 27.8215 138.056C28.0365 137.778 28.4666 137.444 28.7533 137.5C29.04 137.5 29.3983 137.889 29.6134 138.167C29.7204 138.333 29.7076 138.53 29.6942 138.735C29.6896 138.805 29.685 138.875 29.685 138.945C29.6789 139.046 29.6727 139.146 29.6666 139.245C29.6619 139.321 29.6572 139.397 29.6525 139.472C29.6477 139.549 29.6429 139.626 29.6382 139.702C29.6247 139.918 29.6112 140.133 29.5977 140.347C29.591 140.455 29.5843 140.562 29.5775 140.669C29.5417 141.239 29.5058 141.808 29.47 142.392C29.4503 142.744 29.4251 143.096 29.399 143.448C29.3935 143.522 29.388 143.596 29.3824 143.67C29.3799 143.704 29.3775 143.737 29.375 143.77C29.3746 143.776 29.3741 143.781 29.3737 143.787C29.313 144.601 29.255 145.414 29.255 146.228C29.2266 147.065 29.48 147.772 29.9303 148.372C30.0184 148.489 30.1139 148.602 30.2164 148.711C30.7774 149.31 31.5451 149.791 32.4151 150.185C32.4495 150.201 32.4841 150.216 32.5188 150.231C32.6935 150.308 32.8721 150.382 33.0537 150.452C34.0895 150.833 35.2082 151.085 36.4099 151.11C36.7881 151.118 37.1746 151.104 37.5692 151.064C37.864 151.031 38.1587 151.027 38.4553 151.041C38.4682 151.042 38.4812 151.042 38.4941 151.043C38.9262 151.065 39.3622 151.123 39.8079 151.182C40.0848 151.219 40.3655 151.257 40.6512 151.286C40.8073 151.31 40.9633 151.335 41.1075 151.368C41.1277 151.373 41.1477 151.378 41.1673 151.383C41.3301 151.424 41.4747 151.48 41.583 151.564C41.8697 151.842 42.2281 152.231 42.2281 152.509C42.2281 153.01 41.583 153.065 41.0096 153.01C40.8331 152.999 40.6592 152.988 40.4868 152.978C40.4834 152.977 40.4799 152.977 40.4764 152.977C40.4475 152.975 40.4187 152.973 40.3899 152.971C40.3361 152.968 40.2825 152.964 40.229 152.961C39.583 152.918 38.9529 152.867 38.286 152.787C38.1079 152.77 37.9313 152.758 37.7562 152.751C37.7507 152.751 37.7453 152.751 37.7399 152.75C37.2281 152.731 36.7281 152.753 36.2359 152.807C35.2749 152.912 34.3435 153.136 33.4121 153.399C32.6954 153.621 31.9786 154.066 31.6203 154.566C31.5739 154.622 31.5275 154.677 31.4812 154.733C31.4263 154.799 31.3716 154.865 31.3171 154.931C31.0495 155.255 30.7883 155.581 30.551 155.913C30.2782 156.295 30.0368 156.685 29.8531 157.089C29.7899 157.229 29.7335 157.369 29.685 157.512C29.2935 158.626 28.9614 159.751 28.6481 160.877C28.6363 160.919 28.6245 160.961 28.6128 161.004C28.5699 161.159 28.5272 161.314 28.4848 161.469Z" fill="#FF6C6C"/>
                </svg>

            <img value="2" className="line position-absolute" src={linesImg} alt=""/>
            <img value="-2"  className="circle img-fluid  position-absolute" src={bannerSpringImg} alt=""/>
        </section>


        <div className="gap_96"></div>
        </>
       
     );
}

export default NewsHero;