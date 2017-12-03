import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class contactMe extends Component {
  render() {
    return (
      <div className="container-fluid">
      	<h1>Contact Me</h1>
        <h2>The Planning Process</h2>

        <table>
          <tr>
            <td>
              <h3>Situation Analysis</h3>
              <p>At this current moment, Sipreme is practically unknown. There has been no promotional media from them,
              nobody knows they exist. Sipreme supposedly sells health drinks that are taking the world by storm as they
              are practically a meal in a bottle. Other companies such as Soylent (USA) and Aussielent (Australia)
              provide these drinks, however either won't ship to New Zealand or charge practically double for the 
              shipping. This is why Sipreme needs to up their game. They have the advantage of there being a high
              demand for these products, however need to make themselves known.</p>
            </td>
            <td>
              <h3>Mission, Vision, Goals & Objectives</h3>
              <p>This is where we'll talk about the mission, vision, goals and objectives, and what we hope to achieve
              bother long term and short term.</p>
            </td>
            <td>
              <h3>Strategies & Action Plans</h3>
              <p>This is where we'll talk about further strategies and acton plans once the base has 
              been setup. Hopefully I don't stuff this all up and I actually get it to work.</p>
            </td>
          </tr>
        </table>

        
      </div>
    );
  }
}

export default contactMe;