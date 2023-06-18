import { motion } from "framer-motion";
import styled from "styled-components";

const StyledLocationPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #1f1f1f;
  .location-page-wrapper {
    padding: 50px 50px;
    display: flex;
    height: fit-content;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
      padding: 20px;
    }
    .container {
      width: 50%;
      padding-right: 30px;
      @media only screen and (max-width: 767px) {
        width: 100%;
      }
      h1 {
        font-size: 28px;
        color: white;
        @media only screen and (max-width: 767px) {
          font-size: 22px;
        }
      }
      p {
        font-size: 16px;
        line-height: 170%;
        margin-top: 10px;
        color: #d4d4d4;
        @media only screen and (max-width: 767px) {
          font-size: 14px;
        }
      }
    }
    .side-attractions {
      display: grid;
      padding: 0px;
      column-gap: 10px;
      overflow: auto;
      row-gap: 20px;
      grid-template-columns: auto auto;
      @media only screen and (max-width: 767px) {
        width: fit-content;
        display: flex;
        flex-wrap: nowrap;
      }
    }
    .slide {
      width: 100%;
      overflow: auto;
      margin-top: 20px;
      height: fit-content;
      @media only screen and (min-width: 768px) {
        /* Styles for desktop devices */
        display: none;
      }
    }
    .hide {
      @media only screen and (max-width: 767px) {
        display: none;
      }
    }
    .arrow-button {
      margin-top: 20px;
    }
  }
`;

export default StyledLocationPage;
