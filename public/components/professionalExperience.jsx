var React = require('react');
var ReactDOM = require("react-dom");
var $ = require("jquery");

require('./professionalExperience.scss');

class App extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            experience: [
                 {
                     //company: 'Cognizant',
                     //title: 'Programmer analyst',
                     period: 'August 2008 – October 2010',
                     description: 'I was in charge of authentication and authorization for a ASP.NET MVC based web application created for a retailer in Europe. It is noteworthy that I got an opportunity to write very complex LINQ during the development of a batch processes using Microsoft Azure Queues.'
                 },
                 {
                     //company: 'Cognizant',
                     //title: 'Associate',
                     period: 'November 2010 – December 2013',
                     description: 'I was part of the onsite team that closely worked with the client architects that created the beta version of the client facing news publishing application called “Content Submission” for one of the biggest stock exchanges in Europe. I was mostly involved in development using ASP.NET MVC & Knockout JS and at times was guiding the offshore team.'
                 },
                 {
                     //company: 'Cognizant',
                     //title: 'Technology Specialist',
                     period: 'January 2014 – Present',
                     description: 'I am part of a team that develops the user interface for an internal application of one of the world\'s most famous smartphone maker. My responsibilities include understanding requirements, coming up with an implementation approach, getting the same approved by client architect, implementation (development), writing unit test cases, defect fixes and peer code review. On several occasions he also involves himself in requirement analysis to find incomplete/invalid requirements and to find implementation difficulties. The technologies that I\'m working on are Angular 1.5.x, Jquery, SASS (with Compass) and HTML5.'
                 }
            ]
        };
    }
    render(){
        return (
            <div className="professional-experience">{
                this.state.experience.map(function(exp, i){
                    return(
                        <div key={i} className="item">
                            <div className="company">{exp.company}</div>
                            <div className="title">{exp.title}</div>
                            <div className="description">{exp.description}</div>
                            <div className="period">
                                <div>{exp.period}</div>
                            </div>
                        </div>
                    )
                })
            }</div>
        );
    }
}

module.exports = App;