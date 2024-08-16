import React from 'react';
import { Button } from 'react-daisyui';

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Paginate = ({ totalPages, currentPage, onPageChange }: Props) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination-container">
      {/* Previous Button */}
      <Button
        className="join-item"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </Button>

      {/* Page Buttons */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <Button
            key={page}
            className="join-item"
            active={page === currentPage ? true : false}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        )
      )}

      {/* Next Button */}
      <Button
        className="join-item"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};
