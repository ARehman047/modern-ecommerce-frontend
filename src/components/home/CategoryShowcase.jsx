import React from "react";
import { Link } from "react-router-dom";
import productsData from "../../data/products.json";

const CategoryShowcase = () => {
  // Get category face images from products.json
  const mobileCategoryImage = productsData.find(
    (product) => product.category === "80200-category"
  );
  const laptopCategoryImage = productsData.find(
    (product) => product.category === "80800-category"
  );
  const speakerCategoryImage = productsData.find(
    (product) => product.category === "81200-category"
  );

  const categories = [
    {
      name: "Parts for Union Special 80200 Hamming Bag Sewing Machines",
      key: "80200",
      image: mobileCategoryImage?.image || "/placeholder-mobile.jpg",
    },
    {
      name: "Parts for Union Special 80800 Bag Closing Machines",
      key: "80800",
      image: laptopCategoryImage?.image || "/placeholder-laptop.jpg",
    },
    {
      name: "Parts for Union Special 81200 Harrackle Bag Sewing & Carpet Overedging Machines",
      key: "81200",
      image: speakerCategoryImage?.image || "/placeholder-speakers.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Union Special Machine Parts
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our carefully curated selection of parts for Union Special
          sewing machines
        </p>
      </div>{" "}
      {/* Categories in a responsive row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 px-4 md:px-8">
        {categories.map((category) => (
          <div
            key={category.key}
            className="group text-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer"
          >
            {/* Category Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl mb-6 bg-gray-100 transition-shadow duration-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 md:h-72 lg:h-80 object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>{" "}
            {/* Category Name */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-indigo-600 transition-colors duration-300 ">
              {category.name}
            </h2>
            {/* Click to see all button */}
            <Link
              to={`/products?category=${category.key}`}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 group-hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl w-full md:w-auto transform hover:-translate-y-1"
            >
              Click to see all
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryShowcase;
