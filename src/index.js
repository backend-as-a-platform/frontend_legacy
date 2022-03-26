import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/app';
import FormBuilder from './components/form-builder';
import Login from './components/login';
import Signup from './components/signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/forms/new" element={<FormBuilder />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>,
  document.querySelector('#root')
);
