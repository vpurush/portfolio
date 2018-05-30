var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
var TechnicalSkills = require("./technicalSkills.jsx");
window.$ = $;

class Skills extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <section className="skills">
                <div className="left-pane">
                    <div className="description">
                        <p>
                            I'm a developer with a passion for programming languages like Javascript, C# and Python.
                        </p>
                        <p>
                            I also have keen interest in creating striking user interface using CSS and HTML.
                        </p>
                        <p>
                            Machine learning is a hobby of mine.
                        </p>
                    </div>
                </div>
                <div className="right-pane">
                    <TechnicalSkills></TechnicalSkills>
                </div>
            </section>
        );
    }
}

module.exports = Skills;