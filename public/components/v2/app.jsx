var React = require('react');
var ReactDOM = require("react-dom");
const Home = require("./home.jsx");
const Menu = require("./menu.jsx");
const MenuMedium = require("./menu-medium.jsx");
const MenuSmall = require("./menu-small.jsx");
const Contact = require("./contact.jsx");
const { HashRouter, BrowserRouter, Route, Redirect, Switch } = require('react-router-dom');
var $ = require("jquery");
window.$ = $;

class App extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state = {
        };
    }

    render(){

        return (
            <HashRouter>
                <div className="app">
                    <div className="left-pane">
                        <Menu></Menu>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/contact" component={Contact} />
                            <Redirect from="*" to="/home" />
                        </Switch>
                    </div>
                    <MenuMedium></MenuMedium>
                    <MenuSmall></MenuSmall>
                </div>
            </HashRouter>
        );
    }
}

module.exports = App;