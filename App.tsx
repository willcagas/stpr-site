import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Origin from './components/Origin';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="site-shell min-h-screen text-slate-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Origin />
        <Team />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;