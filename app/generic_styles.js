console.log("loading generic styles");

import React from 'react';

const generic = {
    green: 'rgba(38,166,91,1)',
    blue: 'rgba(52, 119, 219, 1)',

    GBgradient: 'linear-gradient(to bottom, rgba(38,166,91,1), rgba(52, 119, 219, 1))',
    BGgradient: 'linear-gradient(to bottom, rgba(52, 119, 219, 1), rgba(38,166,131,1))',

    titleFont: "'Dosis', sans-serif",
    headingFont: "'Raleway', sans-serif",

    site : {
        //
    },
    textGreen : {
        color: 'rgba(38,166,91,1)'
    },
    textWhite : {
        color: '#FFFFFF'
    },
    bkgBGreen : {
        background: 'linear-gradient(to bottom, rgba(38,166,91,1), rgba(52, 119, 219, 1))'
    },
    bkgBGreenRev : {
        background: 'linear-gradient(to bottom, rgba(52, 119, 219, 1), rgba(38,166,131,1))'
    },
    bkgGreen : {
        backgroundColor: '#26a65b',
        background: 'linear-gradient(to bottom, rgba(38,166,91,1), rgba(30,155,95,1))'

    },
    bkgGreenRev : {
        backgroundColor: '#26a65b',
        background: 'linear-gradient(to bottom, rgba(30,155,95,1), rgba(38,166,91,1))'
    },
    bkgBlue : {
        backgroundColor: '#3477DB'
    },
    dev : {
        // borderStyle: 'solid',
        // borderWidth: '2px'
    }
};

export default generic;
