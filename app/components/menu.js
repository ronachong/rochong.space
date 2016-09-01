console.log("loading menu");

import Radium from 'radium';
import ReactStyleTransitionGroup from 'react-style-transition-group';
import React from 'react';

import generic from '../generic_styles.js';

const styles = {
    menu : {
        width: '55%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
        margin: '.7em auto 1em auto'
    },
    li : {
        textAlign: 'center'
    },
    button : {
        borderStyle: 'None',        // remove button border
        outline: 'None',            // remove focus after clicking on btn
        background: 'None'
    },
    h3 : {
        fontSize: '1.1em',
        padding: '.2em',
        margin: 0,
        ':hover' : {}
    },
    h3underline : {
        position: 'relative',
        top: '-1.8em',
        height: '2.1em',
        borderBottom: 'medium solid white',
        borderRadius: '.2em',
        // WebkitTransform: 'scaleX(1)',
        // transform: 'scaleX(1)',
        // WebkitTransition: 'all 0.3s ease-in-out 0s',
        // transition: 'all 0.3s ease-in-out 0s',
        //
        // ':hover': {
        //     WebkitTransform: 'scaleX(1)',
        //     transform: 'scale(1)'
        // }
    }
};

var tstyles = {
    h3underline : {
        enter: {
            transition: 'all 0.3s ease-in-out 0s',
            transform: 'scaleX(0)',
            opacity: '0'
        },
        enterActive: {
            transform: 'scaleX(1)',
            opacity: '1'
        },
        leave: {
            transition: 'all 0.3s ease-in-out 0s',
            transform: 'scaleX(1)',
            opacity: '1'
        },
        leaveActive: {
            transform: 'scaleX(0)',
            opacity: '0'
        }
    }
}


var Menu = React.createClass({
    render: function(){
        var listitems = this.props.options.map(function(option, index){
            return <MenuOption
                option={option}
                view={this.props.view}
                changeView={this.props.changeView}
                key={'menuOption-' + index}
            />
        }, this);
        return (
            <ul style={Object.assign({}, styles.menu, generic.dev)} >
                {listitems}
            </ul>
        );
    }
});

var MenuOption = React.createClass({
    handleClick: function(){
        // call function to change view of Site
        this.props.changeView(this.props.option)
    },
    render: function(){
        var appliedStyles = (
            this.props.option == this.props.view ? Object.assign({}, styles.h3, generic.textWhite) : styles.h3
        );
        return (
            <li style={styles.li} >
                <ReactStyleTransitionGroup component="div">
                    <button onClick={this.handleClick} style={styles.button} >
                        <div key="test" style={styles.h3underline} ></div>
                        <h2 key="option" style={appliedStyles} >{this.props.option}</h2>
                        { Radium.getState(this.state, 'option', ':hover') ? (
                            <OptionHighlight key={'optionHighlight-' + this.props.option} transitionStyles={tstyles.h3underline} />
                        ) : null }
                    </button>
                </ReactStyleTransitionGroup>
            </li>
        );
    }
});

const OptionHighlight = (props) => (
    <div style={styles.h3underline} ></div>
);

MenuOption = Radium(MenuOption);

export default Menu;
