import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Calendar, 
  Menu as MenuIcon, 
  X, 
  Sparkles,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { businessInfo } from '../../data/businessData';

export default function Navbar({ onOpenReserve }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Menu & Services', path: '/services' },
    { name: 'Contact & Location', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-darker via-brand-surface to-brand-darker border-b border-brand-gold/10 text-xs py-2 px-4 text-brand-muted hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open Daily: 12:00 PM – 2:00 AM
            </span>
            <span className="flex items-center text-brand-light/70">
              <MapPin className="w-3.5 h-3.5 mr-1 text-brand-gold" />
              Gardens Galleria Mall, Sector 38A, Noida
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-brand-gold/90 font-medium flex items-center">
              <Sparkles className="w-3 h-3 mr-1 text-brand-gold" />
              Weekend VDJ Nights & VIP Cabanas
            </span>
            <a 
              href={`tel:${businessInfo.phone}`} 
              className="hover:text-brand-gold transition-colors flex items-center font-medium"
            >
              <Phone className="w-3 h-3 mr-1 text-brand-gold" />
              {businessInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-dark/90 backdrop-blur-xl border-b border-brand-gold/20 shadow-2xl py-3' 
          : 'bg-brand-dark/60 backdrop-blur-md border-b border-white/5 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold-light via-brand-gold to-brand-gold-dark p-[1px] shadow-gold-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-brand-dark rounded-[11px] flex items-center justify-center">
                <span className="font-display font-bold text-xl gold-gradient-text tracking-wider">L</span>
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-2xl tracking-wider text-white group-hover:text-brand-gold transition-colors flex items-center">
                LEVERNASIA
                <span className="text-brand-gold ml-0.5 text-xl leading-none">.</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-brand-gold block font-semibold -mt-1">
                Lounge & Bar • Noida
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    active
                      ? 'text-brand-gold bg-brand-surfaceElevated/80 border border-brand-gold/30 shadow-gold-sm'
                      : 'text-brand-light/80 hover:text-brand-gold hover:bg-brand-surface/50'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-gold rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${businessInfo.phone}`}
              className="p-2.5 rounded-full bg-brand-surface hover:bg-brand-surfaceElevated border border-white/10 hover:border-brand-gold/40 text-brand-gold transition-all duration-200"
              title="Call for Reservations"
              aria-label="Call for Reservations"
            >
              <Phone className="w-4 h-4" />
            </a>
            
            <button
              onClick={onOpenReserve}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gold-gradient text-brand-darker font-semibold text-sm shadow-gold-md hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-brand-darker" />
              <span>Reserve Table</span>
              <Sparkles className="w-3.5 h-3.5 text-brand-darker opacity-80 group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenReserve}
              className="px-3.5 py-1.5 rounded-full bg-gold-gradient text-brand-darker font-semibold text-xs flex items-center space-x-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-brand-surface border border-white/10 text-brand-light hover:text-brand-gold focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-brand-darker/95 backdrop-blur-2xl flex flex-col justify-between p-6 animate-fade-in">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-gold-gradient p-[1px]">
                  <div className="w-full h-full bg-brand-dark rounded-[11px] flex items-center justify-center">
                    <span className="font-display font-bold text-lg gold-gradient-text">L</span>
                  </div>
                </div>
                <div>
                  <span className="font-display font-bold text-xl text-white">LEVERNASIA</span>
                  <span className="text-[9px] tracking-widest uppercase text-brand-gold block font-semibold">
                    Gardens Galleria Noida
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-brand-surface text-brand-light hover:text-white"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 space-y-3">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-base font-medium transition-all ${
                      active
                        ? 'bg-brand-surfaceElevated text-brand-gold border border-brand-gold/30'
                        : 'text-brand-light/90 hover:bg-brand-surface'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-5 h-5 text-brand-gold/60" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="bg-brand-surface p-4 rounded-2xl border border-white/5 space-y-2">
              <div className="flex items-center text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                Open Now: 12:00 PM – 2:00 AM Daily
              </div>
              <p className="text-xs text-brand-muted">
                {businessInfo.shortAddress}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${businessInfo.phone}`}
                className="py-3 px-4 rounded-xl bg-brand-surface hover:bg-brand-surfaceElevated border border-white/10 text-white font-medium text-center text-sm flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReserve();
                }}
                className="py-3 px-4 rounded-xl bg-gold-gradient text-brand-darker font-bold text-center text-sm flex items-center justify-center space-x-1.5 shadow-gold-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Table</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
