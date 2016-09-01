console.log("loading menu");

import Radium from 'radium';
import Transition from 'react-inline-transition-group';
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
        padding: '.4em',
        margin: 0,
        ':hover' : {}
    }
};

var tstyles = {
    h3underline : {
        base: {
            position: 'relative',
            top: '-0.2em',
            borderBottom: '0.22em solid white',
            borderRadius: '.2em',
            transform: 'scaleX(0)',
        },
        appear: {
            transform: 'scaleX(1)',
            transition: 'all 0.3s ease-in-out 0s'
        },
        leave: {
            transform: 'scaleX(0)',
            transition: 'all 0.3s ease-in-out 0s'
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
                <button onClick={this.handleClick} style={styles.button} >
                    <h2 key="option" style={appliedStyles} >{this.props.option}</h2>
                    <Transition
                        childrenBaseStyle={tstyles.h3underline.base}
                        childrenAppearStyle={tstyles.h3underline.appear}
                        childrenEnterStyle={tstyles.h3underline.appear}
                        childrenLeaveStyle={tstyles.h3underline.leave}
                        // onChildLeft=
                    >
                        { Radium.getState(this.state, 'option', ':hover') ? (
                            <OptionHighlight key={'optionHighlight-' + this.props.option} />
                        ) : null }
                    </Transition>
                </button>
            </li>
        );
    }
});

const OptionHighlight = (props) => (
    <div></div>
);

MenuOption = Radium(MenuOption);

export default Menu;
