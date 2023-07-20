import NavbarItem from "./navbarItem";

const Header = () => {
    return ( <>
        <header className="main-header default">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4 col-5">
                <div className="logo-area default">
                  <a href="">
                    <img src="/assets/img/logo.png" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 col-sm-8 col-7">
                <div className="search-area default">
                  <form action="" className="search">
                    <input
                      type="text"
                      placeholder="نام کالا، برند و یا دسته مورد نظر خود را جستجو کنید…"
                    />
                    <button type="submit">
                      <img src="./assets/img/search.png" alt="" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="user-login dropdown">
                  <a
                    href=""
                    className="btn btn-neutral dropdown-toggle"
                    data-toggle="dropdown"
                    id="navbarDropdownMenuLink1"
                  >
                    ورود / ثبت نام
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink1"
                  >
                    <div className="dropdown-item">
                      <a className="btn btn-info">ورود به دیجی کالا</a>
                    </div>
                    <div className="dropdown-item font-weight-bold">
                      <span>کاربر جدید هستید؟</span>{" "}
                      <a className="register" href="">
                        ثبت‌نام
                      </a>
                    </div>
                  </ul>
                </div>
                <div className="cart dropdown">
                  <a
                    href=""
                    className="btn dropdown-toggle"
                    data-toggle="dropdown"
                    id="navbarDropdownMenuLink1"
                  >
                    <i className="now-ui-icons shopping_cart-simple"></i>
                    سبد خرید
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink1"
                  >
                    <div className="basket-header">
                      <div className="basket-total">
                        <span>مبلغ کل خرید:</span>
                        <span> ۲۳,۵۰۰</span>
                        <span> تومان</span>
                      </div>
                      <a href="" className="basket-link">
                        <span>مشاهده سبد خرید</span>
                        <div className="basket-arrow"></div>
                      </a>
                    </div>
                    <ul className="basket-list">
                      <li>
                        <a href="" className="basket-item">
                          <button className="basket-item-remove"></button>
                          <div className="basket-item-content">
                            <div className="basket-item-image">
                              <img alt="" src="./assets/img/cart/2324935.jpg" />
                            </div>
                            <div className="basket-item-details">
                              <div className="basket-item-title">
                                هندزفری بلوتوث مدل S530
                              </div>
                              <div className="basket-item-params">
                                <div className="basket-item-props">
                                  <span> ۱ عدد</span>
                                  <span>رنگ مشکی</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <a href="" className="basket-submit">
                      ورود و ثبت سفارش
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav className="main-menu">
            <div className="container">
              <ul className="list float-right">
                <li className="list-item list-item-has-children mega-menu mega-menu-col-5">                 
                  <NavbarItem targetPath={"/p1"} title={"کالای دیجیتال"} classTarget={"nav-link"}/>
                  <ul className="sub-menu nav">
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>                      
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item list-item-has-children">
                          <i className="now-ui-icons arrows-1_minimal-left"></i>                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                          <ul className="sub-menu nav">
                            <li className="list-item">                              
                              <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                            </li>
                            <li className="list-item">                             
                              <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                            </li>
                          </ul>
                        </li>
                        <li className="list-item">
                          <i className="now-ui-icons arrows-1_minimal-left"></i>                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                        </li>
                        <li className="list-item">
                          <i className="now-ui-icons arrows-1_minimal-left"></i>                     
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>                     
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">                        
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                       
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>                      
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>                      
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                        
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>                     
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                        
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                       
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <img src="./assets/img/1636.png" alt="" />
                  </ul>
                </li>
                <li className="list-item list-item-has-children mega-menu mega-menu-col-5">                  
                  <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                  <ul className="sub-menu nav">
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>                      
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item list-item-has-children">
                          <i className="now-ui-icons arrows-1_minimal-left"></i>                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                          <ul className="sub-menu nav">
                            <li className="list-item">                             
                              <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                            </li>
                            <li className="list-item">                             
                              <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                            </li>
                          </ul>
                        </li>
                        <li className="list-item">
                          <i className="now-ui-icons arrows-1_minimal-left"></i>                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                        </li>
                        <li className="list-item">
                          <i className="now-ui-icons arrows-1_minimal-left"></i>                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>                      
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                        
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                        
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>                    
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">
                          <a className="nav-link" href="">
                            Apple
                          </a>
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>                      
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                       
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>                      
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">                        
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <img src="./assets/img/1636.png" alt="" />
                  </ul>
                </li>
                <li className="list-item list-item-has-children mega-menu mega-menu-col-5">                  
                  <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                  <ul className="sub-menu nav">
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>                      
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item list-item-has-children">
                          <i className="now-ui-icons arrows-1_minimal-left"></i>                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                          <ul className="sub-menu nav">
                            <li className="list-item">                             
                              <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                            </li>
                            <li className="list-item">                              
                              <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                            </li>
                          </ul>
                        </li>
                        <li className="list-item">
                          <i className="now-ui-icons arrows-1_minimal-left"></i>                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                        </li>
                        <li className="list-item">
                          <i className="now-ui-icons arrows-1_minimal-left"></i>                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>                      
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"main-list-item nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>                      
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                          
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>                     
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">                        
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                       
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                         
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">                     
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item list-item-has-children">
                      <i className="now-ui-icons arrows-1_minimal-left"></i>
                      <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                      <ul className="sub-menu nav">
                        <li className="list-item">
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                        <li className="list-item">
                          <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                        </li>
                      </ul>
                    </li>
                    <img src="./assets/img/1636.png" alt="" />
                  </ul>
                </li>
                <li className="list-item">         
                  <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                </li>
                <li className="list-item">                
                  <NavbarItem targetPath={"/p1"} title={"لوازم جانبی گوشی"} classTarget={"nav-link"}/>
                </li>
                <li className="list-item">                 
                  <NavbarItem targetPath={"/p1"} title={"کتاب،لوازم تحریر"} classTarget={"nav-link"}/>
                </li>
                <li className="list-item">                 
                  <NavbarItem targetPath={"/p1"} title={"ورزش و سفر"} classTarget={"nav-link"}/>
                </li>
                <li className="list-item">                
                  <NavbarItem targetPath={"/p1"} title={"وسایل نقلیه و صنعتی"} classTarget={"nav-link"}/>
                </li>
                <li className="list-item amazing-item">                  
                  <NavbarItem targetPath={"/p1"} title={"شگفت‌انگیزها"} classTarget={"nav-link"}/>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        
        </> );
}
 
export default Header;