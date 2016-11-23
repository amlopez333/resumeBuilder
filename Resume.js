var React = require('react');
import Basics from './Basics'
import WorkExperience from './WorkExperience';
import EducationList from './EducationList';
import SkillsAndLanguages from './SkillsAndLanguages';
import InterestList from './InterestList';
import ReferenceList from './ReferenceList';
import NavBar from "./NavBar";
var Resume = React.createClass({
    render: function(){
        return(
            <div className = "resume">
            
            <h1 className = 'pageTitle'> RESUME </h1>
            
            <Basics name = {"Basics"}/>
            <WorkExperience name = {"WorkExperience"}/>
            <EducationList name = {"Education"} />
            <SkillsAndLanguages name = {"SkillsAndLanguages"}/>
            <InterestList name = {'Interests'}/>
            <ReferenceList name = {'References'}/>
            </div>
        );
    }
});
export default Resume;