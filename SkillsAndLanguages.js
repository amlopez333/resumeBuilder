var React = require("react");
import LanguagesForm from './LanguagesForm';
import SkillsForm from './SkillsForm';
var SkillsAndLanguages = React.createClass({
    language: {},
    skill: {},
    handleSubmit: function(evt){
        evt.preventDefault();
        if(this.skill.length === 0 || this.language.length === 0){
            return;
        }
        var skills = this.state.skills.concat(this.skill);
        var languages = this.state.languages.concat(this.language);
        this.state.skills = skills;
        this.state.languages = languages;
        this.language = {};
        this.skill = {};
        this.language = {};
        console.log(this.state);
    },
    onLanguageChange: function(language){
        this.language = language;
    },
    onSkillChange: function(skill){
        this.skill = skill;
    },
    getInitialState: function(){
      return {  skills: [],
                languages: []}
    },
    render: function(){
        return (
            <div className = 'skillsAndLanguages'>
            <a name = {this.props.name}/>
            <h2>Skills and Languages</h2>
            <form className = 'skillsAndLanguagesForm' onSubmit = {this.handleSubmit}>
                <fieldset>
                <legend>Skills and Languages </legend>
                <span className = 'languages'>
                    <LanguagesForm onLanguageChange = {this.onLanguageChange} />
                </span>
                <span className = 'skills'>
                    <SkillsForm onSkillChange = {this.onSkillChange} />
                </span>
                <input type = 'submit' value = 'Add Skills and Languages'/>
                </fieldset>
            </form>
            </div>
        )
    }
});
export default SkillsAndLanguages;