import { useContext } from "react";
import MyCarousel from "../carousel";
import SliderContext from "../context/context";

const ContentLeft = () => {
  const contextslider = useContext(SliderContext);
    return ( 
        <>
        <div className="col-12 col-lg-9 order-1 order-lg-2">
                <section
                  id="main-slider"
                  className="carousel slide carousel-fade card"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#main-slider"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#main-slider" data-slide-to="1"></li>
                    <li data-target="#main-slider" data-slide-to="2"></li>
                    <li data-target="#main-slider" data-slide-to="3"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <a className="d-block" href="">
                        <img
                          src="./assets/img/slider/22f48d8e-6a8f-431c-985d-76ab0e1e59405_21_1_1.jpg"
                          className="d-block w-100"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="d-block" href="">
                        <img
                          src="./assets/img/slider/a264d696-9c12-4dd9-bdc1-12c13a3632b329_21_1_1.jpg"
                          className="d-block w-100"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="d-block" href="">
                        <img
                          src="./assets/img/slider/c0a50594-df40-412b-84f8-c7d6872fb83620_21_1_1.jpg"
                          className="d-block w-100"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="d-block" href="">
                        <img
                          src="./assets/img/slider/d1844e92-e5a9-4aef-8ea7-49be936422ca6_21_1_1.jpg"
                          className="d-block w-100"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#main-slider"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#main-slider"
                    data-slide="next"
                  >
                    <i className="now-ui-icons arrows-1_minimal-left"></i>
                  </a>
                </section>
                <section
                  id="amazing-slider"
                  className="carousel slide carousel-fade card"
                  data-ride="carousel"
                >
                  <div className="row m-0">
                    <ol className="carousel-indicators pr-0 d-flex flex-column col-lg-3">
                      <li
                        className="active"
                        data-target="#amazing-slider"
                        data-slide-to="0"
                      >
                        <span>لپ تاپ INSPIRON</span>
                      </li>
                      <li
                        data-target="#amazing-slider"
                        data-slide-to="1"
                        className=""
                      >
                        <span>دل مدل 5471</span>
                      </li>
                      <li
                        data-target="#amazing-slider"
                        data-slide-to="2"
                        className=""
                      >
                        <span>لپ تاپ ۱۵ اینچی</span>
                      </li>
                      <li
                        data-target="#amazing-slider"
                        data-slide-to="3"
                        className=""
                      >
                        <span>۱۵ اینچی دل</span>
                      </li>
                      <li
                        data-target="#amazing-slider"
                        data-slide-to="4"
                        className=""
                      >
                        <span>لنوو مدل 310</span>
                      </li>
                      <li
                        data-target="#amazing-slider"
                        data-slide-to="5"
                        className=""
                      >
                        <span>لپ تاپ لنوو</span>
                      </li>
                      <li data-target="#amazing-slider" data-slide-to="6">
                        <span>لپ تاپ ۱۵ اینچی</span>
                      </li>
                      <li data-target="#amazing-slider" data-slide-to="7">
                        <span>لپ تاپ ایسوس</span>
                      </li>
                      <li data-target="#amazing-slider" data-slide-to="8">
                        <span>ایسوس مدل A540UP - F</span>
                      </li>
                      <li className="view-all">
                        <a
                          href=""
                          className="btn btn-primary btn-block hvr-sweep-to-left"
                        >
                          <i className="fa fa-arrow-left"></i>مشاهده همه شگفت
                          انگیزها
                        </a>
                      </li>
                    </ol>
                    <div className="carousel-inner p-0 col-12 col-lg-9">
                      <img
                        className="amazing-title"
                        src="./assets/img/amazing-slider/amazing-title-01.png"
                        alt=""
                      />
                      <div className="carousel-item active">
                        <div className="row m-0">
                          <div className="right-col col-5 d-flex align-items-center">
                            <a className="w-100 text-center" href="">
                              <img
                                src="./assets/img/amazing-slider/60eb20-200x200.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="left-col col-7">
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
                              <span className="discount-percent">
                                3 % تخفیف
                              </span>
                            </div>
                            <h2 className="product-title">
                              <a href="">
                                {" "}
                                لپ تاپ ۱۱٫۶ اینچی دل مدل INSPIRON 3168 -AC B{" "}
                              </a>
                            </h2>
                            <ul className="list-group">
                              <li className="list-group-item">رنگ: مشکی</li>
                              <li className="list-group-item">160 گیگابایت</li>
                            </ul>
                            <hr />
                            <div
                              className="countdown-timer"
                              data-date="05 02 2019 20:20:22"
                            >
                              <span data-days>0</span>:<span data-hours>0</span>
                              :<span data-minutes>0</span>:
                              <span data-seconds>0</span>
                            </div>
                            <div className="timer-title">
                              زمان باقی مانده تا پایان سفارش
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row m-0">
                          <div className="right-col col-5 d-flex align-items-center">
                            <a className="w-100 text-center" href="">
                              <img
                                src="./assets/img/amazing-slider/4ff777-200x200.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="left-col col-7">
                            <div className="price">
                              <del>
                                <span>
                                  6,890,000<span>تومان</span>
                                </span>
                              </del>
                              <ins>
                                <span>
                                  6,580,000<span>تومان</span>
                                </span>
                              </ins>
                              <span className="discount-percent">
                                6 % تخفیف
                              </span>
                            </div>
                            <h2 className="product-title">
                              <a href="">
                                {" "}
                                لپ تاپ ۱۴ اینچی دل مدل vostro 5471{" "}
                              </a>
                            </h2>
                            <ul className="list-group">
                              <li className="list-group-item">
                                رنگ: نوک مدادی
                              </li>
                              <li className="list-group-item">120 گیگابایت</li>
                            </ul>
                            <hr />
                            <div
                              className="countdown-timer"
                              data-date="05 02 2019 20:20:22"
                            >
                              <span data-days>0</span>:<span data-hours>0</span>
                              :<span data-minutes>0</span>:
                              <span data-seconds>0</span>
                            </div>
                            <div className="timer-title">
                              زمان باقی مانده تا پایان سفارش
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row m-0">
                          <div className="right-col col-5 d-flex align-items-center">
                            <a className="w-100 text-center" href="">
                              <img
                                src="./assets/img/amazing-slider/35a2b8-200x200.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="left-col col-7">
                            <div className="price">
                              <del>
                                <span>
                                  4,799,000<span>تومان</span>
                                </span>
                              </del>
                              <ins>
                                <span>
                                  4,699,000<span>تومان</span>
                                </span>
                              </ins>
                              <span className="discount-percent">
                                2 % تخفیف
                              </span>
                            </div>
                            <h2 className="product-title">
                              <a href="">
                                {" "}
                                لپ تاپ ۱۵ اینچی دل مدل Latitude 5580{" "}
                              </a>
                            </h2>
                            <ul className="list-group">
                              <li className="list-group-item">
                                10 گیگابایت رم
                              </li>
                              <li className="list-group-item">
                                صفحه نمایش لمسی:خیر
                              </li>
                            </ul>
                            <hr />
                            <div
                              className="countdown-timer"
                              data-date="05 02 2019 20:20:22"
                            >
                              <span data-days>0</span>:<span data-hours>0</span>
                              :<span data-minutes>0</span>:
                              <span data-seconds>0</span>
                            </div>
                            <div className="timer-title">
                              زمان باقی مانده تا پایان سفارش
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item  finished">
                        <div className="row m-0">
                          <div className="right-col col-5 d-flex align-items-center">
                            <a className="w-100 text-center" href="">
                              <img
                                src="./assets/img/amazing-slider/c8297f-200x200.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="left-col col-7">
                            <div className="price">
                              <del>
                                <span>
                                  8,999,000<span>تومان</span>
                                </span>
                              </del>
                              <ins>
                                <span>
                                  8,899,000<span>تومان</span>
                                </span>
                              </ins>
                              <span className="discount-percent">
                                1 % تخفیف
                              </span>
                            </div>
                            <h2 className="product-title">
                              <a href="">
                                {" "}
                                لپ تاپ ۱۵ اینچی دل مدل INSPIRON 7577 – D{" "}
                              </a>
                            </h2>
                            <ul className="list-group">
                              <li className="list-group-item">160 گیگابایت</li>
                              <li className="list-group-item">
                                پردازنده: Intel
                              </li>
                            </ul>
                            <hr />
                            <a href="" className="finished btn">
                              {" "}
                              تمام شد{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item  finished">
                        <div className="row m-0">
                          <div className="right-col col-5 d-flex align-items-center">
                            <a className="w-100 text-center" href="">
                              <img
                                src="./assets/img/amazing-slider/36855a-200x200.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="left-col col-7">
                            <div className="price">
                              <del>
                                <span>
                                  3,600,000<span>تومان</span>
                                </span>
                              </del>
                              <ins>
                                <span>
                                  3,490,000<span>تومان</span>
                                </span>
                              </ins>
                              <span className="discount-percent">
                                3 % تخفیف
                              </span>
                            </div>
                            <h2 className="product-title">
                              <a href="">
                                {" "}
                                لپ تاپ ۱۵ اینچی لنوو مدل Ideapad 310 – O{" "}
                              </a>
                            </h2>
                            <ul className="list-group">
                              <li className="list-group-item">رنگ: مشکی</li>
                              <li className="list-group-item">
                                رم: 12 گیگابایت
                              </li>
                            </ul>
                            <hr />
                            <a href="" className="finished btn">
                              {" "}
                              تمام شد{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row m-0">
                          <div className="right-col col-5 d-flex align-items-center">
                            <a className="w-100 text-center" href="">
                              <img
                                src="./assets/img/amazing-slider/0e6809-200x200.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="left-col col-7">
                            <div className="price">
                              <del>
                                <span>
                                  4,160,000;<span>تومان</span>
                                </span>
                              </del>
                              <ins>
                                <span>
                                  4,090,000<span>تومان</span>
                                </span>
                              </ins>
                              <span className="discount-percent">
                                2 % تخفیف
                              </span>
                            </div>
                            <h2 className="product-title">
                              <a href="">
                                {" "}
                                لپ تاپ ۱۵ اینچی لنوو مدل Ideapad 520 – F{" "}
                              </a>
                            </h2>
                            <ul className="list-group">
                              <li className="list-group-item">
                                پردازنده: NVIDIA
                              </li>
                              <li className="list-group-item">
                                حافظه: 160 گیگابایت
                              </li>
                            </ul>
                            <hr />
                            <div
                              className="countdown-timer"
                              data-date="05 02 2019 20:20:22"
                            >
                              <span data-days>0</span>:<span data-hours>0</span>
                              :<span data-minutes>0</span>:
                              <span data-seconds>0</span>
                            </div>
                            <div className="timer-title">
                              زمان باقی مانده تا پایان سفارش
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item  finished">
                        <div className="row m-0">
                          <div className="right-col col-5 d-flex align-items-center">
                            <a className="w-100 text-center" href="">
                              <img
                                src="./assets/img/amazing-slider/2d71f4-200x200.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="left-col col-7">
                            <div className="price">
                              <del>
                                <span>
                                  2,390,000<span>تومان</span>
                                </span>
                              </del>
                              <ins>
                                <span>
                                  2,320,000<span>تومان</span>
                                </span>
                              </ins>
                              <span className="discount-percent">
                                3 % تخفیف
                              </span>
                            </div>
                            <h2 className="product-title">
                              <a href="">
                                {" "}
                                لپ تاپ ۱۵ اینچی لنوو مدل Ideapad V310 – S{" "}
                              </a>
                            </h2>
                            <ul className="list-group">
                              <li className="list-group-item">
                                صفحه نمایش لمسی: خیر
                              </li>
                              <li className="list-group-item">
                                پردازنده: Intel
                              </li>
                            </ul>
                            <hr />
                            <a href="" className="finished btn">
                              {" "}
                              تمام شد{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row m-0">
                          <div className="right-col col-5 d-flex align-items-center">
                            <a className="w-100 text-center" href="">
                              <img
                                src="./assets/img/amazing-slider/59fc05-200x200.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="left-col col-7">
                            <div className="price">
                              <del>
                                <span>
                                  5,485,000<span>تومان</span>
                                </span>
                              </del>
                              <ins>
                                <span>
                                  5,380,000<span>تومان</span>
                                </span>
                              </ins>
                              <span className="discount-percent">
                                2 % تخفیف
                              </span>
                            </div>
                            <h2 className="product-title">
                              <a href="">
                                {" "}
                                لپ تاپ ۱۵ اینچی ایسوس مدل VivoBook Flip TP510UQ
                                – C
                              </a>
                            </h2>
                            <ul className="list-group">
                              <li className="list-group-item">
                                حافظه: 160 گیگابایت
                              </li>
                              <li className="list-group-item">رنگ: نقره ای</li>
                            </ul>
                            <hr />
                            <div
                              className="countdown-timer"
                              data-date="05 02 2019 20:20:22"
                            >
                              <span data-days>0</span>:<span data-hours>0</span>
                              :<span data-minutes>0</span>:
                              <span data-seconds>0</span>
                            </div>
                            <div className="timer-title">
                              زمان باقی مانده تا پایان سفارش
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row m-0">
                          <div className="right-col col-5 d-flex align-items-center">
                            <a className="w-100 text-center" href="">
                              <img
                                src="./assets/img/amazing-slider/8eb96c-200x200.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="left-col col-7">
                            <div className="price">
                              <del>
                                <span>
                                  2,755,000<span>تومان</span>
                                </span>
                              </del>
                              <ins>
                                <span>
                                  2,565,000<span>تومان</span>
                                </span>
                              </ins>
                              <span className="discount-percent">
                                8 % تخفیف
                              </span>
                            </div>
                            <h2 className="product-title">
                              <a href="">
                                {" "}
                                لپ تاپ ۱۵ اینچی ایسوس مدل A540UP – F{" "}
                              </a>
                            </h2>
                            <ul className="list-group">
                              <li className="list-group-item">رنگ: خاکستری</li>
                              <li className="list-group-item">
                                رم: 16 گیگابایت
                              </li>
                            </ul>
                            <hr />
                            <div
                              className="countdown-timer"
                              data-date="05 02 2019 20:20:22"
                            >
                              <span data-days>0</span>:<span data-hours>0</span>
                              :<span data-minutes>0</span>:
                              <span data-seconds>0</span>
                            </div>
                            <div className="timer-title">
                              زمان باقی مانده تا پایان سفارش
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="row" id="amazing-slider-responsive">
                  <div className="col-12">
                    <div className="widget widget-product card">
                      <header className="card-header">
                        <img
                          src="./assets/img/amazing-slider/amazing-title-01.png"
                          width="150px"
                          alt=""
                        />
                        <a href="" className="view-all">
                          مشاهده همه
                        </a>
                      </header>
                      <div className="product-carousel owl-carousel owl-theme">
                        <div className="item">
                          <a href="">
                            <img
                              src="./assets/img/product-slider/60eb20-200x200.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          <h2 className="post-title">
                            <a href="">
                              لپ تاپ ۱۱٫۶ اینچی دل مدل INSPIRON 3168 -AC B
                            </a>
                          </h2>
                          <div className="price">
                            <ins>
                              <span>
                                4,180,000<span>تومان</span>
                              </span>
                            </ins>
                          </div>
                          <hr />
                          <div
                            className="countdown-timer"
                            data-date="05 02 2019 20:20:22"
                          >
                            <span data-days>0</span>:<span data-hours>0</span>:
                            <span data-minutes>0</span>:
                            <span data-seconds>0</span>
                          </div>
                        </div>
                        <div className="item">
                          <a href="">
                            <img
                              src="./assets/img/product-slider/4ff777-200x200.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          <h2 className="post-title">
                            <a href="">لپ تاپ ۱۴ اینچی دل مدل vostro 5471</a>
                          </h2>
                          <div className="price">
                            <ins>
                              <span>
                                6,580,000<span>تومان</span>
                              </span>
                            </ins>
                          </div>
                          <hr />
                          <div
                            className="countdown-timer"
                            data-date="05 02 2019 20:20:22"
                          >
                            <span data-days>0</span>:<span data-hours>0</span>:
                            <span data-minutes>0</span>:
                            <span data-seconds>0</span>
                          </div>
                        </div>
                        <div className="item">
                          <a href="">
                            <img
                              src="./assets/img/product-slider/35a2b8-200x200.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          <h2 className="post-title">
                            <a href="">لپ تاپ ۱۵ اینچی دل مدل Latitude 5580</a>
                          </h2>
                          <div className="price">
                            <ins>
                              <span>
                                4,699,000<span>تومان</span>
                              </span>
                            </ins>
                          </div>
                          <hr />
                          <div
                            className="countdown-timer"
                            data-date="05 02 2019 20:20:22"
                          >
                            <span data-days>0</span>:<span data-hours>0</span>:
                            <span data-minutes>0</span>:
                            <span data-seconds>0</span>
                          </div>
                        </div>
                        <div className="item">
                          <a href="">
                            <img
                              src="./assets/img/product-slider/9b3da9-200x200.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          <h2 className="post-title">
                            <a href="">
                              لپ تاپ ۱۵ اینچی دل مدل INSPIRON 15-3567 - I
                            </a>
                          </h2>
                          <div className="price">
                            <ins>
                              <span>
                                2,780,000<span>تومان</span>
                              </span>
                            </ins>
                          </div>
                          <hr />
                          <div
                            className="countdown-timer"
                            data-date="05 02 2019 20:20:22"
                          >
                            <span data-days>0</span>:<span data-hours>0</span>:
                            <span data-minutes>0</span>:
                            <span data-seconds>0</span>
                          </div>
                        </div>
                        <div className="item">
                          <a href="">
                            <img
                              src="./assets/img/product-slider/c8297f-200x200.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          <h2 className="post-title">
                            <a href="">
                              لپ تاپ ۱۵ اینچی دل مدل INSPIRON 7577 - D
                            </a>
                          </h2>
                          <div className="price">
                            <ins>
                              <span>
                                8,899,000<span>تومان</span>
                              </span>
                            </ins>
                          </div>
                          <hr />
                          <div
                            className="countdown-timer"
                            data-date="05 02 2019 20:20:22"
                          >
                            <span data-days>0</span>:<span data-hours>0</span>:
                            <span data-minutes>0</span>:
                            <span data-seconds>0</span>
                          </div>
                        </div>
                        <div className="item">
                          <a href="">
                            <img
                              src="./assets/img/product-slider/a579bb-200x200.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          <h2 className="post-title">
                            <a href="">
                              لپ تاپ ۱۵ اینچی دل مدل Inspiron 15-5570 - B
                            </a>
                          </h2>
                          <div className="price">
                            <ins>
                              <span>
                                4,279,000<span>تومان</span>
                              </span>
                            </ins>
                          </div>
                          <hr />
                          <div
                            className="countdown-timer"
                            data-date="05 02 2019 20:20:22"
                          >
                            <span data-days>0</span>:<span data-hours>0</span>:
                            <span data-minutes>0</span>:
                            <span data-seconds>0</span>
                          </div>
                        </div>
                        <div className="item">
                          <a href="">
                            <img
                              src="./assets/img/product-slider/19a2cc-200x200.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          <h2 className="post-title">
                            <a href="">لپ تاپ ۱۵ اینچی دل مدل XPS 15-9560</a>
                          </h2>
                          <div className="price">
                            <ins>
                              <span>
                                18,450,000<span>تومان</span>
                              </span>
                            </ins>
                          </div>
                          <hr />
                          <div
                            className="countdown-timer"
                            data-date="05 02 2019 20:20:22"
                          >
                            <span data-days>0</span>:<span data-hours>0</span>:
                            <span data-minutes>0</span>:
                            <span data-seconds>0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row banner-ads">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6 col-lg-3">
                        <div className="widget-banner card">
                          <a href="" target="_blank">
                            <img
                              className="img-fluid"
                              src="./assets/img/banner/banner-1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-6 col-lg-3">
                        <div className="widget-banner card">
                          <a href="" target="_top">
                            <img
                              className="img-fluid"
                              src="./assets/img/banner/banner-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-6 col-lg-3">
                        <div className="widget-banner card">
                          <a href="" target="_top">
                            <img
                              className="img-fluid"
                              src="./assets/img/banner/banner-3.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-6 col-lg-3">
                        <div className="widget-banner card">
                          <a href="" target="_top">
                            <img
                              className="img-fluid"
                              src="./assets/img/banner/banner-4.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="widget widget-product card">
                      <header className="card-header">
                        <h3 className="card-title">
                          <span>کامپیوتر و لوازم جانبی</span>
                        </h3>
                        <a href="" className="view-all">
                          مشاهده همه
                        </a>
                      </header>
                      <div className="product-carousel owl-theme">
                        <MyCarousel
                        items={contextslider.carouselItems}
                        options={contextslider.carouselOptions}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="widget widget-product card">
                      <header className="card-header">
                        <h3 className="card-title">
                          <span>کامپیوتر و لوازم جانبی</span>
                        </h3>
                        <a href="" className="view-all">
                          مشاهده همه
                        </a>
                      </header>
                      <div className="product-carousel  owl-theme">
                        <MyCarousel
                        items={contextslider.carouselItems}
                        options={contextslider.carouselOptions}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row banner-ads">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <div className="widget-banner card">
                          <a href="" target="_blank">
                            <img
                              className="img-fluid"
                              src="./assets/img/banner/banner-9.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="widget-banner card">
                          <a href="" target="_top">
                            <img
                              className="img-fluid"
                              src="./assets/img/banner/banner-10.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="widget widget-product card">
                      <header className="card-header">
                        <h3 className="card-title">
                          <span>کامپیوتر و لوازم جانبی</span>
                        </h3>
                        <a href="" className="view-all">
                          مشاهده همه
                        </a>
                      </header>
                      <div className="product-carousel  owl-theme">
                        <MyCarousel
                        items={contextslider.carouselItems}
                        options={contextslider.carouselOptions}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="widget widget-product card">
                      <header className="card-header">
                        <h3 className="card-title">
                          <span>کامپیوتر و لوازم جانبی</span>
                        </h3>
                        <a href="" className="view-all">
                          مشاهده همه
                        </a>
                      </header>
                      <div className="product-carousel  owl-theme">
                        <MyCarousel
                        items={contextslider.carouselItems}
                        options={contextslider.carouselOptions}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row banner-ads">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12">
                        <div className="widget widget-banner card">
                          <a href="" target="_blank">
                            <img
                              className="img-fluid"
                              src="./assets/img/banner/banner-11.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="widget widget-product card">
                      <header className="card-header">
                        <h3 className="card-title">
                          <span>کامپیوتر و لوازم جانبی</span>
                        </h3>
                        <a href="" className="view-all">
                          مشاهده همه
                        </a>
                      </header>
                      <div className="product-carousel  owl-theme">
                        <MyCarousel
                          items={contextslider.carouselItems}
                          options={contextslider.carouselOptions}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </>
     );
}
 
export default ContentLeft;