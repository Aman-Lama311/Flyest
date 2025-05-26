import React from "react";

type titleDiscription = {
  title: string;
  discription: string;
};

const Title: React.FC<titleDiscription> = ({ title, discription }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold uppercase">
        {title}
      </h2>
      <p className="mt-3 text-gray-300 text-base sm:text-lg md:text-4xl">
        {discription}
      </p>
    </div>
  );
};

export default Title;
