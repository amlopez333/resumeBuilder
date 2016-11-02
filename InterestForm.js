var React = require('react');
var InterestForm = React.createClass({
    handleSubmit: function(evt){
        evt.preventDefault();
        var interest = this.refs.interest.value.trim();
        if(!interest){
            return;
        }
        this.props.onInterestSubmit(interest);
        this.refs.interest.value = '';
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
                <input type = 'text' placeholder = 'Interest' ref = 'interest'
                value = {this.state.interest} onChange = {this.handleInterestChange} />
                <input type = 'submit' value = 'Add Interest' />
            </form>
        );
    }
});
export default InterestForm;