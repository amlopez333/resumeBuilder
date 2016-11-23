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
        this.setState(this.getInitialState());
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
                <fieldset>
                <legend> Work Experience </legend>
                    <label htmlFor = 'company'>Company</label>
                        <input type = 'text' id = 'company' placeholder = 'Company' ref = 'company' 
                        value = {this.state.company} onChange = {this.handleCompanyChange} />
                    <label htmlFor = 'position'>Position</label>
                        <input type = 'text' id = 'position' placeholder = 'Position' ref = 'position'
                        value = {this.state.position} onChange = {this.handlePositionChange} />
                    <label htmlFor = 'website'>Website</label>
                        <input type = 'url' id = 'website' placeholder = 'Website' ref = 'website'
                        value = {this.state.website} onChange = {this.handleWebsiteChange} />
                    <label htmlFor = 'startDateCompany'>Start Date</label>
                        <input type = 'month' id = 'startDateCompany' placeholder = 'Start Date' ref = 'startDate'
                        value = {this.state.startDate} onChange = {this.handleStartDateChange} />
                    <label htmlFor = 'endDateCompany'>End Date</label>
                        <input type = 'month' id = 'endDateCompany' placeholder = 'End Date' ref = 'endDate'
                        value = {this.state.endDate} onChange = {this.handleEndDateChange} />
                    <label htmlFor = 'workSummary'>Summary</label>
                        <textArea className = 'workSummary' placeholder = 'Summary' ref = 'summary'
                        value = {this.state.summary} onChange = {this.handleSummaryChange} />
                    <Highlights onHighlightSubmit = {this.handleHighlightSubmit} />
                    <input type = 'submit' value = 'Add Work Experience' />
                </fieldset> 
                </form>
            </div>
            
            
        )
    }
});
export default WorkForm;