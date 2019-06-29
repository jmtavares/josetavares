import React, { Fragment } from 'react';
import './social-icons.less';
import GithubIcon from './components/github-icon';
import LinkedinIcon from './components/linkedin-icon';
import EmailIcon from './components/email-icon';
import TwitterIcon from './components/twitter-icon';

const SocialIcons = () => {
    return (
        <Fragment>
            <GithubIcon />
            <LinkedinIcon />
            <EmailIcon />
            <TwitterIcon />
        </Fragment>
    );
};

SocialIcons.displayName = 'SocialIcons';
export default SocialIcons;
