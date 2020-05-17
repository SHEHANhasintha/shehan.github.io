import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLg from 'react-facebook-login';
import './Facebook.css';


class FacebookLogin extends Component{
	constructor(props){
		super(props);
		this.responseFacebook = this.responseFacebook.bind(this);

	}

	responseFacebook = (res) => {
		console.log(res);

	}

	render(){
		return(
			<div>
				<FacebookLg 
				appId="232331721389865"
				autoLoad={false}
				fields="name,email,picture"
				onClick={this.componentClicked}
				callback={this.responseFacebook} 
				cssClass="my-facebook-button-class"
				/>
			</div>
		);
	}

}


export default FacebookLogin;