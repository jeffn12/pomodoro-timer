import React from 'react';
import TimerSettings from './components/TimerSettings';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerRun: false,
      time: "25:00",
    }
  }

  breakUp = () => {
    if(this.state.breakLength <= 59 && !this.state.timerRun) { 
      this.setState( {breakLength: this.state.breakLength + 1} );
    }
  }

  breakDown = () => {
    if(this.state.breakLength >= 2 && !this.state.timerRun) {
      this.setState( {breakLength: this.state.breakLength - 1} )
    }
  }

  sessionUp = () => {
    if(this.state.sessionLength <= 59 && !this.state.timerRun) { 
      this.setState( {sessionLength: this.state.sessionLength + 1,} );
    }
  }

  sessionDown = () => {
    if(this.state.sessionLength >= 2 && !this.state.timerRun) {
      this.setState( {sessionLength: this.state.sessionLength - 1,} )
    }
  }

  reset = () => {
    this.timerStop();
    this.setState( {
      breakLength: 5,
      sessionLength: 25,
      timerRun: false,
      time: "25:00"
    });
  }

  timerStart = () => {
    this.setState( {
      timerRun: true,
      time: `${this.state.sessionLength}:00`
    } );
    const time = this.state.time.split(':');
    const sec = (parseInt(time[0]) * 60 + parseInt(time[1]));
    this.start(sec);
  }

  start = (sec) => {
    if(!this.state.timerRun) {
    let x = setInterval( () => {
      sec--; 
      if(sec < 1 || !this.state.timerRun) {
        clearInterval(x);
      }
      else this.tick(sec);
    }, 1000); }
  }

  tick = (sec) => {
    this.setState( {
      time: `${Math.floor(sec / 60).toString()}:${(sec % 60).toString()}`,
    } );
  }

  timerStop = () => {
    //alert('timer stop');
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
          time={this.state.time}
        />  
        <TimerControls
          runToggle={this.state.timerRun === true ? this.timerStop : this.timerStart }
          reset={this.reset}
        />
      </div>   
    )
  }
}
