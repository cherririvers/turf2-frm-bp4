import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SportsPage from './pages/SportsPage';
import AmenitiesPage from './pages/AmenitiesPage';
import CorporatePage from './pages/CorporatePage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import BrewNPlayPage from './pages/BrewNPlayPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="sports" element={<SportsPage />} />
            <Route path="amenities" element={<AmenitiesPage />} />
            <Route path="corporate" element={<CorporatePage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="cafe" element={<BrewNPlayPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
