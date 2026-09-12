import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const SYSTEM_PROMPT = `You are LogicSync AI — the official virtual assistant for LogicSync Digital, a software company based in Pune, Maharashtra, India. You are embedded on the company website as a helpful chatbot.

## About LogicSync Digital
- Government of Maharashtra & MSME Verified (UDYAM-MH-26-1144939)
- We build custom software, mobile apps, ERP systems, business automation and AI-powered solutions
- Based in Pune, Maharashtra, India — serving businesses across India
- Contact: +91 8390768833
- Website: https://logicsync.digital

## Our Products
1. **AgriSync** — For Krushi Seva Kendra / Agro Input Retail. Billing, seed & fertilizer stock, customer credit ledger, supplier payments.
2. **Aqua Sync** — For Water Jar & 20L Bottle Distribution. Daily jar deliveries, driver bottle registers, auto WhatsApp monthly billing.
3. **LogicSync Rent** — For Hostels, PGs & Commercial Properties. Room allotment, electricity meter readings, auto rent invoices.
4. **Property Sync** — For Real Estate Brokers & Property Consultancies. Client inquiries, site visit logs, property listings.
5. **VEGA ERP** — Flagship ERP for Distributors, FMCG & Agency Owners. Salesman Android app + Desktop warehouse ERP with live sync.
6. **Crusher Sync** — For Stone Crusher & Quarry Operations. Weighbridge entry, material production, royalty, transport billing.
7. **PackSync** — For Corrugated Box & Packaging Units. Job card tracking, paper roll inventory, dispatch invoicing.
8. **Build Sync** — For Heavy Machinery & Earthmovers (JCB, Crane, Tipper, etc). Machine hour meter log, auto timesheet invoices.
9. **Dukan Setu** — For Retail Stores, Kirana & Local Traders. Fast counter billing, barcode inventory, customer digital khata/udhari, WhatsApp bills with payment QR. 250+ live paid users monthly.

## Key Stats
- 20+ Projects Delivered
- 15+ Clients Served
- 7 Projects Ongoing
- 250+ Live Paid Users per Month

## Our Process
1. Tell us your workflow
2. We architect & build
3. Deploy & go live
4. Ongoing support

## Your Behavior Rules
- Be friendly, professional, and concise
- Answer questions about LogicSync products, services, and pricing inquiries
- For pricing: say "Pricing depends on your specific requirements. I'd recommend booking a free consultation to discuss your needs."
- For technical details beyond your knowledge: offer to connect them with the team
- Always offer to book a free consultation or connect via WhatsApp (+91 8390768833)
- Respond in the same language the user writes in (Hindi, Marathi, English, etc.)
- Keep responses short (2-4 sentences max) unless the user asks for details
- Use emojis sparingly for a professional but friendly tone
- If asked who you are: "I'm LogicSync AI, your virtual assistant. I can help you learn about our products, services, and connect you with our team."
- Never make up features or pricing that isn't listed above
- If someone asks about a product not listed, suggest our custom development service`;

// Fallback responses when API key is not available
const FALLBACK_RESPONSES = {
  greeting: "👋 Welcome to LogicSync Digital! I'm here to help you learn about our software solutions. What would you like to know?",
  products: "We have 9 ready-to-deploy products:\n\n• **AgriSync** — Agro Retail\n• **Aqua Sync** — Water Distribution\n• **LogicSync Rent** — Property Management\n• **VEGA ERP** — Distribution & FMCG\n• **Crusher Sync** — Quarry Operations\n• **Dukan Setu** — Retail POS\n• **PackSync** — Packaging Units\n• **Build Sync** — Heavy Machinery\n• **Property Sync** — Real Estate\n\nWould you like details on any of these?",
  pricing: "Pricing depends on your specific requirements. I'd recommend booking a **free 30-minute consultation** to discuss your needs.\n\n📞 Call: +91 8390768833\n💬 WhatsApp: wa.me/918390768833",
  contact: "You can reach us at:\n\n📞 **Phone:** +91 8390768833\n💬 **WhatsApp:** wa.me/918390768833\n🌐 **Website:** logicsync.digital\n📍 **Location:** Pune, Maharashtra\n\nWe offer a free 30-minute consultation!",
  default: "Thanks for your interest! For detailed information, I'd recommend speaking with our team directly.\n\n📞 +91 8390768833\n💬 WhatsApp: wa.me/918390768833\n\nOr book a free consultation through our Contact page!",
};

