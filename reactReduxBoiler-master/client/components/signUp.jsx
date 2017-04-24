import React, {Component} from 'react';
import {render}from 'react-dom';
import {browserHistory} from 'react-router';


class SignUp extends Component {

	render(){
		return(
		<div>

		<div className="signUp">
			<div className="heading">
			<h2 className="joinHeading"> Join Deja Muse </h2>
			</div> 
			<button type="button" className="btn btn-default">Sign Up With Email</button><br/>
			<button type="button" className="btn btn-default">Sign In With Spotify</button><br/>
			<p id="syncedText"> Synced with</p>
				<div className="spotify">
				<img id="spotifyPic" src="./public/iconPhotos/Spotify_Logo_RGB_Green.png"/>
				</div>
		</div>



		</div> 
		)
	}
}



export default SignUp;