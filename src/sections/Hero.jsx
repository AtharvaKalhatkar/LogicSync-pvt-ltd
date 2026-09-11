
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" id="hero">
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
            <span className="text-orange font-semibold tracking-widest text-sm uppercase mb-4">
              LOGICSYNC DIGITAL
            </span>
            <h1 className="text-navy text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Your Business Problems.<br />
              Our Smart Digital Solutions.
            </h1>
            <p className="text-orange font-semibold text-lg mb-6">
              Software • Automation • AI
            </p>
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              From everyday business operations to complex workflows, we design and build digital systems that help businesses save time, reduce manual work and operate smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="bg-orange text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-orange-light transition-colors"
              >
                Book a Free Consultation
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold text-center hover:bg-navy hover:text-white transition-colors"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>

          {/* Right Side Visual */}
          <div className="w-full lg:w-1/2 relative h-96 lg:h-[500px] flex items-center justify-center">
            
            {/* Background elements */}
            <div className="absolute inset-0 bg-gray-50 rounded-full opacity-50 blur-3xl transform scale-110"></div>
            
            <div className="relative w-full max-w-lg h-full">
              
              {/* Web Dashboard Mockup */}
              <div className="absolute top-1/4 left-0 w-3/4 h-3/5 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-10">
                {/* Browser Header */}
                <div className="w-full h-8 bg-gray-100 flex items-center px-4 gap-2 border-b border-gray-200">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="mx-auto w-1/3 h-3 bg-white rounded-md"></div>
                </div>
                {/* Dashboard Content */}
                <div className="p-4 flex gap-4 h-full">
                  <div className="w-1/4 h-full bg-gray-50 rounded-lg flex flex-col gap-2 p-2">
                    <div className="w-full h-4 bg-gray-200 rounded"></div>
                    <div className="w-full h-4 bg-gray-200 rounded"></div>
                    <div className="w-full h-4 bg-gray-200 rounded"></div>
                    <div className="w-full h-4 bg-orange-light opacity-50 rounded mt-auto"></div>
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="flex-1 h-16 bg-navy-light opacity-10 rounded-lg"></div>
                      <div className="flex-1 h-16 bg-orange-light opacity-20 rounded-lg"></div>
                      <div className="flex-1 h-16 bg-gray-100 rounded-lg"></div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg flex items-end p-4 gap-2 justify-between">
                      <div className="w-1/6 bg-navy h-1/4 rounded-t"></div>
                      <div className="w-1/6 bg-orange h-1/2 rounded-t"></div>
                      <div className="w-1/6 bg-navy h-3/4 rounded-t"></div>
                      <div className="w-1/6 bg-orange h-full rounded-t"></div>
                      <div className="w-1/6 bg-navy h-2/3 rounded-t"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Monitor Mockup */}
              <div className="absolute bottom-0 right-10 w-3/5 h-2/5 bg-gray-800 rounded-t-xl shadow-2xl border-4 border-gray-900 overflow-hidden z-20">
                <div className="w-full h-full bg-navy relative">
                  <div className="absolute top-0 w-full h-4 bg-gray-900 opacity-50"></div>
                  <div className="grid grid-cols-3 gap-2 p-4 pt-8 h-full">
                    <div className="bg-white opacity-20 rounded"></div>
                    <div className="bg-white opacity-20 rounded"></div>
                    <div className="bg-white opacity-20 rounded"></div>
                    <div className="bg-orange opacity-80 rounded col-span-2"></div>
                    <div className="bg-white opacity-20 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Mobile Phone Mockup */}
              <div className="absolute top-10 right-4 w-1/4 h-3/4 bg-white rounded-[2rem] shadow-2xl border-[6px] border-gray-800 overflow-hidden z-30 animate-float">
                <div className="w-1/2 h-4 bg-gray-800 mx-auto rounded-b-xl mb-4"></div>
                <div className="px-3 flex flex-col gap-3">
                  <div className="w-full h-10 bg-orange text-white text-[8px] flex items-center px-2 rounded-lg font-bold">
                    LogicSync App
                  </div>
                  <div className="w-full h-12 bg-gray-100 rounded-lg border border-gray-200 flex items-center px-2 gap-2">
                    <div className="w-6 h-6 rounded-full bg-navy opacity-20"></div>
                    <div className="flex-1 h-2 bg-gray-300 rounded"></div>
                  </div>
                  <div className="w-full h-12 bg-gray-100 rounded-lg border border-gray-200 flex items-center px-2 gap-2">
                    <div className="w-6 h-6 rounded-full bg-orange opacity-20"></div>
                    <div className="flex-1 h-2 bg-gray-300 rounded"></div>
                  </div>
                  <div className="w-full h-12 bg-gray-100 rounded-lg border border-gray-200 flex items-center px-2 gap-2">
                    <div className="w-6 h-6 rounded-full bg-navy opacity-20"></div>
                    <div className="flex-1 h-2 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-15">
                <svg className="w-full h-full text-orange opacity-50" style={{ strokeDasharray: '4,4' }}>
                  <path d="M 200 150 Q 300 150 350 100" fill="transparent" stroke="currentColor" strokeWidth="2" />
                  <path d="M 250 250 Q 300 250 350 200" fill="transparent" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              
              {/* Central Sync Icon indicator */}
              <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-25 text-orange border border-orange-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path>
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                  <path d="M16 21v-5h5"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
