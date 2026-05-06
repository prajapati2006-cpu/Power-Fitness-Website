import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Facility from './components/sections/Facility';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Timings from './components/sections/Timings';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import Trainers from './components/sections/Trainers';
import Gallery from './components/sections/Gallery';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Location from './components/sections/Location';
import Footer from './components/sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('has-custom-cursor');
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Facility />
            <Stats />
            <About />
            <Timings />
            <Testimonials />
            <Pricing />
            <Trainers />
            <Gallery />
            <FAQ />
            <Contact />
            <Location />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </motion.div>
      )}
    </>
  );
}
