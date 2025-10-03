import React from "react";

import pokeball from "../../assets/images/pokeball.svg";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center my-6 md:my-10">
      <img
        src={pokeball}
        alt="Cargando..."
        className="w-12 h-12 md:w-16 md:h-16 animate-spin"
      />
      <p className="mt-4 text-sm md:text-base text-white">
        Cargando Pokemones...
      </p>
    </div>
  );
};

export default Loader;
