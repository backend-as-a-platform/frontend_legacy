import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Navbar from './nav-bar';
import FormBuilder from './form/form-builder';
import ListForms from './form/list-forms';
import RenderForm from './form/render-form';
import Login from './auth/login';
import Signup from './auth/signup';
import NotFound from './404';
import WithLocation from './hoc/location';
import '../css/app.css';
import ListRecords from './form/list-records';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container className="mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/forms/new"
              element={<WithLocation component={FormBuilder} />}
            />
            <Route
              path="/forms/:id"
              element={<WithLocation component={RenderForm} />}
            />
            <Route path="/forms/:id/records" element={<ListRecords />} />
            <Route path="/forms" element={<ListForms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </>
    );
  }
}
