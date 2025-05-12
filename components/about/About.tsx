import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const textRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');

      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      setIsLoaded(true);

      // Animate heading text
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center center',
            scrub: 0.5,
          },
        }
      );

      // Animate image scale on scroll
      gsap.fromTo(
        imageWrapperRef.current,
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageWrapperRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    };

    loadGSAP();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#faf3f3] text-black overflow-hidden object-cover" style={{ backgroundImage: "url('/bg3.png')"}}>
      <div className="h-24" />
      <div ref={sectionRef} className="px-8 py-16 flex flex-col items-center text-center">
        <h3
          className={`text-sm uppercase opacity-50 font-light mb-12 transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          begin with us
        </h3>

        <h2
          ref={headingRef}
          className="font-[poppins] text-5xl md:text-6xl lg:text-7xl leading-tight mb-16 tracking-wide"
        >
          Life's a wild journey<br />
          embrace the<br />
          <span className="inline-grid gap-2 justify-center aright">
            <span
              ref={imageWrapperRef}
              className="overflow-hidden rounded-3xl block relative aspect-video w-full max-w-xl"
            >
              <span
                className="w-full h-full block"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></span>
            </span>
            <span ref={textRef} className="inline-block whitespace-nowrap text-black">
              and dance
            </span>
          </span>
          <br />
          with{' '}
          <span className="text-red-500 transition-all duration-700 inline-block whitespace-nowrap">
            FlyEast
          </span>.
        </h2>
      </div>
    </div>
  );
};

export default About;
