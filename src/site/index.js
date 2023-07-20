import React from "react";
import $ from 'jquery';
import Slider from "./slider";
// import { CC } from 'bootstrap-4-react';
// import OwlCarousel from 'react-owl-carousel';
// import OwlCarousel from 'react-owl-carousel2';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../site/assets/css/now-ui-kit.css";
import "../site/assets/css/plugins/owl.carousel.css";
import "../site/assets/css/plugins/owl.theme.default.min.css";
import "../site/assets/css/main.css";
import "../site/assets/fonts/font-awesome/css/font-awesome.min.css";
import { useEffect,useContext } from "react";
import MyCarousel from "./carousel";
import SliderContext from "./context/context";
import Navbar from "./navbar/navbar";
import Header from "./navbar/Header";
import Footer from "./footer/footer";
import ContentRight from "./content/contenRight";
import ContentLeft from "./content/ContentLeft";
import ContentSite from "./content";

const IndexSite = (props) => {
    const contextslider = useContext(SliderContext);
  useEffect(() => {
    require("../site/assets/js/now-ui-kit.js");
    require("../site/assets/js/main");
  }, []);
 
  return (
    <>
      {/*<body className="index-page sidebar-collapse">

{/* responsive-header */}
<Navbar/>
<ContentSite/>
      {/* responsive-header */}

      <div className="wrapper default">
        {/* header */}
        <Header/>
        {/* header */}

        <main className="main default">
          <div className="container">
            {/* banner */}
            <div className="row banner-ads">
              <div className="col-12">
                <section className="banner">
                  <a href="">
                    <img src="./assets/img/banner/banner.jpg" alt="" />
                  </a>
                </section>
              </div>
            </div>
            {/* banner */}
            <div className="row">
              <ContentRight/>
         <ContentLeft/>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="brand-slider card">
                  <header className="card-header">
                    <h3 className="card-title">
                      <span>برندهای ویژه</span>
                    </h3>
                  </header>
                  <div className="owl-carousel">
                    <div className="item">
                      <a href="">
                        <img src="./assets/img/brand/1076.png" alt="" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="">
                        <img src="./assets/img/brand/1078.png" alt="" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="">
                        <img src="./assets/img/brand/1080.png" alt="" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="">
                        <img src="./assets/img/brand/2315.png" alt="" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="">
                        <img src="./assets/img/brand/5189.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

       <Footer/>
      </div>
    </>
  );
};

export default IndexSite;
