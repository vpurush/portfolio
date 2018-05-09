var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
const { Link } = require('react-router-dom');
const Tablet = require("../../utils/responsive-decorators/tablet.js");
window.$ = $;


@Tablet
class MenuMedium extends React.Component{

    constructor(props, context){
        super(props, context);
        
        this.state = Object.assign(this.state || {}, {
            show: false
        });

        this.hide = this.hide.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    hide(e){
        e.stopPropagation();
        this.setState({
            show: false
        })
    }

    showMenu(e){
        e.stopPropagation();
        this.setState({
            show: true
        })
    }

    render(){
        return (
            <div className={this.state.show ? "menu" : "menu hidden-menu"} onClick={this.showMenu}>
                <div className="logo">
                </div>
                <nav>
                    <Link to="/home" className="home menu-item" onClick={this.hide}>
                        <i className="fa fa-home"></i>
                        <span>Home</span>
                    </Link>
                    <Link to="/contact" className="contact menu-item" onClick={this.hide}>
                        <i className="fa fa-envelope"></i>
                        <span>Contact</span>
                    </Link>
                </nav>
                <div className="menu-overlay"  onClick={this.hide}>
                </div>
                {/* <i className="pull-menu-out material-icons">forward</i> */}
            </div>
        );
    }
}

module.exports = MenuMedium;