console.log("loading footer");

import React from 'react';
import generic from '../generic_styles.js'

const styles = {
    footer : {
        //
    },
};

const Footer = (props) => (
    <footer style={Object.assign({}, styles.footer, generic.dev)} >
        Footer text here.
    </footer>
);

export default Footer;
