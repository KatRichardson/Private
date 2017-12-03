import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import About from './components/pages/about';
import contactMe from './components/pages/contactMe';
import Gallery from './components/pages/gallery'
import Footer from './components/footerComponents/footer';

//includes
import './assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

            <Route exact path='/' component={Homepage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contactMe' component={contactMe} />
            <Route exact path='/gallery' component={Gallery} />

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
