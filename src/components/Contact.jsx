import React from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get Started Today</h2>
          <p>Ready to modernize your business? Let's discuss your next project.</p>
        </div>
        
        <div className="contact-container glass animate-fade-in">
          <form action="https://formspree.io/f/xzdwpzbg" method="POST" className="contact-form">
            <div className="grid grid-2">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" className="form-control" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="john@company.com" required />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" className="form-control" placeholder="Business Modernization" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" className="form-control" placeholder="Tell us about your business goals..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary w-full">
              Send Inquiry <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};


export default Contact;
