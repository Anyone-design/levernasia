import React, { useState } from 'react';
import { 
  Sparkles, 
  Flame, 
  Wine, 
  Music, 
  Award, 
  Heart, 
  ShieldCheck, 
  Users, 
  Calendar,
  Eye,
  X
} from 'lucide-react';
import { galleryItems, teamMembers, businessInfo } from '../data/businessData';

export default function About({ onOpenReserve }) {
  const [activeGalleryTab, setActiveGalleryTab] = useState('all');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  const galleryTabs = [
    { id: 'all', label: 'All Moments' },
    { id: 'ambiance', label: 'Lounge & VIP Cabanas' },
    { id: 'cocktails', label: 'Mixology & Bar' },
    { id: 'gastronomy', label: 'Culinary Art' },
    { id: 'events', label: 'VDJ & Nightlife' }
  ];

  const filteredGallery = activeGalleryTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeGalleryTab);

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      
      {/* ABOUT HERO */}
      <section className="relative pt-20 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=2000&q=80" 
            alt="Levernasia Nightclub & Lounge" 
            className="w-full h-full object-cover filter brightness-[0.25] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-radial-gold pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <span className="px-4 py-1.5 rounded-full bg-brand-surface/90 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest inline-flex items-center space-x-1.5 shadow-gold-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Levernasia Story</span>
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            The Pinnacle of Nightlife & <br />
            <span className="gold-gradient-text">Gourmet Luxury in Noida</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-light/80 max-w-2xl mx-auto leading-relaxed">
            Born out of a passion for avant-garde nightlife, Levernasia bridges the high-octane energy of Los Angeles lounges with rich global culinary heritage at Gardens Galleria Mall.
          </p>
        </div>
      </section>

      {/* BRAND STORY & PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-gold flex items-center">
              <Award className="w-3.5 h-3.5 mr-1" />
              Our Vision & Craft
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              An Elevated Sensory Playground <br />
              <span className="text-brand-gold">Crafted for the Discerning</span>
            </h2>

            <p className="text-sm text-brand-muted leading-relaxed">
              When we envisioned Levernasia, we set out to redefine what a lounge experience in NCR could be. No compromises on flavor, no half-measures on sound, and absolute dedication to theatrical presentation.
            </p>

            <p className="text-sm text-brand-muted leading-relaxed">
              From our custom-engineered Martin Audio acoustics and bespoke 3D visual mapping to our wood-smoked artisanal cocktails and hand-rolled truffle sushi, every square inch of Levernasia is tuned to deliver an unforgettable night out.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-panel p-4 rounded-2xl border border-white/5 space-y-1">
                <span className="font-display font-bold text-2xl gold-gradient-text">100%</span>
                <p className="text-xs font-semibold text-white">Fresh Craft Botanicals</p>
                <p className="text-[11px] text-brand-muted">House-made syrups & bitters</p>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-white/5 space-y-1">
                <span className="font-display font-bold text-2xl text-emerald-400">200+ Seats</span>
                <p className="text-xs font-semibold text-white">Versatile Space</p>
                <p className="text-[11px] text-brand-muted">Indoor lounge, VIP & terrace</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" 
                alt="Cocktail Mixology Craft" 
                className="w-full h-64 object-cover rounded-3xl border border-brand-gold/20 shadow-xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80" 
                alt="Gourmet Sushi Plating" 
                className="w-full h-44 object-cover rounded-3xl border border-brand-gold/20 shadow-xl"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
                alt="VIP Cabana Interior" 
                className="w-full h-44 object-cover rounded-3xl border border-brand-gold/20 shadow-xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80" 
                alt="Live DJ Nightlife at Levernasia" 
                className="w-full h-64 object-cover rounded-3xl border border-brand-gold/20 shadow-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-brand-surfaceElevated/50 py-20 border-y border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-gold">
              What Defines Us
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              The Three Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="glass-panel p-8 rounded-3xl space-y-4 border-gold-glow">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <Flame className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                1. Uncompromising Flavor
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Authentic charcoal cooking for Indian kebabs, premium Japanese sushi rice seasoned with mirin, and only top-shelf spirits for molecular cocktails.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl space-y-4 border-gold-glow">
              <div className="w-14 h-14 rounded-2xl bg-brand-neon-purple/10 border border-brand-neon-purple/30 flex items-center justify-center text-brand-neon-purple">
                <Music className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                2. Sonic & Visual Immersion
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                A seamless transition from breezy ambient sundowners at 4 PM to pulsating electronic, deep house, and Bollywood club remixes as midnight approaches.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl space-y-4 border-gold-glow">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                3. Royal VIP Hospitality
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Dedicated cabana stewards, personalized recommendations, customized event decor, and smooth valet arrivals for our esteemed patrons.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FILTERABLE PHOTO & EXPERIENCE GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-gold">
            Visual Tour
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Moments at Levernasia
          </h2>
          <p className="text-sm text-brand-muted">
            Explore our curated zones, theatrical bar presentations, and electric weekend vibe.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {galleryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveGalleryTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeGalleryTab === tab.id
                  ? 'bg-gold-gradient text-brand-darker shadow-gold-sm'
                  : 'bg-brand-surface hover:bg-brand-surfaceElevated text-brand-light/80 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedGalleryImage(item)}
              className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer border border-white/10 glass-panel-hover"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-brand-dark/80 backdrop-blur-md border border-brand-gold/40 text-brand-gold">
                <Eye className="w-4 h-4" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                  {item.category}
                </span>
                <h3 className="font-display font-semibold text-lg text-white group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-muted line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedGalleryImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-darker/90 backdrop-blur-xl animate-fade-in">
            <div className="relative max-w-3xl w-full bg-brand-surface border border-brand-gold/30 rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedGalleryImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-brand-dark/80 text-white hover:text-brand-gold"
                aria-label="Close Preview"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="h-96 sm:h-[480px]">
                <img 
                  src={selectedGalleryImage.image} 
                  alt={selectedGalleryImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-2 bg-brand-surface">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                  {selectedGalleryImage.category}
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  {selectedGalleryImage.title}
                </h3>
                <p className="text-sm text-brand-muted">
                  {selectedGalleryImage.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </section>

      {/* MEET THE TEAM & LEADERSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-gold flex items-center justify-center">
            <Users className="w-3.5 h-3.5 mr-1" />
            The Masterminds
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Chefs, Mixologists & Music Curators
          </h2>
          <p className="text-sm text-brand-muted">
            The creative talent orchestrating your extraordinary evenings at Gardens Galleria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 glass-panel-hover flex flex-col justify-between"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <span className="px-3 py-1 rounded-full bg-brand-surface/90 backdrop-blur-md border border-brand-gold/30 text-brand-gold font-bold text-xs">
                    {member.role}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-xs">
                  <span className="text-brand-muted block">Signature Craft:</span>
                  <span className="font-semibold text-brand-gold">{member.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESERVATION CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-brand-surfaceElevated via-brand-surface to-brand-dark border-gold-glow p-8 sm:p-12 text-center space-y-6">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-gold">
            Join the Experience
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white max-w-xl mx-auto">
            Ready to Elevate Your Evening in Noida?
          </h2>
          <p className="text-sm text-brand-muted max-w-lg mx-auto leading-relaxed">
            Reserve your table or VIP cabana today. Experience the blend of gourmet dining and high-energy music at Gardens Galleria Mall.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenReserve}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold-gradient text-brand-darker font-bold text-sm shadow-gold-md hover:scale-105 transition-transform flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table Now</span>
            </button>
            <a
              href={`tel:${businessInfo.phone}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-surface hover:bg-brand-surfaceElevated border border-white/15 text-white font-semibold text-sm transition-all"
            >
              Call Us: {businessInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
