var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
const { Link } = require('react-router-dom');
const Desktop = require("../../utils/responsive-decorators/desktop.js");
window.$ = $;


@Desktop
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
                    <Link to="/skills" className="skills menu-item" href="#">
                        <i className="fa fa-envelope"></i>
                        <span>Skills</span>
                    </Link>
                </nav>
            </div>
        );
    }
}

module.exports = Menu;