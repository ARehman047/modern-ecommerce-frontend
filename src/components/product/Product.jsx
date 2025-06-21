import React from "react";
import { Link } from "react-router-dom";

export const Product = ({ currentProducts }) => {
  return (
    <>
      <div className="max-w-2xl sm:py-6 lg:max-w-full lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {currentProducts.map((product) => {
            return (
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                href={product.href}
                className="group relative transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              >
                <div
                  key={product.id}
                  className=" max-w-80 overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      className="rounded-t-lg object-cover object-center"
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
            );
          })}
        </div>
      </div>
      {/* </div > */}
    </>
  );
};
