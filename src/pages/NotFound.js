import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>404 - Page not found</h1>
      <Link to="/">
        <FaHome className="mr-2" />
        Back to Home
      </Link>
    </>
  );
};

export default NotFound;
