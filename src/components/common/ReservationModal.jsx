import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  User, 
  Mail,
  PartyPopper,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import confetti from 'canvas-confetti';

const TIME_SLOTS = [
  { value: '12:30', label: '12:30 PM', category: 'Lunch', desc: 'Afternoon dining' },
  { value: '13:30', label: '01:30 PM', category: 'Lunch', desc: 'Late lunch' },
  { value: '16:00', label: '04:00 PM', category: 'Sundowner', desc: 'Breezy cocktails' },
  { value: '18:30', label: '06:30 PM', category: 'Evening', desc: 'Sunset vibes' },
  { value: '20:00', label: '08:00 PM', category: 'Prime Dinner', desc: 'Chef specials & lounge' },
  { value: '21:30', label: '09:30 PM', category: 'Nightlife', desc: 'Live DJ & party' },
  { value: '23:00', label: '11:00 PM', category: 'Late Night', desc: 'High-energy beats' },
  { value: '00:30', label: '12:30 AM', category: 'Midnight Set', desc: 'Late night cocktails' },
];

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

  // Custom picker dropdown states
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [pickerMonth, setPickerMonth] = useState(() => new Date());

  const datePickerRef = useRef(null);
  const timePickerRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
      if (timePickerRef.current && !timePickerRef.current.contains(event.target)) {
        setShowTimePicker(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  // Phone input sanitizer: allow only numbers, max 10 digits
  const handlePhoneChange = (e) => {
    const rawValue = e.target.value;
    const digitsOnly = rawValue.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: digitsOnly }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    
    // Strict 10-digit Indian mobile number validation
    if (!formData.phone.trim()) {
      errs.phone = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

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

  // Helper date utilities for custom calendar
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPickerMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPickerMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleSelectDate = (year, month, day) => {
    const formattedMonth = String(month + 1).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    const dateStr = `${year}-${formattedMonth}-${formattedDay}`;
    setFormData(prev => ({ ...prev, date: dateStr }));
    if (errors.date) setErrors(prev => ({ ...prev, date: null }));
    setShowDatePicker(false);
  };

  const setQuickDate = (offsetDays) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    const dateStr = d.toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, date: dateStr }));
    setPickerMonth(new Date(d.getFullYear(), d.getMonth(), 1));
    if (errors.date) setErrors(prev => ({ ...prev, date: null }));
    setShowDatePicker(false);
  };

  const formatDisplayDate = (dateStr) => {
    if (!dateStr) return 'Select Date';
    try {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
        return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
      }
      return dateStr;
    } catch {
      return dateStr;
    }
  };

  const getSelectedTimeObj = () => {
    return TIME_SLOTS.find(slot => slot.value === formData.time) || {
      value: formData.time,
      label: formData.time,
      category: 'Selected',
      desc: ''
    };
  };

  const year = pickerMonth.getFullYear();
  const month = pickerMonth.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const monthName = pickerMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-darker/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl bg-brand-surface border border-brand-gold/30 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="relative p-6 bg-gradient-to-r from-brand-dark via-brand-surfaceElevated to-brand-dark border-b border-brand-gold/15 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gold-gradient p-[1px] shadow-gold-sm">
              <div className="w-full h-full bg-brand-dark rounded-[11px] flex items-center justify-center">
                <CalendarIcon className="w-5 h-5 text-brand-gold" />
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
                    Mobile Number * (10 Digits)
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-2.5 rounded-xl bg-brand-dark border ${
                        errors.phone ? 'border-red-500' : 'border-white/10'
                      } text-white placeholder-brand-muted text-sm focus:outline-none focus:border-brand-gold transition-colors`}
                    />
                    {formData.phone && formData.phone.length === 10 && /^[6-9]\d{9}$/.test(formData.phone) && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    )}
                  </div>
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

              {/* Date, Time, Guests Row with Custom Luxury Pickers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Custom Luxury Date Picker */}
                <div className="relative" ref={datePickerRef}>
                  <label className="block text-xs font-semibold text-brand-light/90 mb-1.5 flex items-center">
                    <CalendarIcon className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                    Date *
                  </label>
                  
                  {/* Date trigger button */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowDatePicker(!showDatePicker);
                      setShowTimePicker(false);
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-brand-dark border ${
                      showDatePicker ? 'border-brand-gold ring-1 ring-brand-gold/30' : 'border-white/10 hover:border-brand-gold/40'
                    } text-left flex items-center justify-between transition-all`}
                  >
                    <span className="text-white text-xs sm:text-sm truncate">
                      {formatDisplayDate(formData.date)}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-brand-gold transition-transform duration-200 ${showDatePicker ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Luxury Calendar Popover */}
                  {showDatePicker && (
                    <div className="absolute left-0 sm:left-0 mt-2 z-50 w-72 sm:w-80 p-4 bg-brand-surfaceElevated border border-brand-gold/30 rounded-2xl shadow-2xl backdrop-blur-xl animate-scale-up">
                      {/* Month & Nav Controls */}
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                        <span className="font-display font-bold text-sm text-white flex items-center">
                          <span className="gold-gradient-text">{monthName}</span>
                        </span>
                        <div className="flex items-center space-x-1">
                          <button
                            type="button"
                            onClick={handlePrevMonth}
                            className="p-1.5 rounded-lg bg-brand-dark hover:bg-brand-gold/20 text-brand-muted hover:text-brand-gold transition-colors"
                            aria-label="Previous Month"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={handleNextMonth}
                            className="p-1.5 rounded-lg bg-brand-dark hover:bg-brand-gold/20 text-brand-muted hover:text-brand-gold transition-colors"
                            aria-label="Next Month"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Quick Date Shortcuts */}
                      <div className="grid grid-cols-3 gap-1.5 mb-3">
                        <button
                          type="button"
                          onClick={() => setQuickDate(0)}
                          className="py-1 px-1.5 rounded-lg bg-brand-dark hover:bg-brand-gold/15 border border-white/5 hover:border-brand-gold/30 text-[11px] text-brand-light/90 hover:text-brand-gold transition-colors font-medium text-center"
                        >
                          Today
                        </button>
                        <button
                          type="button"
                          onClick={() => setQuickDate(1)}
                          className="py-1 px-1.5 rounded-lg bg-brand-dark hover:bg-brand-gold/15 border border-white/5 hover:border-brand-gold/30 text-[11px] text-brand-light/90 hover:text-brand-gold transition-colors font-medium text-center"
                        >
                          Tomorrow
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const now = new Date();
                            const day = now.getDay();
                            const daysUntilSat = (6 - day + 7) % 7 || 7;
                            setQuickDate(daysUntilSat);
                          }}
                          className="py-1 px-1.5 rounded-lg bg-brand-dark hover:bg-brand-gold/15 border border-white/5 hover:border-brand-gold/30 text-[11px] text-brand-light/90 hover:text-brand-gold transition-colors font-medium text-center"
                        >
                          Weekend
                        </button>
                      </div>

                      {/* Weekday headers */}
                      <div className="grid grid-cols-7 gap-1 text-center mb-1 text-[11px] font-semibold text-brand-gold/70">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                          <div key={d} className="py-1">{d}</div>
                        ))}
                      </div>

                      {/* Calendar Days Grid */}
                      <div className="grid grid-cols-7 gap-1 text-center text-xs">
                        {/* Empty offset days */}
                        {Array.from({ length: firstDay }).map((_, i) => (
                          <div key={`empty-${i}`} className="p-1.5"></div>
                        ))}

                        {/* Month Days */}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const dayNum = i + 1;
                          const cellDate = new Date(year, month, dayNum);
                          cellDate.setHours(0, 0, 0, 0);
                          const isPast = cellDate < today;

                          const formattedMonth = String(month + 1).padStart(2, '0');
                          const formattedDay = String(dayNum).padStart(2, '0');
                          const thisDateStr = `${year}-${formattedMonth}-${formattedDay}`;
                          const isSelected = formData.date === thisDateStr;
                          const isTodayDate = cellDate.getTime() === today.getTime();

                          return (
                            <button
                              key={dayNum}
                              type="button"
                              disabled={isPast}
                              onClick={() => handleSelectDate(year, month, dayNum)}
                              className={`p-1.5 sm:p-2 rounded-xl text-xs transition-all font-medium ${
                                isSelected
                                  ? 'bg-gold-gradient text-brand-darker font-bold shadow-gold-sm scale-105'
                                  : isPast
                                  ? 'text-white/20 cursor-not-allowed'
                                  : isTodayDate
                                  ? 'border border-brand-gold/60 text-brand-gold hover:bg-brand-gold/20'
                                  : 'text-brand-light/90 hover:bg-brand-gold/15 hover:text-brand-gold'
                              }`}
                            >
                              {dayNum}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Custom Luxury Time Picker */}
                <div className="relative" ref={timePickerRef}>
                  <label className="block text-xs font-semibold text-brand-light/90 mb-1.5 flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                    Preferred Time *
                  </label>
                  
                  {/* Time trigger button */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowTimePicker(!showTimePicker);
                      setShowDatePicker(false);
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-brand-dark border ${
                      showTimePicker ? 'border-brand-gold ring-1 ring-brand-gold/30' : 'border-white/10 hover:border-brand-gold/40'
                    } text-left flex items-center justify-between transition-all`}
                  >
                    <span className="text-white text-xs sm:text-sm truncate">
                      {getSelectedTimeObj().label}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-brand-gold transition-transform duration-200 ${showTimePicker ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Luxury Time Popover */}
                  {showTimePicker && (
                    <div className="absolute left-0 sm:right-0 sm:left-auto mt-2 z-50 w-72 sm:w-80 p-4 bg-brand-surfaceElevated border border-brand-gold/30 rounded-2xl shadow-2xl backdrop-blur-xl animate-scale-up max-h-72 overflow-y-auto">
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                        <span className="font-display font-bold text-xs text-brand-gold uppercase tracking-wider">
                          Select Table Time Slot
                        </span>
                        <span className="text-[10px] text-brand-muted">
                          Operating Hours
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {TIME_SLOTS.map((slot) => {
                          const isSelected = formData.time === slot.value;
                          return (
                            <button
                              key={slot.value}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, time: slot.value }));
                                if (errors.time) setErrors(prev => ({ ...prev, time: null }));
                                setShowTimePicker(false);
                              }}
                              className={`p-2.5 rounded-xl text-left border transition-all ${
                                isSelected
                                  ? 'bg-gold-gradient text-brand-darker border-brand-gold shadow-gold-sm font-bold scale-[1.02]'
                                  : 'bg-brand-dark border-white/5 hover:border-brand-gold/40 text-brand-light/90 hover:bg-brand-gold/10'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-0.5">
                                <span className={`text-xs font-bold ${isSelected ? 'text-brand-darker' : 'text-white'}`}>
                                  {slot.label}
                                </span>
                                <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-semibold ${
                                  isSelected 
                                    ? 'bg-brand-darker text-brand-gold' 
                                    : 'bg-brand-surface text-brand-gold/90 border border-brand-gold/20'
                                }`}>
                                  {slot.category}
                                </span>
                              </div>
                              <p className={`text-[10px] truncate ${isSelected ? 'text-brand-darker/80 font-medium' : 'text-brand-muted'}`}>
                                {slot.desc}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Guests Selection */}
                <div>
                  <label className="block text-xs font-semibold text-brand-light/90 mb-1.5 flex items-center">
                    <Users className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                    Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
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
                  <span className="font-semibold text-white">{formatDisplayDate(formData.date)} at {getSelectedTimeObj().label}</span>
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

