
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Education & Certification</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-6">{edu.period}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{edu.institution}</h3>
              <p className="text-slate-700 font-semibold text-lg mb-6">{edu.degree}</p>
              {edu.details && (
                <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 text-blue-900 text-sm font-bold flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {edu.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
