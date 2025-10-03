import React from "react";

import pokeball from "../../assets/images/pokeball.svg";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <img
        src={pokeball}
        alt="Cargando..."
        className="w-16 h-16 animate-spin"
      />
      <p className="mt-4 text-white">Cargando Pokemones...</p>
    </div>
  );
};

export default Loader;
