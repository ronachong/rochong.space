console.log("loading index");

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Menu from './components/menu.js';
import Footer from './components/footer.js';

var Site = React.createClass({
    getInitialState: function() {
        return {
            title: 'rochong.space'
        }
    },
    render: function () {
        return (
            <div>
                <Header title={this.state.title} />
                <Menu />
                <p>Text</p>
                <Footer />
            </div>
        )
    }
});

ReactDOM.render(<Site />, document.getElementById('app'));
