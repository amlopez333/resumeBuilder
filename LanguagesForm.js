var React = require("react");
var LanguagesForm = React.createClass({
    handleNameChange: function(evt){
        this.setState({name: evt.target.value});
    },
    handleLevelChange: function(evt){
        this.setState({level: evt.target.value});
        var name = this.refs.name.value.trim();
        var level = this.refs.level.value.trim();
        if(!name || !level){
            return;
        }
        this.props.onLanguageChange({name: name,
                                     level: level
        });
    },
    getInitialState: function(){
        return{ name:  '',
                level: '',};
    },
    render: function(){
        return(
            <span className = 'languagesForm'>
                <legend>Languages</legend>
                <label htmlFor = 'languageName'>Language</label>
                    <input type = 'text' id = 'languageName' placeholder = 'Language' ref = 'name'
                    value = {this.state.name} onChange = {this.handleNameChange} />
                <span className = 'languageLevel'>
                <label htmlFor = 'languageLevel'>Level</label>
                    <input type = 'text' className = 'languageLevel'  placeholder = 'Level' ref = 'level' 
                    value = {this.state.level} onChange = {this.handleLevelChange} />
                </span>
            </span>
        );
    }
});

export default LanguagesForm;