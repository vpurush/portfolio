var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
window.$ = $;

class Home extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.contactMe = this.contactMe.bind(this);
    }

    contactMe(){
        this.props.history.push("/contact");
    }

    render() {

        return (
            <div className="home">
                <div className="left-pane">
                    <span>
                        I'm <span className="name">Vijay</span>,
                    </span>
                    <span>
                        an experienced <span className="profession">web developer</span>,
                    </span>
                    <span>
                        a beginner at <span className="hobby">NLP and ML</span>.
                    </span>
                </div>
                <div className="right-pane">
                    <div>
                        <span className="message">
                            I would love to hear from you...
                        </span>
                        <span>
                            <button className="contact-me" onClick={this.contactMe}>
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