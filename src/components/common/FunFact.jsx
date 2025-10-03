import React from 'react';
import { motion } from 'framer-motion';

const FunFact = ({ fact }) => {
  return (
    // Esta sección ahora ocupará todo el ancho y tendrá un fondo semitransparente
    <div className="w-full bg-gray-900/70 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center px-4"
      >
        <h3 className="text-3xl font-bold text-yellow-400 mb-4">¿Sabías que...?</h3>
        <p className="text-white text-2xl max-w-3xl mx-auto">{fact}</p>
      </motion.div>
    </div>
  );
};

export default FunFact;