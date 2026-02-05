
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  // High-end Wall Street aesthetic: Stable faceless professional link
  const heroImageUrl = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2071";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            CPA Candidate | 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Abhiroop <br /><span className="gradient-text">Cheema</span>
          </h1>
          <p className="text-xl font-bold text-slate-500 mb-4 uppercase tracking-[0.2em]">
            {PERSONAL_INFO.title}
          </p>
          <p className="max-w-xl text-lg text-slate-600 mb-10 leading-relaxed font-medium">
            Strategic finance leader specializing in multi-entity financial 
            operations, digital transformation, and high-impact ERP 
            orchestration for global organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#experience"
              onClick={(e) => handleScroll(e, 'experience')}
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-slate-300 flex items-center justify-center group"
            >
              Professional Experience
              <svg className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#education"
              onClick={(e) => handleScroll(e, 'education')}
              className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-slate-300 transition-all text-center shadow-sm"
            >
              Education & Certs
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-100/40 rounded-[3rem] blur-2xl group-hover:bg-blue-200/50 transition-colors duration-500"></div>
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-50 flex items-center justify-center">
            <img 
              src={heroImageUrl} 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="eager"
            />
          </div>
          {/* Experience Badge Overlay */}
          <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-[2rem] shadow-2xl hidden md:block">
            <p className="text-4xl font-black">9+</p>
            <p className="text-xs uppercase tracking-[0.2em] font-black opacity-90">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
