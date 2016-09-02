console.log("loading projects container");

import React from 'react';

import generalized from '../generalized_styles.js';
import generic from '../generic_styles.js';

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
    projectHeadings : generalized.contentSubheadings,
    projectDate : {
        fontSize: '1em',
        fontStyle: 'italic',
        marginTop: '0'
    },
    iframe_container : {
        width: '275px',
        height: '300px',
        overflow: 'hidden',          // hide overflow from iframe
        marginBottom: '1em'
    },
    projectText : {
        textAlign: 'center'
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
        date: "Ongoing",
        text: "(To be added once it's live) A web app with similar functionality to AirBnB, done as a learning exercise. Backend: Rest API built with Flask, connecting to a MySQL database. Frontend: React.",
        url: ""
    },
    {
        id: 2,
        title: "Twitter Clone",
        date: "Apr 2016",
        text: "A responsive mock social media site with multiple viewports, a content-loading function (AJAX), and questionable color choices. Done as a learning exercise. Built with HTML, CSS3, Javascript and PHP.",
        url: "http://krisbredemeier.github.io/holbertonschool-impossible_octopus_fitness/index.html"
    },
    {
        id: 3,
        title: "GoldCrests",
        date: "July 2016",
        text: "A service aimed at optimizing social media presence on Twitter by gaining followers for you; built in one day with other Holberton students as a commando project. Though not fully functional, it utilizes OAuth authentication, a Flask api, and a quick frontend done with Bootstrap.",
        url: "http://goldcrests.hbtn.io"
    },
    {
        id: 4,
        title: "WikiKitty",
        date: "Jun 2016",
        text: "To be added",
        url: ""
    },
    {
        id: 5,
        title: "Double Lariat",
        date: "",
        text: "To be added",
        url: ""
    },
    {
        id: 6,
        title: "Kusamochi",
        date: "Dec 2015",
        text: "A personal website with some dynamic content built as part of my application to Holberton School. Built with HTML, CSS3, and vanilla Javascript.",
        url: "http://kusamochi.com"
    }
];

var ProjectsContainer = React.createClass({
    render: function(){
        var projects = tobeimported.map(function(project){
            return <Project
                title={project.title}
                date={project.date}
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
        <h2 style={styles.projectHeadings} >
            <a href={props.url} >{props.title}</a>
        </h2>
        <h3 style={styles.projectDate} >{props.date}</h3>
        <a href={props.url} >
            <div style={styles.iframe_container} >
                <iframe src={props.url} style={styles.iframe} ></iframe>
            </div>
        </a>
        <p style={styles.projectText} >{props.text}</p>
    </section>
);

export default ProjectsContainer;
