import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Navbar from './nav-bar';
import FormBuilder from './form/form-builder';
import ListForms from './form/list-forms';
import RenderForm from './form/render-form';
import Login from './auth/login';
import Signup from './auth/signup';
import NotFound from './404';
import WithLocation from './hoc/location';
import '../css/app.css';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container className="mt-5">
          <Routes>
            <Route path="/" />
            <Route path="/forms/new" element={<FormBuilder />} />
            <Route
              path="/forms/:id"
              element={<WithLocation component={RenderForm} />}
            />
            <Route path="/forms" element={<ListForms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </>
    );
  }
}
