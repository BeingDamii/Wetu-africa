import { NavLink } from "react-router-dom";
import NavbarWrapper from "../styledcomponents/navbar.styled";
import { navbarVariant } from "../resources/variants";

const Navbar = () => {
  return (
    <NavbarWrapper variants={navbarVariant} initial="initial" animate="animate" >
      <NavLink to={"/"}>
        <h1>Wetu Africa.</h1>
      </NavLink>
      <nav>
        <NavLink to={"/"}>Locations</NavLink>
        <NavLink to={"/"}>Stories</NavLink>
        <NavLink to={"/"}>Food</NavLink>
        <NavLink to={"/"}>Tell us your story</NavLink>
      </nav>
    </NavbarWrapper>
  );
};

export default Navbar;
