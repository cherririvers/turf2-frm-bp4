import { useState, FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Send,
  CheckCircle,
  MessageCircle,
  Navigation,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useSEO, seoConfig } from '../utils/seo';

const sportOptions = [
  'Football / Futsal',
  'Box Cricket',
  'Pickleball',
  'Snooker',
  'Corporate Event',
  'Tournament',
  'Other',
];

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91-8076714176',
    link: 'tel:+918076714176',
    description: 'Speak directly with our team',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+91-8076714176',
    link: 'https://wa.me/918076714176',
    description: 'Quick chat for bookings',
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'support@theturf360.com',
    link: 'mailto:support@theturf360.com',
    description: 'For detailed inquiries',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    value: '@turf__360',
    link: 'https://www.instagram.com/turf__360/',
    description: 'DM us for quick response',
  },
];

export default function ContactPage() {
  useSEO(seoConfig.contact);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    sport: '',
    date: '',
    time: '',
    groupSize: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        sport: '',
        date: '',
        time: '',
        groupSize: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Book your slot or get in touch with our team"
        backgroundImage="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-charcoal-50 rounded-xl p-6 hover:bg-turf-50 hover:border-turf-200 border-2 border-transparent transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-turf-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <method.icon size={24} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal-900 mb-1">
                  {method.title}
                </h3>
                <p className="text-turf-600 font-medium mb-1">{method.value}</p>
                <p className="text-sm text-charcoal-500">{method.description}</p>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-charcoal-50 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-charcoal-900 mb-6">
                Send Booking Request
              </h2>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-turf-100 flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-turf-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-charcoal-900 mb-2">
                    Request Sent Successfully!
                  </h3>
                  <p className="text-charcoal-600 max-w-sm">
                    We've received your booking request. Our team will contact you shortly to
                    confirm your slot.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
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
                        className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-turf-500 focus:ring-2 focus:ring-turf-500/20 outline-none transition-all bg-white"
                        placeholder="Your name"
                      />
                    </div>
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
                        className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-turf-500 focus:ring-2 focus:ring-turf-500/20 outline-none transition-all bg-white"
                        placeholder="+91 99999 99999"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-turf-500 focus:ring-2 focus:ring-turf-500/20 outline-none transition-all bg-white"
                      placeholder="you@example.com"
                    />
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
                        htmlFor="groupSize"
                        className="block text-sm font-medium text-charcoal-700 mb-1"
                      >
                        Group Size
                      </label>
                      <input
                        type="number"
                        id="groupSize"
                        name="groupSize"
                        min="1"
                        value={formData.groupSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-turf-500 focus:ring-2 focus:ring-turf-500/20 outline-none transition-all bg-white"
                        placeholder="Number of players"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
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
                        className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-turf-500 focus:ring-2 focus:ring-turf-500/20 outline-none transition-all bg-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="time"
                        className="block text-sm font-medium text-charcoal-700 mb-1"
                      >
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-turf-500 focus:ring-2 focus:ring-turf-500/20 outline-none transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal-700 mb-1"
                    >
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 focus:border-turf-500 focus:ring-2 focus:ring-turf-500/20 outline-none transition-all resize-none bg-white"
                      placeholder="Any special requirements or questions..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg py-4">
                    <Send size={20} className="mr-2" />
                    Send Booking Request
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-charcoal-900 text-white rounded-2xl p-8">
                <h3 className="font-display text-2xl font-bold mb-6">Visit Us</h3>

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
                        <br />
                        Uttar Pradesh, India
                      </p>
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
                        <span className="text-turf-400">Open 7 days a week</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-turf-600 flex items-center justify-center flex-shrink-0">
                      <Navigation size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Getting Here</h4>
                      <p className="text-charcoal-300">
                        Located near Noida Expressway,
                        <br />
                        easy access from Greater Noida
                        <br />
                        Ample parking available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden h-[350px] bg-charcoal-200">
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
          </div>
        </div>
      </section>
    </>
  );
}
