var React = require('react');
import Basics from './Basics'
var Resume = React.createClass({
    render: function(){
        return(
            <div className = "resume">
            <h1> RESUME </h1>
            <Basics/>
            </div>
        );
        
    }
});
export default Resume;