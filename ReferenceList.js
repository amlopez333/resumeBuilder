var React = require('react');
var ReferenceList = React.createClass({
    handleReferenceSubmit: function(reference){
        var references = this.state.references;
        references = references.concat(reference);
        this.state.references = references;
    },
    
    getInitialState: function(){
        return {references: []};
    },
    render: function(){
        return(
            <div className = 'referenceList'>
                <h2> References </h2>
                <ReferenceForm onReferenceSubmit = {this.handleReferenceSubmit} />
            </div>
        );
    }
    
});
export default ReferenceList;