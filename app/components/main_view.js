console.log("loading main view");

import React from 'react';

import generic from '../generic_styles.js'
import generalized from '../generalized_styles.js'
import MainBody from './main_body.js'
import MainMenu from './main_menu.js'

var styles = {
    mainContainer : generalized.siteBody,
    mainview : {
        display: 'flex',        // ensure that cmps in sitebody can expand
        flexDirection: 'row'    // arrange cmps in sitebody horizontally
    }
};

// remove right padding from main container, to account for side menu
styles.mainContainer.paddingRight = 0;

var MainView = React.createClass({
    getInitialState: function() {
        return {
            options: ['Blog', 'Live Projects', 'Resource Log', 'Post-Mortems'],
            view: 'Blog'
        }
    },
    changeView: function(newView){
        this.setState({
            view: newView
        });
    },
    render: function(){
        return (
            <section style={Object.assign({}, styles.mainContainer, styles.mainview, generic.dev)} >
                <MainBody view={this.state.view} />
                <MainMenu
                    options={this.state.options}
                    view={this.state.view}
                    changeView={this.changeView}
                />
            </section>
        )
    }
});

export default MainView;
