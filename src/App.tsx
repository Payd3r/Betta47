import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy loading dei componenti per migliorare le prestazioni
const Home = lazy(() => import('./pages/Home'));
const Struttura = lazy(() => import('./pages/Struttura'));
const Servizi = lazy(() => import('./pages/Servizi'));
const Prenotazioni = lazy(() => import('./pages/Prenotazioni'));
const AffittoBreve = lazy(() => import('./pages/AffittoBreve'));

// Componente per scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Componente di loading
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-700 mx-auto mb-4"></div>
      <p className="text-slate-600 font-medium">Caricamento...</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/struttura" element={<Struttura />} />
              <Route path="/servizi" element={<Servizi />} />
              <Route path="/prenotazioni" element={<Prenotazioni />} />
              <Route path="/affitto-breve" element={<AffittoBreve />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
