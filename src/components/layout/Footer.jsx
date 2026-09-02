import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Instagram, 
  Facebook, 
  Send, 
  ArrowUpRight, 
  Heart,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { businessInfo } from '../../data/businessData';

export default function Footer({ onOpenReserve }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }
  };

  return (
    <footer className="bg-brand-darker border-t border-brand-gold/15 relative overflow-hidden text-brand-light/80 pt-16 pb-10">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-neon-purple/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Social Proof Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient p-[1px] shadow-gold-sm">
                <div className="w-full h-full bg-brand-dark rounded-[11px] flex items-center justify-center">
                  <span className="font-display font-bold text-xl gold-gradient-text">L</span>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-2xl tracking-wider text-white">LEVERNASIA</span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-brand-gold block font-semibold">
                  Lounge & Bar • Noida
                </span>
              </div>
            </Link>

            <p className="text-sm text-brand-muted leading-relaxed">
              Noida's premier luxury lounge and high-energy nightlife destination at Gardens Galleria Mall. Immersive music, world-class molecular mixology, and signature global gastronomy.
            </p>

            {/* Google Rating Badge */}
            <a 
              href={businessInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 p-3.5 rounded-2xl bg-brand-surface/90 border border-brand-gold/20 hover:border-brand-gold/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-600/20 border border-amber-400/30 flex items-center justify-center">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-bold text-white text-base">4.3</span>
                  <div className="flex text-amber-400 text-xs">
                    {'★★★★★'}
                  </div>
                </div>
                <span className="text-xs text-brand-muted group-hover:text-brand-gold transition-colors flex items-center">
                  1,500+ Google Maps Reviews <ArrowUpRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </a>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-accent font-semibold text-white uppercase tracking-wider text-sm border-b border-brand-gold/20 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-gold transition-colors flex items-center">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors flex items-center">
                  About Levernasia
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-gold transition-colors flex items-center">
                  Menu & Cuisines
                </Link>
              </li>
              <li>
                <Link to="/services#vip" className="hover:text-brand-gold transition-colors flex items-center">
                  VIP Cabana Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-gold transition-colors flex items-center">
                  Location & Map
                </Link>
              </li>
              <li>
                <button onClick={onOpenReserve} className="hover:text-brand-gold transition-colors text-left flex items-center text-brand-gold font-medium">
                  Reserve a Table →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Address Details */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-accent font-semibold text-white uppercase tracking-wider text-sm border-b border-brand-gold/20 pb-2 inline-block">
              Location & Hours
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  {businessInfo.address}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Open Daily: 12:00 PM – 02:00 AM</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="hover:text-brand-gold transition-colors font-medium text-white">
                  {businessInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-brand-gold transition-colors">
                  {businessInfo.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={businessInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-brand-gold hover:underline"
              >
                Get Directions on Google Maps →
              </a>
            </div>
          </div>

          {/* VIP Club / Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-accent font-semibold text-white uppercase tracking-wider text-sm border-b border-brand-gold/20 pb-2 inline-block flex items-center space-x-1.5">
              <span>VIP Guestlist & Offers</span>
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Subscribe to get exclusive invitations to celebrity DJ nights, private tasting sessions, and weekend discounts.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-white/10 text-white placeholder-brand-muted text-sm focus:outline-none focus:border-brand-gold pr-10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to VIP Guestlist"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-gold-gradient text-brand-darker hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {newsletterSuccess && (
                <div className="flex items-center space-x-1.5 text-emerald-400 text-xs mt-2 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>You're on the VIP Guestlist! Welcome to Levernasia.</span>
                </div>
              )}
            </form>

            <div className="pt-2 flex items-center space-x-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Levernasia on Instagram"
                className="w-9 h-9 rounded-xl bg-brand-surface hover:bg-brand-surfaceElevated border border-white/10 hover:border-brand-gold/40 text-brand-light hover:text-brand-gold flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Levernasia on Facebook"
                className="w-9 h-9 rounded-xl bg-brand-surface hover:bg-brand-surfaceElevated border border-white/10 hover:border-brand-gold/40 text-brand-light hover:text-brand-gold flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={businessInfo.whatsAppUrl}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp with Levernasia"
                className="px-3.5 py-1.5 rounded-xl bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-800/40 transition-all flex items-center space-x-1.5"
              >
                <span>WhatsApp VIP</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-muted gap-4">
          <p>© {new Date().getFullYear()} Levernasia Lounge & Bar, Gardens Galleria Noida. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-brand-gold cursor-pointer">Privacy Policy</span>
            <span className="hover:text-brand-gold cursor-pointer">Terms of Service</span>
            <span className="hover:text-brand-gold cursor-pointer">Valet Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
