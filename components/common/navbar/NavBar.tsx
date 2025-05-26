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
import { CategoryType } from "../../../Types/CategoryTypes";
import { getCategories } from "@/services/categoryService";
import { SubCategoryType } from "../../../Types/SubCategoryTypes";
import { getPackagebySubCategoryId } from "@/services/packageService";
import { PackageType } from "../../../Types/PackageType";

const Navbar = () => {
  // Main dropdown state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [category, setCategory] = useState<CategoryType[]>([]);
  const [subCategory, setSubCategory] = useState<SubCategoryType[]>([]);
  const [activeBackendCategory, setActiveBackendCategory] =
    useState<CategoryType | null>(null);
  const [activeSubCategory, setActiveSubCategory] =
    useState<SubCategoryType | null>(null);
  const [packageData, setPackageData] = useState<PackageType[]>([]);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // const fetchPackage = async () => {
  //   const res = await getPackagebySubCategoryId(
  //     activeSubCategory?._id as string
  //   );
  //   const data = res.data;
  //   setPackageData(data);
  // };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Scroll down - hide
      } else {
        setShowNavbar(true); // Scroll up - show
      }

      setScrolled(currentScrollY > 0); // Track if page is scrolled
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // useEffect(() => {
  //   fetchPackage();
  // }, [activeSubCategory]);

  useEffect(() => {
    if (activeBackendCategory && !activeSubCategory) {
      setActiveSubCategory(activeBackendCategory.subCategories[0]);
    }
  }, [activeBackendCategory]);

  // const fetchCategory = async () => {
  //   const res = await getCategories();
  //   const data = res.data;
  //   setCategory(data);
  // };

  // useEffect(() => {
  //   fetchCategory();
  // }, []);

  // Categories state for each dropdown
  const [activeCategory, setActiveCategory] = useState({
    mountaineering: "8000m",
    heliService: "helicopter",
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

  const [bgurl, setBgurl] = useState<boolean>(false);

  useEffect(() => {
    if (activeDropdown) setBgurl(true);
    else setBgurl(false);
  }, [activeDropdown]);

  return (
    <div id="" className="relative">
      {/* Main Navbar */}
      <div
        className={`${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } fixed top-0 z-50 w-full transition-transform duration-300 ease-in-out
      ${
        bgurl
          ? "bg-[url('/navbg.svg')]"
          : showNavbar && scrolled
          ? "bg-black/10 backdrop-blur-2xl"
          : "bg-transparent"
      }
      bg-cover py-4 px-4 md:px-24 flex items-center justify-between font-sans font-medium text-[1rem] text-white`}
      >
        {/* Logo */}
        <div>
          <Link href="/" className="cursor-pointer">
            <img src="/logo1.png" alt="Flyeast Adventures" className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-8">
          <Link href="/">
            <button className="relative group">
              <span className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300 cursor-pointer">
                Home
              </span>
            </button>
          </Link>

          {/* Trekking Button */}
          <div className="relative">
            <Link href={"/allTrekking"}>
              <button
                onClick={() => handleDropdown("trekking")}
                onMouseEnter={() => setActiveDropdown("trekking")}
                className="relative group flex items-center gap-1"
              >
                <span className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300 cursor-pointer">
                  Trekking
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Peak Climbing Button */}
          <div className="relative">
            <Link href="/allPeak">
              <button
                onClick={() => handleDropdown("mountaineering")}
                onMouseEnter={() => setActiveDropdown("mountaineering")}
                className="relative group flex items-center gap-1"
              >
                <span className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300 cursor-pointer">
                  Peak Climbing
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Heli Button */}
          <div className="relative ">
            {/* <Link href="/heliService"> */}
            <button
              onClick={() => handleDropdown("heliService")}
              onMouseEnter={() => setActiveDropdown("heliService")}
              className="relative group flex items-center gap-1"
            >
              <span className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300 cursor-pointer">
                Heli Service
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {/* </Link> */}
          </div>
          {/* Category Button */}
          {category.map((category) => (
            <div key={category._id} className="relative">
              <Link href={`/allTrekking`}>
                <button
                  onClick={() => handleDropdown(category.slug)}
                  onMouseEnter={() => {
                    setActiveDropdown(category.slug);
                    setActiveBackendCategory(category);
                    setSubCategory(category.subCategories);
                  }}
                  className="relative group flex items-center gap-1"
                >
                  <span className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300">
                    {category.name}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </Link>
            </div>
          ))}

          <div
            className={`absolute left-0 top-20 w-full bg-[#1E1E1E] text-white shadow-lg transition-all duration-300 z-40 bg-[url('/navbg.svg')] bg-cover ${
              activeBackendCategory
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
            onMouseLeave={() => {
              setActiveBackendCategory(null);
              setActiveSubCategory(null);
            }}
          >
            <div className="container mx-auto py-8 px-18">
              <div className="flex h-80">
                {/* Left Categories Column */}
                <div className="w-1/4 border-r-2 border-r-zinc-800 px-8 py-8">
                  <h3 className="text-xl font-sora mb-6 text-white">
                    {activeBackendCategory?.name}
                  </h3>
                  <ul className="space-y-4">
                    {subCategory.map((category) => (
                      <li
                        key={category._id}
                        className={`cursor-pointer transition-all duration-300 ${
                          activeBackendCategory === category
                            ? "text-[#FF4E58] font-semibold translate-x-2"
                            : "text-white hover:text-[#FF4E58]"
                        }`}
                        onClick={() => setActiveSubCategory(category)}
                      >
                        {category.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Middle Content Column */}
                <div className="w-3/4 px-8 animate-fade-in overflow-hidden">
                  <div
                    className="h-full opacity-100 animate-fade-in"
                    key={activeSubCategory?._id}
                  >
                    <h2 className="text-2xl font-sora mb-6 text-white font-medium">
                      {activeSubCategory?.name}
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {packageData.map((item, index) => (
                        <Link href={`/itinerary`} key={index}>
                          <li>
                            <div className="flex items-center gap-4 hover:text-[#FF4E58]">
                              <MdOutlineArrowRight className="h-6 w-6" />
                              <h1>{item.name}</h1>
                            </div>
                          </li>
                        </Link>
                      ))}
                    </ul>
                    <Link href="allPeak">
                      <div className="text-[#FF4E58] flex items-center gap-2 mt-18 cursor-pointer hover:text-[#d62a4e] transition-colors duration-300">
                        <p>View All {activeBackendCategory?.name}</p>
                        <ChevronRight strokeWidth={3} size={15} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Button */}
          <div className="relative">
            <button
              onClick={() => handleDropdown("about")}
              onMouseEnter={() => setActiveDropdown("about")}
              className="relative group flex items-center gap-1"
            >
              <span
                className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300 cursor-pointer
              "
              >
                Company
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Blogs Button */}
          <Link href="/blogs">
            <div className="relative">
              <button className="relative group flex items-center gap-1">
                <span className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300 cursor-pointer">
                  Blogs
                </span>
              </button>
            </div>
          </Link>

          {/* Contact Us Button */}
          <div className="relative">
            <Link href="/contact_us">
              <button className="relative group flex items-center gap-1">
                <span className="relative inline-block hover:text-[#FF4E58] transition-colors duration-300 cursor-pointer">
                  Contact Us
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Let's Talk Button */}
        <div className="hidden md:block">
          <Link href="https://wa.me/+9779801086542" target="_blank">
            <button className="py-2 px-8 bg-[#EA3359] text-white flex items-center justify-center gap-4 rounded-full transition-all duration-300 hover:bg-[#d62a33] cursor-pointer">
              Let's Talk
            </button>
          </Link>
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
            <ul className="space-y-0">
              <li>
                <Link href="/" onClick={toggleNav}>
                  <span className="text-xl hover:text-[#FF4E58] transition-colors duration-300">
                    Home
                  </span>
                </Link>
              </li>

              {/* Mobile Mountaineering Dropdown */}
              <li className="border-b border-gray-800">
                <Link
                  href="/allPeak"
                  className="block w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobileDropdown("mountaineering");
                  }}
                >
                  <div className="flex justify-between items-center py-4">
                    <span className="text-xl hover:text-[#FF4E58] transition-colors duration-300">
                      Mountaineering
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        mobileDropdowns.mountaineering ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </Link>
                {mobileDropdowns.mountaineering && (
                  <div className="mt-4 ml-4 space-y-3">
                    {Object.keys(mountaineeringData).map((category) => (
                      <Link
                        href={`/allPeak`}
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
              <li className="border-b border-gray-800">
                <Link
                  href="/helitour"
                  className="block w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobileDropdown("heliService");
                  }}
                >
                  <div className="flex justify-between items-center py-4">
                    <span className="text-xl hover:text-[#FF4E58] transition-colors duration-300">
                      Heli Service
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        mobileDropdowns.heliService ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </Link>
                {mobileDropdowns.heliService && (
                  <div className="mt-4 ml-4 space-y-3">
                    {Object.keys(heliServiceData).map((category) => (
                      <Link
                        href={`/helitour`}
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
              <li className="border-b border-gray-800">
                <Link
                  href="/allTrekking"
                  className="block w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobileDropdown("trekking");
                  }}
                >
                  <div className="flex justify-between items-center py-4">
                    <span className="text-xl hover:text-[#FF4E58] transition-colors duration-300">
                      Trekking
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        mobileDropdowns.trekking ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </Link>
                {mobileDropdowns.trekking && (
                  <div className="mt-4 ml-4 space-y-3">
                    {Object.keys(trekkingData).map((region) => (
                      <Link
                        href={`/allTrekking`}
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
              <li className="border-b border-gray-800">
                <div
                  className="block w-full cursor-pointer"
                  onClick={() => toggleMobileDropdown("about")}
                >
                  <div className="flex justify-between items-center py-4">
                    <span className="text-xl hover:text-[#FF4E58] transition-colors duration-300">
                      Company
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        mobileDropdowns.about ? "rotate-180" : ""
                      }`}
                    />
                  </div>
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

              <li className="border-b border-gray-800">
                <Link
                  href="/blogs"
                  onClick={toggleNav}
                  className="block w-full py-4"
                >
                  <span className="text-xl hover:text-[#FF4E58] transition-colors duration-300">
                    Blogs
                  </span>
                </Link>
              </li>

              <li className="border-b border-gray-800">
                <Link
                  href="/contact_us"
                  onClick={toggleNav}
                  className="block w-full py-4"
                >
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
        className={`absolute left-0 top-15 w-full bg-[#1E1E1E] text-white shadow-lg transition-all duration-300 z-40 bg-[url('/navbg.svg')] bg-cover border-b-4 ${
          activeDropdown === "mountaineering"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8 px-18">
          <div className="flex h-80">
            {/* Left Categories Column */}
            <div className="w-1/4 border-r-2 border-r-zinc-800 px-8 py-8">
              <h3 className="text-xl font-sora mb-6 text-white">
                Peak Climbing
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
                    <Link href={`/itinerary`} key={index}>
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
                  href="allPeak"
                  // {`/mountaineering/${activeCategory.mountaineering}`}
                >
                  <div className="text-[#FF4E58] flex items-center gap-2 mt-18 cursor-pointer hover:text-[#d62a4e] transition-colors duration-300">
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
        className={`absolute left-0 top-15 w-full bg-[#1E1E1E] text-white shadow-lg transition-all duration-300 z-40 bg-[url('/navbg.svg')] bg-cover border-b-4 ${
          activeDropdown === "heliService"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div
          className="container mx-auto py-8 px-18
        "
        >
          <div className="flex h-80">
            {/* Left Categories Column */}
            <div className="w-1/4 border-r-2 border-r-zinc-800 px-8 py-8">
              <h3 className="text-xl font-sora mb-6 text-white">
                Heli Service Mount Everest
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
                      heliServiceData[category as keyof typeof heliServiceData]
                        .title
                    }
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Content Column */}
            <div className="w-3/4 px-8 animate-fade-in overflow-hidden mt-[40px]">
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
                  {heliServiceData["HeliService"]?.items.map((item, index) => (
                    <Link href={`/helitour`} key={index}>
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
                  href="allHeli"
                  // {`/heliService/${activeCategory.heliService}`}
                >
                  <div className="text-[#FF4E58] flex items-center gap-2 mt-18 cursor-pointer hover:text-[#d62a4e] transition-colors duration-300">
                    <p>
                      View All{" "}
                      {
                        heliServiceData[
                          activeCategory.heliService as keyof typeof heliServiceData
                        ]?.title
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
        className={`absolute left-0 top-15 w-full bg-[#1E1E1E] text-white shadow-lg transition-all duration-300 z-40 bg-[url('/navbg.svg')] bg-cover border-b-4 ${
          activeDropdown === "trekking"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8 px-18">
          <div className="flex h-80">
            {/* Left Categories Column */}
            <div className="w-1/4 border-r-2 border-r-zinc-800 px-8 py-8">
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
                    <Link href={`/itinerary`} key={index}>
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
                  <div className="text-[#FF4E58] flex items-center gap-2 mt-18 cursor-pointer hover:text-[#d62a4e] transition-colors duration-300">
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
        className={`absolute left-0 top-15 w-full bg-[#1E1E1E] text-white shadow-lg transition-all duration-300 z-40 bg-[url('/navbg.svg')] bg-cover border-b-4 ${
          activeDropdown === "about"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8 px-18">
          <div className="flex h-80">
            {/* Left Categories Column */}
            <div className="w-1/4 border-r border-r-zinc-800 px-8 py-8">
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
                          Since 2013
                        </h3>
                        <p className="text-white mb-4">
                          Founded in 2010 with a passion for Himalayan
                          adventures, HighFive Adventures has been providing
                          exceptional mountaineering and trekking experiences
                          for adventure enthusiasts from around the world.
                        </p>
                        <Link
                          href="/fiveabout"
                          className="text-[#ff4e69d3] hover:text-[#ff4e4e]"
                        >
                          <div className="flex items-center gap-2">
                            {" "}
                            <p>Learn More </p>
                            <span>
                              <ChevronRight strokeWidth={3} size={15} />
                            </span>
                          </div>
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
                      <Link href="/fiveabout">
                        <div className="text-[#FF4E58] flex items-center gap-2 cursor-pointer hover:text-[#d62a4e] transition-colors duration-300">
                          <p>View All Team Members</p>
                          <ChevronRight strokeWidth={3} size={15} />
                        </div>{" "}
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
                          className="border border-zinc-800 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="h-12 w-12 bg-[#FF4E58] rounded-full items-center justify-center text-white hidden">
                              {index === 0 && <MapPin />}
                              {index === 1 && <Mail />}
                              {index === 2 && <Phone />}
                              {index === 3 && <ChevronRight />}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-1 text-[#FF4E58]">
                                {value.name}
                              </h3>
                              <p className="text-white">{value.description}</p>
                              <span className="inline-block mt-2 text-xs px-2 py-1 bg-white rounded-md text-black">
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
