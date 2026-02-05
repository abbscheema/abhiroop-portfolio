
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 mb-4">© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-slate-400 hover:text-blue-600">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-blue-600">Download CV</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
