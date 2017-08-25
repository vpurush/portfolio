var React = require('react');
var ReactDOM = require("react-dom");
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var $ = require("jquery");
window.$ = $;
var ProfessionalExperience = require('./professionalExperience.jsx');
var TechnicalSkills = require('./technicalSkills.jsx');
var Education = require('./education.jsx');
var PersonalInfo = require('./personalInfo.jsx');
var GunScope = require('../reusable/gun-scope.jsx');


require('./app.scss');

class App extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state = {
            tabs: ['ProfessionExperience', "Education", "TechnicalSkills", "PersonalInfo"],
            activeTab: 'ProfessionalExperience'
        };
    }

    render(){
        var childComponent = null;

        if(this.state.activeTab == 'ProfessionalExperience'){
            childComponent = (<ProfessionalExperience></ProfessionalExperience>);
        }else if(this.state.activeTab == 'Education'){
            childComponent = (<Education></Education>);
        }else if(this.state.activeTab == 'TechnicalSkills'){
            childComponent = (<TechnicalSkills></TechnicalSkills>);
        }else if(this.state.activeTab == 'PersonalInfo'){
            childComponent = (<PersonalInfo></PersonalInfo>);
        }

        return (
            <div className="app container-fluid">
                <Header></Header>
                <div className="content">
                    <div className="row">
                        <div className="col-md-12 section-names">
                            <div className={`section-name ${this.state.activeTab == 'ProfessionalExperience' ? 'active' : ''}`} onClick={function(){ this.setState({activeTab: 'ProfessionalExperience'}); }.bind(this)}>
                                Professional Experience
                            </div>
                            <div className={`section-name ${this.state.activeTab == 'Education' ? 'active' : ''}`} onClick={function(){ this.setState({activeTab: 'Education'}); }.bind(this)}>
                                Education
                            </div>
                            <div className={`section-name ${this.state.activeTab == 'TechnicalSkills' ? 'active' : ''}`} onClick={function(){ this.setState({activeTab: 'TechnicalSkills'}); }.bind(this)}>
                                Technical Skills
                            </div>
                            <div className={`section-name ${this.state.activeTab == 'PersonalInfo' ? 'active' : ''}`} onClick={function(){ this.setState({activeTab: 'PersonalInfo'}); }.bind(this)}>
                                Personal Info
                            </div>
                        </div>
                    </div>
                    <div className="row sections">
                        <div className="col-md-12">
                            {childComponent}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

module.exports = App;