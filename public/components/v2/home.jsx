var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
window.$ = $;

require('./home.scss');

class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div className="home">
                <div className="left-pane">
                    <span>
                        I'm <span className="name">Vijayaraghavan</span>,
                    </span>
                    <span>
                        a <span className="profession">web developer</span> by profession,
                    </span>
                    <span>
                        a <span className="hobby">machine learning</span> enthusiast by hobby.
                    </span>
                </div>
                <div className="right-pane">
                    <div>
                        <span className="message">
                            I would love you hear from you about any creative ideas that you might have.
                        </span>
                        <span>
                            <button className="contact-me">
                                Contact Me
                                <i className="fa fa-arrow-circle-right"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Home;