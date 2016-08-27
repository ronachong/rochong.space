console.log("loading site body");

import React from 'react';

import generic from '../generic_styles.js'

const styles = {
    mainbody : {
        width: '80%'
    },
    blog : {
        //
    }
};

var MainBody = React.createClass({
    render: function(){
        if (this.props.view == 'blog') {
            return (<Blog />)
        }
    }
})

const Blog = (props) => (
    <section style={Object.assign({}, styles.blog, styles.mainbody, generic.dev)} >
        <h2>Some blog title here.</h2>
        <p>Some blog text here.</p>
    </section>
)

export default MainBody;
