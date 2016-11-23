var React = require("react");
var SkillsForm = React.createClass({
    handleNameChange: function(evt){
        this.setState({name: evt.target.value});
    },
    handleLevelChange: function(evt){
        this.setState({level: evt.target.value});
        var name = this.refs.name.value.trim();
        var level = this.refs.level.value.trim();
        if(!level || !name){
            return;
        }
        this.props.onSkillChange({name: name,
                                  level: level
        });
    },
    getInitialState: function(){
        return {name: '',
                level: ''
        }
    },
    render: function(){
        return(
            <span className = 'skillsForm'>
            <legend>Skills</legend>
                <label htmlFor = 'skillName'>Name</label>
                    <input type = 'text' id = 'skillName' placeholder = 'Skill' ref = 'name'
                    value = {this.state.name} onChange = {this.handleNameChange} />
                <span className = 'skillLevel'>
                <label htmlFor = 'skillLevel'>Level</label>
                    <input type = 'text' className = 'skillLevel' placeholder = 'Level' ref = 'level'
                    value =  {this.state.level} onChange = {this.handleLevelChange} />
                </span>
            </span>
        )
    }
});
export default SkillsForm;