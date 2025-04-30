import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Accommodations from './pages/Accommodations';
import AccommodationDetail from './pages/AccommodationDetail';
import Transportation from './pages/Transportation';
import Culinary from './pages/Culinary';
import CulinaryDetail from './pages/CulinaryDetail';
import PhotoSpots from './pages/PhotoSpots';
import PhotoSpotDetail from './pages/PhotoSpotDetail';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinasi" element={<Destinations />} />
            <Route path="/destinasi/:id" element={<DestinationDetail />} />
            <Route path="/akomodasi" element={<Accommodations />} />
            <Route path="/akomodasi/:id" element={<AccommodationDetail />} />
            <Route path="/transportasi" element={<Transportation />} />
            <Route path="/kuliner" element={<Culinary />} />
            <Route path="/kuliner/:id" element={<CulinaryDetail />} />
            <Route path="/foto" element={<PhotoSpots />} />
            <Route path="/foto/:id" element={<PhotoSpotDetail />} />
            <Route path="/ulasan" element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;