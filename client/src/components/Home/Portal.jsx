import React, { useEffect, useRef } from "react";
import ring1 from "../../assets/images/ring1.svg";
import ring2 from "../../assets/images/ring2.svg";
import ring3 from "../../assets/images/ring3.svg";
import styles from "./Portal.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animatePortal = (ring1Ref, ring2Ref, ring3Ref, textRef, containerRef) => {
  const rings = [ring1Ref, ring2Ref, ring3Ref];

  // Create a timeline for the animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: true,
      scrub: 2,
    },
  });

  // Ring rotation and exit animation
  rings.forEach((ringRef, index) => {
    if (ringRef.current) {
      const rotationAngle = 360 + index * 90; // Adjust rotation angle for each ring
      const exitDistance = 300 + index * 100; // Distance to move out of the screen

      gsap.set(ringRef.current, {
        transformOrigin: "50% 50%",
        rotation: 0,
        scale: 1.5,
      });

      tl.to(
        ringRef.current,
        {
          rotation: rotationAngle, // Rotate
          scale: 4, // Scale up
          duration: 1,
        },
        0 // Start all at the same time
      ).to(
        ringRef.current,
        {
          y: -exitDistance, // Move upward out of the screen
          opacity: 0, // Fade out
          ease: "power2.out",
          duration: 1,
        },
        0.5 // Start slightly after the rotation begins
      );
    }
  });

  // Text zoom animation
  if (textRef.current) {
    tl.fromTo(
      textRef.current,
      { scale: 0.8 },
      { scale: 1, ease: "power2.out", duration: 1 },
      0 // Sync with the start of ring animations
    );
  }
};

function Portal() {
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const ring3Ref = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animatePortal(ring1Ref, ring2Ref, ring3Ref, textRef, containerRef);
    });

    return () => ctx.revert(); // Clean up animations on unmount
  }, []);

  return (
    <div className="relative">
      <section className="w-screen h-[100vh] bg-green-500"></section>

      <section
        ref={containerRef}
        className={`w-screen h-[100vh] relative overflow-hidden ${styles.PortalMain}`}
      >
        <img
          ref={ring1Ref}
          className="absolute w-[55%] h-[55%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={ring1}
          alt="Ring 1"
        />
        <img
          ref={ring2Ref}
          className="absolute w-[85%] h-[85%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ objectFit: "contain" }}
          src={ring2}
          alt="Ring 2"
        />
        <img
          ref={ring3Ref}
          className="absolute w-[95%] h-[95%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ objectFit: "cover" }}
          src={ring3}
          alt="Ring 3"
        />

        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center z-[-1] pb-10"
        >
          <div className="w-[100%] text-center h-[50%]">
            <div
              className={`relative w-[300px] h-[80px] ${styles.HeadingBar} mx-auto mb-4`}
            >
              <h1 className="w-full h-full text-black text-3xl font-bold flex items-center justify-center">
                Tela Indrae
              </h1>
            </div>
            <p className="mt-1 mx-auto w-[60%] sm:w-[45%] md:w-[36%] lg:w-[30%] text-white text-xl text-center">
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

