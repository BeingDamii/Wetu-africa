import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  DribbbleIconBlack,
  GithubIcon,
  GithubIconBlack,
  InstagramIconBlack,
  TwitterIconBlack,
} from "../resources/icons";

const OffCanvasMenu = () => {
  return (
    <StyledOffCanvasMenu>
      <button className="toggle-button">Close</button>
      <div className="navlink-container">
        <NavLink to={"/"}>Locations</NavLink>
        <NavLink to={"/"}>Stories</NavLink>
        <NavLink to={"/"}>Food</NavLink>
        <NavLink to={"/"}>Tell us your story</NavLink>
      </div>
      <div className="icon-container">
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
      </div>
    </StyledOffCanvasMenu>
  );
};

const StyledOffCanvasMenu = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  position: absolute;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  .navlink-container {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    a {
      color: #000000;
      font-size: 36px;
      font-weight: 600;
      margin-top: 10px;
    }
  }
  button {
    width: 20%;
    align-self: flex-end;
    background-color: transparent;
    border: none;
    font-size: 18px;
    font-weight: bold;
  }

  .icon-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 50%;
  }
`;
export default OffCanvasMenu;
