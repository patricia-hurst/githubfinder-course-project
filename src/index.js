import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

import { ThemeProvider } from './context/theme/ThemeContext';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <ThemeProvider>
    <App tab="home" />
  </ThemeProvider>
);
