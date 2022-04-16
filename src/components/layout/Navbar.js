import { BsCodeSquare } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Navbar = props => {
  return (
    <header>
      <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
          <div className="flex px-2">
            <BsCodeSquare className="inline pr-2 text-4xl" />
            <Link
              to="/"
              className="text-2xl font-bold align-middle text-teal-600"
            >
              {props.title}
            </Link>
          </div>
          <div className="flex-1 px-2 mx-2">
            <div className="flex content-center justify-end">
              <Link
                to="/"
                className="px-3 text-3xl transition ease hover:text-teal-600 duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 text-3xl transition ease hover:text-teal-600 duration-300"
              >
                About
              </Link>
              <a
                href="http://www.yahoo.com"
                target="_blank"
                rel="noopener noreferrer"
                // pt-1.5 class fixes alignment with other navbar links
                className="px-3 text-3xl transition ease hover:text-teal-600 duration-300 pt-1.5"
              >
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Navbar.defaultProps = {
  title: 'Title',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
