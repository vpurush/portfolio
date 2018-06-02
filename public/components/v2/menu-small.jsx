var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
const { Link } = require('react-router-dom');
const Mobile = require("../../utils/responsive-decorators/mobile.js");
window.$ = $;


@Mobile
class MenuSmall extends React.Component{

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
                    <div className="circle home-circle">
                        <Link to="/home" className="home menu-item" onClick={this.hide}>
                            <i className="material-icons">
                                home
                            </i>
                        </Link>
                    </div>
                    <div className="circle contact-circle">
                        <Link to="/contact" className="contact menu-item" onClick={this.hide}>
                            <i className="material-icons">
                                mail
                            </i>
                        </Link>
                    </div>
                    <div className="circle skills-circle">
                        <Link to="/skills" className="skills menu-item" onClick={this.hide}>
                            <i className="material-icons">
                                assignment
                            </i>
                        </Link>
                    </div>
                </nav>
                <div className="menu-overlay"  onClick={this.hide}>
                </div>
                {/* <i className="pull-menu-out material-icons">forward</i> */}
            </div>
        );
    }
}

module.exports = MenuSmall;