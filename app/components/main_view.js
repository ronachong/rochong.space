console.log("loading main view");

import React from 'react';

import generic from '../generic_styles.js'
import MainBody from './main_body.js'
import MainMenu from './main_menu.js'

const styles = {
    sitebody : {
        flexGrow: 1,            // ensure that sitebody expands to space available
        padding: '3% 0 3% 3%',  // same padding as other views, except on right for sidemenu
        overflowY: 'auto'       // scrollbar for vertical overflow
    },
    mainview : {
        display: 'flex',        // ensure that cmps in sitebody can expand
        flexDirection: 'row'    // arrange cmps in sitebody horizontally
    }
};

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
            <section style={Object.assign({}, styles.sitebody, styles.mainview, generic.dev)} >
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
