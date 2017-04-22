import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
  render() {
    if (!this.props.newStr) {
      return <div>Enter a string!</div>;
    }

    return (
      <div>
        <h3>Your string reversed:</h3>
        <div> 
            <p>{this.props.newStr}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newStr: state.newStr
  };
}

export default connect(mapStateToProps)(Display);