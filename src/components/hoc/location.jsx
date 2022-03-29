import { useLocation, useNavigate } from 'react-router';

/**
 * This higher order component will give access to 'location' in class components.
 * You may think why not use 'window.location', yeah that would work, but it
 * wouldn't have 'state' property provided by react-router.
 */
const WithLocation = ({ component: Component }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return <Component location={location} navigate={navigate} />;
};

export default WithLocation;
