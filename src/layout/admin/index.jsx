import { useContext, useEffect } from 'react';
import Navbar from  './navbar/index'
import SideBar from  './sideBar/sideBar'
import AdminContextContainer, { AdminContext } from "../../context/AdminContext";
import Dashboard from '../../pages/dashbord/dashboard';
import Category from '../../pages/category/Category';
import AddCategory from '../../pages/category/AddCategory';
import Content from '../../pages/content';


const Index = () => {
    
    useEffect(()=>{
       // require('../../util/initialoms')
    },[])
    return ( 
        <AdminContextContainer>
        <div>
        <Content/>
        <Navbar/>
        <SideBar/>       
        </div>
        </AdminContextContainer>
     );
}
 
export default Index;