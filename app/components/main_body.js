console.log("loading main body");

import React from 'react';

import BlogContainer from './blog_container.js'
import ProjectsContainer from './projects_container.js'

var MainBody = React.createClass({
    render: function(){
        if (this.props.view == 'Blog') {
            return (<BlogContainer />)
        };
        if (this.props.view == 'Live Projects') {
            return (<ProjectsContainer />)
        };
    }
});

export default MainBody;