function getOfflineResponse(message) {
  const lower = message.toLowerCase();
  if (lower.match(/^(hi|hello|hey|namaste|namaskar)/)) return FALLBACK_RESPONSES.greeting;
  if (lower.match(/product|solution|software|app|erp|agri|aqua|vega|crusher|dukan|pack|build|rent|property/)) return FALLBACK_RESPONSES.products;
  if (lower.match(/price|pricing|cost|rate|charge|kitna|paisa|rupee/)) return FALLBACK_RESPONSES.pricing;
  if (lower.match(/contact|phone|call|whatsapp|email|address|location|pune/)) return FALLBACK_RESPONSES.contact;
  return FALLBACK_RESPONSES.default;
}

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "👋 Hi! I'm **LogicSync AI**. I can help you explore our products, understand our services, or connect you with our team. What can I help you with?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatRef = useRef(null);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

  // Show bubble prompt after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      let assistantContent;

      if (API_KEY) {
        // Use Gemini API
        const ai = new GoogleGenAI({ apiKey: API_KEY });
        const chatHistory = messages.map((m) => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        }));

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            ...chatHistory,
            { role: 'user', parts: [{ text: trimmed }] },
          ],
          config: {
            systemInstruction: SYSTEM_PROMPT,
            maxOutputTokens: 300,
            temperature: 0.7,
          },
        });

        assistantContent = response.text || "I'm sorry, I couldn't process that. Please try again or contact us directly at +91 8390768833.";
      } else {
        // Offline fallback
        await new Promise((r) => setTimeout(r, 800));
        assistantContent = getOfflineResponse(trimmed);
      }

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: assistantContent },
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting right now. Please reach out directly:\n\n📞 +91 8390768833\n💬 WhatsApp: wa.me/918390768833",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages, API_KEY]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Simple markdown-like rendering for bold text and links
  const renderContent = (text) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line.split(/(\*\*.*?\*\*)/).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="font-bold">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <>
      {/* Chat panel */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in-up"
        >
          {/* Header */}
          <div className="bg-navy px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-orange" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">LogicSync AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/60 text-xs">Online • Ask me anything</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto px-4 py-4 space-y-4 bg-gray-50/50" style={{ maxHeight: '420px' }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-navy/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-navy" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-navy text-white rounded-2xl rounded-br-md'
                      : 'bg-white text-gray-800 rounded-2xl rounded-bl-md border border-gray-200 shadow-sm'
                  }`}
                >
                  {renderContent(msg.content)}
                </div>
                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4 text-orange" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-navy" />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 text-slate text-sm">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2 bg-gray-50/50">
              {['Our Products', 'Pricing Info', 'Book a Consultation'].map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setInput(q);
                    setTimeout(() => {
                      setInput(q);
                      sendMessage();
                    }, 50);
                  }}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-gray-200 text-navy hover:bg-navy hover:text-white transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-200 bg-white shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-grow bg-gray-100 text-sm text-gray-900 px-4 py-2.5 rounded-xl border border-transparent focus:border-navy/20 focus:bg-white focus:outline-none transition-all placeholder:text-gray-400"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center hover:bg-navy-light disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 text-center">
              Powered by Gemini AI • LogicSync Digital
            </p>
          </div>
        </div>
      )}

      {/* Floating button */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
        {/* Bubble prompt */}
        {showBubble && !isOpen && (
          <div className="hidden sm:flex items-center gap-2 bg-white text-navy px-4 py-2.5 rounded-2xl shadow-xl border border-gray-200 mb-3 animate-fade-in-up text-xs font-semibold max-w-xs">
            <Sparkles className="w-4 h-4 text-orange shrink-0" />
            <span>Have questions? Chat with our AI assistant!</span>
            <button
              onClick={() => setShowBubble(false)}
              className="text-slate hover:text-navy p-0.5 rounded shrink-0"
            >
              <X size={14} />
            </button>
          </div>
        )}

        {/* FAB */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowBubble(false);
          }}
          className={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
            isOpen
              ? 'bg-gray-700 hover:bg-gray-600'
              : 'bg-navy hover:bg-navy-light'
          }`}
          aria-label={isOpen ? 'Close chat' : 'Open AI chat'}
        >
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange border-2 border-white" />
            </span>
          )}
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white fill-current" />
          )}
        </button>
      </div>
    </>
  );
}
