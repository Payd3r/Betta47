import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Struttura from './pages/Struttura';
import Servizi from './pages/Servizi';
import Prenotazioni from './pages/Prenotazioni';
import AffittoBreve from './pages/AffittoBreve';

// Componente per scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/struttura" element={<Struttura />} />
            <Route path="/servizi" element={<Servizi />} />
            <Route path="/prenotazioni" element={<Prenotazioni />} />
            <Route path="/affitto-breve" element={<AffittoBreve />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
