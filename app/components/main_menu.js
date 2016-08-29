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
        //
    },
    button: {
        width: '10vh',              // make btns relative to window, circular
        height: '10vh',             // make btns relative to window, circular
        borderRadius: '50%',        // make btns circular
        display: 'flex',            // enable flex for posxning of children
        justifyContent: 'center',   // center h3's inside btns, horizontally
        alignItems: 'center',       // center h3's inside btns, vertically
        margin: '40% 0'             // vertical breathing rm around btns
    },
    button_selected : {
        backgroundColor: 'red'
    },
    h3 : {
        fontSize: '1em',
        margin: 0                   // set top and bottom margins back to 0
    }
};

var MainMenu = React.createClass({
    render: function(){
        var listitems = this.props.options.map(function(option){
            return <MenuButton
                option={option}
                view={this.props.view}
                changeView={this.props.changeView}
                key={option}
            />
        }, this);
        return (
            <ul style={Object.assign({}, styles.menu, generic.dev)} >
                {listitems}
            </ul>
        );
    }
});

var MenuButton = React.createClass({
    handleClick: function() {
        // call function to change view of MainView
        this.props.changeView(this.props.option)
    },
    render: function(){
        var appliedStyles = (
            this.props.option == this.props.view ? Object.assign({}, styles.button, styles.button_selected, generic.dev) : Object.assign({}, styles.button, generic.dev)
        );
        return (
            <li>
                <button style={appliedStyles} onClick={this.handleClick} >
                    <h3 style={styles.h3} >{this.props.option}</h3>
                </button>
            </li>
        );
    }
});

export default MainMenu;
