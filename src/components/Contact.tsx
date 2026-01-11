import { useState, FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Send,
  CheckCircle,
} from 'lucide-react';

const sportOptions = [
  'Football / Futsal',
  'Box Cricket',
  'Pickleball',
  'Snooker',
  'Corporate Event',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    sport: '',
    date: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', sport: '', date: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Book Your <span className="text-gradient">Slot</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Ready to play? Send us your booking request and we'll confirm your slot within hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-charcoal-900 text-white rounded-2xl p-8 mb-8">
              <h3 className="font-display text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-turf-600 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-charcoal-300">
                      Shafipur Road, Sector 150,
                      <br />
                      Near ATS Pristine, Noida
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-turf-600 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+918076714176"
                      className="text-charcoal-300 hover:text-turf-400 transition-colors"
                    >
                      +91-8076714176
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-turf-600 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:support@theturf360.com"
                      className="text-charcoal-300 hover:text-turf-400 transition-colors"
                    >
                      support@theturf360.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-turf-600 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Operating Hours</h4>
                    <p className="text-charcoal-300">
                      Daily: 5:00 AM - 2:00 AM
                      <br />
                      <span className="text-turf-400">21 hours of play!</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-charcoal-700">
                <p className="text-sm text-charcoal-400 mb-3">Follow us on social media</p>
                <a
                  href="https://instagram.com/turf_360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-turf-400 transition-colors"
                >
                  <Instagram size={20} />
                  <span>@turf_360</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-[300px] bg-charcoal-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14024.983553665068!2d77.38500000000001!3d28.5700000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sSector%20150%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Turf 360 Location"
              />
            </div>
          </div>

          <div className="bg-charcoal-50 rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold text-charcoal-900 mb-6">
              Send Booking Request
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-turf-100 flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-turf-600" />
                </div>
                <h4 className="font-display text-xl font-bold text-charcoal-900 mb-2">
                  Request Sent!
                </h4>
                <p className="text-charcoal-600">
                  We'll get back to you shortly to confirm your booking.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-turf-500 focus:ring-2 focus:ring-turf-500/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-charcoal-700 mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-turf-500 focus:ring-2 focus:ring-turf-500/20 outline-none transition-all"
                      placeholder="+91 99999 99999"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-turf-500 focus:ring-2 focus:ring-turf-500/20 outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="sport"
                      className="block text-sm font-medium text-charcoal-700 mb-1"
                    >
                      Select Sport *
                    </label>
                    <select
                      id="sport"
                      name="sport"
                      required
                      value={formData.sport}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-turf-500 focus:ring-2 focus:ring-turf-500/20 outline-none transition-all bg-white"
                    >
                      <option value="">Choose a sport</option>
                      {sportOptions.map((sport) => (
                        <option key={sport} value={sport}>
                          {sport}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-charcoal-700 mb-1"
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-turf-500 focus:ring-2 focus:ring-turf-500/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal-700 mb-1"
                  >
                    Message / Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-turf-500 focus:ring-2 focus:ring-turf-500/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your group size, preferred time, or any special requirements..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-lg py-4">
                  <Send size={20} className="mr-2" />
                  Send Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
