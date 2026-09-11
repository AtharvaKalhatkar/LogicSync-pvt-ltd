import { useEffect } from 'react';
import Contact from '../sections/Contact';

function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange font-semibold uppercase tracking-widest text-sm mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy">
            Let's Build Something Together
          </h1>
          <p className="text-slate text-lg mt-4 max-w-3xl mx-auto">
            Tell us about your business and the problems you're facing. We'll help design the right system for you.
          </p>
        </div>
      </section>
      <Contact />
    </main>
  );
}

export default ContactPage;
