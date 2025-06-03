import React from "react";

type titleDiscription = {
  title: string;
  discription: string;
};

const Title: React.FC<titleDiscription> = ({ title, discription }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[#B516B5] tracking-tight">
        {title}
      </h2>
      <p className="mt-3 text-purple-500 text-base sm:text-lg md:text-3xl">
        {discription}
      </p>
    </div>
  );
};

export default Title;
