import React from 'react';

const Pagination = ({ totalItems, limit, page, setPage }) => {
  const totalPages = Math.ceil(totalItems / limit);

  const handlePrevious = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  if (totalItems <= limit) {
    return null; // Oculta la paginación si no hay suficientes elementos
  }

  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
      <button
        onClick={handlePrevious}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
      >
        Anterior
      </button>
      <span className="text-lg">
        Página {page} de {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;