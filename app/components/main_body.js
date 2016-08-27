console.log("loading main body");

import React from 'react';

import BlogContainer from './blog_container.js'


var MainBody = React.createClass({
    render: function(){
        if (this.props.view == 'blog') {
            return (<BlogContainer />)
        }
    }
});

export default MainBody;