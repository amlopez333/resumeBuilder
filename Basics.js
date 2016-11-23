var React = require('react');
import BasicsForm from "./BasicsForm";
var Basics = React.createClass({
    key: 0,
    getInitialState: function(){
        return {basics: {}}
    },
    handleBasicsSubmit: function(basics){
        this.setState({basics: basics});
        console.log(this.state);
    },
    render:function(){
        return(
            <div className = 'basics'>
            <a name = {this.props.name}/> 
            <h2> Basics </h2>
            <BasicsForm onBasicsSubmit = {this.handleBasicsSubmit}/>
            </div>
            
        );
    }
});
export default Basics;