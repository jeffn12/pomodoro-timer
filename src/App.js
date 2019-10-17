import React from 'react';
import TimerDisplay from './components/TimerDisplay';
import TimerSettings from './components/TimerSettings';
import TimerControls from './components/TimerControls';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerRun: false,
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

  reset = () => {
    this.setState( {
      breakLength: 5,
      sessionLength: 25,
      timerRun: false,
    });
  }

  timerStart = () => {
    alert('timer start');
    this.setState( {
      timerRun: true,
    });
  }

  timerStop = () => {
    alert('timer stop');
    this.setState( {
      timerRun: false,
    });
  }

  render() {
    return (
      <div id="wrapper">
        <TimerSettings 
          breakUp={this.breakUp}
          breakDown={this.breakDown}
          sessionUp={this.sessionUp}
          sessionDown={this.sessionDown}
          breakLength={this.state.breakLength}
          sessionLength={this.state.sessionLength}
        />
        <TimerDisplay 
          name="Session"
          time={this.state.sessionLength} 
        />  
        <TimerControls
          runToggle={this.state.timerRun === true ? this.timerStop : this.timerStart }
          reset={this.reset}
        />
      </div>   
    )
  }
}
