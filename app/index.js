console.log("loading index");

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.js';
import Menu from './components/menu.js';
import SiteBody from './components/sitebody.js'
import Footer from './components/footer.js';

const styles = {
    main : {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
    }
};

var Site = React.createClass({
    getInitialState: function() {
        return {
            title: 'rochong.space'
        }
    },
    render: function () {
        return (
            <div style={styles.main} >
                <Header title={this.state.title} />
                <Menu />
                <SiteBody />
                <Footer />
            </div>
        )
    }
});

ReactDOM.render(<Site />, document.getElementById('app'));
