var React = require ('react');
var NavBar = React.createClass({
    render: function(){
        return(
        <div className = 'navBar'>    
        <ul>
          <li><a href = "#Basics">Basics</a></li>
          <li><a href = "#WorkExperience">Experience</a></li>
          <li><a href = "#Education">Education</a></li>
          <li><a href = "#SkillsAndLanguages">Skills and Languages</a></li>
          <li><a href = "#Interests">Interests</a></li>
          <li><a href = "#References">References</a></li>
        </ul>
        </div>
        );
    }
});
export default NavBar;