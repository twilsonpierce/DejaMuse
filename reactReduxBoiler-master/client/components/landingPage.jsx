import React from 'react';
import {render} from 'react-dom';
import SignUp from './signUp.jsx';


class LandingPage extends React.Component {
	render(){
		return(
			<div>

			<center><h1 className="title">Deja Muse</h1></center>
			<center><h4 className="title2"> Replay your hits</h4></center>

				<div className="background">
				<img src="./public/iconPhotos/background.png"/>
				</div>
			<SignUp/>

			<div className="footer">
				<div className="connect">
					<img id="pic1" src="./public/iconPhotos/icon 3.png"/>
				</div>

					<p id="connectText">
					Connect your Spotify to track your listening history 
					</p>
			

				<div clasName="journal">
					<img id="pic2" src="./public/iconPhotos/icon 1.png"/>
				</div>
				<p id="journalText">
					Add text and photos to keep your music journal 
				</p>

				<div className="history">
					<img id="pic3" src="./public/iconPhotos/icon 2.png"/>
				</div>

				<p id="historyText">
					Get insights into your music history
				</p>
			</div>

			</div>
		)	
	}
}

export default LandingPage; 

