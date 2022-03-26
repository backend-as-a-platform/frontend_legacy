import { Component, Fragment } from 'react';
import '../css/app.css';
import Navbar from './nav-bar';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <h1 className="mt-5 mb-4">Backend as a Platform (BaaP)</h1>
      </Fragment>
    );
  }
}
