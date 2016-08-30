console.log("loading index");

import React from 'react';
import ReactDOM from 'react-dom';

import generic from './generic_styles.js';
import Header from './components/header.js';
import Menu from './components/menu.js';
import SiteBody from './components/sitebody.js'
import Footer from './components/footer.js';

const styles = {
    main : {
        flexGrow: 1,                // allow site div to take up browser window
        display: 'flex',
        flexDirection: 'column',    // arrange site components vertically
        //padding: '0 4em'            // padding of 4em left and right of cmps
    }
};

var Site = React.createClass({
    getInitialState: function() {
        return {
            title: 'rochong',
            viewOptions: ['Main', 'Resume', 'About'],
            view: 'Main'
        }
    },
    changeView: function(newView){
        this.setState({
            view: newView
        });
    },
    render: function () {
        return (
            <div style={Object.assign({}, styles.main, generic.dev)} >
                <Header
                    title={this.state.title}
                    options={this.state.viewOptions}
                    view={this.state.view}
                    changeView={this.changeView}
                />
                <SiteBody view={this.state.view} />
                <Footer />
            </div>
        )
    }
});

ReactDOM.render(<Site />, document.getElementById('app'));
