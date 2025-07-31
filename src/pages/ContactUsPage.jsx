import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

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
      // Format the message for WhatsApp
      const whatsappMessage = `*Contact Form Submission*

*Name:* ${contactForm.name}
*Email:* ${contactForm.email}
*Phone:* ${contactForm.phone || "Not provided"}
*Subject:* ${contactForm.subject}

*Message:*
${contactForm.message}

---
Sent via Fine Sew Website Contact Form`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/923009446697?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      // Clear the form after successful redirect
      setContactForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to open WhatsApp. Please try again.", {
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
      console.error("Error opening WhatsApp:", error);
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (
      !contactForm.name ||
      !contactForm.email ||
      !contactForm.subject ||
      !contactForm.message
    ) {
      toast.error("Please fill in all required fields.", {
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
      return;
    }

    try {
      // Show loading toast
      const loadingToast = toast.loading("Sending email...", {
        position: "top-center",
        autoClose: 5000,
      });

      // EmailJS configuration
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // Check if environment variables are configured
      if (!serviceID || !templateID || !publicKey) {
        toast.error(
          "Email service not configured. Please use WhatsApp instead.",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          }
        );
        return;
      }

      // Template parameters
      const templateParams = {
        from_name: contactForm.name,
        from_email: contactForm.email,
        phone: contactForm.phone || "Not provided",
        subject: contactForm.subject,
        message: contactForm.message,
        to_email: "finesew12@gmail.com",
      };

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Show success message
      toast.success("✅ Email sent successfully!", {
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

      // Clear the form after successful send
      setContactForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error("❌ Failed to send email. Please try WhatsApp instead.", {
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
                  128 Jahanzaib Block, Allama Iqbal Town, Lahore, Pakistan
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
                  PHONE - WHATSAPP
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
              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  className="text-white bg-green-500 border-0 py-2 px-6 w-full focus:outline-none hover:bg-green-600 rounded text-lg flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.508" />
                  </svg>
                  Send via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="text-white bg-blue-500 border-0 py-2 px-6 w-full focus:outline-none hover:bg-blue-600 rounded text-lg flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  Send via Email
                </button>
              </div>
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
