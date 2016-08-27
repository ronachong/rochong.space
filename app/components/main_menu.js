console.log("loading main menu");

import React from 'react';
import generic from '../generic_styles.js'

const styles = {
    menu : {
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',    // spread li's out vertically
        listStyle: 'none',          // remove default decoration
        padding: 0,                 // set padding to back to 0
        marginBottom: 0             // set bottom margin back to 0
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
        margin: 0                   // set top and bottom margins back to 0
    }
};

var MainMenu = React.createClass({
    render: function(){
        var listitems = this.props.options.map(function(option){
            return <MenuButton option={option} key={option} />
        });
        return (
            <ul style={Object.assign({}, styles.menu, generic.dev)} >
                {listitems}
            </ul>
        );
    }
});

const MenuButton = (props) => (
    <li style={Object.assign({}, styles.li, generic.dev)} >
        <h3 style={styles.h3} >{props.option}</h3>
    </li>
);

export default MainMenu;
