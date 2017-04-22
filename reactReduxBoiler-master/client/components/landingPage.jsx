import React from 'react';
import {render} from 'react-dom';
import SignUp from './signUp.jsx';


class LandingPage extends React.Component {
	render(){
		return(
			<div>
			<h1> This is the landing page </h1> 	
			<SignUp/>
			</div>
		)	
	}
}

export default LandingPage; 

