var React = require('react');
var ReactDOM = require("react-dom");
var App = require("./components/v2/app.jsx");
var $ = require("jquery");

require('./main.scss');

ReactDOM.render(<App />, $('#root')[0]);