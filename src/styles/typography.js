import styled from "@emotion/styled";
import { Link } from "gatsby";

export const H1 = styled.h1`
  font-size: 48px;
  color: #353535;
  margin: 0 0 20px 0;
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 62px;
    }
  }
`;

export const Anchor = styled(Link)`
  color: #353535;
`;

export const GlobalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Asap", sans-serif;
  background-color: #ffffff;
  overflow: hidden;
`;

export const Icon = styled.a`
  margin: 0 20px;
  display: inline-flex;
`;

export const Svg = styled.svg`
  width: 40px;
  height: 40px;
`;

export const Section = styled.section`
  line-height: 24px;
`;
