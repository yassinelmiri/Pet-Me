import React from 'react';
import { motion } from 'framer-motion';

const LostPetsSection = ({ t }) => {
  return (
    <section id="lost-pets" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-pet-blue"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('lostPets.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texte + bouton */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-6 text-gray-700">
              {t('lostPets.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pet-blue hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg"
            >
              {t('lostPets.searchButton')}
            </motion.button>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gray-200 h-80 rounded-xl overflow-hidden relative">
              <img 
                src="https://www.woopets.fr/assets/img/008/914/og-image/sort-animaux-perdus.jpg" 
                alt="Lost pets illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LostPetsSection;
