var React = require("react");
var ReferenceForm = React.createClass({
    getInitialState: function(){
        return {name: '',
                reference: ''}
    },
    render: function(){
        return(
            <span className = 'referenceForm'>
                <input type = 'text' placeholder = 'Name' ref = 'name'
                value = {this.state.name} onChange = {this.handleNameChange} />
                <input type = 'text' placeholder = 'Reference' ref = 'reference'
                value = {this.state.value} onChange = {this.handleReferenceChange} />
            </span>
        )
    }
});