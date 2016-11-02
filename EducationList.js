var React = require("react");
import EducationForm from "./EducationForm";
var index = 0;
var EducationList = React.createClass({
    newEducationForm: function(){
        return (<EducationForm onEducationSubmit = {this.handleEducationSubmit} key = {index} />);
    },
    handleEducationSubmit: function(education){
        var educationArray = this.state.education;
        console.log(education);
        educationArray = educationArray.concat(education)
        this.state.education = educationArray;
        console.log(this.state.education);
    },
    handleNewEducationForm: function(evt){
        this.setState({educationFormNodes: this.state.educationFormNodes.concat(this.newEducationForm())})
        index++;
    },
    getInitialState: function(){
        return {education: [],
                educationFormNodes: []};
    },
    componentDidMount: function(){
        this.setState({education: []});
        this.setState({educationFormNodes: this.state.educationFormNodes.concat(this.newEducationForm())})
        index++;
    },
    render: function(){
        return(
            <div className = 'EducationList'>
                {this.state.educationFormNodes}
                <input type = 'submit' value = 'Add Education Source' onClick = {this.handleNewEducationForm} />
            </div>
        )
    }
});
export default EducationList;