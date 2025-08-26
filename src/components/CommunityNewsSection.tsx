import React from 'react';
import { motion } from 'framer-motion';

const CommunityNewsSection = ({ t }) => {
  const news = [
    {
      id: 1,
      title: t('news.news1'),
      date: "15 Mars 2023",
      excerpt: t('news.news1Excerpt'),
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 2,
      title: t('news.news2'),
      date: "28 Février 2023",
      excerpt: t('news.news2Excerpt'),
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 3,
      title: t('news.news3'),
      date: "10 Février 2023",
      excerpt: t('news.news3Excerpt'),
      image: "https://via.placeholder.com/400x250"
    },
  ];

  return (
    <section id="news" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-pet-blue"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('news.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article 
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-sm text-pet-blue font-medium">{item.date}</span>
                <h3 className="text-xl font-semibold my-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.excerpt}</p>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-pet-blue font-medium flex items-center gap-1"
                >
                  {t('news.readMore')} →
                </motion.a>
              </div>
            </motion.article>
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
            className="inline-block bg-pet-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg"
          >
            {t('news.allNews')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityNewsSection;