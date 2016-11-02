var React = require('react');
import Basics from './Basics'
import WorkExperience from './WorkExperience';
import EducationList from './EducationList';
import SkillsAndLanguages from './SkillsAndLanguages';
import InterestList from './InterestList';
var Resume = React.createClass({
    render: function(){
        return(
            <div className = "resume">
            <h1> RESUME </h1>
            <InterestList />
            </div>
        );
        
    }
});
export default Resume;