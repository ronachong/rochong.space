console.log("loading menu");

import React from 'react';
import generic from '../generic_styles.js'

const styles = {
    menu : {
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: '3% 0 25% 0',      // might have to mess w/ later to posxn li's
        marginBottom: 0
    },
    li : {
        textAlign: 'center',
        //flexGrow: 1
    }
};

const MainMenu = (props) => (
    <ul style={Object.assign({}, styles.menu, generic.dev)} >
        <li style={Object.assign({}, styles.li, generic.dev)} >Blog</li>
        <li style={Object.assign({}, styles.li, generic.dev)} >Live Projects</li>
        <li style={Object.assign({}, styles.li, generic.dev)} >Resource Log</li>
        <li style={Object.assign({}, styles.li, generic.dev)} >Post-Mortems</li>
    </ul>
);

export default MainMenu;
