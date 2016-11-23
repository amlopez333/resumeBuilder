var React = require('react');
import Course from './Course';

var EducationForm = React.createClass({
    index: 0,
    key: 0,
    addCourseNode: function(index){
        return (<Course index = {this.index} onAddCourse = {this.handleCourseSubmit} key = {this.key} />);
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
        this.resetState();
        console.log(this.index);
    },
    emptyRefs: function(){
       this.refs.institution.value = '';
        this.refs.area.value = '';
        this.refs.studyType.value = '';
        this.refs.startDate.value = '';
        this.refs.endDate.value = '';
        this.refs.gpa.value = '';
    },
    resetState: function(){
        this.setState(this.getInitialState());
        this.index = 0;
        var newCourse = this.addCourseNode(this.index);
        this.setState({courseNodes: [].concat(newCourse)})
        this.index ++;
        this.key++;
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
        var newCourse = this.addCourseNode(this.index);
        this.setState({courseNodes: this.state.courseNodes.concat(newCourse)})
        this.index ++;
        this.key++;
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
        var newCourse = this.addCourseNode(this.index);
        this.setState({courseNodes: this.state.courseNodes.concat(newCourse)})
        this.index ++;
        this.key++;
    },
    render: function(){
        return(
            <div className = 'education'>
                <form className = 'educationForm' onSubmit = {this.handleSubmit} >
                <fieldset>
                <legend> Education </legend>
                    <label htmlFor = 'institution'> Institution </label>
                        <input type = 'text' id = 'institution' placeholder = 'Institution' ref = 'institution'
                        value = {this.state.institution} onChange = {this.handleInstitutionChange} />
                    <label htmlFor = 'area'>Area of Study</label>
                        <input type = 'text' id = 'area' placeholder = 'Area of study' ref = 'area'
                        value = {this.state.area} onChange = {this.handleAreaChange} />
                    <label htmlFor = 'degree'>Degree</label>
                        <input type = 'text' id = 'degree' placeholder = 'Degree' ref = 'studyType'
                        value = {this.state.studyType} onChange = {this.handleStudyTypeChange} />
                    <label htmlFor = 'startDate'>Start Date</label>
                        <input type = 'month' id = 'startDate' placeholder = 'Start Date' ref = 'startDate'
                        value = {this.state.startDate} onChange = {this.handleStartDateChange} />
                    <label htmlFor = 'endDate'>End Date</label>
                        <input type = 'month' id = 'endDate' placeholder = 'End Date' ref = 'endDate'
                        value = {this.state.endDate} onChange = {this.handleEndDateChange} />
                    <span className ='gpa'>
                    <label htmlFor = 'gpa'>GPA</label>
                        <input type = 'text' placeholder = 'GPA i.e. 3.8 in a 4.0 scale' ref = 'gpa'
                        value = {this.state.gpa} onChange = {this.handleGPAChange} />
                    </span>
                    <legend>Courses</legend>
                    
                    {this.state.courseNodes}
                    <input type = 'button' value = 'Add Course' onClick = {this.handleNewCourse} />
                    <input type = 'submit' value = 'Add education'/>
                </fieldset>
                </form>
            </div>
        );
    }
});
export default EducationForm;