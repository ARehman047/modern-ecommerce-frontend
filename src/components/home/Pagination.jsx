import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

const Pagination = ({ products = [], itemsPerPage = 8 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Calculate index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, products.length);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get current page products
  const currentProducts = products.slice(startIndex, endIndex);

  // Reset to page 1 when products change
  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  // Render the products for the current page
  const renderProducts = () => {
    return currentProducts.map((product, index) => (
      <Link
        to={`/products/${product.id}`}
        key={product.id}
        href={product.href}
        className="group relative"
      >
        <div
          key={product.id || index}
          className="mx-2 sm:mx-8 md:mx-14 max-w-80 overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              className="rounded-t-lg object-cover object-center group-hover:opacity-75"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="flex flex-col justify-center items-center p-2">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <div className="m-10">
      {/* Product Grid */}
      <div className="my-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {renderProducts()}
      </div>

      {/* Pagination controls - Centered */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            className="bg-black p-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaLessThan className="text-white" />
          </button>

          <span className="flex items-center px-4 py-2 text-sm font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className="bg-black p-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaGreaterThan className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
