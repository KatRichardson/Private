import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class about extends Component {
  render() {
    return (
      <div className="container-fluid">

      	<div className="welcome_image">
          <h1>The best things in life come in small packages.</h1>
        </div>

        <div className="mission">
        <h3>I'm a kiwi cosplayer and art lover who thrives on procrastination and stress. 
            I mostly cosplay from games, anime and Disney.</h3>
          <p>blah blah blah blah</p>
        </div>

        <div className="who_i_am">
          <h3>Who I am</h3>
          <img src="C:\Users\Kat\Desktop\myApp\my-app\img\sanja.jpg"/>
          <p>blah blah blah blah</p>
        </div>

        <div className="background">
          <h3>My background</h3>
          <p>blah blah blah</p>
        </div>

      </div>
    );
  }
}

export default about;