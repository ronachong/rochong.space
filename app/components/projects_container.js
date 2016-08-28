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

var tobeimported = [
    {
        id: 1,
        title: "Foo project title",
        text: "Foo text"
    },
    {
        id: 2,
        title: "Foo project title 2",
        text: "Foo text 2"
    }
];

var ProjectsContainer = React.createClass({
    render: function(){
        var projects = tobeimported.map(function(project){
            return <Project title={project.title} text={project.text} key={project.id} />
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
        <h2>{props.title}</h2>
        <p>{props.text}</p>
    </section>
);

export default ProjectsContainer;
