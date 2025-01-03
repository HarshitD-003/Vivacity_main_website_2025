import React from "react";
import page_footer from "../assets/images/strip.png";

function Strip() {
  return (
    <div className="relative w-full mt-10">
      <div className="w-full h-auto relative">
        <img
          src={page_footer}
          alt="Page Footer Strip"
          className="w-full h-full object-cover min-h-[40px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 mix-blend-overlay" />
      </div>
    </div>
  );
}

export default Strip;
