var React = require('react');
var InterestForm = React.createClass({
    handleSubmit: function(evt){
        evt.preventDefault();
        var interest = this.refs.interest.value.trim();
        if(!interest){
            return;
        }
        this.props.onInterestSubmit({interest: interest});
        this.refs.interest.value = '';
        this.setState({interest: ''});
    },
    handleInterestChange: function(evt){
        this.setState({interest: evt.target.value});
    },
    getInitialState: function(){
        return {interest: ''}
    },
    render: function(){
        return(
            <form className = 'interestForm' onSubmit = {this.handleSubmit}>
            <fieldset>
            <legend>Interests</legend>
            <label htmlFor = 'interest'>Interest</label>
                <input type = 'text' id = 'interest' placeholder = 'Interest' ref = 'interest'
                value = {this.state.interest} onChange = {this.handleInterestChange} />
                <input type = 'submit' value = 'Add Interest' />
            </fieldset>
            </form>
        );
    }
});
export default InterestForm;