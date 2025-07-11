import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const ContactUsPage = () => {
  const location = useLocation();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    // Check if user came from product page
    if (location.state?.productName) {
      const { productName, productId, isOutOfStock, inquiryType } =
        location.state;

      let subject = "";
      let message = "";

      if (inquiryType === "availability" && isOutOfStock) {
        subject = `Product Availability Inquiry - ${productName}`;
        message = `Hi,

I'm interested in the product "${productName}" (ID: ${productId}), but I noticed it's currently out of stock.

Could you please let me know:
- When will this product be available again?
- Can I place a pre-order or be notified when it's back in stock?
- Are there any similar alternatives currently available?

Thank you for your assistance.`;
      } else {
        subject = `Inquiry about ${productName}`;
        message = `Hi, I'm interested in the product "${productName}" (ID: ${productId}). Please provide more information.`;
      }

      setContactForm((prev) => ({
        ...prev,
        subject,
        message,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // For now, just show success message without actually sending to backend
      console.log("Contact form submitted:", contactForm);

      toast.success("🦄 Message sent successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      setContactForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      console.error("Error sending contact form:", error);
    }
  };
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d850.252945536782!2d74.28893438608021!3d31.523836345944073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1750331532269!5m2!1sen!2s"
              style={{ filter: "opacity(0.6)" }}
            ></iframe>

            <div className="bg-white relative mt-80 flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  128 Jahan Zab Block, Allama Iqbal Town, Lahore, Pakistan
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:finesew12@gmail.com"
                  className="text-indigo-500 leading-relaxed"
                >
                  finesew12@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+92 300-9446697</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>

            {/* Availability Inquiry Banner */}
            {location.state?.inquiryType === "availability" && (
              <div className="mb-4 p-3 bg-orange-100 border-l-4 border-orange-500 rounded">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-orange-500 text-lg">⚠️</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-orange-700 font-medium">
                      Product Availability Inquiry
                    </p>
                    <p className="text-xs text-orange-600">
                      You're inquiring about an out-of-stock product. We'll help
                      you with availability information.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <p className="leading-relaxed mb-5 text-gray-600">
              Feel free to reach out to us for any inquiries
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  value={contactForm.name}
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  value={contactForm.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone
                </label>
                <input
                  value={contactForm.phone}
                  onChange={handleChange}
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="subject"
                  className="leading-7 text-sm text-gray-600"
                >
                  Subject
                </label>
                <input
                  value={contactForm.subject}
                  onChange={handleChange}
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  value={contactForm.message}
                  onChange={handleChange}
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 w-full focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send Message
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Your inquiries and feedback are valued here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
