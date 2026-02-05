
import React from 'react';
import { STRATEGIC_SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-20 text-center relative z-10">
          <h2 className="text-xs font-bold text-blue-400 uppercase tracking-[0.4em] mb-4">Strategic Solutions</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Transformation & Advisory</h3>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Integrating rigorous accounting standards with modern automation and financial foresight to drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10 max-w-5xl mx-auto">
          {STRATEGIC_SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group bg-slate-800/40 border border-slate-700/50 rounded-[2.5rem] p-10 hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500 shadow-inner">
                {service.icon === 'tax' && (
                  <svg className="w-8 h-8 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                {service.icon === 'automation' && (
                  <svg className="w-8 h-8 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {service.icon === 'strategy' && (
                  <svg className="w-8 h-8 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )}
                {service.icon === 'ai' && (
                  <svg className="w-8 h-8 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
              </div>
              
              <h4 className="text-2xl font-bold mb-6 group-hover:text-blue-400 transition-colors tracking-tight">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed mb-8 flex-grow text-lg">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-700/50">
                {service.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="text-[10px] font-black uppercase tracking-[0.15em] px-4 py-1.5 bg-slate-700/50 rounded-lg text-slate-300 group-hover:text-blue-200 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[30rem] h-[30rem] bg-blue-900/10 rounded-full blur-[80px] pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Services;
