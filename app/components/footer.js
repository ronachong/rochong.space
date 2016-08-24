console.log("loading footer");

import React from 'react';

const styles = {
    footer : {
        margin: '0 0 0 10px',
    },
};

const Footer = (props) => (
    <footer style={styles.footer}>
        Footer text here.
    </footer>
);

export default Footer;
