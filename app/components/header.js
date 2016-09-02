console.log("loading header");

import React from 'react';

import generic from '../generic_styles.js';
import Menu from './menu.js';

const styles = {
    header : {
        //
    },
    title : {
        fontFamily: generic.titleFont,
        fontSize: '5em',
        letterSpacing: '0.17em',
        color: 'white',
        textAlign: 'center',
        padding: '1vh 0 1vh 0',
        margin: 0
    }
};

var Header = React.createClass({
    render: function() {
        return (
            <header style={Object.assign({}, styles.header, generic.bkgBGreen, generic.dev)} >
                <h1 style={styles.title} >{this.props.title}</h1>
                <Menu
                    options={this.props.options}
                    view={this.props.view}
                    changeView={this.props.changeView}
                />
            </header>
        );
    }
});

export default Header;
