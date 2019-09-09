import React from "react";
import GithubIcon from "./components/github-icon";
import LinkedinIcon from "./components/linkedin-icon";
import EmailIcon from "./components/email-icon";
import TwitterIcon from "./components/twitter-icon";

const SocialIcons = () => {
    return (
        <>
            <GithubIcon />
            <LinkedinIcon />
            <EmailIcon />
            <TwitterIcon />
        </>
    );
};

SocialIcons.displayName = "SocialIcons";
export default SocialIcons;
