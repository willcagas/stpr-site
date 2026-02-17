import React from 'react';
import { motion } from 'framer-motion';
import { ORIGIN_STORY } from '../constants';
import { Hammer, Zap, Code, Shield } from 'lucide-react';

const Origin: React.FC = () => {
  return (
    <section id="origins" className="relative overflow-hidden">
      
      {/* Background Ancient Text Animation - Low Opacity White */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.02]">
         <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap text-[20rem] font-['Cinzel'] font-bold text-white leading-none"
         >
            HAMMER HACKS STEEL TOWN POWER RANGERS CODE LEGACY MYSTIC FORCE 
         </motion.div>
         <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap text-[20rem] font-['Cinzel'] font-bold text-white leading-none mt-10"
         >
            HAMILTON ONTARIO BUILD CREATE DESIGN DEPLOY MYSTIC FORCE
         </motion.div>
      </div>

      <div className="section-shell max-w-5xl relative z-10">
         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="panel-card rounded-[3rem] p-10 md:p-20 text-center border border-[#d5b16a]/10 shadow-[0_0_60px_rgba(59,130,246,0.1)] relative overflow-hidden"
         >
             {/* Glow Behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>

             {/* Decorative Corner Runes */}
             <div className="absolute top-12 left-12 opacity-30 text-blue-500">
                <Code size={40} className="drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
             </div>
             <div className="absolute bottom-12 right-12 opacity-30 text-blue-500">
                <Shield size={40} className="drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
             </div>

             {/* Central Icon */}
             <div className="relative inline-flex items-center justify-center w-24 h-24 bg-slate-800 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-12 text-yellow-500 mx-auto z-10 border border-white/10">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-yellow-500/30 rounded-full"
                ></motion.div>
                <Hammer size={40} className="fill-yellow-600/50 relative z-10 drop-shadow-[0_0_10px_gold]" />
                <div className="absolute -right-2 -top-2 bg-blue-600 text-white p-2 rounded-full shadow-lg border border-white/20">
                    <Zap size={16} fill="currentColor" />
                </div>
             </div>

             <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.5em] mb-10 flex items-center justify-center gap-4">
                <span className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500"></span>
                Origin Code
                <span className="w-8 h-px bg-gradient-to-l from-transparent to-blue-500"></span>
             </h2>

             <div className="relative mb-16">
                 <span className="absolute -top-10 -left-4 text-8xl text-white/5 font-serif leading-none">"</span>
                 <p className="text-2xl md:text-5xl font-['Cinzel'] font-medium leading-tight text-white relative z-10 drop-shadow-lg">
                    {ORIGIN_STORY}
                 </p>
                 <span className="absolute -bottom-16 -right-4 text-8xl text-white/5 font-serif leading-none transform rotate-180">"</span>
             </div>

             {/* Stats Bar - Dark Pill */}
             <div className="inline-flex flex-wrap justify-center gap-6 md:gap-12 bg-black/40 px-8 py-4 rounded-full shadow-lg border border-white/5 mx-auto backdrop-blur-md">
                 <StatPill label="Founded" value="2021" />
                 <div className="w-px h-10 bg-white/10 hidden md:block"></div>
                 <StatPill label="Source" value="Hammer Hacks" />
                 <div className="w-px h-10 bg-white/10 hidden md:block"></div>
                 <StatPill label="Base" value="Hamilton" />
             </div>
         </motion.div>
      </div>
    </section>
  );
};

const StatPill = ({ label, value }: { label: string, value: string }) => (
    <div className="text-center">
        <div className="text-[10px] text-blue-400 uppercase tracking-widest mb-1 font-bold">{label}</div>
        <div className="text-xl font-['Cinzel'] font-bold text-white glow-text">{value}</div>
    </div>
);

export default Origin;