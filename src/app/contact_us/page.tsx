"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Form submission logic would go here
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <div className="py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <div className="container mx-auto px-6 w-full text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 text-black">
            Contact Us
          </h2>

          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Ready to begin your mountain adventure? Reach out to us and let's
            plan your next unforgettable journey together.
          </p>

          <div className="relative mb-16">
            <div className="absolute inset-0 flex items-center">
              <div className="h-1 w-full bg-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Send Us a Message
              </h3>

              <div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Our Details
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600">Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">+977 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">info@highfivetrekking.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-gray-700">
                  <span className="font-medium">Office Hours:</span> Monday to
                  Friday, 9am - 5pm
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 mt-16">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-gray-700">24/7 Emergency Support</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-gray-700">48hr Response Time</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-gray-700">Many Locations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
