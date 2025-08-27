import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const ShopSection = ({ t }) => {
  const products = [
    { id: 1, name: t('shop.product1'), price: "120 MAD", image: "https://www.ultrapremiummaroc.ma/wp-content/uploads/2023/05/LG1201-new-1-500x500.webp" },
    { id: 2, name: t('shop.product2'), price: "85 MAD", image: "https://animalux.ma/cdn/shop/files/WhatsAppImage2024-05-07at8.26.12PM_1a3dc834-0aba-4ea1-b6fc-03cd7be901b1_grande.jpg?v=1715158778" },
    { id: 3, name: t('shop.product3'), price: "200 MAD", image: "https://griffedamour.com/cdn/shop/files/cage-de-transport-pour-chaton-4.webp?v=1751620781&width=1445" },
    { id: 4, name: t('shop.product4'), price: "45 MAD", image: "https://cdn.youcan.shop/stores/6454b8d8f2276609289d331b8d3c212e/products/ioepr8kI37cdpSDkojW0AfcvkhcgQ0eImebd6u11.webp" },
  ];

  return (
    <section id="shop" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-pet-blue"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('shop.title')}
        </motion.h2>
        
        <motion.p 
          className="text-lg text-center mb-12 text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t('shop.description')}
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-pet-blue font-bold mb-4">{product.price}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-pet-blue hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                >
                  <ShoppingCartIcon className="w-5 h-5" />
                  {t('shop.buyButton')}
                </motion.button>
              </div>
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
            className="inline-block bg-pet-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg"
          >
            {t('shop.visitShop')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopSection;