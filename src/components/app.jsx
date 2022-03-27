import { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../css/app.css';
import Navbar from './nav-bar';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container>
          <h1 className="mt-5 mb-4">Backend as a Platform (BaaP)</h1>
        </Container>
      </>
    );
  }
}
