import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const HeroSection = ({ t, currentLanguage, changeLanguage }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="video-background">
        <iframe 
          src="https://www.youtube.com/embed/-UUIKrSwOE8?autoplay=1&mute=1&loop=1&playlist=-UUIKrSwOE8&controls=0&modestbranding=1&rel=0"
          title="PetAndMe Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-pet-blue">Pet</span>
              <span className="text-white">&</span>
              <span className="text-pet-blue">Me</span>
            </h1>
          </div>

          <motion.h2 
            className="text-2xl md:text-4xl font-semibold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('hero.slogan')}
          </motion.h2>

          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pet-blue hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.523 15.341a1 1 0 01-1.4.155c-.345-.28-.775-.362-1.188-.248a7.9 7.9 0 01-2.94.545 7.9 7.9 0 01-2.94-.545c-.413-.114-.843-.032-1.188.248a1 1 0 01-1.262-1.523c.63-.515 1.438-.7 2.188-.558a9.9 9.9 0 003.202.545 9.9 9.9 0 003.202-.545c.75-.142 1.558.043 2.188.558a1 1 0 01.155 1.4zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/>
              </svg>
              {t('hero.android')}
            </motion.a>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pet-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.5 12.572a1 1 0 01.995.917c.01.11.005.222-.015.333a7.5 7.5 0 01-5.48 5.48 1 1 0 01-1.253-1.253 5.5 5.5 0 004.022-4.022 1 1 0 01.731-.455zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/>
              </svg>
              {t('hero.ios')}
            </motion.a>
            
            <motion.a
              href="#discover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white"
            >
              {t('hero.discover')}
            </motion.a>
          </motion.div>

          <div className="absolute top-6 right-6">
            <button 
              onClick={() => changeLanguage(currentLanguage === 'fr' ? 'ar' : 'fr')}
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2"
            >
              {currentLanguage === 'fr' ? '🇫🇷' : '🇲🇦'} 
              {currentLanguage === 'fr' ? 'Français' : 'العربية'}
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDownIcon className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
};

export default HeroSection;