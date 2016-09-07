console.log("loading generic styles");

import generic from './generic_styles.js'
import React from 'react';


var generalized = {
    contentHeadings: {
        color: generic.green,
        fontFamily: generic.headingFont,
        fontSize: '2.9em'
    },
    contentSubheadings: {
        color: generic.blue,
        fontFamily: generic.titleFont,
        fontSize: '1.2em',
        letterSpacing: '0.17em'
    },
    siteBody: {
        flexGrow: 1,            // sitebody expands to space avl.
        paddingTop: '3%',
        paddingBottom: '3%',
        paddingLeft: '5%',
        paddingRight: '5%',
        overflowY: 'auto'       // scrollbar for vertical overflow
    },
    mainViewContent: {
        paddingRight: '5%'
    }
}

export default generalized;
