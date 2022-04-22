import { createContext, useState, useEffect } from 'react';

// context used to allow a toggle between light and dark mode - NOTE that this is setup for use with Tailwind, which has a built in dark mode variant

const getInitialTheme = () => {
  // check local storage to see if a theme is stored in "color-theme" and if so, set it to that
  // check PC user preference to see if "dark" is set as default system appearance, if so set to darkmode
  // set light mode as default
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');

    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'light';
};

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = rawTheme => {
    // get root element of our React app
    const root = window.document.documentElement;
    // setup a boolean to allow checking if the theme (rawTheme) is dark or light
    const isDark = rawTheme === 'dark';

    // using the isDark boolean, we can now remove the current theme
    root.classList.remove(isDark ? 'light' : 'dark');
    // then add the new one
    root.classList.add(rawTheme);

    // store the user's theme value in local storage so it's saved for future user visits
    localStorage.setItem('color-theme', rawTheme);
  };

  // check if an initial theme value was passed to the component; if so, pass directly to the rawSetTheme function
  if (props.initialTheme) {
    rawSetTheme(props.initialTheme);
  }

  // useEffect calls rawSetTheme() function whenever the theme variable is changed
  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
