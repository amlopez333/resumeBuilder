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
                <input type = 'text' placeholder = 'Course' ref = 'course' 
                value = {this.state.course} onChange = {this.handleCourseChange}/>
        );
    }
});
export default Course;