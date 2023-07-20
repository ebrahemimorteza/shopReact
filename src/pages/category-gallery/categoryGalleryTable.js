import PaginitionTable from "../../component/pagenationComponent";
import AddCategory from "./AddCategoryGallery";

const CategoryTable = () => {
    const data=[{
        id:"1",
        category:"bb",
        title:"aa",
        price:"220",
        status:"1"
    },
    {
        id:"2",
        category:"nn",
        title:"aall",
        price:"2300",
        status:"1"
    },
    {
        id:"2",
        category:"nn",
        title:"aall",
        price:"2300",
        status:"1"
    },
    {
        id:"2",
        category:"nn",
        title:"bb",
        price:"2300",
        status:"1"
    },
    {
        id:"2",
        category:"nn",
        title:"zz",
        price:"2300",
        status:"1"
    },
]
const dataInfo=[
    {field:"id",title:"#"},
    {field:"title",title:"عنوان محصول"},
    {field:"price",title:"قیمت"}
]
const additionElement=(id)=>{
    return(
        <div>
        <i class="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش محصول" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_product_modal"></i>
                        <i class="fas fa-receipt text-info mx-1 hoverable_text pointer has_tooltip" title="ثبت ویژگی" data-bs-toggle="modal" data-bs-target="#add_product_attr_modal"></i>
                        <i class="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف محصول" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </div>
    )
};
const additionField ={ 
    title:"عملیات",
    elements :(id)=>additionElement(id),
}
const searchParams ={
    title:"جستجو",
    placeHolder:"قسمتی از عنوان را وارد کنید",
    searchFeild:"title"
}
    return ( 
        <>
        <PaginitionTable data={data} dataInfo={dataInfo} additionField={additionField} searchParams={searchParams}>
        <AddCategory/>
        </PaginitionTable>       
        </>
     );
}
 
export default CategoryTable;