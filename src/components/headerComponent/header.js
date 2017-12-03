import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

	   	<head>
        <script type="text/javascript" src="script.js"></script>
  			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>
		  </head>

  			<div className="parent2">
  				<div className="test1"><i className="fa fa-user fa-2x"></i></div>
  				<div className="test2"><i className="fa fa-picture-o fa-2x"></i></div>
  				<div className="test4"><i className="fa fa-envelope-o fa-2x"></i></div>
  				<div className="mask2"><i className="fa fa-home fa-3x"></i></div>
			</div>

	   </header>
    );
  }
}

export default Header;
