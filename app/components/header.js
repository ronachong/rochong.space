console.log("loading header");

import React from 'react';
import generic from '../generic_styles.js'

const styles = {
    title : {
        fontFamily: "'Dosis', sans-serif",
        fontSize: '4.2em',
        textAlign: 'center'
    }
};

const Header = (props) => (
    <header style={Object.assign({}, generic.dev)} >
        <h1 style={styles.title} >{props.title}</h1>
    </header>
);

export default Header;
