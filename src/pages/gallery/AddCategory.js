import ModalContainer from "../../component/ModalContaainer";

const AddCategory = () => {
    return ( 
        <>
                <button class="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_product_category_modal">
                    <i class="fas fa-plus text-light"></i>
                </button>
        <ModalContainer id={"add_product_category_modal"} fullScreen={true} title={"افزودن دسته محصولات"}>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3 dir_rtl">
                                <select type="text" className="form-control">
                                    <option value="1">بدون والد</option>
                                    <option value="1">دسته شماره 1</option>
                                </select>
                                <span className="input-group-text w_6rem justify-content-center">دسته والد</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3 dir_rtl">
                                <input type="text" className="form-control" placeholder="عنوان دسته"/>
                                <span className="input-group-text w_6rem justify-content-center">عنوان</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3 dir_rtl">
                                <textarea type="text" className="form-control" placeholder="توضیحات" rows="5"></textarea>
                                <span className="input-group-text w_6rem justify-content-center">توضیحات</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3 dir_rtl">
                                <input type="file" className="form-control" placeholder="تصویر"/>
                                <span className="input-group-text w_6rem justify-content-center">تصویر</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8 row justify-content-center">
                            <div className="form-check form-switch col-5 col-md-2">
                                <input className="form-check-input pointer" type="checkbox" id="flexSwitchCheckDefault" checked/>
                                <label className="form-check-label pointer" htmlFor="flexSwitchCheckDefault">وضعیت فعال</label>
                            </div>
                        </div>
                        <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                            <button className="btn btn-primary ">ذخیره</button>
                        </div>

                    </div>
                </div>
</ModalContainer>
</>
     );
}
 
export default AddCategory;