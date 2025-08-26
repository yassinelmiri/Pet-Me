import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const VeterinariansSection = ({ t }) => {
  return (
    <section id="veterinarians" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-pet-blue"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('veterinarians.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-6 text-gray-700">
              {t('veterinarians.description')}
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-pet-blue">{t('veterinarians.filtersTitle')}</h3>
              <div className="flex flex-wrap gap-3">
                <button className="bg-pet-blue text-white px-4 py-2 rounded-full text-sm">{t('veterinarians.openNow')}</button>
                <button className="bg-white border border-pet-blue text-pet-blue px-4 py-2 rounded-full text-sm">{t('veterinarians.emergency')}</button>
                <button className="bg-white border border-pet-blue text-pet-blue px-4 py-2 rounded-full text-sm">{t('veterinarians.open24h')}</button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold">Clinique Vétérinaire Al Massira</h4>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Ouvert</span>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <MapPinIcon className="w-4 h-4 mr-1" />
                  <span>123 Avenue Hassan II, Casablanca</span>
                </div>
                <div className="flex items-center mt-1 text-sm text-gray-600">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  <span>08:00 - 19:00</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold">Urgences Vétérinaires Casa</h4>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">24/7</span>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <MapPinIcon className="w-4 h-4 mr-1" />
                  <span>45 Rue Mohammed V, Casablanca</span>
                </div>
                <div className="flex items-center mt-1 text-sm text-gray-600">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  <span>24h/24</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-96 bg-gray-300 rounded-xl overflow-hidden"
          >
            {/* Carte Google Maps intégrée */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212655.844736727!2d-7.6824784!3d33.5724033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1646147322578!5m2!1sen!2sma" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Veterinarians Map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VeterinariansSection;