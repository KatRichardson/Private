import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class homePage extends Component {
  render() {
    return (
      <div className="container-fluid">

      	<div className="banner">

      		<div className="title">

      			<img src="C:\Users\Kat\Desktop\myApp\my-app\img\alice_wonderland.png" alt="Products"/>
      			<p><span>
      			Help
      			</span></p>
      		
      		</div>

      	</div>

      	<div className="cosplay-home">

      		<div className="heading">
      			<h1>Recent Cosplays</h1>
      		</div>

      		<div className="row">
      			<div className="image">
      				<img src="C:\Users\Kat\Desktop\myApp\my-app\img\dva_square.jpg" alt="Dva"/>
      				<p><span>D.Va - Overwatch</span></p>
      			</div>

      			<div className="image">
      				<img src="C:\Users\Kat\Desktop\myApp\my-app\img\ulquiorra_square.jpg" alt="Ulquiorra"/>
      				<p><span>Genderbent Ulquiorra - Bleach</span></p>
      			</div>

      			<div className="image">
      				<img src="C:\Users\Kat\Desktop\myApp\my-app\img\widowmaker_square.png" alt="Widowmaker"/>
      				<p><span>Widowmaker - Overwatch</span></p>
      			</div>
      		</div>

      	</div>	

      	<div className="portfolio">

      		<div className="heading">
      			<h1>Gallery</h1>
      		</div>

      		<img src="C:\Users\Kat\Desktop\myApp\my-app\img\widowmaker_land.png"/>

      		<Link to="/gallery">Gallery</Link>

      	</div>


	 </div>
    );
  }
}

export default homePage;
