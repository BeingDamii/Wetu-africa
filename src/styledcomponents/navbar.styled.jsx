import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  padding: 30px 50px;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  background-color: #0a0a0a;
  h1 {
    color: #00277a;
    color: #ffffff;
    font-size: 24px;
  }
  nav {
    display: flex;
    width: 35%;
    justify-content: space-around;
    a {
      font-size: 16px;
      font-weight: 600;
      color: white;
    }
  }
`;

export default NavbarWrapper;
