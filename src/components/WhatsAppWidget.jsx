import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import '../styles/components.css';

const WhatsAppWidget = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 4 seconds of page load to gently prompt the user
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "918390768833";
    const message = encodeURIComponent("Hi LogicSync! I visited your website and would love to get a free software demo or discuss modernizing my business operations.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="whatsapp-widget-container">
      {showTooltip && (
        <div className="whatsapp-tooltip glass animate-fade-in">
          <div className="whatsapp-tooltip-header">
            <span className="tooltip-badge">Online Support</span>
            <button className="tooltip-close" onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }} aria-label="Close tooltip">
              <X size={14} />
            </button>
          </div>
          <p className="tooltip-message">
            Hi! Let's modernise your business. Ask for a free live software demo right now! 🚀
          </p>
          <button className="tooltip-btn" onClick={handleWhatsAppRedirect}>
            Chat on WhatsApp
          </button>
          <div className="tooltip-arrow"></div>
        </div>
      )}

      <button className="whatsapp-float-btn" onClick={handleWhatsAppRedirect} aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" className="whatsapp-icon-svg" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.019-5.101-2.875-6.958-1.856-1.856-4.327-2.875-6.96-2.877-5.442 0-9.866 4.42-9.869 9.865-.001 1.748.461 3.454 1.336 4.965l-.983 3.586 3.673-.968zm12.873-6.52c-.27-.136-1.602-.79-1.85-.882-.249-.093-.43-.138-.612.136-.182.274-.702.882-.861 1.066-.158.183-.317.206-.587.07-.27-.135-1.14-.42-2.172-1.34-1.03-.92-1.724-2.05-1.852-2.253-.127-.203-.014-.313.12-.447.12-.121.27-.315.405-.472.135-.157.18-.27.27-.45.09-.18.045-.337-.022-.473-.068-.136-.612-1.474-.838-2.02-.22-.53-.443-.457-.612-.466-.158-.008-.339-.01-.52-.01-.18 0-.475.067-.723.337-.249.27-.95.928-.95 2.264s.972 2.628 1.107 2.81c.135.183 1.913 2.922 4.636 4.101.648.28 1.153.447 1.547.572.651.207 1.243.178 1.711.108.522-.078 1.602-.656 1.828-1.282.226-.627.226-1.164.158-1.282-.067-.118-.248-.182-.518-.318z"/>
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppWidget;
