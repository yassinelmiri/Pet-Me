import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { FaGooglePlay, FaApple } from "react-icons/fa";

const HeroSection = ({ t, currentLanguage, changeLanguage }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background vidéo */}
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

      {/* Contenu principal */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo / Nom */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-pet-blue">Pet</span>
              <span className="text-white">&</span>
              <span className="text-pet-blue">Me</span>
            </h1>
          </div>

          {/* Slogan */}
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('hero.slogan')}
          </motion.h2>

          {/* Boutons Stores */}
          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="https://onelink.to/petandme"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pet-blue hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2"
            >
              <FaGooglePlay className="w-5 h-5" />
              Google Play
            </motion.a>
            
            <motion.a
              href="https://onelink.to/petandme"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pet-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2"
            >
              <FaApple className="w-5 h-5" />
              App Store
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
        </motion.div>
      </div>

      {/* Bouton Traduction Fixe */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => changeLanguage(currentLanguage === 'fr' ? 'ar' : 'fr')}
          className="bg-pet-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        >
          {currentLanguage === 'fr' ? 'العربية' : 'Français'}
        </button>
      </div>

      {/* Flèche scroll */}
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
