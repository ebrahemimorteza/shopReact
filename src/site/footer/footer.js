const Footer = () => {
    return ( 
        <>
        <footer className="main-footer default">
          <div className="back-to-top">
            <a href="">
              <span className="icon">
                <i className="now-ui-icons arrows-1_minimal-up"></i>
              </span>{" "}
              <span>بازگشت به بالا</span>
            </a>
          </div>
          <div className="container">
            <div className="footer-services">
              <div className="row">
                <div className="service-item col">
                  <a href="" target="_blank">
                    <img src="./assets/img/svg/delivery.svg" />
                  </a>
                  <p>تحویل اکسپرس</p>
                </div>
                <div className="service-item col">
                  <a href="" target="_blank">
                    <img src="./assets/img/svg/contact-us.svg" />
                  </a>
                  <p>پشتیبانی 24 ساعته</p>
                </div>
                <div className="service-item col">
                  <a href="" target="_blank">
                    <img src="./assets/img/svg/payment-terms.svg" />
                  </a>
                  <p>پرداخت درمحل</p>
                </div>
                <div className="service-item col">
                  <a href="" target="_blank">
                    <img src="./assets/img/svg/return-policy.svg" />
                  </a>
                  <p>۷ روز ضمانت بازگشت</p>
                </div>
                <div className="service-item col">
                  <a href="" target="_blank">
                    <img src="./assets/img/svg/origin-guarantee.svg" />
                  </a>
                  <p>ضمانت اصل بودن کالا</p>
                </div>
              </div>
            </div>
            <div className="footer-widgets">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="widget-menu widget card">
                    <header className="card-header">
                      <h3 className="card-title">راهنمای خرید از دیجی کالا</h3>
                    </header>
                    <ul className="footer-menu">
                      <li>
                        <a href="">نحوه ثبت سفارش</a>
                      </li>
                      <li>
                        <a href="">رویه ارسال سفارش</a>
                      </li>
                      <li>
                        <a href="">شیوه‌های پرداخت</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="widget-menu widget card">
                    <header className="card-header">
                      <h3 className="card-title">خدمات مشتریان</h3>
                    </header>
                    <ul className="footer-menu">
                      <li>
                        <a href="">پاسخ به پرسش‌های متداول</a>
                      </li>
                      <li>
                        <a href="">رویه‌های بازگرداندن کالا</a>
                      </li>
                      <li>
                        <a href="">شرایط استفاده</a>
                      </li>
                      <li>
                        <a href="">حریم خصوصی</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="widget-menu widget card">
                    <header className="card-header">
                      <h3 className="card-title">با دیجی کالا</h3>
                    </header>
                    <ul className="footer-menu">
                      <li>
                        <a href="">فروش در دیجی کالا</a>
                      </li>
                      <li>
                        <a href="">همکاری با سازمان‌ها</a>
                      </li>
                      <li>
                        <a href="">فرصت‌های شغلی</a>
                      </li>
                      <li>
                        <a href="">تماس با دیجی کالا</a>
                      </li>
                      <li>
                        <a href="">درباره دیجی کالا</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="newsletter">
                    <p>از تخفیف‌ها و جدیدترین‌های فروشگاه باخبر شوید:</p>
                    <form action="">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="آدرس ایمیل خود را وارد کنید..."
                      />
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="ارسال"
                      />
                    </form>
                  </div>
                  <div className="socials">
                    <p>ما را در شبکه های اجتماعی دنبال کنید.</p>
                    <div className="footer-social">
                      <a href="" target="_blank">
                        <i className="fa fa-instagram"></i>اینستاگرام دیجی کالا
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="info">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <span>
                    هفت روز هفته ، 24 ساعت شبانه‌روز پاسخگوی شما هستیم.
                  </span>
                </div>
                <div className="col-12 col-lg-2">شماره تماس: 021-123456789</div>
                <div className="col-12 col-lg-2">
                  آدرس ایمیل:<a href="">info@digikala.com</a>
                </div>
                <div className="col-12 col-lg-4 text-center">
                  <a href="" target="_blank">
                    <img
                      src="./assets/img/bazzar.png"
                      width="159"
                      height="48"
                      alt=""
                    />
                  </a>
                  <a href="" target="_blank">
                    <img
                      src="./assets/img/sibapp.png"
                      width="159"
                      height="48"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="description">
            <div className="container">
              <div className="row">
                <div className="site-description col-12 col-lg-7">
                  <h1 className="site-title">
                    فروشگاه اینترنتی دیجی کالا، بررسی، انتخاب و خرید آنلاین
                  </h1>
                  <p>
                    دیجی کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با
                    بیش از یک دهه تجربه، با پایبندی به سه اصل کلیدی، پرداخت در
                    محل، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا، موفق شده
                    تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه
                    اینترنتی ایران تبدیل شود. به محض ورود به دیجی کالا با یک
                    سایت پر از کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و به
                    ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.
                  </p>
                </div>
                <div className="symbol col-12 col-lg-5">
                  <a href="" target="_blank">
                    <img src="./assets/img/symbol-01.png" alt="" />
                  </a>
                  <a href="" target="_blank">
                    <img src="./assets/img/symbol-02.png" alt="" />
                  </a>
                </div>
                <div className="col-12">
                  <div className="row">
                    <ul className="footer-partners default">
                      <li className="col-md-3 col-sm-6">
                        <a href="">
                          <img src="./assets/img/footer/1.svg" alt="" />
                        </a>
                      </li>
                      <li className="col-md-3 col-sm-6">
                        <a href="">
                          <img src="./assets/img/footer/2.svg" alt="" />
                        </a>
                      </li>
                      <li className="col-md-3 col-sm-6">
                        <a href="">
                          <img src="./assets/img/footer/3.svg" alt="" />
                        </a>
                      </li>
                      <li className="col-md-3 col-sm-6">
                        <a href="">
                          <img src="./assets/img/footer/4.svg" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <p>
                استفاده از مطالب فروشگاه اینترنتی دیجی کالا فقط برای مقاصد
                غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به
                شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی کالا) می‌باشد.
              </p>
            </div>
          </div>
        </footer>
        </>
     );
}
 
export default Footer;