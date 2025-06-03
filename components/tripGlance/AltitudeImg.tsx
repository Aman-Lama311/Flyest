"use client";

import Image from "next/image";

const AltitudeImg = () => {
  return (
    <div id="route-overview" className="mt-10">
      <Image
        height={500}
        width={500}
        className="w-full"
        src="https://www.researchgate.net/publication/376536052/figure/fig3/AS:11431281212486202@1702657205583/A-graph-comparing-the-simulated-altitude-black-and-actual-altitude-based-on-altimeter.jpg"
        alt="altitude graph"
      />
    </div>
  );
};
export default AltitudeImg;
