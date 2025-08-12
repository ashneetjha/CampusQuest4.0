import React from 'react';
import { motion } from 'framer-motion';

// Import your components
import Navigation from './components/Navigation'; 
import Header from './components/Header/Header';
import About from './components/About/About';
import Timeline from './components/Timeline/Timeline';
import PrizePool from './components/PrizePool/PrizePool';
import Sponsors from './components/Sponsors/Sponsors';
import PastEvents from './components/PastEvents/PastEvents';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'; // Import the new component
import './styles/global.css';

// Animation variants for Framer Motion
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <motion.div 
        id="header"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Header />
      </motion.div>
      
      <motion.div 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <About />
      </motion.div>
      
      <motion.div 
        id="timeline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Timeline />
      </motion.div>
      
      <motion.div 
        id="prizepool"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <PrizePool />
      </motion.div>
      
      <motion.div 
        id="sponsors"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Sponsors />
      </motion.div>
      
      <img 
        src="/BrownStrip.png" 
        alt="Decorative border" 
        className="w-full h-auto block" 
      />
      
      <motion.div 
        id="pastevents"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <PastEvents />
      </motion.div>
      
      <motion.div 
        id="footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Footer />
      </motion.div>

      {/* The new Scroll to Top button is added here */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
