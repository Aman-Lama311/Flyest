"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const teamsData = [
  {
    title: "Our Leaders",
    members: [
      {
        name: "Alice Williams",
        role: "Team Leader",
        imgSrc: "/flyimg/photo-1564564321837-a57b7070ac4f_13_11zon.webp",
      },
      {
        name: "David Lee",
        role: "Team Leader",
        imgSrc: "/flyimg/photo-1557862921-37829c790f19_12_11zon.webp",
      },
      {
        name: "Maria Gonzalez",
        role: "Team Leader",
        imgSrc: "/flyimg/photo-1551836022-deb4988cc6c0_11_11zon.webp",
      },
    ],
  },
  {
    title: "Mountain Guides",
    members: [
      {
        name: "Tenzing Sherpa",
        role: "Mountain Guide",
        imgSrc: "/flyimg/photo-1564564321837-a57b7070ac4f_13_11zon.webp",
      },
      {
        name: "Lakpa Tamang",
        role: "Mountain Guide",
        imgSrc: "/flyimg/photo-1557862921-37829c790f19_12_11zon.webp",
      },
      {
        name: "Sonam Bhote",
        role: "Mountain Guide",
        imgSrc: "/flyimg/photo-1551836022-deb4988cc6c0_11_11zon.webp",
      },
    ],
  },
  {
    title: "Trekking Guides",
    members: [
      {
        name: "Nima Gurung",
        role: "Trekking Guide",
        imgSrc: "/flyimg/photo-1564564321837-a57b7070ac4f_13_11zon.webp",
      },
      {
        name: "Pemba Lama",
        role: "Trekking Guide",
        imgSrc: "/flyimg/photo-1557862921-37829c790f19_12_11zon.webp",
      },
      {
        name: "Karma Tamang",
        role: "Trekking Guide",
        imgSrc: "/flyimg/photo-1551836022-deb4988cc6c0_11_11zon.webp",
      },
    ],
  },
  {
    title: "Cooks",
    members: [
      {
        name: "Pema Lama",
        role: "Cook",
        imgSrc: "/flyimg/photo-1564564321837-a57b7070ac4f_13_11zon.webp",
      },
      {
        name: "Dorje Sherpa",
        role: "Cook",
        imgSrc: "/flyimg/photo-1557862921-37829c790f19_12_11zon.webp",
      },
    ],
  },
  {
    title: "Porters",
    members: [
      {
        name: "Dawa Sherpa",
        role: "Porter",
        imgSrc: "/flyimg/photo-1564564321837-a57b7070ac4f_13_11zon.webp",
      },
      {
        name: "Tashi Gurung",
        role: "Porter",
        imgSrc: "/flyimg/photo-1557862921-37829c790f19_12_11zon.webp",
      },
      {
        name: "Pasang Tamang",
        role: "Porter",
        imgSrc: "/flyimg/photo-1551836022-deb4988cc6c0_11_11zon.webp",
      },
    ],
  },
];

const TeamSection = ({ title, members }: { title: string; members: any[] }) => {
  const isLeaderSection = title === "Our Leaders";

  return (
    <div className="mt-16">
      <h3 className="text-3xl font-semibold mb-6 text-white">{title}</h3>
      <div
        className={`grid grid-cols-1 ${
          isLeaderSection ? "md:grid-cols-2" : "md:grid-cols-3"
        } gap-8`}
      >
        {members.map((member, index) => (
          <div key={index}>
            <div className="mb-4">
              <img
                src={member.imgSrc}
                alt={member.name}
                className={`w-full ${
                  isLeaderSection ? "h-[32rem]" : "h-[26rem]"
                } object-cover rounded-md`}
              />
            </div>
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-semibold text-white">
                {member.name}
              </h4>
              <p className="text-gray-300 italic">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
      <div className="relative z-10 w-full h-[50vh] px-6 sm:px-16 border-b-rounded-xl bg-black/80">
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 z-1">
          <MessageSquare size={120} color="white" />
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/026/712/861/non_2x/dark-grainy-gradient-abstract-background-red-orange-purple-glowing-light-texture-free-photo.jpg"
          alt="dark pink"
          className="w-full h-full object-cover rounded-b-4xl opacity-60"
        />
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-6xl font-bold mb-12">Our Story</h2>
        </div>
      </div>

      <div className="relative z-10 bg-black/80 text-white">
        <div className="py-24 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex flex-col gap-16">
              {/* Our Story Section */}
              <div className="text-center max-w-4xl mx-auto">
                <div className="text-3xl">
                  <p className="mb-4" ref={(el) => (storyRefs.current[0] = el)}>
                    Mountain Adventures began in 2003 when a small group of
                    passionate mountaineers decided to share their love for
                    alpine landscapes with others.
                  </p>
                  <p className="mb-4" ref={(el) => (storyRefs.current[1] = el)}>
                    Our founders, each with over 30 years of climbing
                    experience, built this company on the principles of respect
                    for nature, safety, and transformative experiences.
                  </p>
                  <p ref={(el) => (storyRefs.current[2] = el)}>
                    With a team of 50+ certified guides who speak 15 languages
                    collectively.
                  </p>
                </div>
              </div>

              {/* Dynamic Team Sections */}
              {teamsData.map((team, idx) => (
                <TeamSection
                  key={idx}
                  title={team.title}
                  members={team.members}
                />
              ))}

              {/* Our Core Values */}
              <section className="text-white py-12 px-6 md:px-20">
                <h2 className="text-3xl font-semibold mb-10">
                  Our Core Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-500 mb-2">
                      Safety First
                    </h3>
                    <p className="mb-4">
                      Certified equipment and strict safety protocols.
                    </p>
                    <span className="inline-block bg-white text-black text-sm px-3 py-1 rounded-full">
                      Priority
                    </span>
                  </div>
                  <div className="border border-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-500 mb-2">
                      Sustainable Tourism
                    </h3>
                    <p className="mb-4">
                      Leave No Trace principles in all our treks.
                    </p>
                    <span className="inline-block bg-white text-black text-sm px-3 py-1 rounded-full">
                      Eco-Friendly
                    </span>
                  </div>
                  <div className="border border-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-500 mb-2">
                      Local Empowerment
                    </h3>
                    <p className="mb-4">
                      Supporting local communities and economies.
                    </p>
                    <span className="inline-block bg-white text-black text-sm px-3 py-1 rounded-full">
                      Community
                    </span>
                  </div>
                  <div className="border border-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-500 mb-2">
                      Authentic Experiences
                    </h3>
                    <p className="mb-4">
                      Genuine cultural immersion in every journey.
                    </p>
                    <span className="inline-block bg-white text-black text-sm px-3 py-1 rounded-full">
                      Cultural
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
