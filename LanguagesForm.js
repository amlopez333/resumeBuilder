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
                <input type = 'text' placeholder = 'Language' ref = 'name'
                value = {this.state.name} onChange = {this.handleNameChange} />
                <input type = 'text' placeholder = 'Level' ref = 'level' 
                value = {this.state.level} onChange = {this.handleLevelChange} />
            </span>
        );
    }
});

export default LanguagesForm;