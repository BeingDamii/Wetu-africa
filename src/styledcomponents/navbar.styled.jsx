import styled from "styled-components";
import { motion } from "framer-motion";

const NavbarWrapper = styled(motion.div)`
  display: flex;
  padding: 30px 50px;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  background-color: #1f1f1f;
  /* mobile styling */
  @media only screen and (max-width: 767px) {
    padding: 50px 20px;
    padding-bottom: 20px;
  }
  h1 {
    color: #00277a;
    color: #ffffff;
    font-size: 24px; /* mobile styling */
    @media only screen and (max-width: 767px) {
      font-size: 20px;
    }
  }
  nav {
    display: flex;
    width: 35%;
    justify-content: space-around;
    @media only screen and (max-width: 767px) {
      display: none;
    }
    a {
      font-size: 16px;
      font-weight: 600;
      color: white;
    }
  }
  .mobile-toggle {
    color: white;
    background-color: transparent;
    border: none;
    font-size: 18px;
    font-weight: bold;

    /* Styles for desktop devices */
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export default NavbarWrapper;
