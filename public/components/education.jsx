var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");

require('./education.scss');

class Education extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            //selectedEducationItem: 'high-school'
        };
        this.itemClick = this.itemClick.bind(this);
    }

    itemClick(itemName){
        return () => {
            this.setState({selectedEducationItem: itemName, animate: false});
            console.log("click", this.state);
        };
    }
    renderdom(){
        var educationListPosition = 'middle';
        var educationDetails;
        if(this.state.selectedEducationItem == 'high-school'){
            educationDetails = (
                <div className="education-details">
                    <div>Finished my high school at Sri Krishnaswamy college of engineering at Chennai in India. Graduated in first class with distiction scoring 89%. Took part in various extracurricular activities such as karate, running and culturals.</div>
                </div>);
        }else if(this.state.selectedEducationItem == 'college'){
            educationDetails = (
                <div className="education-details">
                    <div> my high school at Sri Krishnaswamy college of engineering at Chennai in India. Graduated in first class with distiction scoring 89%. Took part in various extracurricular activities such as karate, running and culturals.</div>
                </div>);            
        }else if(this.state.selectedEducationItem == 'certifications'){
            educationDetails = (
                <div className="education-details">
                    <div>Finished my high  at Sri Krishnaswamy college of engineering at Chennai in India. Graduated in first class with distiction scoring 89%. Took part in various extracurricular activities such as karate, running and culturals.</div>
                </div>);
        }
        // if(this.state.selectedEducationItem){
        //     educationListPosition = 'top';
        // }
        return (
            <div className="education">
                <div className={"education-list " + educationListPosition}>
                    <div className="item high-school">
                        <div className="education-icon high-school">
                        </div>
                        <div className="education-details">
                            <div className="name">High School</div>
                            <div className="description">Finished my high school at Sri Krishnaswamy matriculation higher secondary school at Chennai in India. Graduated in first class with distinction scoring 89%. Took part in various extracurricular activities such as karate, running and culturals.</div>
                        </div>
                    </div>
                    <div className="item college">
                        <div className="education-icon college">
                        </div>
                        <div className="education-details">
                            <div className="name">College</div>
                            <div className="description">Graduated from SSN College of Engineering as an Electronics and Communication engineer in first class with distinction. Took part in various extracurricular activities such as conducting events in symposiums, participating in symposiums in other colleges.</div>
                        </div>
                    </div>
                    <div className="item certifications">
                        <div className="education-icon certifications">
                        </div>
                        <div className="education-details">
                            <div className="name">Certifications</div>
                            <div className="description">Have got myself certified in several areas such as secure coding practices, Machine Learning, HTML5, CSS3 and Javascript, web application development with .NET framework 4 </div>
                        </div>
                    </div>
                    {/* <div className={"item " + (this.state.selectedEducationItem == 'college' ? "active" : "")} onClick={this.itemClick('college')}>
                        <span className="name">College</span>
                    </div>
                    <div className={"item " + (this.state.selectedEducationItem == 'certifications' ? "active" : "")} onClick={this.itemClick('certifications')}>
                        <span className="name">Certifications</span>
                    </div> */}
                </div>
                {educationDetails}
                {/*<svg viewBox="0 0 500 500">
                    <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                    <text width="500">
                        <textPath xlinkHref="#curve">
                        Dangerous Curves Ahead
                        </textPath>
                    </text>
                </svg>*/}
            </div>
        );
    }

    rendersvg(){
        var educationDetails, line;

        if(this.state.selectedEducationItem == 'high-school'){
            educationDetails = (
                <foreignObject x="120" y="40" width="80" height="60">
                    <p className={"education-details" + (this.state.animate ? " animate" : "")}>
                        Finished my high school at Sri Krishnaswamy college of engineering at Chennai in India. Graduated in first class with distiction scoring 89%. Took part in various extracurricular activities such as karate, running and culturals.
                    </p>
                </foreignObject>);
            line = (
                <g className="hs-line">
                    <line x1="85" y1="38" x2="105" y2="38" className={"hs-line-one" + (this.state.animate ? " animate" : "")} fill="none"/>
                    <path d="M105 38
                            l0 -10
                            l20 0
                            a0.5 0.5 0 1 0 1 0
                            a0.5 0.5 0 1 0 -1 0" className={"hs-line-two" + (this.state.animate ? " animate" : "")} fill="none" />
                    <path d="M105 38
                            l0 30
                            l20 0
                            a0.5 0.5 0 1 0 1 0
                            a0.5 0.5 0 1 0 -1 0" className={"hs-line-three" + (this.state.animate ? " animate" : "")} fill="none"/>
                </g>);
        }else if(this.state.selectedEducationItem == 'college'){
            educationDetails = (
                <foreignObject x="120" y="40" width="80" height="60">
                    <p className={"education-details" + (this.state.animate ? " animate" : "")}>
                        t Sri Krishnaswamy college of engineering at Chennai in India. Graduated in first class with distiction scoring 89%. Took part in various extracurricular activities such as karate, running and culturals.
                    </p>
                </foreignObject>);
            line = (
                <g className="hs-line">
                    <line x1="85" y1="48" x2="105" y2="48" className={"hs-line-one" + (this.state.animate ? " animate" : "")} fill="none"/>
                    <path d="M105 48
                            l0 -20
                            l20 0
                            a0.5 0.5 0 1 0 1 0
                            a0.5 0.5 0 1 0 -1 0" className={"hs-line-two" + (this.state.animate ? " animate" : "")} fill="none" />
                    <path d="M105 48
                            l0 20
                            l20 0
                            a0.5 0.5 0 1 0 1 0
                            a0.5 0.5 0 1 0 -1 0" className={"hs-line-three" + (this.state.animate ? " animate" : "")} fill="none"/>
                </g>);            
        }else if(this.state.selectedEducationItem == 'certifications'){
            educationDetails = (
                <foreignObject x="120" y="40" width="80" height="60">
                    <p className={"education-details" + (this.state.animate ? " animate" : "")}>
                        Finished my high school at f engineering at Chennai in India. Graduated in first class with distiction scoring 89%. Took part in various extracurricular activities such as karate, running and culturals.
                    </p>
                </foreignObject>);
            line = (
                <g className="hs-line">
                    <line x1="85" y1="58" x2="105" y2="58" className={"hs-line-one" + (this.state.animate ? " animate" : "")} fill="none"/>
                    <path d="M105 58
                            l0 -30
                            l20 0
                            a0.5 0.5 0 1 0 1 0
                            a0.5 0.5 0 1 0 -1 0" className={"hs-line-two" + (this.state.animate ? " animate" : "")} fill="none" />
                    <path d="M105 58
                            l0 10
                            l20 0
                            a0.5 0.5 0 1 0 1 0
                            a0.5 0.5 0 1 0 -1 0" className={"hs-line-three" + (this.state.animate ? " animate" : "")} fill="none"/>
                </g>);
        }

        setTimeout(() => {
            this.setState({animate: true});
        }, 10);

        return (<svg className="education" viewBox="0 0 230 100" preserveAspectRatio="xMidYMid meet">
            <text x="55" y="40" className="education-item" onClick={this.itemClick('high-school')}>
                High School
            </text>
            <text x="55" y="50" className="education-item" onClick={this.itemClick('college')}>
                College
            </text>
            <text x="55" y="60" className="education-item" onClick={this.itemClick('certifications')}>
                Certifications
            </text>
            {line}
            {educationDetails}
        </svg>);
    }

    renderNewSVG(){

        return (<svg className="education-new-svg" viewBox="0 0 230 100" preserveAspectRatio="xMidYMid meet">
                    <g className="hs">
                        <path className="base-path" id="hs-base-path" d="M30 30
                                    q10 -10 20 0" stroke="white" fill="none">
                        </path>
                        <path className="outline-path" d="M30 32
                                    q10 -10 20 0
                                    l4 -4
                                    q-14 -14 -28 0
                                    z" stroke="black" fill="none">
                        </path>

                        <text className="text">
                            <textPath xlinkHref="#hs-base-path" textAnchor="start" className="text-path">High School</textPath>
                        </text>
                    </g>
                    <g className="college">
                        <path className="base-path" id="hs-base-path" d="M30 30
                                    q10 -10 20 0" stroke="white" fill="none">
                        </path>
                        <path className="outline-path" d="M30 32
                                    q10 -10 20 0
                                    l4 -4
                                    q-14 -14 -28 0
                                    z" stroke="black" fill="none">
                        </path>

                        <text className="text">
                            <textPath xlinkHref="#hs-base-path" textAnchor="start" className="text-path">&nbsp;&nbsp;&nbsp;College</textPath>
                        </text>
                    </g>
                    <foreignObject x="120" y="40" width="80" height="60">
                        <p className={"education-details" + (this.state.animate ? " animate" : "")}>
                            Finished my high school at f engineering at Chennai in India. Graduated in first class with distiction scoring 89%. Took part in various extracurricular activities such as karate, running and culturals.
                        </p>
                    </foreignObject>

                    {/*<circle cx="30" cy="30" r="5" stroke-width=".5" fill="none" />*/}

                </svg>);
    }

    render(){
        return this.renderdom();
    }
}

module.exports = Education;