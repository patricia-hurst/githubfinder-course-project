import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs';

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === 'dark' ? (
        <BsFillMoonFill
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="dark:text-slate-200 text-2xl cursor-pointer"
        />
      ) : (
        <BsSunFill
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-slate-200 text-2xl cursor-pointer"
        />
      )}
    </>
  );
};

export default Toggle;
