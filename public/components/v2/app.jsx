var React = require('react');
var ReactDOM = require("react-dom");
const Home = require("./home.jsx");
const Menu = require("./menu.jsx");
var $ = require("jquery");
window.$ = $;

require('./app.scss');

class App extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state = {
        };
    }

    render(){

        return (
            <div className="app">
                <div className="left-pane">
                    <Menu></Menu>
                </div>
                <div className="content">
                    <Home></Home>
                </div>
            </div>
        );
    }
}

module.exports = App;