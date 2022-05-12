import { FaRegLaughBeam } from 'react-icons/fa';
import Toggle from '../../context/theme/themeToggle';
import ThemeWrapper from '../../context/theme/ThemeWrapper';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Navbar = props => {
  return (
    <header>
      <ThemeWrapper>
        <nav className="navbar h-16">
          <div className="container mx-auto">
            <div className="flex items-center justify-between w-full">
              <div className="nav-left border-b-2 border-transparent">
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
                  className="text-xl md:text-3xl transition-border-b duration-300 border-b-2 border-transparent hover:border-slate-200 dark:hover:border-teal-600"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-xl md:text-3xl transition-border-b duration-300 border-b-2 border-transparent hover:border-slate-200 dark:hover:border-teal-600"
                >
                  About
                </Link>
                <Toggle />
              </div>
            </div>
          </div>
        </nav>
      </ThemeWrapper>
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
