import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/products.json";

export const ProductDetails = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = () => {
      try {
        setLoading(true);
        console.log("Fetching product with ID:", id);

        // Find product in local JSON data
        const foundProduct = productsData.find((p) => p.id === parseInt(id));

        if (foundProduct) {
          console.log("Product found:", foundProduct);
          setProduct(foundProduct);
        } else {
          console.error("Product not found with ID:", id);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleContactForProduct = () => {
    // Navigate to contact page with product info
    navigate("/contact", {
      state: {
        productName: product?.title,
        productId: id,
        inquiryType: "general",
      },
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-red-600">Product not found</div>
      </div>
    );
  }

  const { description, title, image } = product;

  // Use the main product image
  const mainImage =
    image || "https://via.placeholder.com/400x400?text=No+Image";

  return (
    <>
      {product && (
        <div className="bg-white">
          {/* Back Button */}
          <div className="md:hidden mx-auto max-w-2xl px-4 pt-8 sm:px-6 lg:max-w-4xl lg:px-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Products
            </button>
          </div>

          <div className="pt-6">
            {/* Single Image Display */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-4xl lg:px-8">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={mainImage}
                  alt={title}
                  className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-4xl lg:px-8 lg:pt-16">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                  {title}
                </h1>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
                    {description}
                  </h3>
                </div>

                {/* Contact button */}
                <div className="flex justify-center lg:justify-start">
                  <button
                    type="button"
                    onClick={handleContactForProduct}
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Contact Us About This Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
