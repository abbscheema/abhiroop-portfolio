
import React from 'react';
import { CAREER_INDUSTRIES, CORE_CONTRIBUTIONS } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Professional Journey</h2>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            A comprehensive overview of my career impact and the diverse industries where I've implemented strategic financial solutions.
          </p>
        </div>

        {/* Industry Grid Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] whitespace-nowrap">Industries Served</span>
            <div className="h-px w-full bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {CAREER_INDUSTRIES.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-[2rem] border border-slate-200 flex flex-col items-center text-center group hover:border-blue-500 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {industry.icon === 'healthcare' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" /></svg>}
                  {industry.icon === 'logistics' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1" /></svg>}
                  {industry.icon === 'brokerage' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  {industry.icon === 'trade' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>}
                </div>
                <span className="font-bold text-slate-800 tracking-tight">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Consolidated Contributions Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Core Contributions</h3>
            <h4 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Driving High-Impact <br />Financial Excellence</h4>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              My approach combines technical accounting precision with operational leadership. I've consistently delivered value through system modernization, rigorous compliance, and executive-level insight across various sectors.
            </p>
            <div className="hidden lg:block w-32 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            {CORE_CONTRIBUTIONS.map((contribution, index) => (
              <div key={index} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="relative z-10 flex items-start">
                  <div className="mt-1.5 mr-6 text-blue-600">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center font-bold text-sm">
                      0{index + 1}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors tracking-tight">{contribution.title}</h5>
                    <p className="text-slate-600 text-lg leading-relaxed">{contribution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action for Resume */}
        <div className="mt-24 text-center bg-slate-900 rounded-[3.5rem] p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <p className="text-blue-400 mb-4 uppercase tracking-[0.4em] text-sm font-bold">Chronological History</p>
            <h4 className="text-3xl md:text-4xl font-bold mb-10 max-w-3xl mx-auto">Detailed career history and references are available upon request.</h4>
            <a 
              href="#contact" 
              className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/50 hover:scale-105"
            >
              Request Comprehensive Resume
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[30rem] h-[30rem] bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[20rem] h-[20rem] bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
