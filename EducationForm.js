var React = require('react');
import Course from './Course';
var index = 0;
var EducationForm = React.createClass({
    addCourseNode: function(index){
        return (<Course index = {index} onAddCourse = {this.handleCourseSubmit} key = {index} />);
    },
    handleSubmit: function(evt){
        evt.preventDefault();
        var institution = this.refs.institution.value.trim();
        var area = this.refs.area.value.trim();
        var studyType = this.refs.studyType.value.trim();
        var startDate = this.refs.startDate.value.trim();
        var endDate = this.refs.endDate.value.trim();
        if(!endDate || !startDate || !studyType|| !area || !institution){
            return;
        }
        var gpa = this.refs.gpa.value.trim();
        var courses = this.state.courses;
        this.props.onEducationSubmit({
            institution: institution,
            area: area,
            studyType: studyType,
            startDate: startDate,
            endDate: endDate,
            gpa: gpa,
            courses: courses
        });
        this.emptyRefs();
        console.log(index);
    },
    emptyRefs: function(){
       this.refs.institution.value = '';
        this.refs.area.value = '';
        this.refs.studyType.value = '';
        this.refs.startDate.value = '';
        this.refs.endDate.value = '';
        this.refs.gpa.value = '';
        this.setState(this.getInitialState());
    },
    handleInstitutionChange: function(evt){
        this.setState({institution: evt.target.value});
    },
    handleAreaChange: function(evt){
        this.setState({area: evt.target.value});
    },
    handleStudyTypeChange: function(evt){
        this.setState({studyType: evt.target.value});
    },
    handleStartDateChange: function(evt){
        this.setState({startDate: evt.target.value});
    },
    handleEndDateChange: function(evt){
        this.setState({endDate: evt.target.value});
    },
    handleGPAChange: function(evt){
        this.setState({gpa: evt.target.value});
    },
    handleCourseChange: function(evt){
        var courses = this.state.courses;
        courses[0] = evt.target.value;
        console.log(courses);
    },
    handleCourseSubmit: function(course, index){
        var courses = this.state.courses;
        courses[index] = course;
        this.setState({courses: courses});
        //console.log(this.state);
    },
    handleNewCourse:function(evt){
        var newCourse = this.addCourseNode(index);
        this.setState({courseNodes: this.state.courseNodes.concat(newCourse)})
        index ++;
        console.log(this.state.courseNodes);
    },
    getInitialState: function(){
        return {institution: '',
                area: '',
                studyType: '',
                startDate: '',
                endDate: '',
                gpa: '',
                courses: [],
                courseNodes: []
        };
    },
    componentDidMount: function(){
        var newCourse = this.addCourseNode(index);
        this.setState({courseNodes: this.state.courseNodes.concat(newCourse)})
        index ++;
    },
    render: function(){
        return(
            <div className = 'education'>
                <h2>Education</h2>
                <form className = 'educationForm' onSubmit = {this.handleSubmit} >
                    <input type = 'text' placeholder = 'Institution' ref = 'institution'
                    value = {this.state.institution} onChange = {this.handleInstitutionChange} />
                    <input type = 'text' placeholder = 'Area of study' ref = 'area'
                    value = {this.state.area} onChange = {this.handleAreaChange} />
                    <input type = 'text' placeholder = 'Degree' ref = 'studyType'
                    value = {this.state.studyType} onChange = {this.handleStudyTypeChange} />
                    <input type = 'text' placeholder = 'Start Date' ref = 'startDate'
                    value = {this.state.startDate} onChange = {this.handleStartDateChange} />
                    <input type = 'text' placeholder = 'End Date' ref = 'endDate'
                    value = {this.state.endDate} onChange = {this.handleEndDateChange} />
                    <input type = 'text' placeholder = 'GPA' ref = 'gpa'
                    value = {this.state.gpa} onChange = {this.handleGPAChange} />
                    <h3>Courses</h3>
                    {this.state.courseNodes}
                    <input type = 'button' value = 'Add Course' onClick = {this.handleNewCourse} />
                    <input type = 'submit' value = 'Add education'/>
                </form>
            </div>
        );
    }
});
export default EducationForm;