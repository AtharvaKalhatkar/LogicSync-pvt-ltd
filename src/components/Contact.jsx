import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "918390768833";
    const msg = encodeURIComponent("Hello LogicSync! I would like to discuss a software project for my business.");
    window.open(`https://wa.me/${phoneNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="section-title">
          <span className="badge-pill">GET IN TOUCH</span>
          <h2>Let's Build Something <span className="sync-text">Extraordinary</span></h2>
          <p>
            Have a project in mind or want to modernize your business operations? 
            Reach out to our engineering team today for a free technical consultation.
          </p>
        </div>

        <div className="contact-wrapper grid grid-2">
          {/* Left Column: Contact Cards */}
          <div className="contact-info-column">
            <div className="contact-card glass">
              <h3>Contact Information</h3>
              <p className="contact-intro">
                Reach out to us directly via email, phone, or WhatsApp. Our team responds within 24 hours.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="detail-label">Headquarters</span>
                    <p className="detail-val">Pune, Maharashtra, India</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="detail-label">Email Us</span>
                    <a href="mailto:logicsync.software.sol@gmail.com" className="detail-val link-hover">
                      logicsync.software.sol@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon-box">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="detail-label">Call Us</span>
                    <a href="tel:+918390768833" className="detail-val link-hover">
                      +91 8390768833
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon-box">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="detail-label">Working Hours</span>
                    <p className="detail-val">Monday - Saturday: 9:00 AM - 7:00 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="contact-direct-actions">
                <button type="button" onClick={handleWhatsApp} className="btn btn-whatsapp w-full">
                  <MessageCircle size={18} /> Chat with Us on WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="contact-form-column">
            <div className="form-card glass">
              <h3>Send Us a Message</h3>
              <p className="form-subtitle">Tell us about your project requirements and goals.</p>

              <form action="https://formspree.io/f/xzdwpzbg" method="POST" className="styled-form">
                <div className="grid grid-2 form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" className="form-input" placeholder="e.g. Atharva Kalhatkar" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Work Email *</label>
                    <input type="email" id="email" name="email" className="form-input" placeholder="e.g. name@company.com" required />
                  </div>
                </div>

                <div className="grid grid-2 form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input type="tel" id="phone" name="phone" className="form-input" placeholder="+91 9876543210" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Solution Needed</label>
                    <select id="service" name="service" className="form-input form-select">
                      <option value="Custom ERP">Custom ERP Software</option>
                      <option value="Mobile App">Mobile App / PWA</option>
                      <option value="Cloud Platform">Web & Cloud Portal</option>
                      <option value="WhatsApp Billing">WhatsApp Billing & POS</option>
                      <option value="Other Consultation">Other Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Overview *</label>
                  <textarea id="message" name="message" rows="5" className="form-input form-textarea" placeholder="Briefly describe your operational workflow and what software you need..." required></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full btn-large">
                  Send Project Inquiry <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
