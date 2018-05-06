var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
const { Link } = require('react-router-dom');
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
                </div>
                <nav>
                    <Link to="/home" className="home menu-item" href="#">
                        <i className="fa fa-home"></i>
                        <span>Home</span>
                    </Link>
                    <Link to="/contact" className="contact menu-item" href="#">
                        <i className="fa fa-envelope"></i>
                        <span>Contact</span>
                    </Link>
                </nav>
            </div>
        );
    }
}

module.exports = Menu;