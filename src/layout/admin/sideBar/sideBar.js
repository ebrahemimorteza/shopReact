import { useContext } from "react";
import AdminContextContainer, { AdminContext } from "../../../context/AdminContext";
import Avatar from "./Avatar";
import SideBarGroupTitle from "./sideBarGroupTitle";
import SidebarItem from "./SidebarItem";
const SideBar = () => {
    const {showSidebar}=useContext(AdminContext)
    return ( 
        <div>
        <section id="sidebar_section">
        <div className={`mini_sidebar collapsedd bg-dark h-100 ${showSidebar ? "expanded" : null}`}>
            <div className="p-0 m-0">
           {/* <Avatar name={'morteza'} imgPath={"/assets/images/avatar/user2.jpg"}/>    */}        
           {/*<!-- =================================== -->*/}
           <SideBarGroupTitle title="مدیریت محتوای سازمانی"/>
           <SidebarItem  targetPath={"/dashbord"} title={"داشبورد"} icon={"fas fa-tachometer-alt"}/>
                <SidebarItem targetPath={"/category_gallery"} title={"دسته بندی تصاویر"} icon={"fas fa-cube"}/>
                <SidebarItem targetPath={"/gallery"} title={"مدیریت تصاویر"} icon={"fas fa-stream"}/>
                <SideBarGroupTitle title="فروشگاه و محصولات"/>
                <SidebarItem targetPath={"/category"} title={"مدیریت گروه محصول"} icon={"fas fa-stream"}/>
                <SidebarItem targetPath={"/product"} title={"مدیریت محصول"} icon={"fas fa-cube"}/>
                <SidebarItem targetPath={"/factor"} title={"مدیریت فاکتور ها"} icon={"fas fa-copyright"}/>
                <SidebarItem targetPath={"/payment"} title={"مدیریت پرداخت ها"} icon={"fab fa-pagelines"}/>
                   
                {/*<!-- =================================== -->*/}
                <SideBarGroupTitle title="سفارشات و سبد"/>
                <SidebarItem targetPath={"/orders"} title={"مدیریت سفارشات"} icon={"fas fa-luggage-cart"}/>
                <SidebarItem targetPath={"/ordersSend"} title={"مدیریت نحوه ارسال"} icon={"fas fa-truck-loading"}/>
             
                {/*<!-- =================================== -->*/}
                <SideBarGroupTitle title="مدیریت کاربران"/>
                <SidebarItem targetPath={"/users"} title={"مشاهده کاربران"} icon={"fas fa-users"}/>
                <SidebarItem targetPath={"/role"} title={"نقش ها"} icon={"fas fa-user-tag"}/>
    
              {/*  <!-- =================================== -->*/}
              <SideBarGroupTitle title="پیام ها"/>
              <SidebarItem targetPath={"/message"} title={"پیام های دریافتی"} icon={"fas fa-users"}/>
              <SideBarGroupTitle title="تنظیمات"/>
              <SidebarItem targetPath={"/sittings"} title={"تنظیمات"} icon={"fas fa-users"}/>

                <li className="py-2 btn-group dropstart pe-4">
                    <i className="ms-3 icon fas fa-check text-light"></i>
                    <span className="hiddenable" data-bs-toggle="dropdown" aria-expanded="false">داشبورد</span>
                    
                    <ul className="dropdown-menu px-2 sidebar_submenu_list">
                      <li className="d-none">اول</li>
                      <li>اول</li>
                      <li>دوم</li>
                      <li>سوم</li>
                    </ul>
                </li> 
            </div>
        </div>
    </section>
    {/*<!-- #endregion -->*/}
        </div>
     ); 
}
 
export default SideBar;