import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Home/Footer/Footer";

import NavBar from "../../Pages/Home/NavBar/NavBar";


const Root = () => {
    return (
        <div >
            <NavBar ></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;