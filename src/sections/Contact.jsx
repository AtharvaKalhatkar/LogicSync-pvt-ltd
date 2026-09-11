import { useState } from 'react';
import { useReveal } from '../lib/hooks';
import { Phone, Mail, Globe, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [ref, visible] = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Form submission error", error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center lg:text-left">
          Let's Build the Right System for Your Business.
        </h2>

        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2">
            {submitted ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                <p>We've received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form action="https://formspree.io/f/xzdwpzbg" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-gray-800" />
                </div>
                
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                  <input type="text" id="businessName" name="businessName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-gray-800" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-gray-800" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-gray-800" />
                </div>
                
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                  <select id="industry" name="industry" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-gray-800 bg-white">
                    <option value="">Select Industry</option>
                    <option value="Retail">Retail</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Distribution">Distribution</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Packaging">Packaging</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Water Supply">Water Supply</option>
                    <option value="Construction">Construction</option>
                    <option value="Transport">Transport</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Property Management">Property Management</option>
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">What problem are you trying to solve?</label>
                  <textarea id="problem" name="problem" rows="4" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-gray-800"></textarea>
                  <p className="mt-1 text-sm text-gray-500">Tell us briefly about your current process.</p>
                </div>
                
                <button type="submit" className="w-full bg-orange text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-light transition-colors">
                  Book a Free Consultation
                </button>
              </form>
            )}
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="flex flex-col space-y-6">
              
              <a href="tel:+918390768833" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0 group-hover:bg-orange/20 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate uppercase tracking-wider font-semibold">Phone</div>
                  <div className="text-navy font-semibold text-lg">+91 8390768833</div>
                </div>
              </a>

              <a href="mailto:logicsync.software.sol@gmail.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0 group-hover:bg-orange/20 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate uppercase tracking-wider font-semibold">Email</div>
                  <div className="text-navy font-semibold text-lg break-all">logicsync.software.sol@gmail.com</div>
                </div>
              </a>

              <a href="https://logicsync.digital" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0 group-hover:bg-orange/20 transition-colors">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate uppercase tracking-wider font-semibold">Website</div>
                  <div className="text-navy font-semibold text-lg">logicsync.digital</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate uppercase tracking-wider font-semibold">Location</div>
                  <div className="text-navy font-semibold text-lg">Pune, Maharashtra, India</div>
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-gray-100">
              <a 
                href="https://wa.me/918390768833" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
