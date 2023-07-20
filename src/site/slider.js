import React, { useState } from "react";
import $ from "jquery";
import IndexSite from "./index";
import SliderContext from "./context/context";
const Slider = () => {
 const [carouselItems,setCarouselItems]=useState([
  <div key="1">
    <div className="item">
      <a href="">
        <img
          src="./assets/img/product-slider/a579bb-200x200.jpg"
          className="img-fluid"
          alt=""
        />
      </a>
      <h2 className="post-title">
        <a href="">لپ تاپ ۱۱٫۶ اینچی دل مدل INSPIRON 3168 -AC B</a>
      </h2>
      <div className="price">
        <del>
          <span>
            4,299,000<span>تومان</span>
          </span>
        </del>
        <ins>
          <span>
            4,180,000<span>تومان</span>
          </span>
        </ins>
      </div>
    </div>
  </div>,
  <div key="2">
    <div className="item">
      <a href="">
        <img
          src="./assets/img/product-slider/60eb20-200x200.jpg"
          className="img-fluid"
          alt=""
        />
      </a>
      <h2 className="post-title">
        <a href="">لپ تاپ ۱۱٫۶ اینچی دل مدل INSPIRON 3168 -AC B</a>
      </h2>
      <div className="price">
        <del>
          <span>
            4,299,000<span>تومان</span>
          </span>
        </del>
        <ins>
          <span>
            4,180,000<span>تومان</span>
          </span>
        </ins>
      </div>
    </div>
  </div>,
  <div key="3">
    <div className="item">
      <a href="">
        <img
          src="./assets/img/product-slider/4ff777-200x200.jpg"
          className="img-fluid"
          alt=""
        />
      </a>
      <h2 className="post-title">
        <a href="">لپ تاپ ۱۱٫۶ اینچی دل مدل INSPIRON 3168 -AC B</a>
      </h2>
      <div className="price">
        <del>
          <span>
            4,299,000<span>تومان</span>
          </span>
        </del>
        <ins>
          <span>
            4,180,000<span>تومان</span>
          </span>
        </ins>
      </div>
    </div>
  </div>,
  <div key="4">
    <div className="item">
      <a href="">
        <img
          src="./assets/img/product-slider/4ff777-200x200.jpg"
          className="img-fluid"
          alt=""
        />
      </a>
      <h2 className="post-title">
        <a href="">لپ تاپ ۱۱٫۶ اینچی دل مدل INSPIRON 3168 -AC B</a>
      </h2>
      <div className="price">
        <del>
          <span>
            4,299,000<span>تومان</span>
          </span>
        </del>
        <ins>
          <span>
            4,180,000<span>تومان</span>
          </span>
        </ins>
      </div>
    </div>
  </div>,
])
 const [carouselItems2,setCarouselItems2]=useState([
  <div key="1">
    <div className="item">
      <a href="">
        <img
          src="./assets/img/product/19a2cc-200x200.jpg"
          className="w-100"
          alt=""
        />
      </a>
      <h3 className="product-title">
        <a href=""> لپ تاپ ۱۳ اینچی اپل مدل MacBook Air MQD32 2017 </a>
      </h3>
      <div className="price">
        <del>
          <span className="amount">
            6,000,000<span>تومان</span>
          </span>
        </del>
        <span className="amount">
          5,746,000<span>تومان</span>
        </span>
      </div>
    </div>
  </div>,
  <div key="2">
    <div className="item">
      <a href="">
        <img
          src="./assets/img/product/19a2cc-200x200.jpg"
          className="w-100"
          alt=""
        />
      </a>
      <h3 className="product-title">
        <a href=""> لپ تاپ ۱۳ اینچی اپل مدل MacBook Air MQD32 2017 </a>
      </h3>
      <div className="price">
        <del>
          <span className="amount">
            6,000,000<span>تومان</span>
          </span>
        </del>
        <span className="amount">
          5,746,000<span>تومان</span>
        </span>
      </div>
    </div>
  </div>,
  <div key="3">
    <div className="item">
      <a href="">
        <img
          src="./assets/img/product/19a2cc-200x200.jpg"
          className="w-100"
          alt=""
        />
      </a>
      <h3 className="product-title">
        <a href=""> لپ تاپ ۱۳ اینچی اپل مدل MacBook Air MQD32 2017 </a>
      </h3>
      <div className="price">
        <del>
          <span className="amount">
            6,000,000<span>تومان</span>
          </span>
        </del>
        <span className="amount">
          5,746,000<span>تومان</span>
        </span>
      </div>
    </div>
  </div>,
])
 const [carouselOptions,setCarouselOptions]=useState({
  rtl: true,
  margin: 10,
  nav: true,
  navText: [
    '<i class="now-ui-icons arrows-1_minimal-right"></i>',
    '<i class="now-ui-icons arrows-1_minimal-left"></i>',
  ],
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      slideBy: 1,
    },
    576: {
      items: 2,
      slideBy: 1,
    },
    768: {
      items: 3,
      slideBy: 2,
    },
    992: {
      items: 3,
      slideBy: 2,
    },
    1400: {
      items: 4,
      slideBy: 3,
    },
  },
})
 const [carouselOptions2,setCarouselOptions2]=useState({
  rtl: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000,
  loop: true,
  dots: false,
  onInitialized: startProgressBar(),
  onTranslate: resetProgressBar(),
  onTranslated: startProgressBar(),
})
  return (
      <SliderContext.Provider value={{ carouselItems: carouselItems,carouselItems2:carouselItems2,carouselOptions:carouselOptions,carouselOptions2:carouselOptions2}}>
        <IndexSite />
      </SliderContext.Provider>
  );

  function s1() {
    const carouselItems = [
      <div key="1">
        <div className="item">
          <a href="">
            <img
              src="./assets/img/product-slider/a579bb-200x200.jpg"
              className="img-fluid"
              alt=""
            />
          </a>
          <h2 className="post-title">
            <a href="">لپ تاپ ۱۱٫۶ اینچی دل مدل INSPIRON 3168 -AC B</a>
          </h2>
          <div className="price">
            <del>
              <span>
                4,299,000<span>تومان</span>
              </span>
            </del>
            <ins>
              <span>
                4,180,000<span>تومان</span>
              </span>
            </ins>
          </div>
        </div>
      </div>,
      <div key="2">
        <div className="item">
          <a href="">
            <img
              src="./assets/img/product-slider/60eb20-200x200.jpg"
              className="img-fluid"
              alt=""
            />
          </a>
          <h2 className="post-title">
            <a href="">لپ تاپ ۱۱٫۶ اینچی دل مدل INSPIRON 3168 -AC B</a>
          </h2>
          <div className="price">
            <del>
              <span>
                4,299,000<span>تومان</span>
              </span>
            </del>
            <ins>
              <span>
                4,180,000<span>تومان</span>
              </span>
            </ins>
          </div>
        </div>
      </div>,
      <div key="3">
        <div className="item">
          <a href="">
            <img
              src="./assets/img/product-slider/4ff777-200x200.jpg"
              className="img-fluid"
              alt=""
            />
          </a>
          <h2 className="post-title">
            <a href="">لپ تاپ ۱۱٫۶ اینچی دل مدل INSPIRON 3168 -AC B</a>
          </h2>
          <div className="price">
            <del>
              <span>
                4,299,000<span>تومان</span>
              </span>
            </del>
            <ins>
              <span>
                4,180,000<span>تومان</span>
              </span>
            </ins>
          </div>
        </div>
      </div>,
      <div key="3">
        <div className="item">
          <a href="">
            <img
              src="./assets/img/product-slider/4ff777-200x200.jpg"
              className="img-fluid"
              alt=""
            />
          </a>
          <h2 className="post-title">
            <a href="">لپ تاپ ۱۱٫۶ اینچی دل مدل INSPIRON 3168 -AC B</a>
          </h2>
          <div className="price">
            <del>
              <span>
                4,299,000<span>تومان</span>
              </span>
            </del>
            <ins>
              <span>
                4,180,000<span>تومان</span>
              </span>
            </ins>
          </div>
        </div>
      </div>,
    ];
    return carouselItems;
  }
  function s2() {
    const carouselItems2 = [
      <div key="1">
        <div className="item">
          <a href="">
            <img
              src="./assets/img/product/19a2cc-200x200.jpg"
              className="w-100"
              alt=""
            />
          </a>
          <h3 className="product-title">
            <a href=""> لپ تاپ ۱۳ اینچی اپل مدل MacBook Air MQD32 2017 </a>
          </h3>
          <div className="price">
            <del>
              <span className="amount">
                6,000,000<span>تومان</span>
              </span>
            </del>
            <span className="amount">
              5,746,000<span>تومان</span>
            </span>
          </div>
        </div>
      </div>,
      <div key="2">
        <div className="item">
          <a href="">
            <img
              src="./assets/img/product/19a2cc-200x200.jpg"
              className="w-100"
              alt=""
            />
          </a>
          <h3 className="product-title">
            <a href=""> لپ تاپ ۱۳ اینچی اپل مدل MacBook Air MQD32 2017 </a>
          </h3>
          <div className="price">
            <del>
              <span className="amount">
                6,000,000<span>تومان</span>
              </span>
            </del>
            <span className="amount">
              5,746,000<span>تومان</span>
            </span>
          </div>
        </div>
      </div>,
      <div key="3">
        <div className="item">
          <a href="">
            <img
              src="./assets/img/product/19a2cc-200x200.jpg"
              className="w-100"
              alt=""
            />
          </a>
          <h3 className="product-title">
            <a href=""> لپ تاپ ۱۳ اینچی اپل مدل MacBook Air MQD32 2017 </a>
          </h3>
          <div className="price">
            <del>
              <span className="amount">
                6,000,000<span>تومان</span>
              </span>
            </del>
            <span className="amount">
              5,746,000<span>تومان</span>
            </span>
          </div>
        </div>
      </div>,
    ];
    return carouselItems2;
  }
  function s3() {
    const carouselOptions = {
      rtl: true,
      margin: 10,
      nav: true,
      navText: [
        '<i class="now-ui-icons arrows-1_minimal-right"></i>',
        '<i class="now-ui-icons arrows-1_minimal-left"></i>',
      ],
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
          slideBy: 1,
        },
        576: {
          items: 2,
          slideBy: 1,
        },
        768: {
          items: 3,
          slideBy: 2,
        },
        992: {
          items: 3,
          slideBy: 2,
        },
        1400: {
          items: 4,
          slideBy: 3,
        },
      },
    };
    return carouselOptions;
  }
  function s4() {
    alert(2222);
    const carouselOptions2 = {
      rtl: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      loop: true,
      dots: false,
      onInitialized: startProgressBar(),
      onTranslate: resetProgressBar(),
      onTranslated: startProgressBar(),
    };
    return carouselOptions2;
  }
  function startProgressBar() {
    // apply keyframe animation
    $(".slide-progress").css({
      width: "100%",
      transition: "width 5000ms",
    });
  }

  function resetProgressBar() {
    $(".slide-progress").css({
      width: 0,
      transition: "width 0s",
    });
  }
};

export default Slider;
