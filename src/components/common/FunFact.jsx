import React from "react";
import { motion } from "framer-motion";

import mewtwo from "../../assets/images/pokemon/mewto.png";
import bulbasaur from "../../assets/images/pokemon/bulbasaur.png";

const FunFact = ({ fact }) => {
  return (
    <div className="relative w-full bg-gradient-to-br from-slate-900 via-pokemon-blue/50 to-indigo-900 py-12 md:py-20 overflow-hidden border-t-4 border-pokemon-yellow">
      <motion.img
        src={mewtwo}
        alt="mewtwo"
        className="absolute w-48 h-48 z-0 opacity-80 hidden md:block"
        initial={{ x: "0", opacity: 0, rotate: -15 }}
        whileInView={{ x: "600%", opacity: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
      />

      <motion.img
        src={bulbasaur}
        alt="bulbasaur"
        className="absolute w-48 h-48 z-0 opacity-80 hidden md:block"
        initial={{ x: "100%", opacity: 0, rotate: 15 }}
        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
      />

      {/* Contenido principal */}
      <motion.div
        className="relative container mx-auto text-center px-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h3
          className="text-3xl md:text-4xl mb-4 tracking-wider font-pokemon text-pokemon-yellow"
          style={{
            textShadow: `-3px 3px 0 #2A75BB, 2px 2px 0 #2A75BB`,
            filter: `drop-shadow(0 0 10px rgba(255, 203, 5, 0.4))`,
          }}
        >
          ¿Sabías que...?
        </h3>
        <p
          className="text-white text-xl md:text-2xl font-semibold max-w-3xl mx-auto"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
            filter: `drop-shadow(0 0 15px rgba(42, 117, 187, 0.3))`,
          }}
        >
          {fact}
        </p>
      </motion.div>
    </div>
  );
};

export default FunFact;
