import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative text-slate-400 py-14 border-t border-[#2a3550]">
      <div className="section-shell !py-0 text-center">
        <p className="flex items-center justify-center gap-2 mb-4 text-[#aebcdc]">
          Made with <Heart size={16} className="text-red-500 fill-current" /> in Hamilton, Ontario.
        </p>
        <p className="text-xs tracking-[0.16em] uppercase text-[#8f9fbc]">
          &copy; {new Date().getFullYear()} Steel Town Power Rangers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
