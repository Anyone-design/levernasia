import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Filter, 
  UtensilsCrossed, 
  GlassWater, 
  Crown, 
  Flame, 
  Leaf, 
  Drumstick, 
  Check, 
  Calendar, 
  X, 
  FileText,
  Info,
  ChevronRight,
  Wine
} from 'lucide-react';
import { 
  menuCategories, 
  menuItems, 
  vipPackages, 
  businessInfo 
} from '../data/businessData';

export default function Services({ onOpenReserve }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('all');
  const [activeItemModal, setActiveItemModal] = useState(null);

  // Filter logic
  const filteredItems = menuItems.filter(item => {
    // Category check
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    // Search query check
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.toLowerCase().includes(searchQuery.toLowerCase());

    // Diet filter check
    const matchesDiet = dietFilter === 'all' || 
      (dietFilter === 'veg' && item.diet === 'veg') ||
      (dietFilter === 'non-veg' && item.diet === 'non-veg') ||
      (dietFilter === 'signature' && item.isSignature);

    return matchesCategory && matchesSearch && matchesDiet;
  });

  const getDietBadge = (diet) => {
    if (diet === 'veg') {
      return (
        <span className="flex items-center space-x-1 px-2 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold">
          <Leaf className="w-3 h-3" />
          <span>VEG</span>
        </span>
      );
    }
    if (diet === 'non-veg') {
      return (
        <span className="flex items-center space-x-1 px-2 py-0.5 rounded-md bg-rose-950/80 border border-rose-500/40 text-rose-400 text-[10px] font-bold">
          <Drumstick className="w-3 h-3" />
          <span>NON-VEG</span>
        </span>
      );
    }
    if (diet === 'cocktail') {
      return (
        <span className="flex items-center space-x-1 px-2 py-0.5 rounded-md bg-purple-950/80 border border-purple-500/40 text-purple-300 text-[10px] font-bold">
          <GlassWater className="w-3 h-3" />
          <span>COCKTAIL</span>
        </span>
      );
    }
    return null;
  };

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      
      {/* MENU HEADER */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=80" 
            alt="Levernasia Food & Cocktail Spread" 
            className="w-full h-full object-cover filter brightness-[0.25] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-radial-gold pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <span className="px-4 py-1.5 rounded-full bg-brand-surface/90 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest inline-flex items-center space-x-1.5 shadow-gold-sm">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Culinary Catalog & VIP Experiences</span>
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Curated Menus, Mixology & <br />
            <span className="gold-gradient-text">Private VIP Packages</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-light/80 max-w-2xl mx-auto leading-relaxed">
            Explore authentic Pan-Asian sushi, aromatic Awadhi curries, Mediterranean mezze, and theatrically smoked artisanal cocktails at Gardens Galleria Mall Noida.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 rounded-3xl border-gold-glow space-y-6">
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes, cocktails, ingredients..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-brand-muted text-xs focus:outline-none focus:border-brand-gold"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted hover:text-white text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Dietary Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-brand-muted font-medium mr-1 flex items-center">
                <Filter className="w-3.5 h-3.5 mr-1" />
                Filter:
              </span>
              <button
                onClick={() => setDietFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  dietFilter === 'all'
                    ? 'bg-brand-gold text-brand-darker'
                    : 'bg-brand-dark text-brand-light/70 hover:bg-brand-surface'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  dietFilter === 'veg'
                    ? 'bg-emerald-500 text-brand-darker font-bold'
                    : 'bg-brand-dark text-emerald-400 hover:bg-brand-surface'
                }`}
              >
                🌱 Vegetarian
              </button>
              <button
                onClick={() => setDietFilter('non-veg')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  dietFilter === 'non-veg'
                    ? 'bg-rose-500 text-white font-bold'
                    : 'bg-brand-dark text-rose-400 hover:bg-brand-surface'
                }`}
              >
                🍗 Non-Veg
              </button>
              <button
                onClick={() => setDietFilter('signature')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  dietFilter === 'signature'
                    ? 'bg-amber-400 text-brand-darker font-bold'
                    : 'bg-brand-dark text-amber-400 hover:bg-brand-surface'
                }`}
              >
                ★ Chef Specials
              </button>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-brand-surfaceElevated text-brand-gold border border-brand-gold/40 shadow-gold-sm'
                  : 'text-brand-light/70 hover:bg-brand-dark hover:text-white'
              }`}
            >
              All Items ({menuItems.length})
            </button>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-surfaceElevated text-brand-gold border border-brand-gold/40 shadow-gold-sm'
                    : 'text-brand-light/70 hover:bg-brand-dark hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* MENU ITEMS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex items-center justify-between text-xs text-brand-muted">
          <span>Showing {filteredItems.length} curated offerings</span>
          <span className="text-brand-gold">All prices in INR • Subject to standard taxes</span>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-brand-surface border border-brand-gold/15 overflow-hidden flex flex-col justify-between glass-panel-hover group"
              >
                {/* Food Image */}
                <div className="relative h-52 overflow-hidden cursor-pointer" onClick={() => setActiveItemModal(item)}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                    {getDietBadge(item.diet)}
                    {item.isSignature && (
                      <span className="px-2 py-0.5 rounded-md bg-gold-gradient text-brand-darker font-bold text-[10px] uppercase tracking-wider shadow-sm">
                        Signature
                      </span>
                    )}
                  </div>

                  {/* Price Pill */}
                  <div className="absolute bottom-3.5 right-3.5">
                    <span className="px-3.5 py-1.5 rounded-xl bg-brand-dark/95 backdrop-blur-md text-brand-gold font-bold text-sm border border-brand-gold/40 shadow-lg">
                      ₹{item.price}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 
                        onClick={() => setActiveItemModal(item)}
                        className="font-display font-bold text-lg text-white group-hover:text-brand-gold transition-colors cursor-pointer"
                      >
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-xs text-brand-muted leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    <div className="pt-1 text-[11px] text-brand-gold/80 flex items-center">
                      <span className="font-semibold mr-1">Key notes:</span>
                      <span className="text-brand-muted truncate">{item.ingredients}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/5 flex items-center gap-2">
                    <button
                      onClick={() => setActiveItemModal(item)}
                      className="flex-1 py-2 rounded-xl bg-brand-surfaceElevated hover:bg-brand-dark text-brand-light hover:text-white font-medium text-xs border border-white/10 transition-all flex items-center justify-center space-x-1"
                    >
                      <Info className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={onOpenReserve}
                      className="flex-1 py-2 rounded-xl bg-gold-gradient hover:opacity-90 text-brand-darker font-bold text-xs shadow-gold-sm transition-all flex items-center justify-center space-x-1"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Reserve</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-4 glass-panel rounded-3xl border border-white/10">
            <UtensilsCrossed className="w-12 h-12 text-brand-gold mx-auto opacity-60" />
            <h3 className="font-display font-bold text-xl text-white">No Items Found</h3>
            <p className="text-xs text-brand-muted max-w-sm mx-auto">
              We couldn't find any dishes matching your query. Try resetting your search or filter tags.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietFilter('all');
                setSelectedCategory('all');
              }}
              className="px-5 py-2 rounded-full bg-brand-surface text-brand-gold text-xs font-semibold border border-brand-gold/30 hover:bg-brand-surfaceElevated"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

      {/* ITEM DETAIL MODAL */}
      {activeItemModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-darker/90 backdrop-blur-xl animate-fade-in">
          <div className="relative max-w-lg w-full bg-brand-surface border border-brand-gold/30 rounded-3xl overflow-hidden shadow-2xl">
            
            <button
              onClick={() => setActiveItemModal(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-brand-dark/80 text-white hover:text-brand-gold"
              aria-label="Close Details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 relative">
              <img 
                src={activeItemModal.image} 
                alt={activeItemModal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getDietBadge(activeItemModal.diet)}
                  {activeItemModal.isSignature && (
                    <span className="px-2 py-0.5 rounded-md bg-gold-gradient text-brand-darker font-bold text-[10px]">
                      CHEF SPECIAL
                    </span>
                  )}
                </div>
                <span className="px-3.5 py-1 rounded-xl bg-brand-dark/90 text-brand-gold font-bold text-base border border-brand-gold/40">
                  ₹{activeItemModal.price}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-display font-bold text-2xl text-white">
                  {activeItemModal.name}
                </h3>
                <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                  {activeItemModal.description}
                </p>
              </div>

              <div className="bg-brand-dark p-4 rounded-2xl border border-white/5 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold block">
                  Artisanal Ingredients & Profile:
                </span>
                <p className="text-xs text-brand-light/90">
                  {activeItemModal.ingredients}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveItemModal(null)}
                  className="flex-1 py-3 rounded-xl bg-brand-dark hover:bg-brand-surfaceElevated border border-white/10 text-white text-xs font-semibold"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const item = activeItemModal;
                    setActiveItemModal(null);
                    onOpenReserve();
                  }}
                  className="flex-1 py-3 rounded-xl bg-gold-gradient text-brand-darker font-bold text-xs shadow-gold-md flex items-center justify-center space-x-1.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Table for This</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* VIP CABANA & CORPORATE PACKAGES */}
      <section id="vip" className="bg-brand-surfaceElevated/40 py-20 border-y border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-gold flex items-center justify-center">
              <Crown className="w-3.5 h-3.5 mr-1" />
              Exclusive Nightlife Experiences
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              VIP Cabana & Celebration Packages
            </h2>
            <p className="text-sm text-brand-muted">
              Curated bottle service, priority seating, and tailored chef menus for birthdays, bachelor parties, and corporate mixers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vipPackages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`rounded-3xl p-8 flex flex-col justify-between space-y-8 relative overflow-hidden transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-brand-surfaceElevated to-brand-surface border-2 border-brand-gold shadow-gold-lg scale-105 z-10'
                    : 'glass-panel border-white/10 hover:border-brand-gold/40'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gold-gradient text-brand-darker font-bold text-[10px] uppercase tracking-widest py-1.5 px-6 rounded-bl-2xl shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                      {pkg.target}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white">
                      {pkg.name}
                    </h3>
                    <div className="pt-2 flex items-baseline space-x-1">
                      <span className="font-display font-bold text-3xl text-white">{pkg.price}</span>
                      <span className="text-xs text-brand-muted">/ package</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-semibold uppercase text-brand-light tracking-wider block">
                      Package Inclusions:
                    </span>
                    <ul className="space-y-2.5 text-xs text-brand-muted">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2.5">
                          <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                          <span className="text-brand-light/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={onOpenReserve}
                  className={`w-full py-3.5 rounded-2xl font-bold text-xs transition-all flex items-center justify-center space-x-2 ${
                    pkg.popular
                      ? 'bg-gold-gradient text-brand-darker shadow-gold-md hover:scale-105'
                      : 'bg-brand-dark hover:bg-brand-surface text-white border border-brand-gold/30 hover:border-brand-gold'
                  }`}
                >
                  <Crown className="w-4 h-4" />
                  <span>Book {pkg.name}</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
