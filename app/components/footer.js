console.log("loading footer");

import React from 'react';
import generic from '../generic_styles.js'

const styles = {
    footer : {
        //
    },
    textSmall : {
        fontSize: '0.8em'
    }
};

const Footer = (props) => (
    <footer style={Object.assign({}, styles.footer, generic.bkgBGreenRev, generic.dev)} >
        <p>© rochong.space</p>
        <p style={styles.textSmall} >
            Made with ReactJS, CSS3, webpack, and love.
            Should be viewed in a modern, updated browser.
        </p>
    </footer>
);

export default Footer;
