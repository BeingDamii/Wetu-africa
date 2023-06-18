import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowLeftIcon, ArrowRightIcon } from "../resources/icons";

const ArrowButton = ({ text, isRight }) => {
  return (
    <ArrowButtonWrapper
    className="arrow-button"
      style={{ flexDirection: `${isRight ? "row" : "row-reverse"}` }}
    >
      <Link to={"/"}>{text}</Link>
      {isRight ? <ArrowRightIcon /> : <ArrowLeftIcon />}
    </ArrowButtonWrapper>
  );
};

// styles

const ArrowButtonWrapper = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  a {
    font-size: 18px;
    font-weight: 600;
    color: white;
  }
  svg {
    margin-left: 10px;
    path{
      fill: white;
    }
  }
`;
export default ArrowButton;
