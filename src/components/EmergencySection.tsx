import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/outline';

const EmergencySection = ({ t }) => {
  return (
    <section id="emergency" className="py-20 px-4 bg-pet-blue text-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('emergency.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-6">
              {t('emergency.description')}
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{t('emergency.numbersTitle')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5" />
                  <span>{t('emergency.vetEmergency')}: <strong>05 22 22 22 22</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5" />
                  <span>{t('emergency.animalRescue')}: <strong>05 33 33 33 33</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5" />
                  <span>{t('emergency.animalProtection')}: <strong>05 44 44 44 44</strong></span>
                </li>
              </ul>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pet-blue hover:bg-gray-100 font-bold py-3 px-6 rounded-lg"
            >
              {t('emergency.alertButton')}
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 p-8 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-4">{t('emergency.firstAidTitle')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-white text-pet-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
                <span>{t('emergency.firstAid1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-pet-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
                <span>{t('emergency.firstAid2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-pet-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
                <span>{t('emergency.firstAid3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white text-pet-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">4</span>
                <span>{t('emergency.firstAid4')}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;