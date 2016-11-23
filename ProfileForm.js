var React = require("react");
var ProfileForm = React.createClass({
    handleSubmit:function(evt){
        evt.preventDefault();
        var network = this.refs.network.value.trim();
        var username = this.refs.username.value.trim();
        var url = this.refs.url.value.trim();
        
        if(!url || !username || !network){
            return;
        }
        this.props.onProfileSubmit({network: network, username: username, url: url});
        this.refs.network.value = '';
        this.refs.username.value = '';
        this.refs.url.value = '';
        this.setState({network: '',
                username: '',
                url: ''});
        console.log('here2');
    },
    handleNetworkChange: function(evt){
        this.setState({network: evt.target.value});  
    },
    handleUsernameChange: function(evt){
        this.setState({username: evt.target.value});
    },
    handleURLChange: function(evt){
        this.setState({url: evt.target.value});
    },
    getInitialState: function(){
        return {network: '',
                username: '',
                url: ''}
    },
    render:function(){
        return(
            <form className = 'profileForm' onSubmit = {this.handleSubmit}>
            <fieldset>
            <legend>Social Media Profiles </legend>
                <label htmlFor = 'network'>Network</label>
                    <input type = 'text' id = 'network' placeholder = 'Network i.e. Twitter' ref = 'network'
                    value = {this.state.network} onChange = {this.handleNetworkChange} />
                <label htmlFor = 'username'>Username</label>
                    <input type = 'text' id = 'username' placeholder = 'Username' ref = 'username'
                    value = {this.state.username} onChange = {this.handleUsernameChange} />
                <label htmlFor = 'url'>URL</label>
                    <input type = 'url' placeholder = 'URL' ref = 'url'
                    value = {this.state.url} onChange = {this.handleURLChange} />
                <input type = 'submit' value = 'Add Profile' />
            </fieldset>
            </form>
        )
    }
});
export default ProfileForm;