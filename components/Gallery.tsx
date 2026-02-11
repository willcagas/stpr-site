import React from 'react';
import { TRAVEL_PHOTOS } from '../constants';
import { TravelPhoto } from '../types';
import { motion } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="adventures" className="py-40 bg-[#020617] relative overflow-hidden perspective-1000">
      
      {/* Dynamic Background Pattern - Stars */}
      <div className="absolute inset-0 z-0">
          <div className="absolute w-full h-full opacity-20" 
               style={{ 
                   backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
                   backgroundSize: '40px 40px',
                   maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
               }}>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
             <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)] text-blue-400 mb-6 backdrop-blur-md"
             >
                <Globe size={32} className="animate-pulse-slow drop-shadow-[0_0_5px_rgba(59,130,246,1)]" />
             </motion.div>
             
             <h2 className="text-5xl md:text-7xl font-['Rajdhani'] font-bold text-white uppercase tracking-wider mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                Adventure Chronicles
             </h2>
             <p className="text-blue-400 font-['Rajdhani'] tracking-[0.3em] uppercase opacity-80">
                Operation: Germania • Sector 04
             </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            {TRAVEL_PHOTOS.map((photo, i) => (
                <GalleryItem key={photo.id} photo={photo} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
};

const GalleryItem: React.FC<{ photo: TravelPhoto; index: number }> = ({ photo, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 100, rotate: index % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`relative group ${index % 2 === 1 ? 'md:translate-y-32' : ''}`}
        >
            {/* PORTAL FRAME */}
            <div className="absolute -inset-6 border-[2px] border-yellow-500/30 rounded-[3rem] scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 pointer-events-none shadow-[0_0_30px_rgba(234,179,8,0.2)]"></div>
            <div className="absolute -inset-3 border border-blue-500/30 rounded-[2.8rem] scale-95 group-hover:scale-100 transition-all duration-700 pointer-events-none bg-slate-900/50 backdrop-blur-sm -z-10"></div>
            
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black z-10 transform transition-transform duration-700 group-hover:-translate-y-2">
                <img 
                    src={photo.url} 
                    alt={photo.location} 
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-110 brightness-90 group-hover:brightness-110" 
                />
                
                {/* Magical Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Floating Particles inside Frame */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                     <div className="absolute bottom-10 left-10 w-2 h-2 bg-yellow-400 rounded-full blur-[1px] animate-float shadow-[0_0_10px_gold]"></div>
                     <div className="absolute top-10 right-10 w-1 h-1 bg-white rounded-full blur-[1px] animate-float delay-1000 shadow-[0_0_10px_white]"></div>
                </div>

                {/* Content Reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between">
                        <div className="bg-black/40 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-3">
                            <MapPin size={16} className="text-yellow-400" />
                            <span className="text-white text-xs uppercase tracking-[0.2em] font-bold">{photo.location}</span>
                        </div>
                    </div>
                    <h3 className="text-white font-['Rajdhani'] font-bold text-3xl mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                        {photo.description}
                    </h3>
                </div>
            </div>
        </motion.div>
    )
}

export default Gallery;