import React from 'react';

class User extends React.Component{
	constructor(props){
		super(props);
		this.inputChange = this.inputChange.bind(this);
		this.submitInfo = this.submitInfo.bind(this);
		this.state = {
			username: '',
			email: '',
			password: ''
		}
	}

	inputChange(eventType, event){
		event.preventDefault();
		this.setState({ [eventType]: event.target.value });
	}

	submitInfo(event){
		event.preventDefault();
		console.log(this.state);
	}

	render(){
		return(
			<div>
				<p>User Sign Up:</p>
				<br/>
				<form onSubmit={this.submitInfo}>
					<input id="username" type="text" placeholder="User Name" onChange={this.inputChange.bind(this, 'username')} />
					<br/>
					<input id="email" type="email" placeholder="Email" onChange={this.inputChange.bind(this, 'email')} />
					<br/>
					<input id="password" type="password" placeholder="Password" onChange={this.inputChange.bind(this, 'password')} />
					<br/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

export default User