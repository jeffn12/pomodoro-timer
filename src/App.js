import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25
    }
  }

  breakUp = () => {
    if(this.state.breakLength <= 59) { 
      this.setState( {breakLength: this.state.breakLength + 1} );
    }
  }

  breakDown = () => {
    if(this.state.breakLength >= 2) {
      this.setState( {breakLength: this.state.breakLength - 1} )
    }
  }

  sessionUp = () => {
    if(this.state.sessionLength <= 59) { 
      this.setState( {sessionLength: this.state.sessionLength + 1} );
    }
  }

  sessionDown = () => {
    if(this.state.sessionLength >= 2) {
      this.setState( {sessionLength: this.state.sessionLength - 1} )
    }
  }

  render() {
    return (
      <div id="root">
        <div id="wrapper">
          
          <div id="label-section">
            <div id="break-label" className="label">
              <h3>Break Label</h3>
              <button id="break-increment" onClick={this.breakUp}>Increase</button>
              <div id="break-length">{this.state.breakLength}</div>
              <button id="break-decrement" onClick={this.breakDown}>Decrease</button>
            </div>
            <div id="session-label" className="label">
              <h3>Session Label</h3>
              <button id="session-increment" onClick={this.sessionUp}>Increase</button>
              <div id="session-length">{this.state.sessionLength}</div>
              <button id="session-decrement" onClick={this.sessionDown}>Decrease</button>
            </div>
          </div>
          
          <div id="countdown-section">
              <div id="timer-label">Session</div>
              <div id="time-left">25:00</div>
          </div>

          <div id="controls">
            <button id="start_stop">Start/Stop</button>
            <button id="reset">Reset</button>
          </div>
          
        </div>
      </div>
    )
  }
}
