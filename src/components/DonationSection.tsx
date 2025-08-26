import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/outline';

const DonationSection = ({ t }) => {
  const organizations = [
    { id: 1, name: t('donation.org1'), description: t('donation.org1Desc') },
    { id: 2, name: t('donation.org2'), description: t('donation.org2Desc') },
    { id: 3, name: t('donation.org3'), description: t('donation.org3Desc') },
  ];

  return (
    <section id="donation" className="py-20 px-4 bg-pet-blue text-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('donation.title')}
        </motion.h2>
        
        <motion.p 
          className="text-lg text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t('donation.description')}
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {organizations.map((org, index) => (
            <motion.div 
              key={org.id}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="font-semibold text-xl mb-3">{org.name}</h3>
              <p className="mb-4">{org.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-pet-blue font-medium py-2 px-4 rounded-lg"
              >
                {t('donation.donateButton')}
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">{t('donation.otherWaysTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div 
              className="p-6 bg-white/5 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="font-medium mb-2">{t('donation.volunteer')}</h4>
              <p className="text-sm opacity-80">{t('donation.volunteerDesc')}</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white/5 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">🏠</div>
              <h4 className="font-medium mb-2">{t('donation.foster')}</h4>
              <p className="text-sm opacity-80">{t('donation.fosterDesc')}</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white/5 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">📢</div>
              <h4 className="font-medium mb-2">{t('donation.share')}</h4>
              <p className="text-sm opacity-80">{t('donation.shareDesc')}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationSection;