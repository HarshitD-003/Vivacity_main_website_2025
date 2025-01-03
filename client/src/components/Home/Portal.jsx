
import React, { useEffect, useRef } from "react";
import portalBg from "../../assets/images/portalBg.svg";
import ring1 from "../../assets/images/ring1.svg";
import ring2 from "../../assets/images/ring2.svg";
import ring3 from "../../assets/images/ring3.svg";
import styles from "./Portal.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animateRings = (ring1Ref, ring2Ref, ring3Ref, containerRef) => {
  const rings = [ring1Ref, ring2Ref, ring3Ref];

  // Create a timeline for better control
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: true,
      scrub: 1,
    }
  });

  rings.forEach((ringRef, index) => {
    if (ringRef.current) {
      const rotationAngle = 360 + index * 90;
      
      gsap.set(ringRef.current, { 
        transformOrigin: "50% 50%",
        rotation: 0,
        scale: 1
      });

      tl.to(ringRef.current, {
        rotation: rotationAngle,
        scale: 2,
        ease: "none",
        duration: 1
      }, 0); // The 0 makes all animations start at the same time
    }
  });
};

function Portal() {
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const ring3Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateRings(ring1Ref, ring2Ref, ring3Ref, containerRef);
    });

    return () => ctx.revert(); // Clean up animations on unmount
  }, []);

  return (
    <div className="relative">
      <section className="w-screen h-[100vh] bg-green-500"></section>

      <section 
        ref={containerRef} 
        className={`w-screen h-[150vh] relative overflow-hidden ${styles.PortalMain}`}
      >
        <img
          ref={ring1Ref}
          className="absolute w-[70%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={ring1}
          alt="Ring 1"
        />
        <img
          ref={ring2Ref}
          className="absolute w-[70%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ objectFit: "contain" }}
          src={ring2}
          alt="Ring 2"
        />
        <img
          ref={ring3Ref}
          className="absolute w-[70%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ objectFit: "cover" }}
          src={ring3}
          alt="Ring 3"
        />
        
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-[60%] text-center">
            <div className={`relative w-[300px] h-[80px] ${styles.HeadingBar} mx-auto mb-4`}>
              <h1 className="w-full h-full text-black text-3xl font-bold flex items-center justify-center">
                Tela Indrae
              </h1>
            </div>
            <p className="mt-1 mx-auto w-1/2 text-white text-xl">
              Latin for "the Web of Indra," Tela Indrae draws inspiration from
              Indra's Web, symbolizing unity in diversity and infinite
              interconnection. Like jewels reflecting one another, we come
              together as unique individuals, weaving a vibrant tapestry of
              shared brilliance. Let's celebrate the power of connection at
              Vivacity!
            </p>
          </div>
        </div>
      </section>

      <section className="w-screen h-[100vh] bg-red-500"></section>
    </div>
  );
}

export default Portal;