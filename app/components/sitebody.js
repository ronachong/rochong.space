console.log("loading site body");

import React from 'react';

import generic from '../generic_styles.js'
import MainBody from './main_body.js'
import MainMenu from './main_menu.js'

const styles = {
    sitebody : {
        flexGrow: 1,            // ensure that sitebody expands to space available
    },
    mainview : {
        display: 'flex',        // ensure that cmps in sitebody can expand
        flexDirection: 'row'    // arrange cmps in sitebody horizontally
    }
};

var SiteBody = React.createClass({
    render: function(){
        if (this.props.view == 'main') {
            return (<MainView />)
        }
    }
})

var MainView = React.createClass({
    getInitialState: function() {
        return {
            options: ['Blog', 'Live Projects', 'Resource Log', 'Post-Mortems'],
            view: 'blog'
        }
    },
    render: function(){
        return (
            <section style={Object.assign({}, styles.sitebody, styles.mainview, generic.dev)} >
                <MainBody view={this.state.view} />
                <MainMenu options={this.state.options} />
            </section>
        )
    }
})

export default SiteBody;
