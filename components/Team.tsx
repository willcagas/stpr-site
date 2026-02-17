import React, { useState } from 'react';
import { RANGERS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Ranger } from '../types';
import { Sparkles, ArrowRight, Activity, Zap, X, ExternalLink } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="relative overflow-hidden">

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

      <div className="section-shell max-w-[1600px] relative z-10">

        {/* Morphin Grid */}
        <MorphinGrid />

        <div className="mb-32 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-yellow-400 text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-sm backdrop-blur-sm"
          >
            <Sparkles size={14} /> The Squad
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-['Cinzel'] font-bold text-white tracking-[0.09em] uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] relative inline-block">
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
    if (cls.includes('purple')) return '#a855f7';
    if (cls.includes('cyan')) return '#67e8f9';
    if (cls.includes('gray-800')) return '#1f2937';
    if (cls.includes('gray-400')) return '#9ca3af';
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

const MorphinGrid: React.FC = () => {
  const [selectedRanger, setSelectedRanger] = useState<Ranger | null>(null);
  const [isPaused, setIsPaused] = useState(false);

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

  return (
    <>
      <div className="mb-32">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-blue-400 text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-sm backdrop-blur-sm"
          >
            <Zap size={14} /> Power Source
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-['Cinzel'] font-bold text-white tracking-[0.08em] uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] mb-4">
            The Morphin Grid
          </h2>
          <p className="text-slate-400 font-['Manrope'] tracking-[0.2em] uppercase text-sm">
            Energy Network • Active Rangers Online
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-4">
          {/* Ranger Nodes arranged in circle - with rotation */}
          <motion.div
            className="relative aspect-square w-full max-w-2xl mx-auto"
            style={{ zIndex: 2 }}
            animate={{ rotate: isPaused ? undefined : 360 }}
            transition={{
              duration: 120,
              repeat: isPaused ? 0 : Infinity,
              ease: "linear"
            }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => !selectedRanger && setIsPaused(false)}
          >
            {/* Central Energy Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 z-0">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-yellow-400/30 rounded-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_gold]"></div>
              </motion.div>
            </div>

            {/* Grid Connection Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              {RANGERS.map((_, index) => {
                const centerX = 50;
                const centerY = 50;
                const angle = (index / RANGERS.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 40;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);

                return (
                  <motion.line
                    key={`line-${index}`}
                    x1={`${centerX}%`}
                    y1={`${centerY}%`}
                    x2={`${x}%`}
                    y2={`${y}%`}
                    stroke="url(#gridGradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                );
              })}
            </svg>

            {RANGERS.map((ranger, index) => {
              const angle = (index / RANGERS.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 42; // percentage
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              const color = getColorHex(ranger.color);

              return (
                <motion.button
                  key={ranger.id}
                  onClick={() => {
                    setSelectedRanger(ranger);
                    setIsPaused(true);
                  }}
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    default: { delay: index * 0.1, type: "spring" },
                    rotate: { duration: 120, repeat: Infinity, ease: "linear" }
                  }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  animate={{
                    rotate: isPaused ? 0 : -360
                  }}
                  className="absolute group cursor-pointer"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    x: "-50%",
                    y: "-50%"
                  }}
                >
                  {/* Energy Pulse Ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="absolute inset-0 rounded-full border-2"
                    style={{
                      borderColor: color,
                      boxShadow: `0 0 20px ${color}80`
                    }}
                  />

                  {/* Ranger Node */}
                  <div
                    className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-4 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-white"
                    style={{
                      borderColor: color,
                      boxShadow: `0 0 30px ${color}60, inset 0 0 20px ${color}40`
                    }}
                  >
                    <img
                      src={ranger.image}
                      alt={ranger.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />

                    {/* Energy Overlay */}
                    <div
                      className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300 mix-blend-overlay"
                      style={{
                        background: `radial-gradient(circle, ${color}80, transparent)`
                      }}
                    />

                    {/* Active Indicator */}
                    <motion.div
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1 right-1 w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: color,
                        boxShadow: `0 0 10px ${color}`
                      }}
                    />
                  </div>

                  {/* Name Tag */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
                  >
                    <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                      <p className="text-white text-sm font-['Rajdhani'] font-bold uppercase tracking-wider">
                        {ranger.name}
                      </p>
                      <div
                        className="h-0.5 mt-1 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  </motion.div>

                  {/* Power Level Indicator */}
                  {ranger.website !== '#' && (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-green-500 border-2 border-black shadow-lg flex items-center justify-center"
                    >
                      <Zap size={12} className="text-white fill-white" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Grid Status */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"
                />
                <span className="text-green-400 text-sm font-bold uppercase tracking-wider">
                  Grid Online
                </span>
              </div>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 text-sm font-mono">
                {RANGERS.filter(r => r.website !== '#').length}/{RANGERS.length} Rangers Active
              </span>
            </div>
          </motion.div>
        </div>
      </div >

      {/* Ranger Info Modal */}
      <AnimatePresence>
        {
          selectedRanger && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedRanger(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-2xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
                style={{
                  boxShadow: `0 0 60px ${getColorHex(selectedRanger.color)}40`
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => {
                    setSelectedRanger(null);
                    setIsPaused(false);
                  }}
                  className="absolute top-6 right-6 z-30 w-12 h-12 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
                >
                  <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Color Accent Bar */}
                <div
                  className="h-2"
                  style={{
                    backgroundColor: getColorHex(selectedRanger.color),
                    boxShadow: `0 0 20px ${getColorHex(selectedRanger.color)}`
                  }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image Section */}
                  <div className="relative aspect-square md:aspect-auto">
                    <img
                      src={selectedRanger.image}
                      alt={selectedRanger.name}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"
                    />

                    {/* Color Badge */}
                    <div
                      className="absolute top-6 left-6 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
                      style={{ backgroundColor: getColorHex(selectedRanger.color) }}
                    >
                      <Zap size={16} className="text-white" />
                      <span className="text-white text-sm font-bold uppercase tracking-wider">
                        {selectedRanger.color.replace('bg-', '').replace('-', ' ')} Ranger
                      </span>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-8 md:p-10 flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-4xl font-['Rajdhani'] font-bold text-white mb-2 uppercase tracking-wide">
                        {selectedRanger.name}
                      </h3>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="h-px w-8"
                          style={{ backgroundColor: getColorHex(selectedRanger.color) }}
                        />
                        <span className="text-sm font-bold uppercase tracking-wider text-slate-400">
                          {selectedRanger.role}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-6 flex-grow">
                      {selectedRanger.bio}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-white font-['Rajdhani'] font-bold text-sm uppercase tracking-wider mb-3 opacity-60">
                        Specializations
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedRanger.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300 uppercase tracking-wide"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Website Button */}
                    {selectedRanger.website !== '#' ? (
                      <a
                        href={selectedRanger.website}
                        target="_blank"
                        rel="noreferrer"
                        className="relative overflow-hidden flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-white font-bold uppercase tracking-widest transition-all duration-300 group/btn border-2"
                        style={{
                          borderColor: getColorHex(selectedRanger.color),
                          boxShadow: `0 0 20px ${getColorHex(selectedRanger.color)}40`
                        }}
                      >
                        <span
                          className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"
                          style={{ backgroundColor: getColorHex(selectedRanger.color) }}
                        />
                        <span className="relative z-10 flex items-center gap-3">
                          Visit Website
                          <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </span>
                      </a>
                    ) : (
                      <div className="w-full py-4 rounded-2xl bg-white/5 border-2 border-white/10 text-slate-600 font-bold uppercase tracking-widest text-center cursor-not-allowed">
                        No Website Available
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        }
      </AnimatePresence >
    </>
  );
};

export default Team;