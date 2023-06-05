import styled from "styled-components";

const StyledLocationPage = styled.div`
  display: flex;
  flex-direction: column;
  .location-page-wrapper {
    padding: 30px 50px;
    display: flex;
    .container {
      width: 50%;
      padding-right: 30px;
      h1 {
        font-size: 28px;
      }
      p {
        font-size: 16px;
        line-height: 168%;
        margin-top: 10px;
        color: #606060;
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
