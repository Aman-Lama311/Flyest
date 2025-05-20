"use client";
import { useState, useEffect } from "react";
import {
  AlignJustify,
  CircleX,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import {
  mountaineeringData,
  trekkingData,
  aboutUsData,
  teamData,
  heliServiceData,
} from "./NavData";
import Link from "next/link";
import gsap from "gsap";
import { IoMdArrowDown } from "react-icons/io";
import { MdOutlineArrowRight } from "react-icons/md";
import { bgImage } from "../../HeroComponents/bgimagedata";

const Navbar = () => {
  // Main dropdown state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Categories state for each dropdown
  const [activeCategory, setActiveCategory] = useState({
    mountaineering: "8000m",
    heliService : "helicopter",
    trekking: "Everest Region",
    about: "company",
  });

  // Mobile navigation state
  const [navOpen, setNavOpen] = useState(false);

  // Mobile dropdown states
  const [mobileDropdowns, setMobileDropdowns] = useState({
    mountaineering: false,
    trekking: false,
    heliService: false,
    about: false,
  });

  // Toggle mobile navigation
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Toggle mobile dropdowns
  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdowns({
      ...mobileDropdowns,
      [dropdown]: !mobileDropdowns[dropdown as keyof typeof mobileDropdowns],
    });
  };

  // Handle desktop dropdown hover and clicks
  const handleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Handle category selection
  const handleCategorySelect = (dropdown: string, category: string) => {
    setActiveCategory({ ...activeCategory, [dropdown]: category });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbarElement = document.getElementById("navbar-container");
      if (navbarElement && !navbarElement.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="" className="relative">
      {/* Main Navbar */}
      <div className="relative h-24 px-6 md:px-24 w-full flex items-center justify-between font-sans font-medium text-[1.1rem] text-white bg-[url('/navbg.svg')] bg-cover">
        {/* Logo */}
        <div>
          <Link href="/">
            <img src="/logo1.png" alt="Flyeast Adventures" className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-8">
          <Link href="/">
            <button className="relative group">
              <span className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300">
                Home
              </span>
            </button>
          </Link>

          {/* Trekking Button */}
          <div className="relative">
            <Link href={"/itinerary"}>
              <button
                onClick={() => handleDropdown("trekking")}
                onMouseEnter={() => setActiveDropdown("trekking")}
                className="relative group flex items-center gap-1"
              >
                <span className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300">
                  Trekking
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Mountaineering Button */}
          <div className="relative">
            <Link href="/itinerary">
              <button
                onClick={() => handleDropdown("mountaineering")}
                onMouseEnter={() => setActiveDropdown("mountaineering")}
                className="relative group flex items-center gap-1"
              >
                <span className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300">
                  Mountaineering
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Heli Button */}
           <div className="relative">
            <Link href="/heliService">
              <button
                onClick={() => handleDropdown("heliService")}
                onMouseEnter={() => setActiveDropdown("heliService")}
                className="relative group flex items-center gap-1"
              >
                <span className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300">
                  Heli Service
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Company Button */}
          <div className="relative">
            <button
              onClick={() => handleDropdown("about")}
              onMouseEnter={() => setActiveDropdown("about")}
              className="relative group flex items-center gap-1"
            >
              <span className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300">
                Company
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Blogs Button */}
          <Link href="/blogs">
            <div className="relative">
              <button className="relative group flex items-center gap-1">
                <span className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300">
                  Blogs
                </span>
              </button>
            </div>
          </Link>

          {/* Contact Us Button */}
          <Link href="/contact">
            <div className="relative">
              <button className="relative group flex items-center gap-1">
                <span className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300">
                  Contact Us
                </span>
              </button>
            </div>
          </Link>
        </div>

        {/* Let's Talk Button */}
        <div className="hidden md:block">
          <button
            className="h-14 px-4 bg-[#EA3359] text-white flex items-center justify-center gap-4 rounded-xl transition-all duration-300 hover:bg-[#d62a4e]"
            onMouseEnter={(e) => {
              const arrowElement =
                e.currentTarget.querySelector(".talk-button-arrow");
              const textElement =
                e.currentTarget.querySelector(".talk-button-text");

              gsap.to(arrowElement, {
                rotation: 270,
                y: -2,
                duration: 0.3,
                ease: "power2.out",
              });

              gsap.to(textElement, {
                text: {
                  value: "Let's Talk",
                  delimiter: "",
                },
                duration: 0.2,
                ease: "none",
              });
            }}
            onMouseLeave={(e) => {
              const arrowElement =
                e.currentTarget.querySelector(".talk-button-arrow");

              gsap.to(arrowElement, {
                rotation: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
          >
            <a
              className="font-medium tracking-wide text-[1.1rem] transition-colors duration-300"
              href="/contact"
            >
              Let's Talk
            </a>
            <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <IoMdArrowDown
                size={25}
                className="talk-button-arrow text-[#EA3359] transition-transform duration-300"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleNav}
            className="p-2 hover:bg-gray-800 rounded-md transition-colors duration-300"
          >
            {navOpen ? <CircleX size={24} /> : <AlignJustify size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-95 z-50 transition-all duration-300 transform ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <img src="./logo1.png" alt="HighFive Adventures" className="h-8" />
            <button
              onClick={toggleNav}
              className="text-white hover:text-[#FF4E58]"
            >
              <CircleX size={28} />
            </button>
          </div>

          <nav className="text-white">
            <ul className="space-y-6">
              <li>
                <Link href="/" onClick={toggleNav}>
                  <span className="text-xl hover:text-[#FF4E58] transition-colors duration-300">
                    Home
                  </span>
                </Link>
              </li>

              {/* Mobile Mountaineering Dropdown */}
              <li>
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("mountaineering")}
                >
                  <span className="text-xl hover:text-[#FF4E58] transition-colors duration-300">
                    Mountaineering
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      mobileDropdowns.mountaineering ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {mobileDropdowns.mountaineering && (
                  <div className="mt-4 ml-4 space-y-3">
                    {Object.keys(mountaineeringData).map((category) => (
                      <Link
                        href={`/mountaineering/${category}`}
                        key={category}
                        onClick={toggleNav}
                      >
                        <div className="flex items-center text-gray-300 hover:text-[#FF4E58]">
                          <ChevronRight className="w-4 h-4 mr-2" />
                          <span>
                            {
                              mountaineeringData[
                                category as keyof typeof mountaineeringData
                              ].title
                            }
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              
              {/* Mobile heli Dropdown */}
              <li>
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("heliService")}
                >
                  <span className="text-xl hover:text-[#FF4E58] transition-colors duration-300">
                    Heli Service
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      mobileDropdowns.heliService ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {mobileDropdowns.heliService && (
                  <div className="mt-4 ml-4 space-y-3">
                    {Object.keys(heliServiceData).map((category) => (
                      <Link
                        href={`/heliservice/${category}`}
                        key={category}
                        onClick={toggleNav}
                      >
                        <div className="flex items-center text-gray-300 hover:text-[#FF4E58]">
                          <ChevronRight className="w-4 h-4 mr-2" />
                          <span>
                            {
                              heliServiceData[
                                category as keyof typeof heliServiceData
                              ].title
                            }
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Mobile Trekking Dropdown */}
              <li>
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("trekking")}
                >
                  <span className="text-xl hover:text-[#FF4E58] transition-colors duration-300">
                    Trekking
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      mobileDropdowns.trekking ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {mobileDropdowns.trekking && (
                  <div className="mt-4 ml-4 space-y-3">
                    {Object.keys(trekkingData).map((region) => (
                      <Link
                        href={`/trekking/${region
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        key={region}
                        onClick={toggleNav}
                      >
                        <div className="flex items-center text-gray-300 hover:text-[#FF4E58]">
                          <ChevronRight className="w-4 h-4 mr-2" />
                          <span>{region}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Mobile About Dropdown */}
              <li>
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("about")}
                >
                  <span className="text-xl hover:text-[#FF4E58] transition-colors duration-300">
                    Company
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      mobileDropdowns.about ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {mobileDropdowns.about && (
                  <div className="mt-4 ml-4 space-y-3">
                    <Link href="/about" onClick={toggleNav}>
                      <div className="flex items-center text-gray-300 hover:text-[#FF4E58]">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        <span>About Us</span>
                      </div>
                    </Link>
                    <Link href="/team" onClick={toggleNav}>
                      <div className="flex items-center text-gray-300 hover:text-[#FF4E58]">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        <span>Our Team</span>
                      </div>
                    </Link>
                    <Link href="/values" onClick={toggleNav}>
                      <div className="flex items-center text-gray-300 hover:text-[#FF4E58]">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        <span>Core Values</span>
                      </div>
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link href="/blogs" onClick={toggleNav}>
                  <span className="text-xl hover:text-[#FF4E58] transition-colors duration-300">
                    Blogs
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/contact" onClick={toggleNav}>
                  <span className="text-xl hover:text-[#FF4E58] transition-colors duration-300">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Let's Talk Button */}
          <div className="mt-8">
            <Link href="/contact" onClick={toggleNav}>
              <button className="w-full py-4 bg-[#EA3359] text-white rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-[#d62a4e]">
                <span>Let's Talk</span>
                <ArrowUpRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mountaineering Dropdown */}
      <div
        className={`absolute left-0 w-full bg-[#1E1E1E] text-white shadow-lg transition-all duration-300 z-40 bg-[url('/navbg.svg')] bg-cover ${
          activeDropdown === "mountaineering"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8">
          <div className="flex h-80">
            {/* Left Categories Column */}
            <div className="w-1/4 border-r px-8 py-8">
              <h3 className="text-xl font-sora mb-6 text-white">
                Mountaineering
              </h3>
              <ul className="space-y-4">
                {Object.keys(mountaineeringData).map((category) => (
                  <li
                    key={category}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeCategory.mountaineering === category
                        ? "text-[#FF4E58] font-semibold translate-x-2"
                        : "text-white hover:text-[#FF4E58]"
                    }`}
                    onClick={() =>
                      handleCategorySelect("mountaineering", category)
                    }
                  >
                    {
                      mountaineeringData[
                        category as keyof typeof mountaineeringData
                      ].title
                    }
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Content Column */}
            <div className="w-3/4 px-8 animate-fade-in overflow-hidden">
              <div
                className="h-full opacity-100 animate-fade-in"
                key={activeCategory.mountaineering}
              >
                <h2 className="text-2xl font-sora mb-6 text-white font-medium">
                  {
                    mountaineeringData[
                      activeCategory.mountaineering as keyof typeof mountaineeringData
                    ].title
                  }{" "}
                  Peaks
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {mountaineeringData[
                    activeCategory.mountaineering as keyof typeof mountaineeringData
                  ].items.map((item, index) => (
                    <Link
                      href={`/mountaineering/${
                        activeCategory.mountaineering
                      }/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      key={index}
                    >
                      <li>
                        <div className="flex items-center gap-4 hover:text-[#FF4E58]">
                          <MdOutlineArrowRight className="h-6 w-6" />
                          <h1>{item.name}</h1>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
                <Link href="allPeak"
                // {`/mountaineering/${activeCategory.mountaineering}`}
                >
                  <div className="text-[#FF4E58] flex items-center gap-2 mt-6 cursor-pointer hover:text-[#d62a4e] transition-colors duration-300">
                    <p>
                      View All{" "}
                      {
                        mountaineeringData[
                          activeCategory.mountaineering as keyof typeof mountaineeringData
                        ].title
                      }{" "}
                      Peaks
                    </p>
                    <ChevronRight strokeWidth={3} size={15} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*heli service Dropdown */}
      <div
        className={`absolute left-0 w-full bg-[#1E1E1E] text-white shadow-lg transition-all duration-300 z-40 bg-[url('/navbg.svg')] bg-cover ${
          activeDropdown === "heliService"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8">
          <div className="flex h-80">
            {/* Left Categories Column */}
            <div className="w-1/4 border-r px-8 py-8">
              <h3 className="text-xl font-sora mb-6 text-white">
                Heli Service
              </h3>
              <ul className="space-y-4">
                {Object.keys(heliServiceData).map((category) => (
                  <li
                    key={category}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeCategory.heliService === category
                        ? "text-[#FF4E58] font-semibold translate-x-2"
                        : "text-white hover:text-[#FF4E58]"
                    }`}
                    onClick={() =>
                      handleCategorySelect("heliService", category)
                    }
                  >
                    {
                     heliServiceData[
                        category as keyof typeof heliServiceData
                      ].title
                    }
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Content Column */}
            <div className="w-3/4 px-8 animate-fade-in overflow-hidden">
              <div
                className="h-full opacity-100 animate-fade-in"
                key={activeCategory.heliService}
              >
                <h2 className="text-2xl font-sora mb-6 text-white font-medium">
                  {
                    heliServiceData[
                      activeCategory.heliService as keyof typeof heliServiceData
                    ]?.title
                  }{" "}
                  Heli Services
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {heliServiceData[
                    activeCategory.heliService as keyof typeof heliServiceData
                  ]?.items.map((item, index) => (
                    <Link
                      href={`/heliService/${
                        activeCategory.heliService
                      }/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      key={index}
                    >
                      <li>
                        <div className="flex items-center gap-4 hover:text-[#FF4E58]">
                          <MdOutlineArrowRight className="h-6 w-6" />
                          <h1>{item.name}</h1>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
                <Link href="allHeli"
                // {`/heliService/${activeCategory.heliService}`}
                >
                  <div className="text-[#FF4E58] flex items-center gap-2 mt-6 cursor-pointer hover:text-[#d62a4e] transition-colors duration-300">
                    <p>
                      View All{" "}
                      {
                        heliServiceData[
                          activeCategory.mountaineering as keyof typeof heliServiceData
                        ].title
                      }{" "}
                      Heli
                    </p>
                    <ChevronRight strokeWidth={3} size={15} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trekking Dropdown */}

      <div
        className={`absolute left-0 w-full bg-[#1E1E1E] text-white shadow-lg transition-all duration-300 z-40 bg-[url('/navbg.svg')] bg-cover ${
          activeDropdown === "trekking"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8">
          <div className="flex h-80">
            {/* Left Categories Column */}
            <div className="w-1/4 border-r px-8 py-8">
              <h3 className="text-xl font-sora mb-6 text-white">
                Trekking Regions
              </h3>
              <ul className="space-y-4">
                {Object.keys(trekkingData).map((region) => (
                  <li
                    key={region}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeCategory.trekking === region
                        ? "text-[#FF4E58] font-semibold translate-x-2"
                        : "text-white hover:text-[#FF4E58]"
                    }`}
                    onClick={() => handleCategorySelect("trekking", region)}
                  >
                    {region}
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Content Column */}
            <div className="w-3/4 px-8 animate-fade-in overflow-hidden">
              <div
                className="h-full opacity-100 animate-fade-in"
                key={activeCategory.trekking}
              >
                <h2 className="text-2xl font-sora mb-6 text-white">
                  {
                    trekkingData[
                      activeCategory.trekking as keyof typeof trekkingData
                    ].title
                  }
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {trekkingData[
                    activeCategory.trekking as keyof typeof trekkingData
                  ].items.map((item, index) => (
                    <Link
                      href={`/trekking/${activeCategory.trekking
                        .toLowerCase()
                        .replace(/\s+/g, "-")}/${item.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      key={index}
                    >
                      <li>
                        <div className="flex items-center gap-4 hover:text-[#FF4E58]">
                          <MdOutlineArrowRight className="h-6 w-6" />
                          <h1>{item.name}</h1>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
                <Link
                  href="allTrekking"
                  // {`/trekking/${activeCategory.trekking
                  //   .toLowerCase()
                  //   .replace(/\s+/g, "-")}`}
                >
                  <div className="text-[#FF4E58] flex items-center gap-2 mt-6 cursor-pointer hover:text-[#d62a4e] transition-colors duration-300">
                    <p>
                      View All{" "}
                      {
                        trekkingData[
                          activeCategory.trekking as keyof typeof trekkingData
                        ].title
                      }{" "}
                      Treks
                    </p>
                    <ChevronRight strokeWidth={3} size={15} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Dropdown */}
      <div
        className={`absolute left-0 w-full bg-[#1E1E1E] text-white shadow-lg transition-all duration-300 z-40 bg-[url('/navbg.svg')] bg-cover ${
          activeDropdown === "about"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8">
          <div className="flex h-80">
            {/* Left Categories Column */}
            <div className="w-1/4 border-r px-8 py-8">
              <h3 className="text-xl font-sora mb-6 text-white">Company</h3>
              <ul className="space-y-4">
                <li
                  className={`cursor-pointer transition-all duration-300 ${
                    activeCategory.about === "company"
                      ? "text-[#FF4E58] font-semibold translate-x-2"
                      : "text-white hover:text-[#FF4E58]"
                  }`}
                  onClick={() => handleCategorySelect("about", "company")}
                >
                  About Us
                </li>
                <li
                  className={`cursor-pointer transition-all duration-300 ${
                    activeCategory.about === "team"
                      ? "text-[#FF4E58] font-semibold translate-x-2"
                      : "text-white hover:text-[#FF4E58]"
                  }`}
                  onClick={() => handleCategorySelect("about", "team")}
                >
                  Our Team
                </li>
                <li
                  className={`cursor-pointer transition-all duration-300 ${
                    activeCategory.about === "values"
                      ? "text-[#FF4E58] font-semibold translate-x-2"
                      : "text-white hover:text-[#FF4E58]"
                  }`}
                  onClick={() => handleCategorySelect("about", "values")}
                >
                  Core Values
                </li>
              </ul>
            </div>

            {/* Content Column */}
            <div className="w-3/4 px-8 animate-fade-in overflow-hidden">
              <div
                className="h-full opacity-100 animate-fade-in"
                key={activeCategory.about}
              >
                {activeCategory.about === "company" && (
                  <div>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <h3 className="text-3xl font-semibold text-white mb-4">
                          Since 2010
                        </h3>
                        <p className="text-white mb-4">
                          Founded in 2010 with a passion for Himalayan
                          adventures, HighFive Adventures has been providing
                          exceptional mountaineering and trekking experiences
                          for adventure enthusiasts from around the world.
                        </p>
                        <Link href="/about">
                          <button className="px-6 py-2 bg-[#FF4E58] text-white rounded-lg hover:bg-[#d62a4e] transition-colors duration-300 flex items-center gap-2">
                            <span>Learn More</span>
                            <ArrowUpRight size={16} />
                          </button>
                        </Link>
                      </div>
                      <div className="flex-1">
                        <div className="h-48 overflow-hidden rounded-lg">
                          <img
                            src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="HighFive Adventures"
                            className="object-cover h-full w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeCategory.about === "team" && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-sora text-white">
                        Our Team
                      </h2>
                      <Link href="/team">
                        <div className="text-[#FF4E58] flex items-center gap-2 cursor-pointer hover:text-[#d62a4e] transition-colors duration-300">
                          <p>View All Team Members</p>
                          <ChevronRight strokeWidth={3} size={15} />
                        </div>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {teamData.slice(0, 3).map((member) => (
                        <Link href={`/team/${member.id}`} key={member.id}>
                          <div className="relative h-56 w-full rounded-lg overflow-hidden group cursor-pointer">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute right-3 top-3 bg-[#FF4E58] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ArrowUpRight className="text-white" size={18} />
                            </div>
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                              <h3 className="text-lg font-semibold">
                                {member.name}
                              </h3>
                              <p className="text-gray-200 text-sm italic">
                                {member.role}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeCategory.about === "values" && (
                  <div>
                    <h2 className="text-2xl font-sora mb-6 text-white">
                      Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {aboutUsData.values.items.map((value, index) => (
                        <div
                          key={index}
                          className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="h-12 w-12 bg-[#FF4E58] rounded-full flex items-center justify-center text-white">
                              {index === 0 && <MapPin />}
                              {index === 1 && <Mail />}
                              {index === 2 && <Phone />}
                              {index === 3 && <ChevronRight />}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-1">
                                {value.name}
                              </h3>
                              <p className="text-white">{value.description}</p>
                              <span className="inline-block mt-2 text-xs px-2 py-1 bg-[#FF4E58] rounded-md text-white">
                                {value.tag}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
