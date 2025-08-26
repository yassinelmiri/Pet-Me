import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import HeroSection from './components/HeroSection';
import LostPetsSection from './components/LostPetsSection';
import EmergencySection from './components/EmergencySection';
import VeterinariansSection from './components/VeterinariansSection';
import ShopSection from './components/ShopSection';
import DonationSection from './components/DonationSection';
import TutorialsSection from './components/TutorialsSection';
import CommunityNewsSection from './components/CommunityNewsSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    document.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div className="App">
      <HeroSection t={t} currentLanguage={currentLanguage} changeLanguage={changeLanguage} />
      <LostPetsSection t={t} />
      <EmergencySection t={t} />
      <VeterinariansSection t={t} />
      <ShopSection t={t} />
      <DonationSection t={t} />
      <TutorialsSection t={t} />
      <CommunityNewsSection t={t} />
      <FAQSection t={t} />
      <TestimonialsSection t={t} />
      <ContactSection t={t} />
      <FooterSection t={t} currentLanguage={currentLanguage} changeLanguage={changeLanguage} />
    </div>
  );
}

export default App;