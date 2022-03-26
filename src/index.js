import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/app';
import FormBuilder from './components/form-builder';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/forms/new" element={<FormBuilder />} />
    </Routes>
  </BrowserRouter>,
  document.querySelector('#root')
);
