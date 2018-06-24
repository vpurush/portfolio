var React = require('react');
var ReactDOM = require("react-dom");
const Home = require("./home.jsx");
const Menu = require("./menu.jsx");
const MenuMedium = require("./menu-medium.jsx");
const MenuSmall = require("./menu-small.jsx");
const Contact = require("./contact.jsx");
const Skills = require("./skills.jsx");
const MachineLearning = require("./ml.jsx");
const TicTacToe = require("./tictactoe.jsx");
const { HashRouter, BrowserRouter, Route, Redirect, Switch } = require('react-router-dom');
var $ = require("jquery");
window.$ = $;

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    render() {

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
                            <Route path="/skills" component={Skills} />
                            <Route path="/ml/tictactoe" component={TicTacToe} />
                            <Route path="/ml" component={MachineLearning} />
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
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}


module.exports = App;