import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  DribbbleIconBlack,
  GithubIconBlack,
  InstagramIconBlack,
  TwitterIconBlack,
} from "../resources/icons";

import { clipPathVariant, navLinksVariant } from "../resources/variants";

const OffCanvasMenu = ({ navActive, setNavActive }) => {
  return (
    <StyledOffCanvasMenu
      variants={clipPathVariant}
      initial="initial"
      animate={navActive ? "animate" : "initial"}
    >
      <button className="toggle-button" onClick={() => setNavActive(false)}>
        Close
      </button>
      <div className="navlink-container">
        <motion.h1 variants={navLinksVariant}>
          <NavLink>Locations</NavLink>
        </motion.h1>
        <motion.h1 variants={navLinksVariant}>
          <NavLink>Stories</NavLink>
        </motion.h1>
        <motion.h1 variants={navLinksVariant}>
          <NavLink>Food</NavLink>
        </motion.h1>
        <motion.h1 variants={navLinksVariant}>
          <NavLink>Tell us your stories</NavLink>
        </motion.h1>
      </div>
      <motion.div className="icon-container" variants={navLinksVariant}>
        <NavLink to={"/"}>
          <InstagramIconBlack />
        </NavLink>
        <NavLink to={"/"}>
          <TwitterIconBlack />
        </NavLink>
        <NavLink to={"/"}>
          <DribbbleIconBlack />
        </NavLink>
        <NavLink to={"/"}>
          <GithubIconBlack />
        </NavLink>
      </motion.div>
    </StyledOffCanvasMenu>
  );
};

const StyledOffCanvasMenu = styled(motion.div)`
  background-color: white;
  width: 100%;
  height: 100vh;
  position: absolute;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  clip-path: circle(0% at 100% 0%);
  /* clip-path: circle(100%); */
  .navlink-container {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    h1 {
      margin-top: 10px;
    }
    a {
      color: #000000;
      font-size: 36px;
      font-weight: 600;
    }
  }
  button {
    align-self: flex-end;
    background-color: transparent;
    border: none;
    font-size: 18px;
    padding: 0px;
    font-weight: bold;
  }

  .icon-container {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    width: 50%;
  }
`;
export default OffCanvasMenu;
