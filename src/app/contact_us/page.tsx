"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    source: "",
    goal: "",
    email: "",
    number: "",
    budget: "",
    message: "",
    contact: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      company: "",
      source: "",
      goal: "",
      email: "",
      number: "",
      budget: "",
      message: "",
      contact: "",
    });
  };

  return (
    <>
      <div className="relative w-full h-[50vh] px-16 border-b-rounded-xl bg-[url('/navbg.svg')]">
        <img
          src="https://static.vecteezy.com/system/resources/previews/026/712/861/non_2x/dark-grainy-gradient-abstract-background-red-orange-purple-glowing-light-texture-free-photo.jpg"
          alt="dark pink"
          className="w-full h-full object-cover rounded-b-4xl opacity-60"
        />
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
            Contact Us
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto">
            Ready to begin your mountain adventure? Reach out to us and let's
            plan your next unforgettable journey together.
          </p>
        </div>
      </div>
      <div className="py-16 lg:py-32 px-4 sm:px-6 lg:px-20 bg-[url('/navbg.svg')] bg-green-900 bg-cover bg-center text-white">
        <div className="max-w-screen-xl mx-auto">
          {/* Contact Details */}
          <div className="bg-[url('/navbg.svg')] p-6 sm:p-8 rounded-lg shadow-md flex flex-wrap justify-between gap-6">
            {/* Address */}
            <div className="flex items-start gap-4 min-w-[200px]">
              <div className="bg-zinc-800 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-[#EA3359]" />
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 min-w-[200px]">
              <div className="bg-zinc-800 p-3 rounded-full">
                <Phone className="w-6 h-6 text-[#EA3359]" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p>+977 123-4567</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 min-w-[200px]">
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
        {/* last message form section */}
        <div className="bg-[url('/navbg.svg')] bg-green-900 bg-cover bg-center text-white py-16 px-4 sm:px-6 lg:px-20">
          <div className="w-full mx-auto">
            <form onSubmit={handleSubmit} className="w-full mx-auto space-y-6">
              <h1 className="text-4xl font-bold">
                Do you want to experience{" "}
                <span className="bg-clip-text text-[#EA3359]">
                  beautiful moments.
                </span>
              </h1>
              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <label className="text-xl font-semibold">Hi! My name is</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="flex-1 bg-transparent border-b border-gray-500 outline-none py-1"
                  required
                />
                <span className="text-xl font-semibold ml-0 md:ml-4">
                  and I'm
                </span>
                <input
                  type="text"
                  name="company"
                  placeholder="Profession*"
                  value={formData.company}
                  onChange={handleChange}
                  className="flex-1 bg-transparent border-b border-gray-500 outline-none py-1"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xl font-semibold">
                  I heard about you from
                </label>
                <input
                  type="text"
                  name="source"
                  placeholder="Source*"
                  value={formData.source}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-500 outline-none py-1"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <label className="text-xl font-semibold">
                  and I'm looking for a peaceful break can you help me with
                </label>
                <input
                  type="text"
                  name="goal"
                  placeholder="Your goal*"
                  value={formData.goal}
                  onChange={handleChange}
                  className="flex-1 bg-transparent border-b border-gray-500 outline-none py-1"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:gap-4">
                <div className="flex-1">
                  <label className="text-xl font-semibold">
                    You can reach me at
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-500 outline-none py-1"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="text-xl font-semibold">
                    My contact number is
                  </label>
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact Number*"
                    value={formData?.contact}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-500 outline-none py-1"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xl font-semibold">My budget is</label>
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget (e.g., $500 – $1000)*"
                  value={formData.budget}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-500 outline-none py-1"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:gap-4">
                <label className="text-xl font-semibold">
                  Additionally, I'm sharing more here:
                </label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="flex-1 bg-transparent border-b border-gray-500 outline-none py-1"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="mt-4 px-6 py-3 rounded-full bg-[#EA3359] text-black font-semibold transition"
                >
                  Send →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
