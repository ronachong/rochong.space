console.log("loading projects container");

import React from 'react';

import generic from '../generic_styles.js'

const styles = {
    mainbody : {
        width: '80%',
        overflowY: 'auto'
    },
    project : {
        display: 'flex',            // set flex such that children can be posxned
        flexDirection: 'column',    // arrange children vertically
        alignItems: 'center'        // center content horizontally
    },
    iframe_container : {
        width: '275px',
        height: '300px',
        overflow: 'hidden'          // hide overflow from iframe
    },
    iframe : {
        width: '1100px',
        height: '1200px',
        msZoom: '0.25',
        MozTransform: 'scale(.25)',
        MozTransformOrigin: '0 0',
        OTransform: 'scale(.25)',
        OTransformOrigin: '0 0',
        WebkitTransform: 'scale(.25)',
        WebkitTransformOrigin: '0 0'
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
        url: "http://stilettoheelsteam.net"
    },
    {
        id: 3,
        title: "GoldCrests",
        text: "Foo text 2",
        url: "http://stilettoheelsteam.net"
    },
    {
        id: 4,
        title: "WikiKitty",
        text: "Foo text 2",
        url: "http://stilettoheelsteam.net"
    },
    {
        id: 5,
        title: "Double Lariat",
        text: "Foo text 2",
        url: "http://stilettoheelsteam.net"
    },
    {
        id: 6,
        title: "Kusamochi",
        text: "Foo text 2",
        url: "http://stilettoheelsteam.net"
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
        <a href={props.url} >
            <div style={styles.iframe_container} >
                <iframe src={props.url} style={styles.iframe} ></iframe>
            </div>
        </a>
        <p>{props.text}</p>
    </section>
);

export default ProjectsContainer;
