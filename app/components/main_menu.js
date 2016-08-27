console.log("loading menu");

import React from 'react';
import generic from '../generic_styles.js'

const styles = {
    menu : {
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
        marginBottom: 0
    },
    li : {
        width: '13vw',              // make li's relative to window, circular
        height: '13vw',             // make li's relative to window, circular
        borderRadius: '50%',        // make li's circular
        display: 'flex',            // enable flex for posxning of children
        justifyContent: 'center',   // center h3's inside li's, horizontally
        alignItems: 'center',       // center h3's inside li's, vertically
        margin: '20% 0'             // vertical breathing rm around li's
    },
    h3 : {
        fontSize: '1em',
        margin: 0
    }
};

const MainMenu = (props) => (
    <ul style={Object.assign({}, styles.menu, generic.dev)} >
        <li style={Object.assign({}, styles.li, generic.dev)} >
            <h3 style={styles.h3} >Blog</h3>
        </li>
        <li style={Object.assign({}, styles.li, generic.dev)} >
            <h3 style={styles.h3} >Live Projects</h3>
        </li>
        <li style={Object.assign({}, styles.li, generic.dev)} >
            <h3 style={styles.h3} >Resource Log</h3>
        </li>
        <li style={Object.assign({}, styles.li, generic.dev)} >
            <h3 style={styles.h3} >Post-Mortems</h3>
        </li>
    </ul>
);

export default MainMenu;
