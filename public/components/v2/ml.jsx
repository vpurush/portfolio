var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
const { Link } = require('react-router-dom');
const ChatBot = require('./chat-bot.jsx');
window.$ = $;

class MachineLearning extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <section className="ml">
                <div className="left-pane">
                    <Link to="/ml/tictactoe" className="home menu-item" onClick={this.hide}>
                        <h3 className="name">tic-tac-toe</h3>
                    </Link>
                </div>
                <div className="right-pane">
                </div>
                <ChatBot></ChatBot>
            </section>
        );
    }
}

module.exports = MachineLearning;