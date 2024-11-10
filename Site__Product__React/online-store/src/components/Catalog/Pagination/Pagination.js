import { useState } from "react";

function Pagination() {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="pagination__section">
      <button onClick={handlePrevPage} className="pagination__section__left" disabled={currentPage === 1}>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.995 2L2.995 7L7.995 12L6.995 14L-0.00500488 7L6.995 0L7.995 2Z" fill="black" />
        </svg>
      </button>
      {[1, 2, 3, 4, 5, 6, '...', 20].map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && handlePageClick(page)}
          className={`pagination__section__link ${currentPage === page ? 'active' : ''}`}
        >
          {page}
        </button>
      ))}

      <button onClick={handleNextPage} className="pagination__section__right" disabled={currentPage === totalPages}>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z" fill="black" />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;