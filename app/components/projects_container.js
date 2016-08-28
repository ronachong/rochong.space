console.log("loading projects container");

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

const tobeimported = [
    {
        id: 1,
        title: "Foo project title",
        text: "Foo text",
        url: "https://www.rochong.space"
    },
    {
        id: 2,
        title: "Foo project title 2",
        text: "Foo text 2",
        url: "https://www.kusagashi.com"
    }
];

var ProjectsContainer = React.createClass({
    render: function(){
        var projects = tobeimported.map(function(project){
            return <Project
                title={project.title}
                text={project.text}
                url={project.url}
                key={project.id}
            />
        });
        return (
            <section style={Object.assign({}, styles.mainbody, generic.dev)} >
                {projects}
            </section>
        );
    }
});

const Project = (props) => (
    <section style={Object.assign({}, styles.blog, generic.dev)} >
        <h2>
            <a href={props.url} >{props.title}</a>
        </h2>
        <p>{props.text}</p>
    </section>
);

export default ProjectsContainer;
