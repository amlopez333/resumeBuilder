var React = require('react');
var ReactDOM = require('react-dom');
import Resume from './Resume';
import NavBar from './NavBar';
ReactDOM.render(
    <NavBar />, document.getElementById('nav')
    );
ReactDOM.render(
    <Resume />,
    document.getElementById("content")
);