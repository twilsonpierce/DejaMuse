import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Calendar from '../containers/calendar.jsx';
import Navbar from '../containers/navbar.jsx';


class App extends React.Component {
  render () {
    return ( 
    <div>
    <Navbar/>
    <Calendar/>
    </div>
    )
  }
}

export default App;