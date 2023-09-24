import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex gap-5">
            <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-red-600" : ""}>Home</NavLink>
            <NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-red-600" : ""}>Donation</NavLink>
            <NavLink
  to="/statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-red-600" : ""}>Statistics</NavLink>

</nav>);
};

export default NavBar;