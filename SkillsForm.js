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
                <input type = 'text' placeholder = 'Skill' ref = 'name'
                value = {this.state.name} onChange = {this.handleNameChange} />
                <input type = 'text' placeholder = 'Level' ref = 'level'
                value =  {this.state.level} onChange = {this.handleLevelChange} />
            </span>
        )
    }
});
export default SkillsForm;