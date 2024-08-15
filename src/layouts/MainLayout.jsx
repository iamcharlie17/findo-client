import { Outlet } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Nav from "../components/shared/Nav";
import Footer from "../components/shared/Footer";


const MainLayout = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;