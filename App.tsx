import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Origin from './components/Origin';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-100 font-sans selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Team />
        <Gallery />
        <Origin />
      </main>
      <Footer />
    </div>
  );
}

export default App;