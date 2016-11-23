var React = require("react");
var ReferenceForm = React.createClass({
    handleNameChange: function(evt){
        this.setState({name: evt.target.value});
    },
    handleReferenceChange: function(evt){
        this.setState({reference: evt.target.value});
        var name = this.refs.name.value.trim();
        var reference = this.refs.reference.value.trim();
        if(!reference || !name){
            return;
        }
        this.props.onReferenceSubmit({name: name, reference: reference});
    },
    getInitialState: function(){
        return {name: '',
                reference: ''}
    },
    render: function(){
        return(
            <span className = 'referenceForm'>
                <label htmlFor = 'referenceName'>Name</label>
                    <input type = 'text' id = 'referenceName' placeholder = 'Name' ref = 'name'
                    value = {this.state.name} onChange = {this.handleNameChange} />
                <label htmlFor = 'reference'>Contact</label>
                    <input type = 'text' id = 'reference' placeholder = 'Contact' ref = 'reference'
                    value = {this.state.value} onChange = {this.handleReferenceChange} />
            </span>
        )
    }
});
export default ReferenceForm;