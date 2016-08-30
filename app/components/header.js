console.log("loading header");

import React from 'react';

import generic from '../generic_styles.js';
import Menu from './menu.js';

const styles = {
    header : {
        backgroundColor: '#26a65b',
        //background: 'linear-gradient(to bottom, rgba(38,166,91,1), rgba(4,147,104,1))'
        background: 'linear-gradient(to bottom, rgba(38,166,91,1), rgba(30,155,95,1))'
    },
    title : {
        fontFamily: "'Dosis', sans-serif",
        fontSize: '4.2em',
        letterSpacing: '0.17em',
        color: 'white',
        textAlign: 'center',
        paddingBottom: '.25em'
    }
};

var Header = React.createClass({
    render: function() {
        return (
            <header style={Object.assign({}, styles.header, generic.dev)} >
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
