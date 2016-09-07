import React from 'react';
import generalized from '../generalized_styles.js';

const styles = {
    aboutContainer : generalized.siteBody,
    mainview : {
        display: 'flex',        // ensure that cmps in sitebody can expand
        flexDirection: 'row'    // arrange cmps in sitebody horizontally
    },
    h2 : generalized.contentHeadings
};

const AboutView = (props) => (
    <section style={styles.aboutContainer} >
        <h2 style={styles.h2} >About rochong.space</h2>
        <p>Short for Rona Chong, rochong.space serves as a portfolio/means of archival/means of sharing for the software engineering work and learning that I do.</p>
        <p>rochong is also open-source; you can find its source code at the following repository:</p>
        <a href="https://github.com/ronachong/rochong.space">
             https://github.com/ronachong/rochong.space.
        </a>

        <h2 style={styles.h2} >About Rona</h2>
        <p>I'm curious to know about all the parts that make up the virtual terrain we live in today. Luckily, I attend a school for full-stack software engineering, which means I get to touch a lot of different things: low-level programming, higher-level programming, front-end, back-end, and sysadmin/devops. My goal is to become a well-versed software engineer who knows her stuff.</p>
        <p>Prior to Holberton School, I got my Bachelor's of Art in sociology from Pomona College and graduated from Scripps, The Women's/Non-normative Gender Identities College (slightly tongue-in-cheek, but pretty much). LA/Inland Empire is like a second home to me, after the Central Valley, the area I grew up in, and San Francisco, which serves as my current, albeit overly-foggy, home.</p>
        <p>Projects that I hope to do one day include a sustainable and community-oriented platform for manga consumption and a mobile app for cognitive-behavioral self-help.</p>
        <p>Outside of software engineering and tech, I care about social justice and equity, creative storytelling, and pursuing the simple pleasures of life.</p>

        <h2 style={styles.h2} >Contact me</h2>
        <p>If you are interested in collaborating with me on a project or simply would like to connect with me on a topic related to tech, you can find me on twitter as <a href="https://twitter.com/ronachng">@ronachng</a>, contact me via <a href="https://www.linkedin.com/in/rona-chong-15b167b6">LinkedIn</a>, or shoot me an email at rona@holbertonschool.com.</p>
    </section>
);

export default AboutView;
