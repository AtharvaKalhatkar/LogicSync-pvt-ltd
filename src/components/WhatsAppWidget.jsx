import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [hasPrompted, setHasPrompted] = useState(false);

  useEffect(() => {
    // Show a subtle prompt popup after 4 seconds
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {hasPrompted && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-navy px-4 py-2.5 rounded-2xl shadow-xl border border-gray-200 mb-3 animate-fade-in-up text-xs font-semibold max-w-xs">
          <span>Need software or automation for your business? Chat with us!</span>
          <button 
            onClick={() => setHasPrompted(false)}
            className="text-slate hover:text-navy p-0.5 rounded"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/918390768833?text=Hello%20LogicSync%20Digital,%20I%20would%20like%20to%20discuss%20a%20digital%20solution%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
