console.log("loading blog container");

import React from 'react';

import generic from '../generic_styles.js';
import generalized from '../generalized_styles.js';
import text from '../content/2016-09-01_opening-post.js';

const styles = {
    mainbody : {
        width: '80%',
        overflowY: 'auto'
    },
    blog : {
        paddingRight: '5%'
    },
    blogspan : {
        display: 'flex',
        flexDirection: 'row'
    },
    blogh2 : generalized.contentHeadings,
    blogdate : {
        marginLeft: '7%',
        paddingTop: '1em',
        fontSize: '1em',
        fontStyle: 'italic'
    },
    p_indented : {
        margin: '3% 5%',
        fontFamily: 'Dosis'
    }
};

var text_20160901_00 = text.split("\n");

var tobeimported = [
    {
        id: 1,
        title: "Opening Post",
        date: '( 9/01/2016 )',
        text: text_20160901_00
    }
];

var BlogContainer = React.createClass({
    render: function(){
        var blogs = tobeimported.map(function(entry){
            return <Blog
                title={entry.title}
                date={entry.date}
                text={entry.text}
                key={entry.id}
            />
        });
        return (
            <section style={Object.assign({}, styles.mainbody, generic.dev)} >
                {blogs}
            </section>
        );
    }
});

var Blog = React.createClass({
    render : function() {
        var blogParagraphs = this.props.text.map(function(paragraph) {
            return (
                (paragraph[0] == '*') ? (
                    <p style={styles.p_indented} >{paragraph}</p>
                ) : <p>{paragraph}</p>
            );
        });
        return (
            <section style={Object.assign({}, styles.blog, generic.dev)} >
                <span style={styles.blogspan} >
                    <h2 style={styles.blogh2} >{this.props.title}</h2>
                    <h3 style={styles.blogdate} >{this.props.date}</h3>
                </span>
                {blogParagraphs}
            </section>
        )
    }
});

export default BlogContainer;
