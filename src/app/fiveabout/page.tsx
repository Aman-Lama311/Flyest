"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mountain,
  Award,
  Clock,
  Heart,
  ShieldCheck,
  Medal,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const coreTeam = [
  {
    name: "Alice Williams",
    imgSrc: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f",
  },
  {
    name: "David Lee",
    imgSrc: "https://images.unsplash.com/photo-1557862921-37829c790f19",
  },
  {
    name: "Maria Gonzalez",
    imgSrc: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0",
  },
];

const mountainGuides = [
  { name: "Tenzing Sherpa", imgSrc: coreTeam[0].imgSrc },
  { name: "Lakpa Tamang", imgSrc: coreTeam[1].imgSrc },
  { name: "Sonam Bhote", imgSrc: coreTeam[2].imgSrc },
];

const trekkingGuides = [
  { name: "Nima Gurung", imgSrc: coreTeam[0].imgSrc },
  { name: "Pemba Lama", imgSrc: coreTeam[1].imgSrc },
  { name: "Karma Tamang", imgSrc: coreTeam[2].imgSrc },
];

const cooks = [
  { name: "Pema Lama", imgSrc: coreTeam[0].imgSrc },
  { name: "Dorje Sherpa", imgSrc: coreTeam[1].imgSrc },
];

const porters = [
  { name: "Dawa Sherpa", imgSrc: coreTeam[2].imgSrc },
  { name: "Tashi Gurung", imgSrc: coreTeam[1].imgSrc },
  { name: "Pasang Tamang", imgSrc: coreTeam[0].imgSrc },
];

const TeamSection = ({ title, members }: { title: string; members: any[] }) => (
  <div className="mt-16">
    <h3 className="text-3xl font-semibold mb-6 text-white">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {members.map((member, index) => (
        <div key={index}>
          <div className="mb-4">
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-full h-72 object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-semibold text-white">{member.name}</h4>
            <p className="text-gray-300 italic">Team Leader</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AboutUsPage = () => {
  const storyRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    storyRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <>
      <div className="relative w-full h-[50vh] px-16 bg-[url('/navbg.svg')]">
        <img
          src="https://static.vecteezy.com/system/resources/previews/026/712/861/non_2x/dark-grainy-gradient-abstract-background-red-orange-purple-glowing-light-texture-free-photo.jpg"
          alt="dark pink"
          className="w-full h-full object-cover rounded-b-4xl opacity-60"
        />
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-6xl font-bold mb-12">About Us</h2>
          <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
            "For over two decades, FLYEAST has been guiding passionate explorers
            to the world's most breathtaking peaks and hidden natural wonders."
          </p>
        </div>
      </div>

      <div className="bg-[url('/navbg.svg')] text-white">
        <div className="py-24 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex flex-col gap-55">
              {/* === Our Story === */}
              <div className="text-center max-w-4xl mx-auto ">
                <h3 className="text-5xl font-semibold mb-6">Our Story</h3>
                <div className=" max-w-none text-5xl">
                  <p className="mb-4" ref={(el) => (storyRefs.current[0] = el)}>
                    Mountain Adventures began in 2003 when a small group of
                    passionate mountaineers decided to share their love for
                    alpine landscapes with others...
                  </p>
                  <p className="mb-4" ref={(el) => (storyRefs.current[1] = el)}>
                    Our founders, each with over 30 years of climbing
                    experience, built this company on the principles of respect
                    for nature, safety, and transformative experiences...
                  </p>
                  <p ref={(el) => (storyRefs.current[2] = el)}>
                    With a team of 50+ certified guides who speak 15 languages
                    collectively...
                  </p>
                </div>
              </div>

              {/* === Our Values === */}
              <div className="bg-zinc-800 p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">Our Values</h3>
                <div className="flex flex-col gap-6">
                  {[
                    {
                      icon: <Award className="w-6 h-6 text-[#F2385A]" />,
                      title: "Excellence",
                      description:
                        "We never compromise on quality, expertise, or safety...",
                    },
                    {
                      icon: <Heart className="w-6 h-6 text-[#F2385A]" />,
                      title: "Sustainability",
                      description:
                        "We practice and promote responsible tourism...",
                    },
                    {
                      icon: <Clock className="w-6 h-6 text-[#F2385A]" />,
                      title: "Mindfulness",
                      description:
                        "We believe in being present and fully experiencing each moment in the mountains...",
                    },
                  ].map((val, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="bg-gray-900 p-3 rounded-full mt-1">
                        {val.icon}
                      </div>
                      <div className="text-left">
                        <p className="font-medium mb-1">{val.title}</p>
                        <p className="text-gray-300">{val.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* === Team Sections === */}
            <TeamSection title="Core Team" members={coreTeam} />
            <TeamSection title="Mountain Guides" members={mountainGuides} />
            <TeamSection title="Trekking Guides" members={trekkingGuides} />
            <TeamSection title="Cooks" members={cooks} />
            <TeamSection title="Porters" members={porters} />

            {/* === Certifications === */}
            <div className="mt-24">
              <h3 className="text-3xl font-semibold mb-6 text-center">
                Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: (
                      <ShieldCheck className="w-8 h-8 text-[#F2385A] mx-auto mb-4" />
                    ),
                    title: "Safety Certified",
                    desc: "Our guides and staff are certified in high-altitude safety training and first aid...",
                  },
                  {
                    icon: (
                      <Medal className="w-8 h-8 text-[#F2385A] mx-auto mb-4" />
                    ),
                    title: "Awarded Guides",
                    desc: "Our guides are award-winning professionals recognized for excellence in mountain leadership...",
                  },
                  {
                    icon: (
                      <Clock className="w-8 h-8 text-[#F2385A] mx-auto mb-4" />
                    ),
                    title: "Time-Tested Expertise",
                    desc: "With decades of experience, our team has earned a reputation for successful expeditions...",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-900 p-8 text-center rounded-lg shadow-lg"
                  >
                    {item.icon}
                    <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
