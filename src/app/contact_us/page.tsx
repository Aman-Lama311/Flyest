"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

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

  // ...existing code...
  return (
    <>
      <div className="relative z-10 w-full h-[50vh] px-6 sm:px-16 border-b-rounded-xl bg-white">
        {/* Background Overlay */}
        <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-black/40 to-transparent"></div>

        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40 z-1">
          <Phone size={120} color="#B516B5" />
        </div>
        <Image
          height={500}
          width={500}
          src="https://static.vecteezy.com/system/resources/previews/026/712/861/non_2x/dark-grainy-gradient-abstract-background-red-orange-purple-glowing-light-texture-free-photo.jpg"
          alt="dark pink"
          className="w-full h-full object-cover rounded-b-4xl opacity-30"
        />
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#B516B5] text-center">
          <h2 className="text-6xl font-bold mb-12">Contact Us</h2>
        </div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-20 bg-white bg-cover bg-center text-[#222]">
        <div className="max-w-screen-xl mx-auto">
          {/* Contact Details */}
          <div className="relative p-6 sm:p-8 rounded-lg shadow-md border border-[#B516B5] flex flex-wrap justify-between gap-6 bg-white">
            {/* Address */}
            <div className="flex items-start gap-4 min-w-[200px]">
              <div className="p-3 rounded-full">
                <MapPin className="w-6 h-6 text-[#B516B5]" />
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start gap-4 min-w-[200px]">
              <div className="p-3 rounded-full">
                <Phone className="w-6 h-6 text-[#B516B5]" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p>+977 123-4567</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start gap-4 min-w-[200px]">
              <div className="p-3 rounded-full">
                <Mail className="w-6 h-6 text-[#B516B5]" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p>info@Flyeast.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* last message form section */}
        <div className="relative bg-cover bg-center text-[#222] py-16 px-4 sm:px-6 lg:px-20">
          <div className="w-full mx-auto">
            <form onSubmit={handleSubmit} className="w-full mx-auto space-y-6">
              <h1 className="text-4xl font-bold">
                Do you want to experience{" "}
                <span className="bg-clip-text text-[#B516B5]">
                  beautiful moments.
                </span>
              </h1>
              {/* ...existing form fields... */}
              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <label className="text-xl font-semibold">Hi! My name is</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="flex-1 bg-transparent border-b border-[#B516B5] outline-none py-1 text-black"
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
                  className="flex-1 bg-transparent border-b border-[#B516B5] outline-none py-1 text-black"
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
                  className="bg-transparent border-b border-[#B516B5] outline-none py-1 text-black"
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
                  className="flex-1 bg-transparent border-b border-[#B516B5] outline-none py-1 text-black"
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
                    className="w-full bg-transparent border-b border-[#B516B5] outline-none py-1 text-black"
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
                    className="w-full bg-transparent border-b border-[#B516B5] outline-none py-1 text-black"
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
                  className="bg-transparent border-b border-[#B516B5] outline-none py-1 text-black"
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
                  className="flex-1 bg-transparent border-b border-[#B516B5] outline-none py-1 text-black"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="mt-4 px-6 py-3 rounded-full bg-[#B516B5] text-white hover:bg-[#a010a0] font-semibold transition cursor-pointer"
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
// ...existing code...

export default ContactPage;
