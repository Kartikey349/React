import React from "react";

export class UserClass extends React.Component {

    constructor(props){
        super(props);

        console.log(props)
    }

    render(){

        const {name, location} = this.props;
        return(
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>contact: kartikey@7518</h4>
            </div>
        )
    }
}
