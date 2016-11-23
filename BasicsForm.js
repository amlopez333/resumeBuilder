var React = require("react");
import ProfileForm from './ProfileForm'
var BasicsForm = React.createClass({
    key: 0,
    getInitialState: function(){
        return {name: '',
                label: '',
                email: '',
                phone: '',
                website: '',
                summary: '',
                location: {
                    address: '',
                    postalCode: '',
                    city: '',
                    countryCode: '',
                    region: ''
                },
                profiles: []
        };
    },
    handleSubmit: function(evt){
        evt.preventDefault();
        var name = this.refs.name.value.trim();
        var label = this.refs.label.value.trim();
        var email = this.refs.email.value.trim();
        var phone = this.refs.phone.value.trim();
        var website = this.refs.website.value.trim();
        var summary = this.refs.summary.value.trim();
        var address = this.refs.address.value.trim();
        var postalCode = this.refs.postalCode.value.trim();
        var city = this.refs.city.value.trim();
        var countryCode = this.refs.countryCode.value.trim();
        var region = this.refs.region.value.trim();
        var profiles = this.state.profiles;
        if(!region || !countryCode || !city || !phone || !email || !label || !name){
            return;
        }
        this.setState({name: name});
        this.setState({label: label});
        this.setState({email: email});
        this.setState({phone: phone});
        this.setState({website: website});
        this.setState({summary: summary});
        this.setState({location: {address: address}});
        this.setState({location: {postalCode: postalCode}})
        this.setState({location: {city: city}});
        this.setState({location: {countryCode: countryCode}});
        this.setState({location: {region: region}});
        console.log(this.state);
        this.props.onBasicsSubmit(
                                    {   name: name,
                                        label: label,
                                        email: email,
                                        phone: phone,
                                        website: website,
                                        summary: summary,
                                        location: {
                                            address: address,
                                            postalCode: postalCode,
                                            city: city,
                                            countryCode: countryCode,
                                            region: region
                                        },
                                        profiles: profiles
                                    }
        )
        
            
    },
    handleProfileSubmit: function(profile){
        var profiles = this.state.profiles;
        profiles = profiles.concat(profile);
        this.setState({profiles: profiles})
        var name = this.refs.name.value.trim();
        var label = this.refs.label.value.trim();
        var email = this.refs.email.value.trim();
        var phone = this.refs.phone.value.trim();
        var website = this.refs.website.value.trim();
        var summary = this.refs.summary.value.trim();
        var address = this.refs.address.value.trim();
        var postalCode = this.refs.postalCode.value.trim();
        var city = this.refs.city.value.trim();
        var countryCode = this.refs.countryCode.value.trim();
        var region = this.refs.region.value.trim();
        if(!region || !countryCode || !city || !phone || !email || !label || !name){
            return;
        }
        this.props.onBasicsSubmit(
                                    {   name: name,
                                        label: label,
                                        email: email,
                                        phone: phone,
                                        website: website,
                                        summary: summary,
                                        location: {
                                            address: address,
                                            postalCode: postalCode,
                                            city: city,
                                            countryCode: countryCode,
                                            region: region
                                        },
                                        profiles: profiles
                                    }
        )
        
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
     handleAddressChange:function(evt){
        this.setState({location: {address: evt.target.value}});
    },
    handlePostalCodeChange:function(evt){
        this.setState({location: {postalCode: evt.target.value}});
    },
    handleCityChange:function(evt){
        this.setState({location: {city: evt.target.value}});
    },
    handleCountryCodeChange:function(evt){
        this.setState({location: {countryCode: evt.target.value}});
    },handleRegionChange:function(evt){
        this.setState({location: {region: evt.target.value}});
    },
    render: function(){
        return(
        
        <div className = 'basics'>
            <a name = {this.props.name} />
            <div className = 'basicInformation'>
            <form className = 'basicsForm' onSubmit = {this.handleSubmit} >
                <fieldset>
                    <legend> Basic Information </legend>
                    <label htmlFor = "name">Name</label>
                        <input type = 'text' id = "name" placeholder = 'Name' ref = 'name'
                        value = {this.state.name} onChange = {this.handleNameChange}/>
                    <label htmlFor = 'title'>Title</label>
                        <input type = 'text' id = 'title' placeholder = 'Title' ref = 'label'
                        value = {this.state.label} onChange = {this.handleLabelChange}/>
                    <label htmlFor = 'email'>Email</label>
                        <input type = 'email' id = 'email' placeholder = 'Email' ref = 'email'
                        value = {this.state.email} onChange = {this.handleEmailChange}/>
                    <label htmlFor = 'phoneNumber'>Phone Number</label>
                        <input type = 'tel' id = 'phoneNumber' placeholder = 'Phone #' ref = 'phone'
                        value = {this.state.phone} onChange = {this.handlePhoneChange}/>
                    <label htmlFor = 'website'>Website</label>
                        <input type = 'url' id = 'website' placeholder = 'Website' ref = 'website'
                        value = {this.state.website} onChange = {this.handleWebsiteChange} />
                    <label htmlFor = 'basicsSummary'>Summary </label>
                        <textArea className = 'basicsSummary' placeholder = "Summary..." ref = 'summary'
                        value = {this.state.summary} onChange = {this.handleSummaryChange}/>
                    <label htmlFor = 'address'>Address</label>
                        <input type = 'text' id = 'address' placeholder = 'Address' ref = 'address'
                        value = {this.state.location.address} onChange = {this.handleAddressChange}/>
                    <span className = 'postalCode'>
                    <label htmlFor = 'postalCode'>Postal Code</label>
                        <input type = 'text' placeholder = 'Postal Code' ref = 'postalCode' 
                        value = {this.state.location.postalCode} onChange = {this.handlePostalCodeChange}/>
                    </span>
                    <label htmlFor = 'city'>City</label>
                        <input type = 'text' id = 'city' placeholder = 'City' ref = 'city' 
                        value = {this.state.location.city} onChange = {this.handleCityChange}/>
                    <label htmlFor = 'region'>State or Province</label>
                        <input type = 'text' id = 'region' placeholder = 'State or Province' ref = 'region' 
                        value = {this.state.location.region} onChange = {this.handleRegionChange}/>
                    <label htmlFor = 'country'>Country</label>
                        <input type = 'text' id = 'country' placeholder = 'Country' ref = 'countryCode' 
                        value = {this.state.location.countryCode} onChange = {this.handleCountryCodeChange}/>
                    <input type = 'submit' value = 'Add Basic Information' />
                </fieldset>
            </form>
            <br/>
            </div>
                <div className = 'profiles'>
                    <ProfileForm onProfileSubmit = {this.handleProfileSubmit} />
                </div>
        </div>
        );
    }
});
export default BasicsForm;