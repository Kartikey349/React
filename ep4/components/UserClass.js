import React from "react";

export class UserClass extends React.Component {

    constructor(props){
        super(props);
       
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "default",
            }
        }
    }

    async componentDidMount(){
        const data = await fetch(" https://api.github.com/users/kartikey349");

        const json = await data.json();

        this.setState({
            userInfo: json,
        })
    }

    render(){

        return(
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>contact: kartikey@7518</h4>
            </div>
        )
    }
}
