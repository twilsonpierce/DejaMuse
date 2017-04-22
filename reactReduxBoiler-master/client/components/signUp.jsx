import React, {Component} from 'react';
import {render}from 'react-dom';


class SignUp extends Component {
	render(){
		return(
		<div>

		<div className="heading">
		<h2> Join SoundJournal </h2>
		</div> 

		<button type="button">Sign Up With Your Email</button><br/>
		<button type="button">Sign In With Spotify</button><br/>
		<p className="syncedText"> Synched with</p>
		</div> 
		)
	}
}



export default SignUp;