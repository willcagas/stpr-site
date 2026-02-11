import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="flex items-center justify-center gap-2 mb-4">
          Made with <Heart size={16} className="text-red-500 fill-current" /> in Hamilton, Ontario.
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Steel Town Power Rangers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
