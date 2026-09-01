import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CrazyFooter from './components/CrazyFooter';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Work from './pages/Work';
import Approach from './pages/Approach';
import Career from './pages/Career';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <CrazyFooter />
      </div>
    </Router>
  );
}

export default App;
