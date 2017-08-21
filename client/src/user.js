import React from 'react';

class User extends React.Component{
	constructor(){
		this.state = {
			username: '',
			email: '',
			password: ''
		}
	}

	inputChange(eventType, event){
		event.preventDefault()
		this.setState({ [eventType]: event.target.value });
	}

	submitInfo(){
		event.preventDefault()
		console.log(this.state)
	}

	render(){
		return(
			<div>
				<p>User Sign Up:</p>
				<br/>
				<form>
					<input id="username" type="text" placeholder="User Name" onChange={this.inputChange.bind(this, 'username')} required />
					<br/>
					<input id="email" type="email" placeholder="Email" onChange={this.inputChange.bind(this, 'email')} required />
					<br/>
					<input id="password" type="password" placeholder="Password" onChange={this.inputChange.bind(this, 'password')} required />
					<br/>
					<input type="submit" value="Submit" onSubmit={this.submitInfo} />
				</form>
			</div>
		)
	}
}

export default User