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
        padding: '0 4em'            // padding of 4em left and right of cmps
    }
};

var Site = React.createClass({
    getInitialState: function() {
        return {
            title: 'rochong',
            view_options: ['Main', 'Resume', 'About']
            view: 'main'
        }
    },
    render: function () {
        return (
            <div style={Object.assign({}, styles.main, generic.dev)} >
                <Header title={this.state.title} />
                <Menu options={this.state.view_options} />
                <SiteBody view={this.state.view} />
                <Footer />
            </div>
        )
    }
});

ReactDOM.render(<Site />, document.getElementById('app'));
