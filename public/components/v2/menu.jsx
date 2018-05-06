var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
window.$ = $;

require('./menu.scss');

class Menu extends React.Component{

    constructor(props, context){
        super(props, context);
    }

    render(){

        return (
            <div className="menu">
                <div className="logo">
                    Logo
                </div>
                <nav>
                    <a className="home menu-item" href="#">
                        <i className="fa fa-home"></i>
                        <span>Home</span>
                    </a>
                </nav>
            </div>
        );
    }
}

module.exports = Menu;