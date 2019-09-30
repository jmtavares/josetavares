import React from "react";
import styled from "@emotion/styled";
import Hello from '../hello/hello'

const HeaderContainer = styled.div`
  text-align: center;
  margin: 50px 0;
`;

const Header = () => (
    <HeaderContainer>
        <Hello />
    </HeaderContainer>
);

export default Header;
