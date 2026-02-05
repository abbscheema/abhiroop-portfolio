
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Core Competencies</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Technical proficiency combined with operational leadership to drive organizational value.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100/50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-5">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="text-slate-600 flex items-center text-sm font-medium">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-60"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div>
                 <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-widest text-sm">Integrity</h4>
                 <p className="text-slate-400 text-base leading-relaxed">Unwavering ethical standards in every financial report and regulatory audit.</p>
              </div>
              <div>
                 <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-widest text-sm">Adaptability</h4>
                 <p className="text-slate-400 text-base leading-relaxed">Quickly thriving in fast-paced, multi-entity and multi-currency environments.</p>
              </div>
              <div>
                 <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-widest text-sm">Collaboration</h4>
                 <p className="text-slate-400 text-base leading-relaxed">Working cross-functionally to bridge accounting data with business strategy.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
