var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
const { Link } = require('react-router-dom');
window.$ = $;

class MachineLearning extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <section className="ml">
                <div className="left-pane">
                    <Link to="/ml/tictactoe" className="tictactoe-link" onClick={this.hide}>
                        <img src="/images/tic-tac-toe.png" alt="tic tac toe" />
                        <h3 className="name">tic-tac-toe</h3>
                    </Link>
                </div>
                <div className="right-pane">
                </div>
            </section>
        );
    }
}

module.exports = MachineLearning;