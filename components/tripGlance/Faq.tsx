import { useState } from "react";
import {
  ChevronDown,
  Calendar,
  Mountain,
  Sun,
  Snowflake,
  Map,
} from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "When is the best time to Trek?",
      answer:
        "Spring (March-May) and autumn (September-November) are generally ideal for most regions, offering mild temperatures and clear skies.",
      icon: <Calendar className="w-5 h-5 mr-3 text-blue-500" />,
    },
    {
      question: "What are the difficulty levels?",
      answer:
        "Trek difficulty varies from easy (3-5 hours/day) to strenuous (7+ hours/day). We grade each trek clearly in its description.",
      icon: <Mountain className="w-5 h-5 mr-3 text-green-500" />,
    },
    {
      question: "What about weather conditions?",
      answer:
        "Summer treks (June-August) are perfect for high-altitude destinations while winter treks (December-February) require special gear.",
      icon: <Sun className="w-5 h-5 mr-3 text-yellow-500" />,
    },
    {
      question: "How cold does it get?",
      answer:
        "Night temperatures can drop below freezing at high altitudes. We provide detailed packing lists for each season.",
      icon: <Snowflake className="w-5 h-5 mr-3 text-cyan-500" />,
    },
    {
      question: "How do I choose a route?",
      answer:
        "Consider your fitness level, time available, and interests. Our team can help match you with the perfect itinerary.",
      icon: <Map className="w-5 h-5 mr-3 text-orange-500" />,
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="mt-10">
      <h1 className="text-3xl font-semibold mb-6">FAQ and Guides</h1>
      <div className="px-4 mx-auto bg-white rounded-lg shadow-sm">
        <div className="divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <div key={index} className="py-4">
              <button
                className="flex items-center justify-between w-full text-left focus:outline-none group"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="font-medium text-gray-800 group-hover:text-[#b415b4] transition-colors">
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    openIndex === index
                      ? "transform rotate-180 text-[#b415b4]"
                      : ""
                  }`}
                />
              </button>

              <div
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-64 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 pl-8">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
