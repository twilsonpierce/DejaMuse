import React, {Component} from 'react';
import {render}from 'react-dom';
import LandingPage from './landingPage.jsx';
import Calendar from '../containers/calendar.jsx';
import Navbar from '../containers/navbar.jsx';


class App extends React.Component {
  render () {
    return ( 
    <div>
    <Navbar/>
    <Calendar/>
    <LandingPage/>
    </div>
    )
  }
}

export default App;