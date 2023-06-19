import styled from "styled-components";

const CtaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  padding: 20px 50px;
  background-color: #0a0a0a;
  background-color: #1f1f1f;
  color: white;
  @media only screen and (max-width: 767px) {
    padding: 20px;
  }
  .cta-hero {
    width: 100%;
    display: flex;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
    .container {
      @media only screen and (max-width: 767px) {
        width: 100%;
      }
      :nth-child(1) {
        width: 67%;
        @media only screen and (max-width: 767px) {
          width: 100%;
        }
      }
      h1 {
        font-size: 64px;
        line-height: 100%;
        @media only screen and (max-width: 767px) {
          font-size: 32px;
        }
      }
      p {
        font-size: 18px;
        color: #606060;
        color: #b4b4b4;
        margin-top: 5px;
        margin-bottom: 10px;
        @media only screen and (max-width: 767px) {
          font-size: 14px;
          margin-top: 10px;
        }
      }
      .container-desc {
        display: flex;
        flex-direction: column;
        @media only screen and (max-width: 767px) {
          margin-top: 20px;
        }
        :nth-child(2) {
          margin-top: 10px;
        }
        p {
          width: 400px;
          line-height: 140%;
          font-size: 14px;
          @media only screen and (max-width: 767px) {
            width: 320px;
          }
        }
      }
    }
  }
  .cta-video {
    width: 100%;
    background-color: #f1f1f1;
    height: 440px;
    margin-top: 10px;
    overflow: hidden;
    pointer-events: none;
    @media only screen and (max-width: 767px) {
      height: 300px;
    }
    video {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

export default CtaWrapper;
