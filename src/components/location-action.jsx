import React from "react";
import styled from "styled-components";
import {
  CuisinesIcon,
  LocalGuidesIcon,
  LocalNewsIcon,
  StoriesIcon,
} from "../resources/icons";

const LocationAction = () => {
  return (
    <StyledLocationAction>
      <div className="location-action-container">
        <StoriesIcon />
        <h3>Stories about this place</h3>
      </div>
      <div className="location-action-container">
        <CuisinesIcon />
        <h3>Cuisines</h3>
      </div>
      <div className="location-action-container">
        <LocalGuidesIcon />
        <h3>Local guides</h3>
      </div>
      <div className="location-action-container">
        <LocalNewsIcon />
        <h3>Local news</h3>
      </div>
    </StyledLocationAction>
  );
};

const StyledLocationAction = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 45% 45%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  .location-action-container {
    display: flex;
    cursor: pointer;
    align-items: center;
    border: solid #e4e4e4 2px;
    border-radius: 10px;
    padding: 10px 15px;
    h3 {
      font-size: 16px;
      margin-left: 10px;
    }
  }
`;

export default LocationAction;
