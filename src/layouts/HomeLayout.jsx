import { Routes, Route, Link } from "react-router-dom"
import Home from "pages/Home";
import SideBar from "components/SideBar"


function HomeLayout() {
    return (
        <div className="flex">
            <SideBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}



export default HomeLayout;