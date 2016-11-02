var React = require("react");
import Highlights from "./Highlights"
var WorkForm = React.createClass({
    handleSubmit: function(evt){
        evt.preventDefault();
        var company = this.refs.company.value.trim();
        var position = this.refs.position.value.trim();
        var website = this.refs.website.value.trim();
        var startDate = this.refs.startDate.value.trim();
        var endDate = this.refs.endDate.value.trim();
        var summary = this.refs.summary.value.trim();
        var highlights = this.state.highlights;
        if(!summary || !endDate || !startDate || !website || !position || !company){
            return;
        }
        this.props.onWorkSubmit({company: company,
                                position: position,
                                website: website,
                                startDate: startDate,
                                endDate: endDate,
                                summary: summary,
                                highlights: highlights
        });
        this.refs.company.value = '';
        this.refs.position.value = '';
        this.refs.website.value = '';
        this.refs.startDate.value = '';
        this.refs.endDate.value = '';
        this.refs.summary.value = '';
    },
    handleCompanyChange: function(evt){
        this.setState({company: evt.target.value});
    },
    handlePositionChange: function(evt){
        this.setState({position: evt.target.value});
    },
    handleWebsiteChange: function(evt){
        this.setState({website: evt.target.value});
    },
    handleStartDateChange: function(evt){
        this.setState({startDate: evt.target.value});
    },
    handleEndDateChange: function(evt){
        this.setState({endDate: evt.target.value});
    },
    handleSummaryChange: function(evt){
        this.setState({summary: evt.target.value});
    },
    handleHighlightSubmit: function(highlight){
        var highlights = this.state.highlights;
        highlights = highlights.concat([highlight]);
        this.state.highlights = highlights;
        console.log(highlights);
        console.log(this.state.highlights);
    },
    getInitialState: function(){
        return {company: '',
                position: '',
                website: '',
                startDate: '',
                endDate: '',
                summary: '',
                highlights: []
        }
    },
    render: function(){
        return(
            <div className = 'experience'>
                <form className = 'workForm' onSubmit = {this.handleSubmit}>
                    <input type = 'text' placeholder = 'Company' ref = 'company' 
                    value = {this.state.company} onChange = {this.handleCompanyChange} />
                    <input type = 'text' placeholder = 'Position' ref = 'position'
                    value = {this.state.position} onChange = {this.handlePositionChange} />
                    <input type = 'text' placeholder = 'Website' ref = 'website'
                    value = {this.state.website} onChange = {this.handleWebsiteChange} />
                    <input type = 'text' placeholder = 'Start Date' ref = 'startDate'
                    value = {this.state.startDate} onChange = {this.handleStartDateChange} />
                    <input type = 'text' placeholder = 'End Date' ref = 'endDate'
                    value = {this.state.endDate} onChange = {this.handleEndDateChange} />
                    <textArea placeholder = 'Summary' ref = 'summary'
                    value = {this.state.summary} onChange = {this.handleSummaryChange} />
                    <Highlights onHighlightSubmit = {this.handleHighlightSubmit} />
                    <input type = 'submit' value = 'Add Work Experience' />
                    
                </form>
                 <div className = 'highlights' >
                    <h3> Highlights </h3>
                </div>
            </div>
            
            
        )
    }
});
export default WorkForm;