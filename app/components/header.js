console.log("loading header");

import React from 'react';
import generic from '../generic_styles.js'

const Header = (props) => (
    <header style={Object.assign({}, generic.dev)} >
        <h1>{props.title}</h1>
    </header>
);

export default Header;
