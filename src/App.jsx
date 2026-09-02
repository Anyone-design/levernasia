import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ReservationModal from './components/common/ReservationModal';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Phone, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { businessInfo } from './data/businessData';

// Helper component to automatically scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleOpenReserve = (pkgName = null) => {
    setSelectedPackage(pkgName);
    setIsReserveOpen(true);
  };

  const handleCloseReserve = () => {
    setIsReserveOpen(false);
    setSelectedPackage(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-dark text-brand-light relative">
        
        {/* Navigation */}
        <Navbar onOpenReserve={() => handleOpenReserve()} />

        {/* Route Pages Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenReserve={() => handleOpenReserve()} />} />
            <Route path="/about" element={<About onOpenReserve={() => handleOpenReserve()} />} />
            <Route path="/services" element={<Services onOpenReserve={() => handleOpenReserve()} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onOpenReserve={() => handleOpenReserve()} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenReserve={() => handleOpenReserve()} />

        {/* Global Table Reservation Modal */}
        <ReservationModal
          isOpen={isReserveOpen}
          onClose={handleCloseReserve}
          preselectedPackage={selectedPackage}
        />

        {/* Floating Quick Action Pill for Mobile & Desktop */}
        <div className="fixed bottom-5 right-5 z-40 flex items-center space-x-2 animate-slide-up">
          <a
            href={businessInfo.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Us"
            className="p-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          <button
            onClick={() => handleOpenReserve()}
            className="px-4 py-3 rounded-full bg-gold-gradient text-brand-darker font-bold text-xs shadow-gold-md hover:scale-105 transition-all flex items-center space-x-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Book Table</span>
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </Router>
  );
}
