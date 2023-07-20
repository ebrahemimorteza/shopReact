import AddCategory from "./AddCategory";
import CategoryTable from "./categoryTable";

const Category = () => {
    return ( 
        <>
        <div id="manage_product_category" class="manage_product_category main_section ">
        <h4 class="text-center my-3">مدیریت دسته بندی محصولات</h4>
        
        <CategoryTable/>
    </div>
        </>
     );
}
 
export default Category;