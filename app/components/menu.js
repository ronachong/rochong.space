console.log("loading menu");

import React from 'react';
import generic from '../generic_styles.js'

const styles = {
    menu : {
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none',
        paddingLeft: 0
    },
    li : {
        textAlign: 'center',
        flexGrow: 1
    }
};

const Menu = (props) => (
    <ul style={Object.assign({}, styles.menu, generic.dev)} >
        <li style={styles.li} >Main</li>
        <li style={styles.li} >About</li>
        <li style={styles.li} >Resume</li>
    </ul>
);

export default Menu;
