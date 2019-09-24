import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/core";
import { GlobalContainer } from "../../styles/typography";


const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={() => (
            <>
                <Global
                    styles={css`
                        body {
                            margin: 0;
                            padding: 0;
                        }

                        li {
                          list-style: none;
                        }
                    `}
                />
                <GlobalContainer>
                    <main>{children}</main>
                </GlobalContainer>
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
