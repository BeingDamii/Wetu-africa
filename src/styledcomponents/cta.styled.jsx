import styled from "styled-components";

const CtaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
  .cta-hero {
    width: 100%;
    display: flex;
    .container {
      :nth-child(1) {
        width: 67%;
      }
      h1 {
        font-size: 64px;
        line-height: 100%;
      }
      p {
        font-size: 18px;
        color: #606060;
        margin-top: 5px;
      }
      .container-desc {
        display: flex;
        flex-direction: column;
        :nth-child(2) {
          margin-top: 10px;
        }
        p {
          width: 400px;
          line-height: 140%;
          font-size: 14px;
        }
      }
    }
  }
  .cta-video {
    width: 100%;
    background-color: #f1f1f1;
    height: 440px;
    margin-top: 10px;
    video {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;

    }
  }
`;

export default CtaWrapper;
