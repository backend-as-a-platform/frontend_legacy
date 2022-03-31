import { Link } from 'react-router-dom';
import '../css/404.css';

const NotFound = () => (
  <div id="notfound">
    <div className="notfound">
      <div className="notfound-404">
        <h3>Oops! Page not found</h3>
        <h1>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
      </div>
      <h2>
        come on, let's get you <Link to="/">home</Link>
      </h2>
    </div>
  </div>
);

export default NotFound;
