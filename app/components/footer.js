console.log("loading footer");

import React from 'react';
import generic from '../generic_styles.js'

const styles = {
    footer : {
        padding: '1.5% 2%',
    },
    copyright : {
        color: 'white',
        letterSpacing: '0.17em',
        marginBottom: '0.4em'
    },
    textSmall : {
        fontSize: '0.8em'
    }
};

const Footer = (props) => (
    <footer style={Object.assign({}, styles.footer, generic.bkgBGreenRev, generic.dev)} >
        <p style={styles.copyright} >© rochong.space</p>
        <p style={styles.textSmall} >
            Made with ReactJS, CSS3, webpack, and love.
            View in a modern, updated browser (◕ᴗ◕✿).
        </p>
    </footer>
);

export default Footer;
