var React = require('react');
var Course = React.createClass({
    handleCourseChange: function(evt){
        this.setState({course: evt.target.value});
        var course = this.refs.course.value.trim();
        this.props.onAddCourse(course, this.props.index);
        this.refs.course.value = '';
    },
    getInitialState:function(){
        return {course: ''}
    },
    render: function(){
        return(
                <div className = 'courseForm'>
                    <label htmlFor = 'course'>Course Name</label>
                        <input type = 'text' id = 'course' placeholder = 'Course' ref = 'course' 
                        value = {this.state.course} onChange = {this.handleCourseChange}/>
                </div>
        );
    }
});
export default Course;