var React = require("react");
import WorkForm from "./WorkForm";
var WorkExperience = React.createClass({
    handleWorkSubmit: function(workExperience){
        var experience = this.state.work;
        var newExperience = experience.concat([workExperience]);
        this.setState(this.state.work = newExperience);
        console.log(this.state.work);
    },
    getInitialState: function(){
        return {work: []};
    },
    render: function(){
        return(
            <div className = 'work'>
                <h2>Work Experience</h2>
                <WorkForm onWorkSubmit = {this.handleWorkSubmit} />
                <WorkForm onWorkSubmit = {this.handleWorkSubmit} />
                <WorkForm onWorkSubmit = {this.handleWorkSubmit} />
                <WorkForm onWorkSubmit = {this.handleWorkSubmit} />
            </div>
        );
        
    } 
});
export default WorkExperience;
