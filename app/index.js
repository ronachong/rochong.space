console.log("Test");

var React = require('react');
var ReactDOM = require('react-dom');

var Site = React.createClass({
    getInitialState: function() {
        return {
            title: 'rochong.space'
        }
    },
    render: function () {
        return (
            <Header title={this.state.title} />
            <div>Testing</div>
        )
    }
});

ReactDOM.render(<Test />, document.getElementById('app'));

//var app = document.getElementById('app');
//app.innerHTML =
