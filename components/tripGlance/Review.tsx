"use client";

import { useState } from "react";
import { FaTripadvisor, FaGoogle, FaFacebookF, FaUser } from "react-icons/fa";
import { ShieldCheck } from "lucide-react";

export default function TravellerReview() {
  const [expandedReview, setExpandedReview] = useState<number | null>(null);

  const reviewPlatforms = [
    {
      name: "Tripadvisor",
      icon: <FaTripadvisor className="text-green-600 w-5 h-5" />,
      rating: "5.0",
      reviewCount: 196,
    },
    {
      name: "Google",
      icon: <FaGoogle className="text-blue-500 w-5 h-5" />,
      rating: "5.0",
      ratingDisplay: "★★★★★",
      reviewCount: 96,
    },
    {
      name: "Facebook",
      icon: <FaFacebookF className="text-blue-600 w-5 h-5" />,
      rating: "5.0",
      ratingDisplay: "recommended",
      reviewCount: 201,
    },
  ];

  const userReviews = [
    {
      id: 1,
      userName: "Isabelle",
      userTitle: "BA at Robin",
      reviewText:
        "An enim nullam tempor gravida donec enim congue magna at pretium purus pretium ligula rutrum luctus risus diam eget risus varius blandit sit amet non magna.",
    },
    {
      id: 2,
      userName: "John Smith",
      userTitle: "Marketing Director",
      reviewText:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    },
    {
      id: 3,
      userName: "Maria Lopez",
      userTitle: "Travel Enthusiast",
      reviewText:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure.",
    },
    {
      id: 4,
      userName: "Daniel Kim",
      userTitle: "Photographer",
      reviewText:
        "This trip was absolutely amazing! The guide was friendly and knowledgeable, and the locations were breathtaking. I'd do it all over again in a heartbeat.",
    },
    {
      id: 5,
      userName: "Priya Sharma",
      userTitle: "Blogger",
      reviewText:
        "The entire experience was seamless, from booking to the actual journey. Highly recommended for anyone looking for a hassle-free adventure!",
    },
    {
      id: 6,
      userName: "Ahmed Al-Sayeed",
      userTitle: "Engineer",
      reviewText:
        "Exceptional service and a well-organized itinerary. I enjoyed every moment and made memories that will last a lifetime. Thank you for such a wonderful trip!",
    },
  ];

  return (
    <div id="traveller-review" className="mt-10">
      <h1 className="text-3xl font-semibold mb-6">Traveller Reviews</h1>

      {/* Review Platforms */}
      <div className="bg-white p-6 border rounded-lg shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {reviewPlatforms.map((platform, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                {platform.icon}
                <span className="font-medium">{platform.name}</span>
              </div>
              <div className="text-yellow-400 text-sm mb-1">
                {platform.ratingDisplay || `${platform.rating}/5`}
              </div>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-[#EA3359] transition-colors"
              >
                {platform.reviewCount} reviews
              </a>
            </div>
          ))}

          {/* Trust Info */}
          <div className="flex flex-col items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-green-600 mb-1" />
            <span className="text-sm text-gray-500">Trusted by</span>
            <span className="font-semibold text-black">100k+ Travellers</span>
          </div>
        </div>
      </div>

      {/* User Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {userReviews.map((review) => (
          <div
            key={review.id}
            className={`bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer ${
              expandedReview === review.id
                ? "border-[#EA3359]"
                : "border-gray-100"
            }`}
            onClick={() =>
              setExpandedReview(expandedReview === review.id ? null : review.id)
            }
          >
            {/* User Avatar and Info */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                <FaUser className="text-gray-400" />
              </div>
              <div>
                <p className="font-semibold text-sm">{review.userName}</p>
                <p className="text-xs text-gray-500">{review.userTitle}</p>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {expandedReview === review.id
                ? review.reviewText
                : `${review.reviewText.substring(0, 100)}...`}
              <button
                className="text-[#EA3359] text-xs ml-1 hover:underline focus:outline-none"
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedReview(
                    expandedReview === review.id ? null : review.id
                  );
                }}
              >
                {expandedReview === review.id ? "Show less" : "Read more"}
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
