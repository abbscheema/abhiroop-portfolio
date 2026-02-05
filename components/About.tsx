
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  // Professional abstract finance fallback
  const fallbackUrl = "https://images.unsplash.com/photo-1454165833767-027ffea9e78a?auto=format&fit=crop&q=80&w=800";

  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-50 border border-slate-100">
              <img 
                src={imgError ? fallbackUrl : "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"} 
                alt="Professional focus" 
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-3xl hidden lg:block shadow-xl">
              <p className="text-4xl font-bold">9+</p>
              <p className="text-sm uppercase tracking-widest font-semibold">Years of Expertise</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">Financial Accuracy Meets Strategic Insight</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              My career is built on the foundation of delivering more than just compliance. I specialize in turning complex financial data into clear, actionable roadmaps for organizational growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h4 className="font-bold text-slate-900 text-lg mb-1">Systems Expert</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Proven success leading high-stakes ERP migrations like MS Dynamics 365.</p>
              </div>
              <div className="border-l-4 border-slate-300 pl-6 py-2">
                <h4 className="font-bold text-slate-900 text-lg mb-1">Multi-Entity Oversight</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Expert management of US subsidiaries and multi-currency consolidations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
