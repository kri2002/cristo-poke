import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchRandomPokemon } from "../services/pokeapi";
import FeaturedPokemon from "../components/pokemon/FeaturedPokemon";
import Loader from "../components/common/Loader";
import FunFact from "../components/common/FunFact";
import { funFacts } from "../data/funFacts";

// imágenes de los Pokémon
import pikachu from "../assets/images/pokemon/pikachu.png";
import bulbasaur from "../assets/images/pokemon/bulbasaur.png";
import charizard from "../assets/images/pokemon/charizard.png";
import eevee from "../assets/images/pokemon/Eevee.png";
import geodude from "../assets/images/pokemon/geodude.png";
import mewto from "../assets/images/pokemon/mewto.png";

const HomePage = () => {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [funFact, setFunFact] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const pokemonData = await fetchRandomPokemon();
        setRandomPokemon(pokemonData);

        // dato curioso
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        setFunFact(funFacts[randomIndex]);
      } catch (error) {
        console.error("Error al cargar los datos en HomePage:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-home-bg p-4 overflow-x-hidden">
        {/* --- Imágenes de la Izquierda --- */}
        <motion.img
          src={pikachu}
          alt="Pikachu"
          className="absolute bottom-4 -left-20 md:-left-24 w-64 h-64 md:w-60 md:h-60 z-0"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 40, delay: 0.8 }}
        />
        <motion.img
          src={bulbasaur}
          alt="Bulbasaur"
          className="absolute top-1/3 -left-16 md:-left-20 w-48 h-48 md:w-52 md:h-52 z-0"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 40, delay: 0.6 }}
        />
        <motion.img
          src={geodude}
          alt="Geodude"
          className="absolute top-8 -left-12 md:-left-16 w-40 h-40 md:w-48 md:h-48 z-0"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
        />

        {/* --- Imágenes de la Derecha --- */}
        <motion.img
          src={charizard}
          alt="Charizard"
          className="absolute top-4 -right-24 md:-right-32 w-72 h-72 md:w-60 md:h-60 scale-x-[-1] z-0"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 40, delay: 0.4 }}
        />
        <motion.img
          src={eevee}
          alt="Eevee"
          className="absolute top-1/3 -right-16 md:-right-20 w-48 h-48 md:w-52 md:h-52 scale-x-[-1] z-0"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 40, delay: 0.6 }}
        />
        <motion.img
          src={mewto}
          alt="Mewto"
          className="absolute bottom-8 -right-20 md:-right-24 w-64 h-64 md:w-48 md:h-48 scale-x-[-1] z-0"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 40, delay: 0.8 }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-5xl md:text-6xl mb-4 tracking-widest font-pokemon text-pokemon-yellow"
            style={{
              textShadow: `
              -4px 4px 0 #2A75BB, 2px -2px 0 #2A75BB,
              -4px 4px 0 #2A75BB, 2px 2px 0 #2A75BB,
              3px 3px 6px rgba(0,0,0,0.7)
            `,
            }}
          >
            Bienvenido al Mundo Pokémon
          </motion.h1>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-xl text-pokemon-blue mb-8"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            Tu aventura en la Pokédex comienza aquí.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 1.6,
            }}
          >
            <Link
              to="/pokedex"
              className="bg-pokemon-blue text-white font-bold rounded-full shadow-poke px-8 py-4 hover:shadow-glow-electric hover:scale-105 transition-all duration-300 transform"
            >
              ¡Explora la Pokédex!
            </Link>
          </motion.div>
        </div>
      </div>
      {/* Pokémon del Día */}
      <div className="w-full bg-pokemon-blue py-16">
        <motion.div
          className="container mx-auto text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {loading ? (
            <Loader />
          ) : (
            randomPokemon && <FeaturedPokemon pokemon={randomPokemon} />
          )}
        </motion.div>
      </div>

      {/* Dato Curioso */}
      <FunFact fact={funFact} />
    </>
  );
};

export default HomePage;
