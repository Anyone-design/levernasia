import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Navigation, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Car, 
  Train, 
  Sparkles,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { businessInfo, faqsData } from '../data/businessData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'reservation',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: '2',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [errors, setErrors] = useState({});

  // Current day index for weekly hours highlight (0 = Sunday, 1 = Monday, ...)
  const currentDayIndex = new Date().getDay();
  const daysOfWeek = [
    { name: 'Sunday', hours: '12:00 PM – 02:00 AM', dayNum: 0 },
    { name: 'Monday', hours: '12:00 PM – 02:00 AM', dayNum: 1 },
    { name: 'Tuesday', hours: '12:00 PM – 02:00 AM', dayNum: 2 },
    { name: 'Wednesday', hours: '12:00 PM – 02:00 AM', dayNum: 3 },
    { name: 'Thursday', hours: '12:00 PM – 02:00 AM', dayNum: 4 },
    { name: 'Friday', hours: '12:00 PM – 02:00 AM', dayNum: 5 },
    { name: 'Saturday', hours: '12:00 PM – 02:00 AM', dayNum: 6 }
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid 10-digit phone required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email required';
    if (!formData.message.trim()) errs.message = 'Please provide details for your inquiry';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F5D38E', '#E6B86A', '#C8933E', '#10B981']
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      
      {/* CONTACT HERO */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=2000&q=80" 
            alt="Gardens Galleria Mall Noida" 
            className="w-full h-full object-cover filter brightness-[0.25] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-radial-gold pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <span className="px-4 py-1.5 rounded-full bg-brand-surface/90 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest inline-flex items-center space-x-1.5 shadow-gold-sm">
            <Navigation className="w-3.5 h-3.5" />
            <span>Connect & Find Us</span>
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            Location, Hours & <br />
            <span className="gold-gradient-text">Instant Table Reservations</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-light/80 max-w-2xl mx-auto leading-relaxed">
            Conveniently situated in Gardens Galleria Mall, Sector 38A, Noida. Reach out for corporate bookings, private events, or table reservations.
          </p>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <a
            href={`tel:${businessInfo.phone}`}
            className="glass-panel p-6 rounded-3xl border-gold-glow glass-panel-hover flex items-center space-x-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-surfaceElevated border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-brand-muted uppercase font-bold tracking-wider block">Call Direct</span>
              <span className="font-bold text-sm text-white group-hover:text-brand-gold transition-colors">{businessInfo.phoneDisplay}</span>
            </div>
          </a>

          <a
            href={businessInfo.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-6 rounded-3xl border-gold-glow glass-panel-hover flex items-center space-x-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-brand-muted uppercase font-bold tracking-wider block">WhatsApp VIP</span>
              <span className="font-bold text-sm text-emerald-400">Instant Chat & Book</span>
            </div>
          </a>

          <a
            href={`mailto:${businessInfo.email}`}
            className="glass-panel p-6 rounded-3xl border-gold-glow glass-panel-hover flex items-center space-x-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-surfaceElevated border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-brand-muted uppercase font-bold tracking-wider block">Email Inquiries</span>
              <span className="font-bold text-sm text-white group-hover:text-brand-gold transition-colors truncate block max-w-[150px]">{businessInfo.email}</span>
            </div>
          </a>

          <a
            href={businessInfo.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-6 rounded-3xl border-gold-glow glass-panel-hover flex items-center space-x-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-surfaceElevated border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-brand-muted uppercase font-bold tracking-wider block">Google Maps</span>
              <span className="font-bold text-sm text-brand-gold">Get Directions →</span>
            </div>
          </a>

        </div>
      </section>

      {/* INTERACTIVE FORM & OPERATING HOURS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Interactive Form */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border-gold-glow space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-brand-gold flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                Direct Inquiry & Table Booking
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                Send Us a Message
              </h2>
              <p className="text-xs text-brand-muted mt-1">
                Our reservations and concierge desk responds within 15 minutes during operating hours.
              </p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-light/90 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priyanshu Sharma"
                      className={`w-full px-4 py-2.5 rounded-xl bg-brand-dark border ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      } text-white placeholder-brand-muted text-xs focus:outline-none focus:border-brand-gold`}
                    />
                    {errors.name && <span className="text-red-400 text-[11px] mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-light/90 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-2.5 rounded-xl bg-brand-dark border ${
                        errors.phone ? 'border-red-500' : 'border-white/10'
                      } text-white placeholder-brand-muted text-xs focus:outline-none focus:border-brand-gold`}
                    />
                    {errors.phone && <span className="text-red-400 text-[11px] mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-light/90 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priyanshu@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-brand-dark border ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      } text-white placeholder-brand-muted text-xs focus:outline-none focus:border-brand-gold`}
                    />
                    {errors.email && <span className="text-red-400 text-[11px] mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-light/90 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                    >
                      <option value="reservation">Table Reservation</option>
                      <option value="vip">VIP Cabana Package</option>
                      <option value="corporate">Corporate Mixer / Private Party</option>
                      <option value="feedback">General Feedback & Inquiries</option>
                    </select>
                  </div>
                </div>

                {formData.inquiryType !== 'feedback' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                    <div>
                      <label className="block text-xs font-semibold text-brand-light/90 mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-brand-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-light/90 mb-1">
                        Time
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-brand-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      >
                        <option value="13:00">01:00 PM</option>
                        <option value="19:30">07:30 PM</option>
                        <option value="20:30">08:30 PM</option>
                        <option value="22:00">10:00 PM</option>
                        <option value="23:30">11:30 PM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-light/90 mb-1">
                        Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-brand-dark border border-white/10 text-white text-xs focus:outline-none focus:border-brand-gold"
                      >
                        <option value="2">2 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="8+">8+ VIP Group</option>
                        <option value="20+">20+ Corporate</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-brand-light/90 mb-1">
                    Your Message / Specific Requests *
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your event, preferred seating zone, occasion, or requirements..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-brand-dark border ${
                      errors.message ? 'border-red-500' : 'border-white/10'
                    } text-white placeholder-brand-muted text-xs focus:outline-none focus:border-brand-gold resize-none`}
                  ></textarea>
                  {errors.message && <span className="text-red-400 text-[11px] mt-1 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gold-gradient text-brand-darker font-bold text-sm shadow-gold-md hover:scale-[1.01] transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-scale-up">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Inquiry Received!
                </h3>
                <p className="text-xs text-brand-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our guest relations team has received your details and will call or WhatsApp you shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'reservation',
                        date: new Date().toISOString().split('T')[0],
                        time: '20:00',
                        guests: '2',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-brand-surface hover:bg-brand-surfaceElevated border border-white/10 text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Operating Hours Table & Directions Guide */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Hours Table */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border-gold-glow space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-2.5">
                  <Clock className="w-5 h-5 text-brand-gold" />
                  <h3 className="font-display font-bold text-lg text-white">
                    Operating Hours
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold">
                  OPEN NOW
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {daysOfWeek.map((day) => {
                  const isToday = day.dayNum === currentDayIndex;
                  return (
                    <div
                      key={day.name}
                      className={`flex items-center justify-between py-2 px-3 rounded-xl transition-colors ${
                        isToday
                          ? 'bg-brand-gold/15 text-brand-gold border border-brand-gold/30 font-bold'
                          : 'text-brand-light/80 hover:bg-brand-surface'
                      }`}
                    >
                      <span className="flex items-center">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-2 animate-ping"></span>}
                        {day.name} {isToday ? '(Today)' : ''}
                      </span>
                      <span>{day.hours}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 text-[11px] text-brand-muted space-y-1 border-t border-white/5">
                <p>• Kitchen accepts orders until 01:30 AM.</p>
                <p>• Valet parking service operates throughout opening hours.</p>
              </div>
            </div>

            {/* How to Reach Guide */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="font-display font-bold text-base text-white flex items-center space-x-2">
                <Car className="w-4 h-4 text-brand-gold" />
                <span>How to Reach Levernasia</span>
              </h3>

              <div className="space-y-3 text-xs text-brand-muted">
                <div className="flex items-start space-x-2.5">
                  <Car className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">By Car / Cab:</span>
                    <span>Direct access via Noida-Greater Noida Expressway or DND Flyway. Search for Gardens Galleria Mall Sector 38A.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Train className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">By Metro (Delhi Metro):</span>
                    <span>Nearest stations: <strong>Botanical Garden (Magenta / Blue Line)</strong> or <strong>Noida Sector 18 (Blue Line)</strong>, both just 5 mins by auto/cab.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={businessInfo.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-brand-surface hover:bg-brand-surfaceElevated text-brand-gold hover:text-white font-semibold text-xs border border-brand-gold/30 hover:border-brand-gold transition-all flex items-center justify-center space-x-2"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Turn-by-Turn GPS Directions</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FULL WIDTH GOOGLE MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-brand-gold flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              Interactive Location Map
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
              Find Levernasia on Google Maps
            </h2>
          </div>
          <a
            href={businessInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-brand-gold hover:underline flex items-center"
          >
            <span>Open in Google Maps App</span>
            <Navigation className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        <div className="h-96 sm:h-[420px] rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl relative">
          <iframe
            title="Full Levernasia Google Maps Integration"
            src="https://maps.google.com/maps?q=28.56478,77.32179&hl=en&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Overlay Tag */}
          <div className="absolute top-4 left-4 bg-brand-darker/90 backdrop-blur-xl p-4 rounded-2xl border border-brand-gold/40 shadow-xl max-w-xs space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold block">
              Gardens Galleria Mall
            </span>
            <h4 className="font-display font-bold text-sm text-white">
              Levernasia Lounge & Bar
            </h4>
            <p className="text-[11px] text-brand-muted">
              Unit 205-206C, 1st Floor, Sector 38A, Noida
            </p>
          </div>
        </div>
      </section>

      {/* NOIDA GUEST FAQS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-gold flex items-center justify-center">
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            Guest Guidelines & FAQs
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-brand-muted">
            Everything you need to know about reservations, parking, dress codes, and events.
          </p>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-brand-surfaceElevated border-brand-gold/40 shadow-gold-sm'
                    : 'bg-brand-surface border-white/10 hover:border-brand-gold/20'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-display font-semibold text-base text-white">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-gold shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-muted shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-brand-light/80 leading-relaxed border-t border-white/5 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
