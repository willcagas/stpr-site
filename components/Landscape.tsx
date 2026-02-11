import React from 'react';
import { motion } from 'framer-motion';

const Landscape: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-100 to-white"></div>

      {/* Animated Sun */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-12 md:right-32 w-24 h-24 md:w-40 md:h-40 bg-yellow-400 rounded-full shadow-[0_0_60px_rgba(250,204,21,0.6)] z-10"
      />

      {/* Clouds */}
      <Cloud top="10%" left="5%" duration={25} delay={0} scale={1} />
      <Cloud top="20%" left="70%" duration={35} delay={5} scale={0.8} />
      <Cloud top="15%" left="40%" duration={45} delay={2} scale={1.2} />

      {/* Mountains Container */}
      <div className="absolute bottom-0 left-0 w-full h-[60vh] z-20 flex items-end">
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
            {/* Distant Mountains (Purple/Blue) */}
            <path fill="#a5b4fc" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
            
            {/* Mid Mountains (Teal) */}
            <path fill="#2dd4bf" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,245.3C672,267,768,277,864,261.3C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
            
            {/* Front Hills (Green) */}
            <path fill="#4ade80" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,277,576,288C672,299,768,277,864,266.7C960,256,1056,256,1152,266.7C1248,277,1344,299,1392,309.3L1440,320V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
        </svg>
      </div>
    </div>
  );
};

const Cloud = ({ top, left, duration, delay, scale }: { top: string, left: string, duration: number, delay: number, scale: number }) => (
    <motion.div 
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: '120vw', opacity: [0, 0.8, 0.8, 0] }}
        transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
        className="absolute bg-white rounded-full opacity-80 blur-md"
        style={{ top, left, width: `${100 * scale}px`, height: `${40 * scale}px` }}
    >
        <div className="absolute -top-6 left-4 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute -top-8 left-10 w-16 h-16 bg-white rounded-full"></div>
    </motion.div>
);

export default Landscape;