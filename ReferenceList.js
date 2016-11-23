var React = require('react');
import ReferenceForm from "./ReferenceForm";
var ReferenceList = React.createClass({
    reference: {},
    handleSubmit: function(evt){
        evt.preventDefault();
        if(this.reference === 0){
            return;
        }
        var references = this.state.references;
        references = references.concat(this.reference);
        this.state.references = references;
        this.reference = {};
        console.log(this.state);
    },
    handleReferenceSubmit: function(reference){
        this.reference = reference;
    },
    
    getInitialState: function(){
        return {references: []};
    },
    render: function(){
        return(
            <div className = 'references'>
            <a name = {this.props.name} />
                <h2> References </h2>
            <form className = 'referenceList' onSubmit = {this.handleSubmit}>
            <fieldset>
            <legend>References</legend>
                <ReferenceForm onReferenceSubmit = {this.handleReferenceSubmit} />
                <input type = 'submit' value = 'Add reference' />
            </fieldset>
            </form>
            </div>
        );
    }
    
});
export default ReferenceList;