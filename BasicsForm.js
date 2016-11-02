var React = require("react");
var BasicsForm = React.createClass({
    getInitialState: function(){
        return {name: '',
                label: '',
                email: '',
                phone: '',
                website: '',
                summary: ''
        };
    },
    handleNameChange: function(evt){
        this.setState({name: evt.target.value});
    },
    handleLabelChange: function(evt){
        this.setState({label: evt.target.value});
    },
    handleEmailChange: function(evt){
        this.setState({email: evt.target.value});
    },
    handlePhoneChange: function(evt){
        this.setState({phone: evt.target.value});
    },
    handleWebsiteChange: function(evt){
        this.setState({website: evt.target.value})
    },
    handleSummaryChange: function(evt){
        this.setState({summary: evt.target.value});
    },
    render: function(){
        return(
            <form className = 'basicsForm'>
                <input type = 'text' placeholder = 'Name' ref = 'name'
                value = {this.state.name} onChange = {this.handleNameChange}/>
                <input type = 'text' placeholder = 'Title' ref = 'label'
                value = {this.state.label} onChange = {this.handleLabelChange}/>
                <input type = 'text' placeholder = 'Email' ref = 'email'
                value = {this.state.email} onChange = {this.handleEmailChange}/>
                <input type = 'text' placeholder = 'Phone #' ref = 'phone'
                value = {this.state.phone} onChange = {this.handlePhoneChange}/>
                <input type = 'text' placeholder = 'Website' ref = 'website'
                value = {this.state.website} onChange = {this.handleWebsiteChange} />
                <input type = 'text' placeholder = 'Description' ref = 'summary'
                value = {this.state.summary} onChange = {this.handleSummaryChange}/>
            </form>
        );
    }
});
export default BasicsForm;