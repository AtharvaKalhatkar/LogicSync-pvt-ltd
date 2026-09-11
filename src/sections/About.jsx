
import { useReveal } from '../lib/hooks';

const About = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              About LogicSync Digital
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              LogicSync Digital is a software, automation and business systems company based in Pune, Maharashtra. We help businesses simplify operations through custom software, mobile applications, ERP systems, automation and AI-powered solutions.
            </p>
          </div>

          <div className="lg:w-1/2 w-full space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-navy text-white flex items-center justify-center text-2xl font-bold">
                AK
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy">Atharva Kalhatkar</h3>
                <p className="text-slate">Founder & Developer</p>
              </div>
            </div>

            <div className="border-l-4 border-orange pl-6">
              <p className="text-gray-800 italic text-lg leading-relaxed">
                "We don't just build software. We understand how a business works, identify inefficient processes, and build digital systems that make the business simpler, faster and easier to manage."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
