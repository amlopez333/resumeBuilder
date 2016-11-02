var React = require('react');
import BasicsForm from "./BasicsForm";
import Location from "./Location"
import Profiles from './Profiles'
var Basics = React.createClass({
    
    render:function(){
        return(
            <div className = 'basics'>
            <h2> Basic Information </h2>
            <BasicsForm />
            <h2> Location </h2>
            <Location />
            <h2> Profiles </h2>
            <Profiles />
            </div>
        );
    }
});
export default Basics;