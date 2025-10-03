import React from "react";
import { motion } from "framer-motion";
import { getPokemonCryUrl } from "../../services/pokeapi";
import { GiSpeaker } from "react-icons/gi";

const FeaturedPokemon = ({ pokemon }) => {
  if (!pokemon) return null;

  const { name, sprites, types, stats, id } = pokemon;

  const handlePlayCry = () => {
    const audio = new Audio(getPokemonCryUrl(id));
    audio.play();
  };

  const statVariants = {
    hidden: { width: 0 },
    visible: (custom) => ({
      width: `${(custom.base_stat / 255) * 100}%`,
      transition: {
        duration: 1,
        delay: 0.5 + custom.index * 0.15,
      },
    }),
  };

  return (
    <>
      <h3
        className="text-5xl text-gray-800 mb-28 tracking-widest font-pokemon text-pokemon-yellow"
        style={{
          textShadow: `
              -2px -2px 0 #2A75BB, 2px -2px 0 #2A75BB,
              -2px 2px 0 #2A75BB, 2px 2px 0 #2A75BB,
              3px 3px 6px rgba(0,0,0,0.7)
            `,
        }}
      >
        Pokémon del Día
      </h3>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="min-h-full min-w-full flex justify-center items-center p-6"
      >
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 w-full max-w-screen">
          {/* Sección izquierda: Imagen, nombre, grito y tipos */}

          <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center justify-center p-4 w-full md:w-2/4 md:border-r border-gray-400/50">
            <img
              src={
                sprites.other["official-artwork"].front_default ||
                sprites.front_default
              }
              alt={name}
              className="w-48 h-48 mx-auto"
            />
            <h4
              className="text-3xl font-bold capitalize mt-2 mb-4 text-gray-900 tracking-widest font-pokemon text-pokemon-yellow"
              style={{
                textShadow: `
              -2px -2px 0 #2A75BB, 2px -2px 0 #2A75BB,
              -2px 2px 0 #2A75BB, 2px 2px 0 #2A75BB,
              3px 3px 6px rgba(0,0,0,0.7)
            `,
              }}
            >
              {name}
            </h4>
            <button
              onClick={handlePlayCry}
              className="absolute bottom-4 right-4 text-white hover:text-pokemon-yellow transition-colors"
            >
              <GiSpeaker className="h-14 w-14" />
            </button>
            <div className="flex justify-center mt-2">
              {types.map((typeInfo) => (
                <span
                  key={typeInfo.type.name}
                  className="text-sm font-semibold mr-2 px-3 py-1 rounded-full bg-gray-800 text-white"
                >
                  {typeInfo.type.name}
                </span>
              ))}
            </div>
          </div>

          {/* Sección derecha: Estadísticas Base */}
          <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center w-full md:w-2/4 p-4 md:pl-8">
            <h3
              className="text-2xl font-bold mb-2 tracking-widest font-pokemon text-pokemon-yellow"
              style={{
                textShadow: `
              -2px -2px 0 #2A75BB, 2px -2px 0 #2A75BB,
              -2px 2px 0 #2A75BB, 2px 2px 0 #2A75BB,
              3px 3px 6px rgba(0,0,0,0.7)
            `,
              }}
            >
              Estadísticas Base
            </h3>
            <div className="mt-4 w-full h-full flex flex-col justify-center">
              {stats.map((stat, index) => (
                <div
                  key={stat.stat.name}
                  className="flex items-center justify-between mb-2"
                >
                  <span className="w-1/3 text-sm capitalize text-left text-pokemon-yellow font-bold">
                    {stat.stat.name}
                  </span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2.5 mx-2">
                    <motion.div
                      className="bg-blue-600 h-2.5 rounded-full"
                      variants={statVariants}
                      initial="hidden"
                      whileInView="visible"
                      custom={{ base_stat: stat.base_stat, index: index }}
                    ></motion.div>
                  </div>
                  <span
                    className="ml-2 text-sm text-righttracking-widest font-pokemon text-pokemon-yellow"
                    style={{
                      textShadow: `
              -2px -2px 0 #2A75BB, 2px -2px 0 #2A75BB,
              -2px 2px 0 #2A75BB, 2px 2px 0 #2A75BB,
              3px 3px 6px rgba(0,0,0,0.7)
            `,
                    }}
                  >
                    {stat.base_stat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FeaturedPokemon;
