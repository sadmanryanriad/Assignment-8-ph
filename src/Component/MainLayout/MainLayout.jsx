import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Header/NavBar";

const MainLayout = () => {

    const loc  = useLocation();
    console.log(loc.pathname);

    //ekhane location theke check korechi je home a ache ki na. jodi home a thake tahole condition diachi je tailwind a absolute attribute bosia dite

return (
    <div className="relative">
        <div className={` ${loc.pathname == '/' && 'absolute'} min-w-full `}>
        <NavBar></NavBar>
        </div>
        <Outlet></Outlet>
    </div>
);
};

export default MainLayout;