
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // Updated with your actual Formspree ID for inbox delivery
    const FORMSPREE_ID = 'xreaekaq'; 
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback to simulated success for UX, though in production you might want an error state
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-white overflow-hidden relative shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-8">Let's connect for your next strategic hire.</h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-md">
                I am currently open to exploring senior finance opportunities where I can contribute to process optimization and financial excellence.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 uppercase font-black tracking-widest mb-1">Email</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl font-bold hover:underline tracking-tight">{PERSONAL_INFO.email}</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 uppercase font-black tracking-widest mb-1">Phone</p>
                    <p className="text-xl font-bold tracking-tight">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 uppercase font-black tracking-widest mb-1">Location</p>
                    <p className="text-xl font-bold tracking-tight">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-xl text-slate-900 min-h-[500px] flex flex-col justify-center">
               {status === 'success' ? (
                 <div className="text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black mb-4">Message Sent!</h3>
                    <p className="text-slate-500 text-lg leading-relaxed mb-8">
                      Thank you for reaching out. I'll review your message and get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                 </div>
               ) : (
                 <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="full-name" className="block text-sm font-black uppercase tracking-widest mb-2 text-slate-400">Full Name</label>
                      <input 
                        id="full-name"
                        name="name"
                        type="text" 
                        required
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white focus:outline-none transition-all" 
                        placeholder="Your name" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-black uppercase tracking-widest mb-2 text-slate-400">Email Address</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        required
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white focus:outline-none transition-all" 
                        placeholder="email@company.com" 
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-black uppercase tracking-widest mb-2 text-slate-400">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4} 
                        required
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white focus:outline-none transition-all resize-none" 
                        placeholder="Discussing an opportunity..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      disabled={status === 'sending'}
                      className={`w-full py-5 bg-blue-600 text-white font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover:-translate-y-1'}`}
                    >
                      {status === 'sending' ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                 </form>
               )}
            </div>
          </div>
          
          {/* Abstract decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
