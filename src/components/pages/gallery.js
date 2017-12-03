import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class gallery extends Component {
  render() {
    return (
      <div className="container-fluid ">

          <div className="heading">
            <h1>Recent Cosplays</h1>
          </div>

          <div className="complete_row">
            <div className="image_2">
              <img src="C:\Users\Kat\Desktop\myApp\my-app\img\D.Va One.png" alt="D.Va"/>
            </div>

            <div className="image_2">
              <img src="C:\Users\Kat\Desktop\myApp\my-app\img\D.Va Two.png" alt="D.Va"/>
            </div>

            <div className="image_2">
              <img src="C:\Users\Kat\Desktop\myApp\my-app\img\D.Va Three.png" alt="D.Va"/>
            </div>
          </div>

          <div className="complete_row">
            <div className="image_2">
              <img src="C:\Users\Kat\Desktop\myApp\my-app\img\widow three.png" alt="Widowmaker"/>
            </div>

            <div className="image_2">
              <img src="C:\Users\Kat\Desktop\myApp\my-app\img\widow two.png" alt="Widowmaker"/>
            </div>

            <div className="image_2">
              <img src="C:\Users\Kat\Desktop\myApp\my-app\img\widow one.png" alt="Widowmaker"/>
            </div>
          </div>

           <div className="complete_row">
            <div className="image_2">
              <img src="C:\Users\Kat\Desktop\myApp\my-app\img\alice one.jpg" alt="Alice"/>
            </div>

            <div className="image_2">
              <img src="C:\Users\Kat\Desktop\myApp\my-app\img\alice two.jpg" alt="Alice"/>
            </div>

            <div className="image_2">
              <img src="C:\Users\Kat\Desktop\myApp\my-app\img\alice three.jpg" alt="Alice"/>
            </div>
          </div>

           <div className="complete_row">
            <div className="image_2">
              <img src="C:\Users\Kat\Desktop\myApp\my-app\img\ulquiorra one.jpg" alt="Ulquiorra"/>
            </div>

            <div className="image_2">
              <img src="C:\Users\Kat\Desktop\myApp\my-app\img\ulquiorra two.jpg" alt="Ulquiorra"/>
            </div>

            <div className="image_2">
              <img src="C:\Users\Kat\Desktop\myApp\my-app\img\ulquiorra three.jpg" alt="Ulquiorra"/>
            </div>
          </div>
      </div>
    );
  }
}

export default gallery;