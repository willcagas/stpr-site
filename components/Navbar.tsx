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
        className="fixed top-0 left-0 w-full z-50 py-6 px-6 flex justify-center pointer-events-none"
    >
      <div className={`
        pointer-events-auto transition-all duration-500
        flex items-center gap-8 md:gap-12 px-8 py-3 rounded-full
        ${isScrolled 
            ? 'bg-[#020617]/80 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(251,191,36,0.1)]' 
            : 'bg-black/20 backdrop-blur-sm border border-white/5 shadow-sm'}
      `}>
        {/* Mystic Logo */}
        <a href="#" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-tr from-yellow-500 to-yellow-300 p-1.5 rounded-full text-black shadow-[0_0_15px_rgba(234,179,8,0.5)] group-hover:rotate-180 transition-transform duration-700">
                <Sparkles size={16} fill="currentColor" />
            </div>
            <span className="font-['Rajdhani'] font-bold text-xl tracking-widest text-slate-100 uppercase group-hover:text-yellow-400 transition-colors glow-text">
                STPR
            </span>
        </a>
          
        {/* Nav Links - Magical Pills */}
        <div className="hidden md:flex items-center gap-2">
            {['Team', 'Adventures', 'Origins'].map((item) => (
                <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="relative px-4 py-1.5 rounded-full text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/10 transition-all uppercase tracking-wider group"
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