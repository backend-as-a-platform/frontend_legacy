import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
