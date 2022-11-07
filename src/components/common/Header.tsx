import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Path from "Paths";

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <NavWrapper>
        <NavBtn onClick={() => navigate(Path.Home)}>HOME</NavBtn>
        <NavBtn onClick={() => navigate(Path.About)}>ABOUT</NavBtn>
      </NavWrapper>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  padding: 0 24px;
  box-sizing: border-box;
  background: #d2d2d2;
`;

const NavWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const NavBtn = styled.button`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.01em;
  cursor: pointer;

  &:active {
    opacity: 0.6;
  }
`;
