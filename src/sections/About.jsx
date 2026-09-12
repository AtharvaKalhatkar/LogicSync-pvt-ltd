import { useReveal } from '../lib/hooks';
import { MapPin, Mail, Phone, Code2, ShieldCheck, FileCheck, ExternalLink } from 'lucide-react';

const About = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Company Story */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-wider mb-4 border border-navy/10">
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-6">
              About LogicSync Digital
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
              LogicSync Digital is a software, automation and business systems company based in Pune, Maharashtra. We help businesses simplify operations through custom software, mobile applications, ERP systems, automation and AI-powered solutions.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate mb-3">
                <MapPin className="w-4 h-4 text-orange" />
                <span>Registered Headquarters & Operations</span>
              </div>
              <p className="text-navy font-bold text-base mb-1">
                Pune, Maharashtra, India
              </p>
              <p className="text-slate text-xs leading-relaxed">
                Registered office at Oxyvalley Phase 2, Wagholi, Pune, Maharashtra 412207. Direct on-site consulting available across Maharashtra & remote deployment across India.
              </p>
            </div>
          </div>

          {/* Right Column: Founder & Philosophy */}
          <div className="w-full lg:w-1/2 space-y-6">
            
            {/* Founder Card */}
            <div className="bg-gray-50/80 rounded-3xl p-7 border border-gray-200 shadow-sm flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-navy text-orange flex items-center justify-center text-2xl font-black shadow-md shrink-0">
                AK
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-orange uppercase tracking-wider mb-1">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Leadership</span>
                </div>
                <h3 className="text-2xl font-black text-navy leading-tight">
                  Atharva Kalhatkar
                </h3>
                <p className="text-slate font-semibold text-sm">
                  Founder & Developer
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs text-slate">
                  <a href="mailto:logicsync.software.sol@gmail.com" className="hover:text-orange transition-colors flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-orange" />
                    <span>Email</span>
                  </a>
                  <a href="tel:+918390768833" className="hover:text-orange transition-colors flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-orange" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Core Philosophy Quote Card */}
            <div className="bg-white rounded-3xl p-7 border-l-4 border-orange border border-gray-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-slate block mb-2">
                Our Core Philosophy
              </span>
              <p className="text-gray-800 text-base sm:text-lg italic font-medium leading-relaxed">
                “We don’t just build software. We understand how a business works, identify inefficient processes, and build digital systems that make the business simpler, faster and easier to manage.”
              </p>
            </div>

          </div>

        </div>

        {/* Official Government Verification & Credentials Banner */}
        <div className="bg-gradient-to-br from-gray-50 to-orange/5 rounded-3xl p-8 sm:p-10 border-2 border-orange/20 shadow-md">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-navy text-orange flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full mb-1">
                  <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Government Verified Enterprise</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-navy">
                  Government of Maharashtra & Ministry of MSME Registered
                </h3>
                <p className="text-slate text-sm font-medium">
                  LogicSync Digital is an officially registered Micro Enterprise under the Ministry of MSME, Govt. of India.
                </p>
              </div>
            </div>

            <a
              href="./documents/LogicSync_Digital_Udyam_Registration_Certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-white hover:bg-navy-light px-6 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all shrink-0 active:scale-95 group"
            >
              <FileCheck className="w-4 h-4 text-orange" />
              <span>View Registration Certificate (PDF)</span>
              <ExternalLink className="w-4 h-4 text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Registration Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-left">
            <div className="bg-white p-4 rounded-2xl border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate block mb-1">
                Udyam Registration No.
              </span>
              <span className="text-navy font-extrabold text-sm sm:text-base font-mono block">
                UDYAM-MH-26-1144939
              </span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate block mb-1">
                Authority & District Centre
              </span>
              <span className="text-navy font-bold text-sm block">
                District Industries Centre (DIC): PUNE
              </span>
              <span className="text-slate text-xs">Govt. of Maharashtra</span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate block mb-1">
                Classification & Activity
              </span>
              <span className="text-navy font-bold text-sm block">
                Micro Enterprise (Services)
              </span>
              <span className="text-slate text-xs">Computer Consultancy & Systems</span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate block mb-1">
                National Classification Code
              </span>
              <span className="text-navy font-bold text-sm block">
                NIC 62020
              </span>
              <span className="text-slate text-xs">Computer Facilities & Software</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
