import React from 'react';
import { Star, Quote } from 'lucide-react';
import '../styles/components.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Operations Director, TechFlow',
    content: 'LogicSync completely transformed our internal processes. The automation solutions they implemented saved us over 40 hours a week in manual data entry. Absolutely brilliant.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=47'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'CEO, GrowthScale',
    content: 'We were struggling with legacy systems that wouldn\'t talk to each other. The custom API integrations provided by LogicSync were seamless and incredibly robust. Highly recommend!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=11'
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Founder, DesignHub',
    content: 'Their team is not just technically sound, but they actually understand business logic. The ROI was clear within the first two months. A premium service top to bottom.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=5'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">What Our <span className="gradient-text">Clients</span> Say</h2>
          <p className="section-subtitle">Don't just take our word for it. Here are stories from companies we've helped scale.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card glass-panel">
              <Quote className="quote-icon" size={32} />
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="star-icon filled" fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
