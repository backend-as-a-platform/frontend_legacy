import { useLocation } from 'react-router';

/**
 * This higher order component will give access to 'location' in class components.
 * You may think why not use 'window.location', yeah that would work, but it
 * wouldn't have 'state' property provided by react-router.
 */
const WithLocation = ({ component }) => {
  const location = useLocation();
  const Component = component;

  return <Component location={location} />;
};

export default WithLocation;
