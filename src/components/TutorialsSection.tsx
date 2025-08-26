import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from '@heroicons/react/24/outline';

const TutorialsSection = ({ t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const tutorials = [
    {
      id: 1,
      title: t('tutorials.tutorial1'),
      description: t('tutorials.tutorial1Desc'),
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: t('tutorials.tutorial2'),
      description: t('tutorials.tutorial2Desc'),
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: t('tutorials.tutorial3'),
      description: t('tutorials.tutorial3Desc'),
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: t('tutorials.tutorial4'),
      description: t('tutorials.tutorial4Desc'),
      videoId: "dQw4w9WgXcQ"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === tutorials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? tutorials.length - 1 : prev - 1));
  };

  return (
    <section id="tutorials" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-pet-blue"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('tutorials.title')}
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {tutorials.map((tutorial, index) => (
                <div key={tutorial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-56 bg-gray-200">
                      <img 
                        src={`https://img.youtube.com/vi/${tutorial.videoId}/maxresdefault.jpg`} 
                        alt={tutorial.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <motion.a
                          href={`https://www.youtube.com/watch?v=${tutorial.videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full"
                        >
                          <PlayIcon className="w-8 h-8" />
                        </motion.a>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                      <p className="text-gray-700">{tutorial.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeftIcon className="w-6 h-6 text-pet-blue" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronRightIcon className="w-6 h-6 text-pet-blue" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6">
          {tutorials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full mx-1 ${currentSlide === index ? 'bg-pet-blue' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-pet-blue hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg"
          >
            {t('tutorials.moreTutorials')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TutorialsSection;