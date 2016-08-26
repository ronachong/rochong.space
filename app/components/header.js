console.log("loading header");

import React from 'react';
import generic from '../generic_styles.js'

const styles = {
    header : {
        backgroundColor: '#26a65b',
        //background: 'linear-gradient(to bottom, rgba(38,166,91,1), rgba(4,147,104,1))'
        background: 'linear-gradient(to bottom, rgba(38,166,91,1), rgba(30,155,95,1))'
    },
    title : {
        fontFamily: "'Dosis', sans-serif",
        fontSize: '4.2em',
        color: 'white',
        textAlign: 'center'
    }
};

const Header = (props) => (
    <header style={Object.assign({}, styles.header, generic.dev)} >
        <h1 style={styles.title} >{props.title}</h1>
    </header>
);

export default Header;
