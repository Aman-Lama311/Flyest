"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
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
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-20 bg-[url('/navbg.svg')] bg-green-900 bg-cover bg-center text-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
          Contact Us
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto">
          Ready to begin your mountain adventure? Reach out to us and let's plan
          your next unforgettable journey together.
        </p>

        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="h-1 w-full bg-gray-200 opacity-40"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-zinc-800 text-white px-4 py-2 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Message Form */}
          <div className="bg-[url('/navbg.svg')] p-6 sm:p-8 rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              Send Us a Message
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
                value={formData.email}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
                rows={5}
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button
                onClick={handleSubmit}
                className="w-full bg-zinc-800 text-white py-3 rounded-full hover:bg-zinc-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-[url('/navbg.svg')] p-6 sm:p-8 rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              Our Details
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+977 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p>info@highfivetrekking.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-lg border border-blue-100">
              <p>
                <span className="font-medium">Office Hours:</span> Monday to
                Friday, 9am - 5pm
              </p>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 mt-12 text-sm sm:text-base">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <span>24/7 Emergency Support</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <span>48hr Response Time</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <span>Many Locations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
