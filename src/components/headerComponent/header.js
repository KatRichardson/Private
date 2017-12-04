import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

	  <head>
  		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>
	 </head>

  		<ul className="navbar">
          		<li><a href="/home"><i className="fa fa-home fa-3x"></i></a></li>
  			<li><a href="/about"><i className="fa fa-user fa-2x"></i></a></li>
  			<li><a href="/gallery"><i className="fa fa-picture-o fa-2x"></i></a></li>
  			<li><a href="/contactMe"><i className="fa fa-envelope-o fa-2x"></i></a></li>
		</ul>

	</header>
    );
  }
}

export default Header;
