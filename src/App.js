import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JokeProvider } from './context/JokeContext';

import Navbar from './components/layout/Navbar';
import Background from './components/ui/Background';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <JokeProvider>
      <Router>
        <Background>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Background>
      </Router>
    </JokeProvider>
  );
};

export default App;
