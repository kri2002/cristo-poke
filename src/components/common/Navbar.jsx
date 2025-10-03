import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import pokeballLogo from "../../assets/images/pokeball.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pokeballVariants = {
    initial: { rotate: 0 },
    hover: {
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "linear",
      },
    },
  };

  const activeLinkStyle = "text-pokemon-yellow";
  const inactiveLinkStyle = "text-gray-300 hover:text-pokemon-yellow";

  const navLinkClasses = ({ isActive }) =>
    `text-2xl font-pokemon transition-colors duration-300 ${
      isActive ? activeLinkStyle : inactiveLinkStyle
    }`;

  const mobileNavLinkClasses = ({ isActive }) =>
    `block py-3 text-2xl font-pokemon transition-colors duration-300 ${
      isActive ? activeLinkStyle : "text-white hover:text-pokemon-yellow"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-pokemon-blue/90 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <motion.div initial="initial" whileHover="hover">
            <NavLink to="/" className="flex items-center gap-3">
              <motion.img
                src={pokeballLogo}
                alt="Pokéball Logo"
                className="h-8 w-8"
                variants={pokeballVariants}
              />
              <span className="text-2xl font-pokemon text-white hover:text-pokemon-yellow transition-colors">
                Kridexia
              </span>
            </NavLink>
          </motion.div>

          {/* nav desk */}
          <div className="hidden md:flex space-x-8 text">
            <NavLink to="/pokedex" className={navLinkClasses}>
              Pokédex
            </NavLink>
          </div>

          {/* burger menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>

        {/* nav mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden flex flex-col items-center pt-4 mt-4 border-t border-white/20"
            >
              <NavLink
                to="/pokedex"
                className={mobileNavLinkClasses}
                onClick={() => setIsMenuOpen(false)}
              >
                Pokédex
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
