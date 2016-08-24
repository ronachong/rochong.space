console.log("loading index");

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';

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
                <p>Text</p>
            </div>
        )
    }
});

ReactDOM.render(<Site />, document.getElementById('app'));
