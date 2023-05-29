import styled from "styled-components";

const InfoSectionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: white;
  padding: 20px 50px;
  padding-top: 70px;
  display: flex;
  .container {
    background-color: yellow;
    width: 60%;
    :nth-child(1) {
      width: 40%;
      background-color: #ffffff;
    }
  }
  .desc-container {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 28px;
    }
    p {
      font-size: 16px;
      line-height: 168%;
      margin-top: 20px;
      color: #606060;
    }
    .desc-row {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .desc {
        width: 47%;
        p {
          font-size: 14px;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

export default InfoSectionWrapper;