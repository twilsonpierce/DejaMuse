import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Display from '../containers/display.jsx';
import Form from '../containers/form.jsx';

class App extends React.Component {
  render () {
    return ( 
    <div>
    <Form />
    <Display />
    </div>
    )
  }
}

export default App;