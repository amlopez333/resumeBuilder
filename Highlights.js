var React = require("react");
var Highlights = React.createClass({
    handleSubmit: function(evt){
        evt.preventDefault();
        var highlight = this.refs.highlight.value.trim();
        if(!highlight){
            return;
        }
        this.props.onHighlightSubmit(highlight);
        this.refs.highlight.value = '';
    },
    handleHighlightChange: function(evt){
        this.setState({highlight: evt.target.value});
    },
    getInitialState: function(){
        return {highlight: ''};
    },
    render: function(){
        return(
            <span className = 'highlight'>
                <label htmlFor = 'highlight'>Highlights</label>
                <input type = 'text' id = 'highlight' placeholder = 'Highlights' ref = 'highlight'
                value = {this.state.highlight} onChange = {this.handleHighlightChange} />
                <input type = 'submit' value = 'Add Highlight' onClick = {this.handleSubmit} />
            </span>
        )
    }
});

export default Highlights;