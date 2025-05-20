"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
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

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = () => {
    const { name, email, number, message } = formData;

    if (!name || !email || !number || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", number: "", message: "" });
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-20 bg-[url('/navbg.svg')] bg-green-900 bg-cover bg-center text-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
          Contact Us
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto">
          Ready to begin your mountain adventure? Reach out to us and let's
          plan your next unforgettable journey together.
        </p>

        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="h-1 w-full bg-gray-200 opacity-40"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-[#EA3359] text-white px-4 py-2 rounded-full">
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
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-white bg-transparent"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-white bg-transparent"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="number"
                name="number"
                placeholder="Your Phone Number"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-white bg-transparent"
                value={formData.number}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-white bg-transparent"
                rows={5}
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button
                onClick={handleSubmit}
                className=" bg-[#EA3359] w-full text-white py-4 rounded border hover:border-white transition duration-300"
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
                <div className="bg-zinc-800 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-[#EA3359]" />
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-[#EA3359]" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+977 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-[#EA3359]" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p>info@Flyeast.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
