import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50 py-5 px-4 md:px-8 flex justify-center pointer-events-none"
    >
      <div className={`
        pointer-events-auto transition-all duration-500
        flex items-center gap-6 md:gap-10 px-5 md:px-7 py-2.5 rounded-full
        ${isScrolled 
            ? 'bg-[#091121]/84 backdrop-blur-xl border border-[#d6bc7d]/30 shadow-[0_10px_34px_rgba(3,8,20,0.6)]' 
            : 'bg-[#091121]/58 backdrop-blur-md border border-[#8ea6c4]/20 shadow-[0_8px_26px_rgba(3,8,20,0.42)]'}
      `}>
        {/* Steel Arcane Logo */}
        <a href="#" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-tr from-[#c39343] to-[#f0d08d] p-1.5 rounded-full text-[#05070f] shadow-[0_0_15px_rgba(234,179,8,0.35)] group-hover:rotate-180 transition-transform duration-700">
                <Sparkles size={16} fill="currentColor" />
            </div>
            <span className="font-['Cinzel'] font-bold text-lg md:text-xl tracking-[0.24em] text-slate-100 uppercase group-hover:text-[#f0d08d] transition-colors glow-text">
                STPR
            </span>
        </a>
          
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-2">
            {['Team', 'Adventures', 'Origins'].map((item) => (
                <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="relative px-4 py-1.5 rounded-full text-xs font-semibold text-[#b6c4de] hover:text-[#f2d59a] hover:bg-white/10 transition-all uppercase tracking-[0.16em] group"
                >
                    {item}
                </a>
            ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;