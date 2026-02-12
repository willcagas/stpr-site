import React, { useState } from 'react';
import { ADVENTURES } from '../constants';
import { Adventure } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Globe, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedAdventure, setSelectedAdventure] = useState<Adventure | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openAdventure = (adventure: Adventure) => {
    setSelectedAdventure(adventure);
    setCurrentPhotoIndex(0);
  };

  const closeAdventure = () => {
    setSelectedAdventure(null);
    setCurrentPhotoIndex(0);
  };

  const nextPhoto = () => {
    if (selectedAdventure) {
      setCurrentPhotoIndex((prev) => 
        prev === selectedAdventure.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevPhoto = () => {
    if (selectedAdventure) {
      setCurrentPhotoIndex((prev) => 
        prev === 0 ? selectedAdventure.photos.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
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
                  Mission Logs • Memory Archives
               </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {ADVENTURES.map((adventure, i) => (
                  <AdventureCard 
                    key={adventure.id} 
                    adventure={adventure} 
                    index={i}
                    onClick={() => openAdventure(adventure)}
                  />
              ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedAdventure && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={closeAdventure}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeAdventure}
                className="absolute top-6 right-6 z-30 w-12 h-12 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Photo Section */}
                <div className="relative bg-black flex items-center justify-center min-h-[400px] lg:min-h-full">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentPhotoIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      src={selectedAdventure.photos[currentPhotoIndex].url}
                      alt={selectedAdventure.photos[currentPhotoIndex].caption}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 w-12 h-12 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 w-12 h-12 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Photo Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="text-white text-sm font-medium">
                      {currentPhotoIndex + 1} / {selectedAdventure.photos.length}
                    </span>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-8 lg:p-12 overflow-y-auto max-h-[50vh] lg:max-h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${selectedAdventure.color} shadow-lg`}></div>
                    <span className={`text-sm uppercase tracking-wider font-bold ${selectedAdventure.color.replace('bg-', 'text-')}`}>
                      Mission Complete
                    </span>
                  </div>

                  <h3 className="text-4xl font-['Rajdhani'] font-bold text-white mb-4">
                    {selectedAdventure.location}
                  </h3>

                  <div className="flex items-center gap-6 mb-6 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span className="text-sm">{selectedAdventure.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span className="text-sm">{selectedAdventure.photos.length} Photos</span>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-8">
                    {selectedAdventure.description}
                  </p>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentPhotoIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-slate-400 italic mb-8 min-h-[24px]"
                    >
                      {selectedAdventure.photos[currentPhotoIndex].caption}
                    </motion.p>
                  </AnimatePresence>

                  <div className="border-t border-white/10 pt-6">
                    <h4 className="text-white font-['Rajdhani'] font-bold text-lg mb-4 uppercase tracking-wider">
                      Mission Highlights
                    </h4>
                    <ul className="space-y-3">
                      {selectedAdventure.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${selectedAdventure.color} flex-shrink-0`}></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="border-t border-white/10 pt-6 mt-8">
                    <div className="grid grid-cols-4 gap-3">
                      {selectedAdventure.photos.map((photo, idx) => (
                        <button
                          key={photo.id}
                          onClick={() => setCurrentPhotoIndex(idx)}
                          className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            idx === currentPhotoIndex 
                              ? `${selectedAdventure.color.replace('bg-', 'border-')} scale-105` 
                              : 'border-white/10 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img 
                            src={photo.url} 
                            alt={photo.caption}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const AdventureCard: React.FC<{ 
  adventure: Adventure; 
  index: number;
  onClick: () => void;
}> = ({ adventure, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onClick={onClick}
      className={`relative group cursor-pointer ${index % 2 === 1 ? 'md:translate-y-32' : ''}`}
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-6 ${adventure.color} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 rounded-[3rem]`}></div>
      
      {/* PORTAL FRAME */}
      <div className="absolute -inset-6 border-[2px] border-yellow-500/30 rounded-[3rem] scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 pointer-events-none shadow-[0_0_30px_rgba(234,179,8,0.2)]"></div>
      <div className="absolute -inset-3 border border-blue-500/30 rounded-[2.8rem] scale-95 group-hover:scale-100 transition-all duration-700 pointer-events-none bg-slate-900/50 backdrop-blur-sm -z-10"></div>
      
      <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black z-10 transform transition-transform duration-700 group-hover:-translate-y-2">
          <img 
              src={adventure.coverImage} 
              alt={adventure.location} 
              className="w-full h-full object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-110 brightness-90 group-hover:brightness-110" 
          />
          
          {/* Magical Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500"></div>
          
          {/* Badge */}
          <div className={`absolute top-6 left-6 ${adventure.color} px-4 py-2 rounded-full flex items-center gap-2 shadow-lg`}>
            <MapPin size={16} className="text-white" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              {adventure.location}
            </span>
          </div>

          {/* Photo Count */}
          <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md px-3 py-2 rounded-full border border-white/20">
            <span className="text-white text-xs font-medium">
              {adventure.photos.length} Photos
            </span>
          </div>
          
          {/* Floating Particles inside Frame */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
               <div className="absolute bottom-10 left-10 w-2 h-2 bg-yellow-400 rounded-full blur-[1px] animate-float shadow-[0_0_10px_gold]"></div>
               <div className="absolute top-10 right-10 w-1 h-1 bg-white rounded-full blur-[1px] animate-float delay-1000 shadow-[0_0_10px_white]"></div>
          </div>

          {/* Content Reveal */}
          <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-2 text-slate-300 text-sm mb-2">
                <Calendar size={16} />
                <span>{adventure.date}</span>
              </div>
              
              <h3 className="text-white font-['Rajdhani'] font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  {adventure.location} Adventure
              </h3>
              
              <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                Click to view memories →
              </p>
          </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
