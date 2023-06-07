import { NavLink } from "react-router-dom";
import NavbarWrapper from "../styledcomponents/navbar.styled";
import { navbarVariant } from "../resources/variants";
import NavElement from "./navElement";

const Navbar = () => {
  return (
    <NavbarWrapper variants={navbarVariant} initial="initial" animate="animate">
      <NavLink to={"/"}>
        <h1>Wetu Africa.</h1>
      </NavLink>
      <nav>
        <NavElement text={"Locations"} />
        <NavElement text={"Stories"} />
        <NavElement text={"Food"} />
        <NavElement text={"Tell us your story"} />
      </nav>
    </NavbarWrapper>
  );
};

export default Navbar;
