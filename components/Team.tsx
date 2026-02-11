import React from 'react';
import { RANGERS } from '../constants';
import { motion } from 'framer-motion';
import { Ranger } from '../types';
import { Sparkles, ArrowRight, Activity } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-40 bg-[#020617] relative overflow-hidden">
      
      {/* Mystic Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-indigo-900/30 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[120px]"
          />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        <div className="mb-32 text-center relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-yellow-400 text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-sm backdrop-blur-sm"
            >
                <Sparkles size={14} /> The Squad
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-['Rajdhani'] font-bold text-white tracking-wider uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] relative inline-block">
                Ranger Roster
                <span className="absolute -top-6 -right-6 text-yellow-400 animate-pulse drop-shadow-[0_0_10px_gold]">✦</span>
                <span className="absolute -bottom-4 -left-6 text-purple-400 animate-pulse delay-100 drop-shadow-[0_0_10px_purple]">✦</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          {RANGERS.map((ranger, index) => (
            <RangerCard key={ranger.id} ranger={ranger} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RangerCard: React.FC<{ ranger: Ranger; index: number }> = ({ ranger, index }) => {
  const getColorHex = (cls: string) => {
      if (cls.includes('blue')) return '#3b82f6';
      if (cls.includes('yellow')) return '#eab308';
      if (cls.includes('pink')) return '#ec4899';
      if (cls.includes('green')) return '#22c55e';
      if (cls.includes('red')) return '#ef4444';
      if (cls.includes('purple')) return '#9333ea';
      if (cls.includes('indigo')) return '#6366f1';
      if (cls.includes('cyan')) return '#06b6d4';
      if (cls.includes('orange')) return '#f97316';
      if (cls.includes('teal')) return '#14b8a6';
      return '#cbd5e1';
  };
  
  const accentColor = getColorHex(ranger.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.8, type: "spring" }}
      className="group relative h-[520px] bg-slate-900/50 backdrop-blur-sm rounded-[3rem] border border-white/5 hover:border-yellow-500/50 transition-all duration-500 flex flex-col overflow-hidden hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]"
    >
        {/* MAGIC BACKGROUND EFFECT */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            {/* Spinning Rune Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow opacity-10 text-yellow-500 fill-current">
                     <path d="M50 0 L100 50 L50 100 L0 50 Z" />
                </svg>
            </div>
        </div>

        {/* Top Image Section */}
        <div className="relative h-[65%] p-4">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative z-10 bg-slate-950 shadow-inner group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500">
                <img 
                    src={ranger.image} 
                    alt={ranger.name} 
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700 ease-out" 
                />
                
                {/* Mystic Color Flash Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/10 mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Role Icon Floating */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-full shadow-lg border border-white/10 translate-y-[-150%] group-hover:translate-y-0 transition-transform duration-500 delay-100 z-20">
                     <Activity size={18} style={{ color: accentColor }} className="drop-shadow-[0_0_5px_currentColor]" />
                </div>
            </div>
            
            {/* Floating particles around image */}
             <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full blur-[2px] opacity-0 group-hover:opacity-100 animate-bounce delay-75 shadow-[0_0_10px_gold]"></div>
             <div className="absolute top-1/2 -left-2 w-3 h-3 bg-purple-500 rounded-full blur-[2px] opacity-0 group-hover:opacity-100 animate-bounce delay-150 shadow-[0_0_10px_purple]"></div>
        </div>

        {/* Bottom Stats Section */}
        <div className="relative h-[35%] px-6 pb-6 flex flex-col items-center text-center z-10">
            
            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                 <h3 className="text-3xl font-['Rajdhani'] font-bold text-slate-100 uppercase tracking-wider mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-200 transition-all">
                    {ranger.name}
                 </h3>
                 <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="h-px w-4 bg-slate-700 group-hover:bg-yellow-400 transition-colors shadow-[0_0_5px_currentColor]"></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-300 transition-colors">
                        {ranger.role}
                    </span>
                    <span className="h-px w-4 bg-slate-700 group-hover:bg-yellow-400 transition-colors shadow-[0_0_5px_currentColor]"></span>
                 </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4 px-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {ranger.bio}
            </p>

            <div className="mt-auto w-full transform translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {ranger.website !== '#' ? (
                    <a 
                        href={ranger.website}
                        target="_blank" 
                        rel="noreferrer"
                        className="relative overflow-hidden flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest hover:text-black transition-colors group/btn"
                    >
                        <span className="absolute inset-0 bg-yellow-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></span>
                        <span className="relative z-10 flex items-center gap-2">
                            Initialize Link <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                    </a>
                ) : (
                    <div className="w-full py-3 rounded-2xl bg-white/5 border border-white/5 text-slate-600 text-xs font-bold uppercase tracking-widest cursor-not-allowed">
                        Access Denied
                    </div>
                )}
            </div>
        </div>
    </motion.div>
  );
};

export default Team;