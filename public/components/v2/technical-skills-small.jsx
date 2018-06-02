var React = require('react');
var Mobile = require("../../utils/responsive-decorators/mobile.js");

@Mobile
class TechnicalSkillsSmall extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            skills: [
                {
                    title: 'Javascript',
                    displayName: 'Javascript',
                    description: 'More than 7 years of experience in advanced javascript',
                    confidence: 9,
                    usage: 9,
                    tags: ["Have extensive experience"]
                },
                {
                    title: 'Knockout JS',
                    displayName: 'KnockoutJS',
                    description: 'Around 3 years of experience in building UI using Knockout JS',
                    confidence: 7,
                    usage: 4,
                    tags: ["Have experience"]
                },
                {
                    title: 'Angular JS',
                    displayName: 'AngularJS',
                    description: 'Around 3 years of experience in building UI using Angular JS 1.X',
                    confidence: 8,
                    usage: 8,
                    tags: ["Have extensive experience"]
                },
                {
                    title: 'React JS',
                    displayName: 'ReactJS',
                    description: 'Around 6 months of experience in React JS.',
                    confidence: 7,
                    usage: 9,
                    tags: ["Have experience"]
                },
                {
                    title: 'Redux',
                    displayName: 'Redux',
                    description: 'Have been working on Redux for 6 months. Have very good understanding.',
                    confidence: 7,
                    usage: 9,
                    tags: ["Have experience"]
                },
                {
                    title: '.NET Framework 4',
                    displayName: '.NET Framework 4',
                    description: 'Around 3 years of experience in building windows and web apps using .NET 4.0',
                    confidence: 5,
                    usage: 3,
                    tags: ["It has been a while"]
                },
                {
                    title: 'ASP.NET MVC 3',
                    displayName: 'ASP.NET MVC 3',
                    description: 'Around 2 years of experience in building web applications using ASP.NET MVC 3',
                    confidence: 5,
                    usage: 3,
                    tags: ["It has been a while"]
                },
                {
                    title: 'Jquery',
                    displayName: 'Jquery',
                    description: null,
                    confidence: 7,
                    usage: 8,
                    tags: ["Have experience"]
                },
                {
                    title: 'HTML 5',
                    displayName: 'HTML5',
                    description: null,
                    confidence: 8,
                    usage: 9,
                    tags: ["Have extensive experience"]
                },
                {
                    title: 'CSS 3',
                    displayName: 'CSS 3',
                    description: "Have a good understanding of various concepts like pixel ratio, flexbox, variables, etc",
                    confidence: 7,
                    usage: 9,
                    tags: ["Have extensive experience"]
                },
                {
                    title: 'Bootstrap CSS',
                    displayName: 'Bootstrap CSS',
                    description: "Well versed in using the grid layout for responsive design",
                    confidence: 7,
                    usage: 8,
                    tags: ["Have experience"]
                },
                {
                    title: 'SASS',
                    displayName: 'SASS',
                    description: null,
                    confidence: 6,
                    usage: 8,
                    tags: ["Have working knowledge"]
                },
                {
                    title: 'Gulp',
                    displayName: 'Gulp',
                    description: 'Have created several kinds of tasks using grunt and gulp',
                    confidence: 4,
                    usage: 4,
                    tags: ["Have used before"]
                },
                {
                    title: 'Grunt',
                    displayName: 'Grunt',
                    description: 'Have created several kinds of tasks using grunt and gulp',
                    confidence: 4,
                    usage: 4,
                    tags: ["Have used before"]
                },
                {
                    title: 'Webpack',
                    displayName: 'Webpack',
                    description: 'Aware of the basic webpack setup needed for a React project',
                    confidence: 5,
                    usage: 8,
                    tags: ["Know basics"]
                },
                {
                    title: 'Machine Learning',
                    displayName: 'Machine Learning',
                    description: 'Aware of the basics in machine learning',
                    confidence: 4,
                    usage: 7,
                    tags: ["Know few algorithms"]
                },
                {
                    title: 'Tensorflow',
                    displayName: 'Tensorflow',
                    description: 'I am learning Tensorflow',
                    confidence: 2,
                    usage: 7,
                    tags: ["Learning"]
                }
            ]
        };
    }

    render(){
        var sortedSkills = _.sortBy(this.state.skills, (a) => {
            return 10 - a.usage;
        });

        return (
        <div className="technical-skills">
            <p className="intro">
                I have knowledge / experience and interest in the following technologies, presented in the order of recency of usage:
            </p>
            {
                this.state.skills.sort((a, b) => {
                    if (a.usage < b.usage)
                        return 1;
                    if (a.usage > b.usage)
                        return -1;
                    return 0;
                }).map((s) => {
                    return (<div className="skill" key={s.displayName}>
                        <p className="name">{s.displayName}</p>
                        <div className={"confidence level-" + s.confidence}>
                        </div>
                        <div className="tags">
                            {s.tags.map(t => {
                                return (
                                    <span className="tag">{t}</span>
                                );
                            })}
                        </div>
                    </div>);
                })
            }
        </div>);   
    }
}

module.exports = TechnicalSkillsSmall;