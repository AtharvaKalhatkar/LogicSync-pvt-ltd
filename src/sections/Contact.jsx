import { useState } from 'react';
import { useReveal } from '../lib/hooks';
import { Phone, Mail, Globe, MapPin, MessageCircle, Send, CheckCircle2, Clock } from 'lucide-react';

const Contact = () => {
  const [ref, visible] = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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
      } else {
        alert("There was an issue sending your message. Please reach out via WhatsApp or call us directly.");
      }
    } catch (error) {
      console.error("Form submission error", error);
      alert("Submission error. Please call +91 8390768833 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider mb-4 border border-orange/20">
            <span>Direct Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Let's Build the Right System for Your Business.
          </h2>
          <p className="text-slate text-base sm:text-lg">
            Schedule an initial consultation. We will analyze your bottlenecks and provide a practical roadmap to digitize your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-gray-50/80 rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm">
            {submitted ? (
              <div className="bg-emerald-50 text-emerald-900 p-8 rounded-2xl border border-emerald-200 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-950">Thank You!</h3>
                <p className="text-emerald-800 text-sm sm:text-base leading-relaxed">
                  We've received your business inquiry. Atharva from LogicSync Digital will review your workflow details and call you back shortly.
                </p>
                <div className="pt-4">
                  <a
                    href="https://wa.me/918390768833"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-emerald-700"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Or Chat Immediately on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form action="https://formspree.io/f/xzdwpzbg" method="POST" onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="e.g. Rajesh Patil"
                      required 
                      className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-gray-900 text-sm" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Business Name *
                    </label>
                    <input 
                      type="text" 
                      id="businessName" 
                      name="businessName" 
                      placeholder="e.g. Patil Distributors"
                      required 
                      className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-gray-900 text-sm" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="+91 98765 43210"
                      required 
                      className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-gray-900 text-sm" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="name@business.com"
                      required 
                      className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-gray-900 text-sm" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="industry" className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                    Industry Sector *
                  </label>
                  <select 
                    id="industry" 
                    name="industry" 
                    required 
                    className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-gray-900 text-sm"
                  >
                    <option value="">Select Your Industry</option>
                    <option value="Distribution & FMCG">Distribution & Wholesale</option>
                    <option value="Manufacturing & Packaging">Manufacturing & Packaging</option>
                    <option value="Agriculture & Krushi Kendra">Agriculture / Krushi Seva Kendra</option>
                    <option value="Water Supply & Delivery">Water Jar & Bottle Supply</option>
                    <option value="Construction & Machinery">Construction & Equipment Rental</option>
                    <option value="Real Estate & Brokerage">Real Estate & Brokerage</option>
                    <option value="Property Management & Hostels">Property Management & Hostels / PG</option>
                    <option value="Stone Crusher & Mining">Stone Crusher & Mining</option>
                    <option value="Retail Store & POS">Retail & POS</option>
                    <option value="Transport & Logistics">Transport & Logistics</option>
                    <option value="Education & Healthcare">Education & Healthcare</option>
                    <option value="Other Industry">Other Custom Business</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="problem" className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                    What problem are you trying to solve? *
                  </label>
                  <textarea 
                    id="problem" 
                    name="problem" 
                    rows="4" 
                    placeholder="e.g. We currently track jar deliveries and rent in paper notebooks. We need automatic WhatsApp bills and stock balance tracking."
                    required 
                    className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-gray-900 text-sm leading-relaxed"
                  />
                  <p className="mt-1 text-xs text-slate">
                    Tell us briefly about your current process.
                  </p>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-orange text-white py-4 rounded-xl font-bold text-base hover:bg-orange-dark active:scale-95 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Book a Free Consultation'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact List */}
            <div className="bg-gray-50/80 rounded-3xl p-7 border border-gray-200 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-slate block mb-1">
                Direct Contact Information
              </span>

              <a href="tel:+918390768833" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center shrink-0 group-hover:bg-orange group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate uppercase tracking-wider font-bold block">Phone / Mobile</span>
                  <span className="text-navy font-bold text-lg group-hover:text-orange transition-colors">+91 8390768833</span>
                </div>
              </a>

              <a href="mailto:logicsync.software.sol@gmail.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center shrink-0 group-hover:bg-orange group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate uppercase tracking-wider font-bold block">Email</span>
                  <span className="text-navy font-bold text-sm sm:text-base break-all group-hover:text-orange transition-colors">logicsync.software.sol@gmail.com</span>
                </div>
              </a>

              <a href="https://logicsync.digital" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center shrink-0 group-hover:bg-orange group-hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate uppercase tracking-wider font-bold block">Official Website</span>
                  <span className="text-navy font-bold text-base group-hover:text-orange transition-colors">logicsync.digital</span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy/10 text-navy flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate uppercase tracking-wider font-bold block">Office Location</span>
                  <span className="text-navy font-bold text-base">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-200">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Immediate WhatsApp Response</span>
              </div>
              <p className="text-xs text-emerald-900/80 mb-4">
                Prefer messaging directly? Drop us a WhatsApp text with your business questions and get a quick reply.
              </p>
              <a 
                href="https://wa.me/918390768833" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-emerald-700 shadow-sm transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp (+91 8390768833)</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
