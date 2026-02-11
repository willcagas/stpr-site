import React from 'react';
import { motion } from 'framer-motion';
import Aurora from './Aurora';
import { Sparkles, Zap, Star, Hexagon } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] perspective-1000">
      
      {/* 
        AURORA BACKGROUND - DARK MODE
        Deep Indigo, Glowing Gold, Mystic Violet
      */}
      <div className="absolute inset-0 z-0">
         <Aurora 
            colorStops={['#4338ca', '#fbbf24', '#7c3aed']} 
            speed={0.2} 
            amplitude={1.0}
            blend={1.5}
         />
      </div>

      {/* ANCIENT MAGIC CIRCLES (SVG) - Glowing White/Gold on Dark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none mix-blend-screen opacity-40">
         {/* Outer Ring - Slow Rotate */}
         <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute text-blue-500/30"
         >
            <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="400" cy="400" r="398" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10"/>
                <circle cx="400" cy="400" r="380" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M400 20 L420 50 H380 Z" fill="currentColor" />
                <path d="M400 780 L380 750 H420 Z" fill="currentColor" />
                <path d="M20 400 L50 380 V420 Z" fill="currentColor" />
                <path d="M780 400 L750 420 V380 Z" fill="currentColor" />
            </svg>
         </motion.div>

         {/* Middle Rune Ring - Gold Glow */}
         <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute text-yellow-500/20"
         >
             <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
                <circle cx="300" cy="300" r="290" stroke="currentColor" strokeWidth="2" />
                <rect x="150" y="150" width="300" height="300" stroke="currentColor" strokeWidth="1" transform="rotate(45 300 300)" />
                <rect x="150" y="150" width="300" height="300" stroke="currentColor" strokeWidth="1" />
             </svg>
         </motion.div>

         {/* Inner Geometric Ring - Bright Blue */}
         <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute text-cyan-400/30"
         >
             <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <polygon points="200,10 390,390 10,390" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                <polygon points="200,390 10,10 390,10" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
             </svg>
         </motion.div>
      </div>

      {/* Floating Runes */}
      <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
              <FloatingRune key={i} index={i} />
          ))}
      </div>

      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "circOut" }}
        >
             {/* Mystic Badge - Golden Core */}
             <div className="mx-auto mb-10 w-32 h-32 relative flex items-center justify-center group cursor-pointer">
                 <motion.div 
                    animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-tr from-yellow-500/30 to-purple-600/30 blur-2xl rounded-full"
                 ></motion.div>
                 
                 <div className="relative bg-black/50 backdrop-blur-md p-6 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.3)] border border-yellow-500/30 z-10 group-hover:scale-110 transition-transform duration-500 group-hover:border-yellow-400">
                    <Sparkles className="text-yellow-400 fill-yellow-200 animate-pulse" size={48} />
                 </div>
                 
                 {/* Orbiting Star */}
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full rounded-full"
                 >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-2 h-2 bg-cyan-400 rounded-full blur-[1px] shadow-[0_0_10px_cyan]"></div>
                 </motion.div>
             </div>

             <h1 className="text-7xl md:text-9xl font-bold tracking-widest text-slate-100 mb-6 font-['Rajdhani'] uppercase leading-none drop-shadow-2xl">
                Mystic <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-[length:200%_auto] animate-shine">
                    Force
                    <motion.span 
                        className="absolute -top-4 -right-8 text-cyan-400"
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Zap size={32} fill="currentColor"/>
                    </motion.span>
                </span>
             </h1>
             
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-lg md:text-2xl text-blue-300/80 font-medium tracking-[0.3em] uppercase mb-16 max-w-3xl mx-auto flex items-center justify-center gap-4"
             >
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500"></span>
                The Ancient Code of Hamilton
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500"></span>
             </motion.p>

             {/* Magical Buttons */}
             <div className="flex flex-col md:flex-row justify-center gap-8">
                 <button 
                    onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative px-10 py-5 bg-gradient-to-r from-yellow-600 to-amber-600 text-black rounded-full shadow-[0_0_30px_rgba(234,179,8,0.4)] overflow-hidden hover:shadow-[0_0_50px_rgba(234,179,8,0.6)] hover:-translate-y-1 transition-all duration-500"
                 >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                    
                    <span className="relative flex items-center gap-3 font-['Rajdhani'] font-bold text-xl tracking-widest">
                        <Hexagon size={20} className="fill-black/20" />
                        Summon Rangers
                    </span>
                 </button>
                 
                 <button 
                    onClick={() => document.getElementById('adventures')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-10 py-5 bg-transparent text-slate-200 border border-slate-700 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:border-blue-500 hover:text-white hover:-translate-y-1 transition-all duration-500 font-['Rajdhani'] font-bold text-xl tracking-widest flex items-center gap-3 group"
                 >
                    <Star size={18} className="group-hover:rotate-180 transition-transform duration-500 text-blue-400" />
                    View Chronicles
                 </button>
             </div>
        </motion.div>
      </div>

    </section>
  );
};

const FloatingRune: React.FC<{ index: number }> = ({ index }) => {
    const runes = ["⚡", "★", "⬡", "⚪", "✦", "✧"];
    const randomX = Math.random() * 80 + 10; // 10% to 90%
    const randomDelay = Math.random() * 5;
    const randomDuration = Math.random() * 5 + 5;

    return (
        <motion.div
            initial={{ y: "110vh", x: `${randomX}vw`, opacity: 0, rotate: 0 }}
            animate={{ 
                y: "-10vh", 
                opacity: [0, 0.8, 0], 
                rotate: 360 
            }}
            transition={{ 
                duration: randomDuration, 
                delay: randomDelay, 
                repeat: Infinity, 
                ease: "linear" 
            }}
            className="absolute text-yellow-400/30 font-serif text-2xl blur-[1px] glow-text"
        >
            {runes[index % runes.length]}
        </motion.div>
    );
};

export default Hero;