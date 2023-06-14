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
    .container {
      width: 50%;
      padding-right: 30px;
      h1 {
        font-size: 28px;
        color: white;
      }
      p {
        font-size: 16px;
        line-height: 170%;
        margin-top: 10px;
        color: #d4d4d4;
      }
    }
    .side-attractions {
      display: grid;
      padding: 0px;
      column-gap: 10px;
      overflow: auto;
      row-gap: 20px;
      grid-template-columns: auto auto;
    }
  }
`;

export default StyledLocationPage;
