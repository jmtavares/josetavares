import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Hello from "../components/hello/hello";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Jose Tavares" keywords={[]} />
      <Hello />
    </Layout>
  );
};

export default IndexPage;
