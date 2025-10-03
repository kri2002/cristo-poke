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
    return null;
  }

  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
      <button
        onClick={handlePrevious}
        disabled={page === 1}
        className="px-6 py-2 bg-pokemon-blue text-pokemon-yellow font-bold rounded-full border-2 border-pokemon-yellow transition-colors hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Anterior
      </button>
      <span className="text-lg font-semibold">
        Página {page} de {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="px-6 py-2 bg-pokemon-blue text-pokemon-yellow font-bold rounded-full border-2 border-pokemon-yellow transition-colors hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;