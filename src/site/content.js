import { Route,Routes } from "react-router-dom";
import IndexSite from "./index";
import P1 from "./component/p1";
const ContentSite = () => {
    return ( 
        <>
        <Routes>
        <Route path="/p1" element={<P1/>}></Route>
        <Route path="/p2" element={<P1/>}></Route>
        <Route path="/p3" element={<P1/>}></Route>
        <Route path="/p4" element={<P1/>}></Route>
        <Route path="/p5" element={<P1/>}></Route>
        <Route path="/p6" element={<P1/>}></Route>
        <Route path="/p7" element={<P1/>}></Route>
        <Route path="/p8" element={<P1/>}></Route>
        </Routes>
        </>
     );
}
 
export default ContentSite;