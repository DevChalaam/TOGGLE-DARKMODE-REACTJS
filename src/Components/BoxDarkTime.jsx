import React, { Component } from 'react';
import "./BoxDarkTime.css";

class BoxDarkTime extends Component {
  render() {
    const date = new Date();
    const showTime = date.getHours() + ":" + date.getMinutes();
    return(
      <div className="box-container">
        <p className="time" id='timers'> {showTime} </p>

        <div className="container-in1"></div>
            
        <div className="container-in2"></div>

        <div className="container-in3"></div>

        <label className="switch">
            <input type="checkbox" checked onClick={this.toggleSwitch} />
            <span className="slider round"></span>
        </label>
    </div>
    )
  }

  toggleSwitch = () => {
    let darkModes = document.body;
    darkModes.classList.toggle("darkMode");
  };
};

export default BoxDarkTime