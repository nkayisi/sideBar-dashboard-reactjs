import { Routes, Route, Link } from "react-router-dom"
import Login from "pages/Login";
import HomeLayout from "layouts/HomeLayout";



function DefaultLayout() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="home" element={<HomeLayout/>}/>
            </Routes>
        </div>
    );
}



export default DefaultLayout;