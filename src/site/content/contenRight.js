import { useContext } from "react";
import MyCarousel from "../carousel";
import SliderContext from "../context/context";

const ContentRight = () => {
    const contextslider = useContext(SliderContext);
    return ( 
        <>
        <aside className="sidebar col-12 col-lg-3 order-2 order-lg-1">
                <div className="sidebar-inner default">
                  <div className="widget-banner widget card">
                    <a href="" target="_top">
                      <img
                        className="img-fluid"
                        src="./assets/img/banner/1455.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="widget-services widget card">
                    <div className="row">
                      <div className="feature-item col-12">
                        <a href="" target="_blank">
                          <img src="./assets/img/svg/return-policy.svg" />
                        </a>
                        <p>ضمانت برگشت</p>
                      </div>
                      <div className="feature-item col-6">
                        <a href="" target="_blank">
                          <img src="./assets/img/svg/payment-terms.svg" />
                        </a>
                        <p>پرداخت درمحل</p>
                      </div>
                      <div className="feature-item col-6">
                        <a href="" target="_blank">
                          <img src="./assets/img/svg/delivery.svg" />
                        </a>
                        <p>تحویل اکسپرس</p>
                      </div>
                      <div className="feature-item col-6">
                        <a href="" target="_blank">
                          <img src="./assets/img/svg/origin-guarantee.svg" />
                        </a>
                        <p>تضمین بهترین قیمت</p>
                      </div>
                      <div className="feature-item col-6">
                        <a href="" target="_blank">
                          <img src="./assets/img/svg/contact-us.svg" />
                        </a>
                        <p>پشتیبانی 24 ساعته</p>
                      </div>
                    </div>
                  </div>
                  <div className="widget-suggestion widget card">
                    <header className="card-header">
                      <h3 className="card-title">پیشنهاد لحظه ای</h3>
                    </header>
                    <div id="progressBar">
                      <div className="slide-progress"></div>
                    </div>
                    <div
                      id="suggestion-slider"
                      className=" owl-theme"
                    >
                        <MyCarousel
                        items={contextslider.carouselItems2}
                        options={contextslider.carouselOptions2}
                        />
                    </div>
                  </div>
                  <div className="widget-banner widget card">
                    <a href="" target="_blank">
                      <img
                        className="img-fluid"
                        src="./assets/img/banner/1000001422.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="widget-banner widget card">
                    <a href="" target="_blank">
                      <img
                        className="img-fluid"
                        src="./assets/img/banner/side-banner-01.jpeg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="widget-banner widget card">
                    <a href="" target="_top">
                      <img
                        className="img-fluid"
                        src="./assets/img/banner/1000001322.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="widget-banner widget card">
                    <a href="" target="_blank">
                      <img
                        className="img-fluid"
                        src="./assets/img/banner/1000001442.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="widget-banner widget card">
                    <a href="" target="_blank">
                      <img
                        className="img-fluid"
                        src="./assets/img/banner/8d546388-29d7-4733-871f-2d84a3012cc227_21_1_6.jpeg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="widget-banner widget card">
                    <a href="" target="_blank">
                      <img
                        className="img-fluid"
                        src="./assets/img/banner/1000001422.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </aside></>
     );
}
 
export default ContentRight;