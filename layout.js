import styled from "@emotion/styled";
import React from "react";
import Button from "./components/button";

const Layout = () => {
  // TODO: Add header footer menu and react router
  return (
    <Wrapper>
      <Button label={"Hi i am button."} />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #da4453;
  background: linear-gradient(to right, #89216b, #da4453);
  background: -webkit-linear-gradient(to right, #89216b, #da4453);
  display: flex;
  align-items: center;
  justify-content: center;
`;
