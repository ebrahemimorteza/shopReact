import { NavLink } from "react-router-dom";
const NavbarItem = ({targetPath,title,classTarget}) => {
    return ( 
        <>
        <NavLink to={targetPath} className={classTarget} >
        {title}
    </NavLink>
    </>
     );
}
 
export default NavbarItem;