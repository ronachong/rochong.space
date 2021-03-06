console.log("loading site body");

import React from 'react';

import generic from '../generic_styles.js'
import MainView from './main_view.js'
import ResumeView from './resume_view.js'
import AboutView from './about_view.js'

var SiteBody = React.createClass({
    render: function(){
        if (this.props.view == 'Main') {
            return (<MainView />)
        };
        if (this.props.view == 'Resume') {
            return (<ResumeView />)
        };
        if (this.props.view == 'About') {
            return <AboutView />
        };
    }
});

export default SiteBody;
