console.log("loading menu");

import React from 'react';
import generic from '../generic_styles.js';

const styles = {
    menu : {
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none',
        padding: '1vh'
    },
    li : {
        textAlign: 'center',
        flexGrow: 1
    },
    button : {
        borderStyle: 'None',
        background: 'None'
    },
    h3 : {
        fontSize: '1.1em',
    }
};

var Menu = React.createClass({
    render: function(){
        var listitems = this.props.options.map(function(option){
            return <MenuOption
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

var MenuOption = React.createClass({
    handleClick: function(){
        // call function to change view of Site
        this.props.changeView(this.props.option)
    },
    render: function(){
        var appliedStyles = (
            this.props.option == this.props.view ? Object.assign({}, styles.h3, generic.textWhite) : styles.h3
        );
        return (
            <li style={styles.li} >
                <button onClick={this.handleClick} style={styles.button} >
                    <h2 style={appliedStyles} >{this.props.option}</h2>
                </button>
            </li>
        );
    }
});

export default Menu;
