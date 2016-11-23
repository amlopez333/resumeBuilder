var React = require("react");
import EducationForm from "./EducationForm";
var EducationList = React.createClass({
    handleEducationSubmit: function(education){
        var educationArray = this.state.education;
        console.log(education);
        educationArray = educationArray.concat(education)
        this.state.education = educationArray;
        console.log(this.state.education);
    },

    getInitialState: function(){
        return {education: []};
    },
    componentDidMount: function(){
        this.setState({education: []});
    },
    render: function(){
        return(
            <div className = 'EducationList'>
                <a name = {this.props.name} />
                <h2>Education</h2>
                    <EducationForm onEducationSubmit = {this.handleEducationSubmit}/>
            </div>
        )
    }
});
export default EducationList;