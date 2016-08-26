console.log("loading menu");

import React from 'react';

const styles = {
    menu : {
        display: 'flex',
        flexDirection: 'row',
        //justifyContent: 'space-apart'
    }
};

const Menu = (props) => (
    <ul style={styles.menu} >
        <li>Main</li>
        <li>About</li>
        <li>Resume</li>
    </ul>
);

export default Menu;
