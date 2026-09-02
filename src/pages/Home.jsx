import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Calendar, 
  UtensilsCrossed, 
  GlassWater, 
  Music, 
  Crown, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  ArrowRight,
  ShieldCheck,
  Flame,
  Award,
  Users
} from 'lucide-react';
import { 
  businessInfo, 
  businessHighlights, 
  reviewsData, 
  menuItems 
} from '../data/businessData';

export default function Home({ onOpenReserve }) {
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);

  const nextReview = () => {
    setCurrentReviewIdx((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setCurrentReviewIdx((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  // Get signature items for showcase
  const signatureDishes = menuItems.filter(item => item.isSignature).slice(0, 4);

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        
        {/* Background Image with Rich Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80" 
            alt="Levernasia Lounge & Bar Ambiance" 
            className="w-full h-full object-cover object-center filter brightness-[0.3] contrast-125 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent"></div>
          <div className="absolute inset-0 bg-hero-pattern"></div>
          <div className="absolute inset-0 bg-radial-gold pointer-events-none"></div>
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          
          {/* Status & Location Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-surface/80 backdrop-blur-xl border border-brand-gold/30 shadow-gold-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Noida's Premier Nightlife & Dining
            </span>
            <span className="text-white/30">•</span>
            <span className="text-xs text-white/80 font-medium">Gardens Galleria Mall</span>
          </div>

          {/* Main Hero Headline */}
          <div className="space-y-4">
            <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.1]">
              Where High-Energy Glamour <br />
              <span className="gold-gradient-text">Meets Culinary Artistry</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-brand-light/75 font-normal leading-relaxed">
              Step into an LA-inspired luxury oasis in Sector 38A, Noida. Indulge in artisanal smoked cocktails, royal Indian delicacies, handmade sushi, and pulse-pounding live VDJ sets.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenReserve}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-gradient text-brand-darker font-bold text-base shadow-gold-lg hover:shadow-gold-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5 text-brand-darker" />
              <span>Reserve a Table</span>
              <Sparkles className="w-4 h-4 text-brand-darker" />
            </button>

            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-surface/90 hover:bg-brand-surfaceElevated text-white font-semibold text-base border border-brand-gold/30 hover:border-brand-gold shadow-glass transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <UtensilsCrossed className="w-5 h-5 text-brand-gold" />
              <span>Explore Food & Bar Menu</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Perks / Value props */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-xs text-brand-light/80">
            <div className="flex items-center justify-center space-x-2 p-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>4.3★ (1,500+ Reviews)</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/5">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>Open Till 2:00 AM</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/5">
              <Music className="w-4 h-4 text-brand-neon-purple" />
              <span>Live VDJ Weekends</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/5">
              <Crown className="w-4 h-4 text-brand-gold" />
              <span>VIP Cabanas & Valet</span>
            </div>
          </div>

        </div>
      </section>

      {/* METRICS & KEY STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="glass-panel rounded-3xl p-8 border-gold-glow grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="space-y-1">
            <div className="font-display font-bold text-3xl sm:text-4xl gold-gradient-text">4.3 ★</div>
            <p className="text-xs text-brand-muted uppercase tracking-wider font-semibold">Google Maps Rating</p>
            <p className="text-[11px] text-white/50">1,500+ genuine reviews</p>
          </div>
          <div className="space-y-1 pt-4 md:pt-0">
            <div className="font-display font-bold text-3xl sm:text-4xl text-white">50K+</div>
            <p className="text-xs text-brand-muted uppercase tracking-wider font-semibold">Guests Hosted</p>
            <p className="text-[11px] text-white/50">Birthdays & VIP gatherings</p>
          </div>
          <div className="space-y-1 pt-4 md:pt-0">
            <div className="font-display font-bold text-3xl sm:text-4xl gold-gradient-text">150+</div>
            <p className="text-xs text-brand-muted uppercase tracking-wider font-semibold">Culinary Creations</p>
            <p className="text-[11px] text-white/50">Pan-Asian, Indian & Mezze</p>
          </div>
          <div className="space-y-1 pt-4 md:pt-0">
            <div className="font-display font-bold text-3xl sm:text-4xl text-white">500+</div>
            <p className="text-xs text-brand-muted uppercase tracking-wider font-semibold">Live DJ Nights</p>
            <p className="text-[11px] text-white/50">High-energy party scenes</p>
          </div>
        </div>
      </section>

      {/* BUSINESS HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-gold">
            The Levernasia Standard
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Four Pillars of Elevated Hospitality
          </h2>
          <p className="text-sm text-brand-muted">
            Crafted for discerning gourmands, party lovers, and cocktail connoisseurs in Noida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessHighlights.map((highlight) => {
            const getIcon = (name) => {
              switch (name) {
                case 'GlassWater': return <GlassWater className="w-6 h-6 text-brand-gold" />;
                case 'UtensilsCrossed': return <UtensilsCrossed className="w-6 h-6 text-brand-gold" />;
                case 'Music': return <Music className="w-6 h-6 text-brand-neon-purple" />;
                case 'Crown': return <Crown className="w-6 h-6 text-brand-gold" />;
                default: return <Sparkles className="w-6 h-6 text-brand-gold" />;
              }
            };

            return (
              <div 
                key={highlight.id}
                className="glass-panel rounded-2xl p-6 glass-panel-hover flex flex-col justify-between space-y-6 relative group overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-surfaceElevated border border-brand-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(highlight.icon)}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                      {highlight.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-xl text-white group-hover:text-brand-gold transition-colors">
                    {highlight.title}
                  </h3>

                  <p className="text-xs text-brand-muted leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center text-xs text-brand-gold font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SIGNATURE CHEF & BAR SHOWCASE */}
      <section className="bg-brand-surfaceElevated/50 py-20 border-y border-brand-gold/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-gold flex items-center">
                <Flame className="w-3.5 h-3.5 mr-1 text-orange-500 fill-orange-500" />
                Signature Creations
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Chef & Mixologist Masterpieces
              </h2>
              <p className="text-sm text-brand-muted">
                Each recipe tells a story of craftsmanship, smoke, and global flavor fusion.
              </p>
            </div>
            
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-gold hover:underline"
            >
              <span>View Full Menu & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureDishes.map((item) => (
              <div 
                key={item.id}
                className="group rounded-2xl bg-brand-surface border border-brand-gold/15 overflow-hidden flex flex-col justify-between glass-panel-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-brand-gold text-brand-darker font-bold text-[10px] uppercase tracking-wider shadow-md">
                      Chef Special
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1 rounded-xl bg-brand-dark/90 backdrop-blur-md text-brand-gold font-bold text-sm border border-brand-gold/30">
                      ₹{item.price}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-semibold text-base text-white group-hover:text-brand-gold transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={onOpenReserve}
                    className="w-full py-2.5 rounded-xl bg-brand-surfaceElevated hover:bg-gold-gradient text-white hover:text-brand-darker font-semibold text-xs border border-brand-gold/30 hover:border-transparent transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>Reserve to Taste</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GOOGLE REVIEWS & SOCIAL PROOF CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-gold flex items-center justify-center">
            <Star className="w-3.5 h-3.5 mr-1 text-amber-400 fill-amber-400" />
            Verified Google Maps Reviews
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Loved by Noida's Party & Dining Crowd
          </h2>
          <p className="text-sm text-brand-muted">
            Over 1,500+ guests rate Levernasia at 4.3★ for unmatched vibes, hospitality, and cocktails.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border-gold-glow relative">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-gold-light via-brand-gold to-brand-gold-dark p-[1px]">
                  <div className="w-full h-full bg-brand-dark rounded-[15px] flex items-center justify-center font-display font-bold text-xl text-brand-gold">
                    {reviewsData[currentReviewIdx].author.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {reviewsData[currentReviewIdx].author}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-brand-muted">
                    <span className="text-brand-gold font-medium">{reviewsData[currentReviewIdx].badge}</span>
                    <span>•</span>
                    <span>{reviewsData[currentReviewIdx].date}</span>
                  </div>
                </div>
              </div>

              {/* Stars & Source */}
              <div className="flex flex-col md:items-end">
                <div className="flex text-amber-400 text-lg">
                  {'★'.repeat(Math.floor(reviewsData[currentReviewIdx].rating))}
                </div>
                <span className="text-xs text-brand-muted flex items-center mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                  {reviewsData[currentReviewIdx].source}
                </span>
              </div>
            </div>

            {/* Review Text */}
            <div className="py-8">
              <p className="font-display italic text-lg sm:text-xl text-brand-light leading-relaxed">
                "{reviewsData[currentReviewIdx].text}"
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex space-x-1.5">
                {reviewsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReviewIdx(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentReviewIdx === idx ? 'w-8 bg-brand-gold' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={prevReview}
                  aria-label="Previous Review"
                  className="p-3 rounded-full bg-brand-surface hover:bg-brand-surfaceElevated border border-white/10 hover:border-brand-gold text-white transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextReview}
                  aria-label="Next Review"
                  className="p-3 rounded-full bg-brand-surface hover:bg-brand-surfaceElevated border border-white/10 hover:border-brand-gold text-white transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LOCATION PREVIEW & ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-surface via-brand-surfaceElevated to-brand-surface border border-brand-gold/25 p-8 sm:p-12 overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/30 text-xs font-bold uppercase tracking-wider inline-flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1" />
                Find Us in Noida
              </span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Visit Levernasia at Gardens Galleria
              </h2>

              <p className="text-sm text-brand-light/80 leading-relaxed">
                Situated on the 1st Floor (Unit No. 205-206C) at Gardens Galleria Mall, Sector 38A, Noida. Enjoy convenient valet parking, high-speed elevator access, and our ambient indoor lounge & terrace.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-brand-dark/70 p-4 rounded-xl border border-white/5 space-y-1">
                  <span className="text-brand-muted block">Operating Hours:</span>
                  <span className="font-bold text-white text-sm">12:00 PM – 02:00 AM Daily</span>
                  <span className="text-emerald-400 block text-[11px]">Kitchen open till 01:30 AM</span>
                </div>
                <div className="bg-brand-dark/70 p-4 rounded-xl border border-white/5 space-y-1">
                  <span className="text-brand-muted block">Direct Helpline:</span>
                  <a href={`tel:${businessInfo.phone}`} className="font-bold text-brand-gold text-sm hover:underline block">
                    {businessInfo.phoneDisplay}
                  </a>
                  <span className="text-white/50 block text-[11px]">Instant Table & VIP Queries</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={businessInfo.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-gold-gradient text-brand-darker font-bold text-xs shadow-gold-md hover:scale-105 transition-transform flex items-center space-x-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={businessInfo.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white font-bold text-xs border border-emerald-500/30 transition-all flex items-center space-x-2"
                >
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full bg-brand-dark hover:bg-brand-surface text-white font-semibold text-xs border border-white/15 transition-all"
                >
                  View Full Location Details →
                </Link>
              </div>
            </div>

            {/* Embedded Google Map Preview */}
            <div className="lg:col-span-5 h-72 sm:h-80 rounded-2xl overflow-hidden border border-brand-gold/20 shadow-xl relative">
              <iframe
                title="Levernasia Gardens Galleria Noida Location"
                src="https://maps.google.com/maps?q=28.56478,77.32179&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-3 left-3 right-3 bg-brand-dark/90 backdrop-blur-md p-2.5 rounded-xl border border-brand-gold/30 text-[11px] text-brand-light flex items-center justify-between">
                <span>Unit 205-206C, Gardens Galleria Mall</span>
                <span className="text-brand-gold font-bold">Sector 38A</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
