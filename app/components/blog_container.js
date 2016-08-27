console.log("loading blog container");

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

var tobeimported = [
    {
        id: 1,
        title: "Foo title",
        text: "Foo text"
    },
    {
        id: 2,
        title: "Foo title 2",
        text: "Foo text 2"
    }
];

var BlogContainer = React.createClass({
    render: function(){
        var blogs = tobeimported.map(function(entry){
            return <Blog title={entry.title} text={entry.text} key={entry.id} />
        });
        return (
            <section style={Object.assign({}, styles.mainbody, generic.dev)} >
                {blogs}
            </section>
        );
    }
});

const Blog = (props) => (
    <section style={Object.assign({}, styles.blog, generic.dev)} >
        <h2>{props.title}</h2>
        <p>{props.text}</p>
    </section>
);

export default BlogContainer;
