import { useContext } from "react";
import AdminContextContainer, { AdminContext } from "../../../context/AdminContext";
import RightContent from "./rightContent";
import LeftContent from "./leftContent";

const Navbar = () => {

    return ( 
        <div>
               { /*<!-- #region(collapsed) navbar  -->*/}
    <nav className="navbar fixed-top navbar-dark bg-secondary top_navbar py-0">
    <div className="container-fluid h-100 pe-0">

        <RightContent/>
        <LeftContent/>
    </div>
</nav>
{/* <!-- #endregion  -->    <!-- #region(collapsed) sidebar start -->*/}
        </div>
     );
}
 
export default Navbar;