import { FaRegLaughBeam } from 'react-icons/fa';
import Toggle from '../../context/theme/themeToggle';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

// NOTE: html layout needs to be updated in the master branch even if decide not to do darkmode (just delete the toggle component)

const Navbar = props => {
  return (
    <header>
      <nav className="navbar mb-12 bg-teal-600 text-slate-200 dark:bg-neutral">
        <div className="container mx-auto">
          <div className="flex items-center justify-between w-full">
            <div className="nav-left">
              <FaRegLaughBeam className="inline pr-2 text-4xl" />
              <Link
                to="/"
                className="text-2xl font-bold align-middle dark:text-teal-600"
              >
                {props.title}
              </Link>
            </div>
            <div className="nav-right flex gap-4 items-center">
              <Link
                to="/"
                className="text-3xl transition-border-b duration-300 border-b-2 border-transparent hover:border-slate-200 dark:hover:border-teal-600"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-3xl transition-border-b duration-300 border-b-2 border-transparent hover:border-slate-200 dark:hover:border-teal-600"
              >
                About
              </Link>
              <Toggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Navbar.defaultProps = {
  title: 'Jokes',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
