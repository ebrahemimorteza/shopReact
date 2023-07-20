import NavbarItem from "./navbarItem";

const Navbar = () => {
    return ( 
        <>
        {/* responsive-header */}

      <nav className="navbar direction-ltr fixed-top header-responsive">
        <div className="container">
          <div className="navbar-translate">
            <a className="navbar-brand" href="#pablo">
              <img src="/assets/img/logo.png" height="24px" alt="" />
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
            <div className="search-nav default">
              <form action="">
                <input type="text" placeholder="جستجو ..." />
                <button type="submit">
                  <img src="./assets/img/search.png" alt="" />
                </button>
              </form>
              <ul>
                <li>
                  <a href="">
                    <i className="now-ui-icons users_single-02"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="now-ui-icons shopping_basket"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navigation"
          >
            <div className="logo-nav-res default text-center">
              <a href="">
                <img src="./assets/img/logo.png" height="36px" alt="" />
              </a>
            </div>
            <ul className="navbar-nav default">
              <li className="sub-menu">
              <NavbarItem targetPath={"/p1"} title={"کالای دیجیتال"}/>
                <ul>
                  <li className="sub-menu">
                  <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"}/>                   
                    <ul>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"کیف و کاور گوشی"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"پاوربانک"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"هندزفری،هدفون"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"پایه نگهدارنده گوشی"}/>
                      </li>
                    </ul>
                  </li>
                  <li className="sub-menu">
                  <NavbarItem targetPath={"/p1"} title={"موبایل"}/>
                    <ul>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={""}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"ایفون"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"هواوی"}/>
                      </li>
                    </ul>
                  </li>
                  <li>
                  <NavbarItem targetPath={"/p1"} title={"سلعت هوشمند"}/>
                  </li>
                  <li>
                  <NavbarItem targetPath={"/p1"} title={"اسپیکر"}/>
                  </li>
                  <li className="sub-menu">
                  <NavbarItem targetPath={"/p1"} title={"موبایل"}/>
                    <ul>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"اپل"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"ایسوس"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"اچ تی سی"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"ال جی"}/>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="sub-menu">
              <NavbarItem targetPath={"/p1"} title={"ارایش بهداشتی"}/>
                <ul>
                  <li className="sub-menu">
                  <NavbarItem targetPath={"/p1"} title={"لوازم جانبی"}/>
                    <ul>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"کیف گوشی"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"پاور بانک"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"هدفون"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"پایه نگهدارنده"}/>
                      </li>
                    </ul>
                  </li>
                  <li className="sub-menu">
                  <NavbarItem targetPath={"/p1"} title={"گوشی"}/>
                    <ul>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={""}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"ایفون"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"هواوی"}/>
                      </li>
                    </ul>
                  </li>
                  <li>
                  <NavbarItem targetPath={"/p1"} title={"ساعت هوشمند"}/>
                  </li>
                  <li>
                  <NavbarItem targetPath={"/p1"} title={"اسپیکر"}/>
                  </li>
                  <li className="sub-menu">
                  <NavbarItem targetPath={"/p1"} title={"موبایل"}/>
                    <ul>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"ال"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"ایسوس"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"اچ تی سی"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"ال جی"}/>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="sub-menu">
              <NavbarItem targetPath={"/p1"} title={"خودرو"}/>
                <ul>
                  <li className="sub-menu">
                  <NavbarItem targetPath={"/p1"} title={"لوارم گوشی"}/>
                    <ul>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"کیف گوشی"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"پاوربانک"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"هندزفری"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"پایه نگهداری"}/>
                      </li>
                    </ul>
                  </li>
                  <li className="sub-menu">
                  <NavbarItem targetPath={"/p1"} title={"گوشی موبایل"}/>
                    <ul>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={""}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={""}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"هاوایی"}/>
                      </li>
                    </ul>
                  </li>
                  <li>
                  <NavbarItem targetPath={"/p1"} title={"ساعت هوشمند"}/>
                  </li>
                  <li>
                  <NavbarItem targetPath={"/p1"} title={"اسپیکر"}/>
                  </li>
                  <li className="sub-menu">
                  <NavbarItem targetPath={"/p1"} title={"موبایل"}/>
                    <ul>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"اپل"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"ایسوس"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"اچ تی سی"}/>
                      </li>
                      <li>
                      <NavbarItem targetPath={"/p1"} title={"ال جی"}/>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
              <NavbarItem targetPath={"/p1"} title={"مد و پوشاک"}/>
              </li>
              <li>
              <NavbarItem targetPath={"/p1"} title={"خانه و اشپزخانه"}/>
              </li>
              <li>
                <NavbarItem targetPath={"/p1"} title={"کتاب"}/>
              </li>
              <li>
              <NavbarItem targetPath={"/p1"} title={"ورزش و سفر"}/>
                <a href="">ورزش و سفر</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* responsive-header */}
        </>
     );
}
 
export default Navbar;