import { useEffect } from "react";
import { useState } from "react";

const PaginitionTable = ({ children, data, dataInfo, additionField ,searchParams}) => {
  const numOfPage = 2;
  const [initData, setinitData] = useState(data);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setpage] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchChar, setSearchChar] = useState("");
  useEffect(() => {
    const start = currentPage * numOfPage - numOfPage;
    const end = currentPage * numOfPage;
    setTableData(initData.slice(start, end));
  }, [initData]);

  useEffect(() => {
    const pCount = Math.ceil(initData.length / numOfPage);
    setPageCount(pCount);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
    setpage(pArr);
  }, [initData,currentPage]);

useEffect(()=>{
    setinitData(data.filter(d=>d[searchParams.searchFeild].includes(searchChar)))
    setCurrentPage(1)
},[searchChar])

  return (
    <>
      <div class="row justify-content-between">
        <div class="col-10 col-md-6 col-lg-4">
          <div class="input-group mb-3 dir_ltr">
            <input
              type="text"
              class="form-control"
              placeholder={searchParams.placeholder}
              onChange={(e)=>setSearchChar(e.target.value)}
            />
            <span class="input-group-text">{searchParams.title}</span>
          </div>
        </div>
        <div class="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          {children}
        </div>
      </div>
      <table className="table table-responsive text-center table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            {dataInfo.map((i) => (
              <th key={i.field}>{i.title}</th>
            ))}
            {additionField ? <th>{additionField.title}</th> : null}
          </tr>
        </thead>
        <tbody>
          {tableData.map((d) => (
            <tr>
              {dataInfo.map((i) => (
                <td key={i.field + "_" + d.id}>{d[i.field]}</td>
              ))}

              {additionField ? <td>{additionField.elements(d.id)}</td> : null}
            </tr>
          ))}
        </tbody>
      </table>
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center"
      >
        <ul className="pagination dir_ltr">
          <li className="page-item">
            <span
              className={`page-link pointer ${
                currentPage === 1 ? "disabled" : ""
              }`}
              onClick={() => setCurrentPage(currentPage - 1)}
              aria-label="Previous"
            >
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li>
          {page.map((page) => (
            <li className="page-item">
              <a className={`page-link pointer ${ currentPage == page ? "alert-success" : ""  }`}  href="#"  onClick={() => setCurrentPage(page)}>
                {page}
              </a>
            </li>
          ))}
          <li className="page-item">
            <span
              className={`page-link pointer ${
                currentPage === pageCount ? "disabled" : ""
              }`}
              onClick={() => setCurrentPage(currentPage + 1)}
              aria-label="Next"
            >
              <span aria-hidden="true">&laquo;</span>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PaginitionTable;
