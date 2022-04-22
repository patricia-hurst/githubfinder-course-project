import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JokeProvider } from './context/JokeContext';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
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
          {/* use flex-grow: 1 (grow) to let main content fill screen and push footer to bottom for fake sticky-effect */}
          <main className="container mx-auto px-2 pb-12 grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Background>
      </Router>
    </JokeProvider>
  );
};

export default App;
