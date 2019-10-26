import React from 'react';
import TimerSettings from './components/TimerSettings';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import accurateInterval from 'accurate-interval';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerRun: false,
      time: "25:00",
      timerType: "Session",
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
      this.setState( {sessionLength: this.state.sessionLength + 1, time: `${this.state.sessionLength + 1}:00` });
    }
  }

  sessionDown = () => {
    if(this.state.sessionLength >= 2 && !this.state.timerRun) {
      this.setState( {sessionLength: this.state.sessionLength - 1, time: `${this.state.sessionLength - 1}:00` } )
    }
  }

  reset = () => {
    //this.timerStop();
    this.setState( {
      breakLength: 5,
      sessionLength: 25,
      timerRun: false,
      time: "25:00",
      timerType: "Session"
    });
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  }

  timerStart = () => {
    this.setState( {
      timerRun: true,
    }, function() { 
      const arr = this.state.time.split(':');
      const sec = parseInt(arr[0]) * 60 + parseInt(arr[1]);
      this.start(sec);}  
    );
    
  }

  start = (sec) => {
    if(this.state.timerRun) {
      let x = setInterval( () => {
        sec--; 
        if(!this.state.timerRun || sec < 0) { 
          clearInterval(x);
          if(sec < 0) {
            this.endTimer();
          }
        }
        else {
          this.tick(sec);
        }
      }, 1000); 
      
    }
  }

  tick = (sec) => {
    this.setState( {
      time: `${Math.floor(sec / 60).toString()}:${(sec % 60).toString()}`,
    } );
  }

  endTimer = () => {
    this.audioBeep.play();
    switch(this.state.timerType) {
      case 'Session':
        this.setState( {
          timerType: 'Break',
          time: this.state.breakLength.toString() + ":00",
        });
        break;
      case 'Break':
        this.setState( {
          timerType: 'Session',
          time: this.state.sessionLength.toString() + ":00",
        });
        break;
      default:
        alert('Timer broken');
        break;
    }
    this.timerStart();
  }

  timerStop = () => {
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
          name={this.state.timerType}
          time={this.state.time}
        />  
        <TimerControls
          runToggle={this.state.timerRun === true ? this.timerStop : this.timerStart }
          timerRun={this.state.timerRun}
          reset={this.reset}
        />
        <audio id="beep" preload="auto" 
          src="https://goo.gl/65cBl1"
          ref={(audio) => { this.audioBeep = audio; }} />
      </div>   
    )
  }
}
