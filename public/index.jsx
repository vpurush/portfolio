var React = require('react');
var ReactDOM = require("react-dom");
var App = require("./components/v2/app.jsx");
var $ = require("jquery");
var utils = require("./utils/utils.js");

require('./main.scss');

ReactDOM.render(<App />, $('#root')[0]);

if(utils.isMedium() || utils.isSmall()){

    let requestFullScreen = null;
    if(document.documentElement.requestFullscreen){
        requestFullScreen = document.documentElement.requestFullscreen.bind(document.documentElement);
    }else if(document.documentElement.webkitRequestFullscreen){
        requestFullScreen = document.documentElement.webkitRequestFullscreen.bind(document.documentElement);
    }
    requestFullScreen();

    window.scrollTo(0, 1)
}