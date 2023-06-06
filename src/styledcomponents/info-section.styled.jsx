import styled from "styled-components";

const InfoSectionWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: sticky;
  top: 0;
  background-color: white;
  background-color: #111111;
  color: white;
  padding: 20px 50px;
  padding-top: 70px;
  display: flex;
  .container {
    width: 60%;
    :nth-child(1) {
      width: 40%;
      /* background-color: #ffffff; */
    }
  }

  .desc-container {
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    h1 {
      font-size: 28px;
    }
    p {
      font-size: 16px;
      line-height: 168%;
      margin-top: 20px;
      color: #606060;
      color: #b4b4b4;
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
    .desc-icons {
      margin-top: 30px;
      width: 40%;
      display: flex;
      justify-content: space-between;
    }
  }
  .card-wrapper {
    display: grid;
    /* column-gap: 10px; */
    justify-content: center;
    padding-top: 20px;
    background-color: #1f1f1f;
    height: 100vh;
    overflow: auto;
    row-gap: 20px;
    grid-template-columns: 32% 32% 32%;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export default InfoSectionWrapper;
