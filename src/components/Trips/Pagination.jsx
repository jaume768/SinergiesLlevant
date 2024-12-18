import React from 'react';
import './css/Pagination.css';

const Pagination = ({ currentPage, totalPages, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination-nav">
            <ul className="pagination">
                <li
                    className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => currentPage !== 1 && paginate(currentPage - 1)}
                >
                    Anterior
                </li>
                {pageNumbers.map(number => (
                    <li
                        key={number}
                        className={`page-item ${currentPage === number ? 'active' : ''}`}
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </li>
                ))}
                <li
                    className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={() => currentPage !== totalPages && paginate(currentPage + 1)}
                >
                    Siguiente
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;