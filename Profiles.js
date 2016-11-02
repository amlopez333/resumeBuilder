var React = require("react");
import ProfileForm from "./ProfileForm"
var Profiles = React.createClass({
    handleProfileSubmit: function(profile){
        console.log(profile);
        var profileArray = this.state.profiles;
        var newProfileArray = profileArray.concat([profile]);
        this.setState(this.state.profiles = newProfileArray);
        console.log(this.state.profiles);
    },
    getInitialState:function(){
        return {profiles: []};
    },
    render: function(){
        return(
            <div className = 'profiles'>
                <ProfileForm onProfileSubmit = {this.handleProfileSubmit} />
                <ProfileForm onProfileSubmit = {this.handleProfileSubmit} />
                <ProfileForm onProfileSubmit = {this.handleProfileSubmit} />
            </div>
        )
    }
});
export default Profiles;