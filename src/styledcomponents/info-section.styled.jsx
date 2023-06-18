import styled from "styled-components";

const InfoSectionWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: sticky;
  top: 0;
  background-color: white;
  background-color: #111111;
  background-color: #1f1f1f;
  color: white;
  padding: 20px 50px;
  padding-top: 70px;
  display: flex;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    padding: 20px;
    padding-top: 50px;
  }
  .container {
    width: 60%;
    @media only screen and (max-width: 767px) {
      width: 100%;
    }
    :nth-child(1) {
      width: 40%;
      @media only screen and (max-width: 767px) {
        width: 100%;
      }
    }
  }

  .desc-container {
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    @media only screen and (max-width: 767px) {
      padding-right: 0px;
    }
    h1 {
      font-size: 28px;
      @media only screen and (max-width: 767px) {
        font-size: 26px;
      }
    }
    p {
      font-size: 16px;
      line-height: 168%;
      margin-top: 20px;
      color: #606060;
      color: #b4b4b4;
      @media only screen and (max-width: 767px) {
        font-size: 14px;
      }
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
      @media only screen and (max-width: 767px) {
        width: 50%;
      }
    }
    .hide-mobile {
      @media only screen and (max-width: 767px) {
        display: none;
      }
    }
  }
  .card-wrapper {
    display: grid;
    justify-content: center;
    padding-top: 20px;
    background-color: #1f1f1f;
    height: 100vh;
    overflow: auto;
    row-gap: 20px;
    grid-template-columns: 32% 32% 32%;
    @media only screen and (max-width: 767px) {
      padding-top: 20px;
      grid-template-columns: 100%;
      overflow: visible;
      height: fit-content;
      row-gap: 40px;
    }
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
  .footer {
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export default InfoSectionWrapper;
