
import { Droplets, Smartphone, Home, ChevronRight } from 'lucide-react';
import { useReveal } from '../lib/hooks';

export default function CaseStudies() {
  const [headerRef, headerVisible] = useReveal();
  const [card1Ref, card1Visible] = useReveal();
  const [card2Ref, card2Visible] = useReveal();
  const [card3Ref, card3Visible] = useReveal();

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`mb-16 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}>
          <h2 className="text-navy text-3xl md:text-4xl font-bold text-center">From Problem → To Working System</h2>
          <p className="text-slate text-center mt-4">
            Real businesses. Real workflows. Real solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <div ref={card1Ref} style={{ transitionDelay: '0ms' }} className={`bg-white rounded-2xl border border-gray-200 p-8 flex flex-col h-full hover:shadow-xl transition-all duration-500 ${card1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy mt-4 mb-4">Bhairavnath Cool Aqua</h3>
            
            <div className="space-y-4">
              <div>
                <span className="uppercase text-xs tracking-wider text-slate font-semibold block">Problem</span>
                <p className="text-gray-800 text-sm mt-1">Manual water delivery and billing.</p>
              </div>
              <div>
                <span className="uppercase text-xs tracking-wider text-slate font-semibold block">Solution</span>
                <p className="text-gray-800 text-sm mt-1">Desktop admin system + mobile delivery system + cloud synchronization.</p>
              </div>
              <div>
                <span className="uppercase text-xs tracking-wider text-slate font-semibold block">Result</span>
                <p className="text-gray-800 text-sm mt-1">Digitized delivery, billing and customer management workflow.</p>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div ref={card2Ref} style={{ transitionDelay: '100ms' }} className={`bg-white rounded-2xl border border-gray-200 p-8 flex flex-col h-full hover:shadow-xl transition-all duration-500 ${card2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy mt-4">Pune Bhim Shakti Sangathan</h3>
            
            <div className="bg-green-50 text-green-700 border border-green-200 rounded-lg px-4 py-3 text-sm font-medium mt-3 mb-4">
              Mobile Application Successfully Developed & Deployed
            </div>
            
            <p className="text-gray-800 text-sm">
              Custom mobile application built for organizational operations.
            </p>
          </div>

          {/* Case Study 3 */}
          <div ref={card3Ref} style={{ transitionDelay: '200ms' }} className={`bg-white rounded-2xl border border-gray-200 p-8 flex flex-col h-full hover:shadow-xl transition-all duration-500 ${card3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy mt-4 mb-4">LogicSync Rent</h3>
            
            <p className="text-gray-800 text-sm mb-6">
              Transformed manual rent and utility billing into an automated digital system.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 text-xs text-gray-800 px-3 py-2 rounded-full whitespace-nowrap">Manual rent calculation</div>
                <ChevronRight className="w-4 h-4 text-orange flex-shrink-0" />
              </div>
              <div className="flex items-center gap-2 pl-4">
                <div className="bg-gray-100 text-xs text-gray-800 px-3 py-2 rounded-full whitespace-nowrap">Meter reading</div>
                <ChevronRight className="w-4 h-4 text-orange flex-shrink-0" />
              </div>
              <div className="flex items-center gap-2 pl-8">
                <div className="bg-gray-100 text-xs text-gray-800 px-3 py-2 rounded-full whitespace-nowrap">Automatic invoice</div>
                <ChevronRight className="w-4 h-4 text-orange flex-shrink-0" />
              </div>
              <div className="flex items-center gap-2 pl-12">
                <div className="bg-gray-100 text-xs text-gray-800 px-3 py-2 rounded-full whitespace-nowrap">WhatsApp sharing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
