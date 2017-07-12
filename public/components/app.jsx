var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");
var ProfessionalExperience = require('./professionalExperience.jsx');

class App extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state = {
            tabs: ['ProfessionExperience', "Education", "TechnicalSkills", "PersonalInfo"],
            activeTab: 'ProfessionalExperience'
        };
    }

    render(){
        var childComponent = (
            <ProfessionalExperience></ProfessionalExperience>
        );
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 sections">
                        <div className={`section ${this.state.activeTab == 'ProfessionalExperience' ? 'active' : ''}`} onClick={function(){ this.setState({activeTab: 'ProfessionalExperience'}); }.bind(this)}>
                            Professional Experience
                        </div>
                        <div className={`section ${this.state.activeTab == 'Education' ? 'active' : ''}`} onClick={function(){ this.setState({activeTab: 'Education'}); }.bind(this)}>
                            Education
                        </div>
                        <div className={`section ${this.state.activeTab == 'TechnicalSkills' ? 'active' : ''}`} onClick={function(){ this.setState({activeTab: 'TechnicalSkills'}); }.bind(this)}>
                            Technical Skills
                        </div>
                        <div className={`section ${this.state.activeTab == 'PersonalInfo' ? 'active' : ''}`} onClick={function(){ this.setState({activeTab: 'PersonalInfo'}); }.bind(this)}>
                            Personal Info
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 sections">
                        {childComponent}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = App;