import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import Category from "./category/Category";
import AddCategory from "./category/AddCategory";
import Product from "./product/product";
import AddProduct from "./product/AddProduct";
import { Route,Routes } from "react-router-dom";
import Dashboard from "./dashbord/dashboard";

const Content = () => {
    const {showSidebar} = useContext(AdminContext)
    return ( 
        <>
        <section id="content_section" className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
      <Routes>
      <Route path="/dashbord" element={<Dashboard/>}></Route>
      <Route path="/gallery" element={<Category/>}></Route>
      <Route path="/category_gallery" element={<Category/>}></Route>
      <Route path="/category" element={<Category/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/factor" element={<Product/>}></Route>
      <Route path="/payment" element={<Product/>}></Route>
      <Route path="/orders" element={<Product/>}></Route>
      <Route path="/ordersSend" element={<Product/>}></Route>
      <Route path="/users" element={<Product/>}></Route>
      <Route path="/role" element={<Product/>}></Route>
      <Route path="/message" element={<Product/>}></Route>
      <Route path="/sittings" element={<Product/>}></Route>
      <Route path="*" element={<Dashboard/>}></Route>
      </Routes>
      </section>
        </>
     );
}
 
export default Content;