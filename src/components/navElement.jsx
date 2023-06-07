import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navElementAnimation } from "../resources/variants";

const NavElement = ({text}) => {
  const [animating, setAnimating] = useState(false);

  function handleMouseEnter() {
    setAnimating(!animating);
  }
  function handleMouseLeave() {
    setAnimating(!animating);
  }

  return (
    <StyledNavElemnt
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink to={"/"}>{text}</NavLink>
      <motion.div
        variants={navElementAnimation}
        initial="initial"
        animate={animating ? "animate" : "initial"}
        className="line"
      ></motion.div>
    </StyledNavElemnt>
  );
};

// styles

const StyledNavElemnt = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 0;
  .line {
    background-color: white;
    width: 0%;
    content: "";
    height: 1.5px;
    margin-top: 4px;
  }
`;

export default NavElement;
