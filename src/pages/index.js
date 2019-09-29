import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Hello from "../components/hello/hello";
import styled from "@emotion/styled";

const IndexContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100vw;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Jose Tavares" keywords={[]} />

      <IndexContainer>
        <Hello />
      </IndexContainer>
    </Layout>
  );
};

export default IndexPage;
