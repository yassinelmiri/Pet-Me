import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = ({ t }) => {
  const testimonials = [
    {
      id: 1,
      name: "Karim B.",
      role: t('testimonials.user1Role'),
      content: t('testimonials.user1Text'),
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-dhEC82mj96gmL3FGGLFi_BXv8fzL7pP0g&s",
      rating: 5
    },
    {
      id: 2,
      name: "Fatima Z.",
      role: t('testimonials.user2Role'),
      content: t('testimonials.user2Text'),
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlt6pTvGbCxFgBqf7XkzX4V_anpLzVyODfZA&s",
      rating: 4
    },
    {
      id: 3,
      name: "Mehdi T.",
      role: t('testimonials.user3Role'),
      content: t('testimonials.user3Text'),
      avatar: "https://static.wixstatic.com/media/696650_1ce021edd9a74cd9aad665e1377c00e8~mv2.jpg/v1/crop/x_16,y_0,w_3911,h_3944/fill/w_280,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/MKR09927-1%20copie.jpg",
      rating: 5
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-pet-blue text-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('testimonials.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="italic">"{testimonial.content}"</p>
            </motion.div>
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
            className="inline-block bg-white text-pet-blue font-bold py-3 px-8 rounded-lg"
          >
            {t('testimonials.addReview')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;