import React from "react";

// Asegúrate de que esta ruta sea la correcta para tu archivo SVG o PNG de la Pokébola.
import pokeball from "../../assets/images/pokeball.svg";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <img
        src={pokeball}
        alt="Cargando..."
        className="w-16 h-16 animate-spin"
      />
      <p className="mt-4 text-gray-500">Cargando Pokemones...</p>
    </div>
  );
};

export default Loader;
