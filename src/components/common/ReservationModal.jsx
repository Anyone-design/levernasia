import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  User, 
  Mail,
  Wine,
  PartyPopper
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { businessInfo } from '../../data/businessData';

export default function ReservationModal({ isOpen, onClose, preselectedPackage = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: '2',
    seating: 'lounge',
    occasion: 'casual',
    notes: preselectedPackage ? `Interested in: ${preselectedPackage}` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid 10-digit phone number required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.date) errs.date = 'Date is required';
    if (!formData.time) errs.time = 'Time is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate simulated booking reference
    const ref = 'LEV-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);

    // Fire confetti
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F5D38E', '#E6B86A', '#C8933E', '#FF2E93', '#9D4EDD']
      });
    } catch (e) {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-darker/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl bg-brand-surface border border-brand-gold/30 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="relative p-6 bg-gradient-to-r from-brand-dark via-brand-surfaceElevated to-brand-dark border-b border-brand-gold/15 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gold-gradient p-[1px] shadow-gold-sm">
              <div className="w-full h-full bg-brand-dark rounded-[11px] flex items-center justify-center">
                <Calendar className="w-5 h-5 text-brand-gold" />
              </div>
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-white flex items-center">
                Reserve Your Experience
                <Sparkles className="w-4 h-4 text-brand-gold ml-2" />
              </h2>
              <p className="text-xs text-brand-gold/80">
                Gardens Galleria Mall, Sector 38A, Noida
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-brand-surface hover:bg-brand-surfaceElevated text-brand-muted hover:text-white transition-colors"
            aria-label="Close Reservation Window"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-light/90 mb-1.5 flex items-center">
                    <User className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Arjun Kapoor"
                    className={`w-full px-4 py-2.5 rounded-xl bg-brand-dark border ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-brand-muted text-sm focus:outline-none focus:border-brand-gold`}
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-light/90 mb-1.5 flex items-center">
                    <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-2.5 rounded-xl bg-brand-dark border ${
                      errors.phone ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-brand-muted text-sm focus:outline-none focus:border-brand-gold`}
                  />
                  {errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone}</span>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-brand-light/90 mb-1.5 flex items-center">
                  <Mail className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. arjun@example.com"
                  className={`w-full px-4 py-2.5 rounded-xl bg-brand-dark border ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  } text-white placeholder-brand-muted text-sm focus:outline-none focus:border-brand-gold`}
                />
                {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>}
              </div>

              {/* Date, Time, Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-light/90 mb-1.5 flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                    Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-white text-sm focus:outline-none focus:border-brand-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-light/90 mb-1.5 flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                    Preferred Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-white text-sm focus:outline-none focus:border-brand-gold"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="16:00">04:00 PM (Sundowner)</option>
                    <option value="18:30">06:30 PM (Evening)</option>
                    <option value="20:00">08:00 PM (Prime Dinner)</option>
                    <option value="21:30">09:30 PM (Nightlife / DJ)</option>
                    <option value="23:00">11:00 PM (Late Night Party)</option>
                    <option value="00:30">12:30 AM (Midnight Set)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-light/90 mb-1.5 flex items-center">
                    <Users className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                    Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-white text-sm focus:outline-none focus:border-brand-gold"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests (Couple)</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8 Guests (VIP)</option>
                    <option value="10">10 Guests</option>
                    <option value="15+">15+ Large Party</option>
                  </select>
                </div>
              </div>

              {/* Seating Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-light/90 mb-1.5">
                    Seating Experience
                  </label>
                  <select
                    value={formData.seating}
                    onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-white text-sm focus:outline-none focus:border-brand-gold"
                  >
                    <option value="lounge">Main DJ & Neon Lounge (High-Energy)</option>
                    <option value="cabana">VIP Gold Cabana (Private & Bottle Service)</option>
                    <option value="terrace">Outdoor Starlit Terrace (Breezy & Cozy)</option>
                    <option value="bar">Bar Counter & Mixology High-Tops</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-light/90 mb-1.5">
                    Occasion / Celebration
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-white text-sm focus:outline-none focus:border-brand-gold"
                  >
                    <option value="casual">Casual Night Out</option>
                    <option value="birthday">Birthday Party (Free Sparkler & Cake)</option>
                    <option value="anniversary">Romantic Anniversary</option>
                    <option value="bachelorette">Bachelorette / Bachelor</option>
                    <option value="corporate">Corporate Mixer / Gathering</option>
                  </select>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-semibold text-brand-light/90 mb-1.5">
                  Special Requests / Dietary Notes
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any dietary restrictions, favorite cocktail preferences, or song dedication..."
                  className="w-full px-4 py-2 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-brand-muted text-sm focus:outline-none focus:border-brand-gold resize-none"
                ></textarea>
              </div>

              {/* Guarantee Banner */}
              <div className="bg-brand-dark/60 p-3.5 rounded-2xl border border-brand-gold/15 flex items-center justify-between text-xs text-brand-muted">
                <span className="flex items-center text-brand-gold">
                  <Sparkles className="w-4 h-4 mr-1.5 text-brand-gold" />
                  Instant SMS & WhatsApp confirmation
                </span>
                <span>No upfront booking fee required</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-gold-gradient text-brand-darker font-bold text-base shadow-gold-md hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2"
              >
                <PartyPopper className="w-5 h-5" />
                <span>Confirm Instant Reservation</span>
              </button>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-6 space-y-6 animate-scale-up">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider">
                  Booking Confirmed
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-3">
                  We're Excited to Host You!
                </h3>
                <p className="text-sm text-brand-muted mt-1 max-w-md mx-auto">
                  Your table reservation has been recorded. A confirmation message has been dispatched to your mobile.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-brand-dark p-5 rounded-2xl border border-brand-gold/20 max-w-md mx-auto text-left space-y-2.5 text-xs text-brand-light/90">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-brand-muted">Booking Reference:</span>
                  <span className="font-mono font-bold text-brand-gold">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-muted">Guest Name:</span>
                  <span className="font-semibold text-white">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-muted">Date & Time:</span>
                  <span className="font-semibold text-white">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-muted">Party Size:</span>
                  <span className="font-semibold text-white">{formData.guests} Guest(s)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-muted">Seating Zone:</span>
                  <span className="font-semibold capitalize text-brand-gold">{formData.seating} Zone</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/5">
                  <span className="text-brand-muted">Location:</span>
                  <span className="font-semibold text-white text-right">Gardens Galleria Mall, Sector 38A Noida</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/917428964646?text=Hi%2C%20I%20have%20confirmed%20reservation%20${bookingRef}%20for%20${formData.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center space-x-2"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-surface hover:bg-brand-surfaceElevated border border-white/10 text-white font-semibold text-xs"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
