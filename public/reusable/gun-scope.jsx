var React = require('react');

require('./gun-scope.scss');

class Footer extends React.Component{
    render(){
        return (
            <svg className="gun-scope" width="20em" height="20em" viewBox="0 0 40 40">
                {/*<path className="scaling-circle" id="circle" d="M15 20 
                        a 5 5 0 0 1 10 0
                        a 5 5 0 0 1 -10 0
                        m5 -5
                        l0 10
                        m-5 -5
                        l10 0" fill="none" />*/}


                <circle cx="20" cy="20" r="0.1"/>
                <path className="circle-with-spokes" d="M5 20 
                        a 15 15 0 0 1 30 0
                        a 15 15 0 0 1 -30 0
                        m -4 0
                        l 8 0
                        m 22 0
                        l 8 0
                        m -19 -19
                        l 0 8
                        m 0 22
                        l 0 8" fill="none" />
                <circle className="scaling-circle" cx="20" cy="20" r="5"/>
            </svg>
        );
    }
}

module.exports = Footer;