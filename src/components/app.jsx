import { Component, Fragment } from 'react';
import '../css/app.css';
import Navbar from './nav-bar';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div class="main">
          
      <h1 class="headings">
        BaaP
        <br />
      </h1>
    </div>,
    <div class="side">
      <h2>Backend as a Platfrom</h2>
    </div>,
    <div class="paragraph">
      <div class="text"></div>
      <ul class="option">
        <li>
          <span>
            {' '}
            A Low-code application development platform specifically for
            back-ends based on the technologies Node.js, Express, REST <br/>and
            MongoDB.
          </span>
        </li>
      </ul>
      <button type="button" class="btnstart">Get Started</button>
    </div>
      </Fragment>
    );
  }
}
