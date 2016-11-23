var React = require('react')
import InterestForm from './InterestForm'
var InterestList = React.createClass({
    handleInterestSubmit: function(interest){
        var interests = this.state.interests;
        interests = interests.concat(interest);
        this.setState({interests: interests});
        console.log(this.state);
    },
    getInitialState: function(){
        return {interests: []};
    },
    render: function(){
        return(
            <div className = 'interestList'>
                <a name = {this.props.name}/>
                <h2>Interests</h2>    
                <InterestForm onInterestSubmit = {this.handleInterestSubmit} />
            </div>
        );
    }
});
export default InterestList;