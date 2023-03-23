import React, { useState } from 'react';
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';
import 'bootstrap/dist/css/bootstrap.css';

function Page() {
  const totalPages = 10;

  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page) {
    setCurrentPage(page);
    // ... do something with `page`
  }

  return (
    <div className='mt-5'>
      <div>hhhhhhhhhhhhhhhhhhhhhhhhh</div>
      <Pagination
        {...bootstrap5PaginationPreset} // include Bootstrap 5 preset
        total={totalPages}
        current={currentPage}
        onPageChange={page => handlePageChange(page)}
      />
    </div>
    
  );
}

export default Page