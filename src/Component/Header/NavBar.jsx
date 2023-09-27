import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (

        <div className="flex flex-col md:flex-row md:justify-between max-w-[1400px] px-5 mx-auto items-center mt-3">
            <div>
                <img className="max-w-full" src="https://i.ibb.co/m9TdpGx/Logo.png" alt="" />
            </div>
            <div>
                <div className="flex gap-12 text-lg my-5 md:m-0">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>Home</NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>Donation</NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>Statistics</NavLink>
                </div>
            </div>
        </div>


    );
};

export default NavBar;