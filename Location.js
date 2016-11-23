var React = require('react');
var Location = React.createClass({
    getInitialState: function(){
        return {location: {
            address: '',
            postalCode: '',
            city: '',
            countryCode: '',
            region: ''
        }};
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
            <form className = 'location'>
                <input type = 'text' placeholder = 'Address' ref = 'address'
                value = {this.state.location.address} onChange = {this.handleAddressChange}/>
                <input type = 'text' placeholder = 'Postal Code' ref = 'postalCode' 
                value = {this.state.location.postalCode} onChange = {this.handlePostalCodeChange}/>
                <input type = 'text' placeholder = 'City' ref = 'city' 
                value = {this.state.location.city} onChange = {this.handleCityChange}/>
                <input type = 'text' placeholder = 'Country' ref = 'countryCode' 
                value = {this.state.location.countryCode} onChange = {this.handleCountryCodeChange}/>
                <input type = 'text' placeholder = 'State or Province' ref = 'region' 
                value = {this.state.location.region} onChange = {this.handleRegionChange}/>
            </form>
        )
    }
});

export default Location;