var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
window.$ = $;

class Contact extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div className="contact">
                <div className="left-pane">
                    <div className="group">
                        <div className="email">
                            <a href="mailto:vijayaraghavan1987@gmail.com">
                                <i className="fa fa-envelope" />
                            </a>
                            {/* <span>vijayaraghavan1987@gmail.com</span> */}
                        </div>
                        <div className="social-network linked-in">
                            <a href="https://www.linkedin.com/in/vpurush/">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className="group">
                        <div className="social-network facebook">
                            <a href="https://www.facebook.com/Vijayaraghavan.P">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                        </div>
                        <div className="social-network twitter">
                            <a href="https://twitter.com/vpurush">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Contact;