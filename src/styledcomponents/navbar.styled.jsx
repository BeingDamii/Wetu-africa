import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  padding: 30px 50px;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  h1 {
    color: #00277a;
    font-size: 24px;
  }
  nav {
    display: flex;
    width: 35%;
    justify-content: space-around;
    a {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export default NavbarWrapper;
