console.log("loading main view");

import React from 'react';

import generic from '../generic_styles.js'
import generalized from '../generalized_styles.js';
import MainBody from './main_body.js'
import MainMenu from './main_menu.js'

const styles = {
    sitebody : {
        flexGrow: 1,            // ensure that sitebody expands to space available
        padding: '3%',
        overflowY: 'auto'       // scrollbar for vertical overflow
    },
    resumeview : {
        display: 'flex',        // ensure that cmps in sitebody can expand
        flexDirection: 'column'    // arrange cmps in sitebody horizontally
    },
    resumerow : {
        display: 'flex',
        flexDirection: 'row'
    },
    resumerow1 : {
        flexShrink: 0           // prevent second row from overlapping with first
    },
    resumerow2 : {

    },
    resumecol : {
        display: 'flex',
        flexDirection: 'column'
    },
    resumecolL : {
        width: '65%',
        paddingRight: '8%'
    },
    resumecolR : {
        width: '35%'
    },
    h1 : generalized.contentHeadings,
    h2 : generalized.contentSubheadings,
    h3 : {
        fontSize: '1.2em'
    },
    h4 : {
        fontSize: '1.2em',
        fontStyle: 'italic'
    },
    some_spacing : {
        marginBottom: '7px'
    },
    less_spacing : {
        marginBottom: 0
    },
    no_spacing : {
        marginTop: 0,
        marginBottom: 0
    }
};

const ResumeView = (props) => (
    <section style={Object.assign({}, styles.sitebody, styles.resumeview, generic.dev)} >
        <ResumeRow1 />
        <ResumeRow2 />
    </section>
);

export default ResumeView;

const ResumeRow1 = (props) => (
    <section style={Object.assign({}, styles.resumerow, styles.resumerow1)} >
        <ResumeColL />
        <ResumeColR />
    </section>
);

const ResumeColL = (props) => (
    <section style={Object.assign({}, styles.resumecol, styles.resumecolL)} >
        <ResumeTitle />
        <ResumeSummary />
        <ResumeExperience />
    </section>
);

const ResumeColR = (props) => (
    <section style={Object.assign({}, styles.resumecol, styles.resumecolR)} >
        <ResumeContact />
        <ResumeEducation />
        <ResumeLanguages />
    </section>
);

const ResumeRow2 = (props) => (
    <section style={styles.resumerow} >
        <ResumeProjects />
    </section>
);

const ResumeTitle = (props) => (
    <section>
        <h1 style={styles.h1} >Rona Chong</h1>
        <p>
            <a href="https://github.com/ronachong">https://github.com/ronachong</a> | <a href="https://www.rochong.space">https://www.rochong.space</a>
        </p>
    </section>
);

const ResumeContact = (props) => (
    <section>
        <p style={styles.some_spacing} >12 Beckett St.</p>
        <p style={styles.some_spacing} >San Francisco, CA 94133</p>
        <p style={styles.some_spacing} >(909) 244-4045</p>
        <p style={styles.some_spacing} >ronachong@gmail.com</p>
    </section>
);

const ResumeSummary = (props) => (
    <section>
        <h2 style={styles.h2}>professional summary</h2>
        <p>
            A budding software engineer with enthusiasm for the whole software
            stack: front-end, back-end, and sysadmin.
        </p>
        <p>
            Looking for a dynamic working environment with opportunities for
            growth working on a user-facing product built with exceptional or
            innovative design.
        </p>
    </section>
);

const ResumeEducation = (props) => (
    <section>
        <h2 style={styles.h2}>education</h2>
        <h3 style={Object.assign({}, styles.h3, styles.no_spacing)} >Holberton School</h3>
        <p style={styles.no_spacing} >San Francisco, CA</p>
        <p style={styles.no_spacing} >Fullstack Software Engineering</p>
        <p style={styles.no_spacing} >Jan 2016 - Jan 2018</p>
        <br />
        <h3 style={Object.assign({}, styles.h3, styles.no_spacing)} >Scripps College</h3>
        <p style={styles.no_spacing} >Claremont, CA</p>
        <p style={styles.no_spacing} >BA in Sociology</p>
        <p>Aug 2011 - July 2015</p>
    </section>
);

const ResumeExperience = (props) => (
    <section>
        <h2 style={styles.h2}>work experience</h2>
        <p>IT Summer Intern | May 2013 - Aug 2015</p>
        <p>
            Closely collaborated with user support staff on major projects such
            as processing and deployment of new equipment (90+ computer systems/
            summer), training new interns, creating new documentation and
            procedures, and organizing New Student Orientation.
        </p>
    </section>
);

const ResumeLanguages = (props) => (
    <section>
        <h2 style={styles.h2}>languages</h2>
        <p>Proficient in: C, Python, Swift, Bash, MySQL, HTML, CSS, Javascript</p>
        <p>Familiar with: Ruby, JQuery, HMM</p>
    </section>
);

var ResumeProjects = React.createClass({
    getInitialState: function() {
        return {
            projectList: [
                {
                    title: 'Double Lariat',
                    technology: '( Python / VPython )',
                    description: 'A game incorporating linear and spherical collisions written in Python and rendered with VPython.'
                },
                {
                    title: 'Holberton-Garneau Joint Learning Exercise',
                    technology: '( Ruby / Ruby Koans / SF OpenData )',
                    description: 'Organization of a full-day meetup including a live coding session and data-viz challenge for 40 attendees.'
                },
                {
                    title: 'Twitter Clone',
                    technology: '( HTML / CSS / Javascript / PHP )',
                    description: 'A mock Twitter clone/social media website with dynamic content-loading and responsive web design.'
                },
                {
                    title: 'Basic Shell',
                    technology: '( C / Valgrind )',
                    description: 'A functional shell with forked processes and built-in commands.'
                },
                {
                    title: 'Neural-Style Container',
                    technology: '( Deep Learning / Docker / Python )',
                    description: 'A Docker image and basic UI for automated deployment and usage of jcjohnson’s neural-style program.'
                },
                {
                    title: 'AirBnB Clone',
                    technology: '( React.js / Webpack / Node.js / Memcached / MySQL / NoSQL / Flask / Peewee )',
                    description: 'A clone of AirBnB implementing a rest API, MySQL database, OAuth2, and image storage. In-progress.'
                },
                {
                    title: 'System Administration',
                    technology: '( PagerDuty / Wavefront / Apache / iptables / bind9 / Capistrano )',
                    description: 'On-call maintenance of multiple websites on load-balanced servers and self-hosted nameservers.'
                }
            ]
        }
    },
    render: function(){
        var projects = this.state.projectList.map(function(project) {
            return (
                <div>
                    <h3 style={Object.assign({}, styles.h3, styles.less_spacing)} >{project.title}</h3>
                    <h4 style={Object.assign({}, styles.h4, styles.less_spacing)} >{project.technology}</h4>
                    <p>{project.description}</p>
                </div>
            );
        });
        return (
            <section>
                <h2 style={styles.h2} >projects</h2>
                {projects}
            </section>
        );
    }
});

/*
*/
