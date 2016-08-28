console.log("loading projects container");

import React from 'react';

import generic from '../generic_styles.js'

const styles = {
    mainbody : {
        width: '80%'
    },
    project : {
        display: 'flex',            // set flex such that children can be posxned
        flexDirection: 'column',    // arrange children vertically
        alignItems: 'center'        // center content horizontally
    }
};

const tobeimported = [
    {
        id: 1,
        title: "AirBnB Clone",
        text: "Foo text",
        url: "https://www.rochong.space"
    },
    {
        id: 2,
        title: "Twitter Clone",
        text: "Foo text 2",
        url: "https://www.kusagashi.com"
    },
    {
        id: 3,
        title: "GoldCrests",
        text: "Foo text 2",
        url: "https://www.kusagashi.com"
    },
    {
        id: 4,
        title: "WikiKitty",
        text: "Foo text 2",
        url: "https://www.kusagashi.com"
    },
    {
        id: 5,
        title: "Double Lariat",
        text: "Foo text 2",
        url: "https://www.kusagashi.com"
    },
    {
        id: 6,
        title: "Kusamochi",
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
    <section style={Object.assign({}, styles.project, generic.dev)} >
        <h2>
            <a href={props.url} >{props.title}</a>
        </h2>
        <a href={props.url} ><iframe src={props.url} ></iframe></a>
        <p>{props.text}</p>
    </section>
);

export default ProjectsContainer;
