
import React from "react";
import vivacityLogo from "../assets/images/VivacityLogo.png";
import FacebookIcon from "../assets/images/facebookLogo.png";
import InstagramIcon from "../assets/images/instagramLogo.png";
import TwitterIcon from "../assets/images/twitterLogo.png";
import FooterBackground from "../assets/images/FooterBackground.png";
import TestBackground from "../assets/images/Testbg.png";

function Footer() {
  return (
    <div className="relative"
    style={{backgroundImage: `url(${TestBackground})`
      
    }}>
      <div
        className="relative mx-auto"
        style={{
          
          margin: "0 auto",
          aspectRatio: "1280 / 543", 
          padding: "7.5rem 0", 
        }}
      >
        
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${FooterBackground})`,
          }}
        />
        
        <div
          className="relative z-10 h-full px-[6rem] flex justify-between items-center"
          style={{
            gap: "4rem", 
          }}
          >
          
          <div className="flex flex-col items-start mb-6">
            <img src={vivacityLogo} alt="Vivacity Logo" className="w-[30rem] mb-6" /> 
            <p className="text-black text-lg font-medium">
              Developed by GDG on Campus, LNMIIT
            </p>
            <p className="text-black text-lg font-medium">
              Designed by Vivacity. All rights reserved.
            </p>
          </div>

         
          <div className="flex flex-col items-end mb-6">
            
            <div className="flex space-x-6 mb-6">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook" className="w-8 h-8 object-contain" /> 
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Twitter" className="w-8 h-8 object-contain" /> 
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" className="w-8 h-8 object-contain" /> 
              </a>
            </div>

           
            <div className="flex flex-wrap sm:flex-nowrap space-x-6 mb-6">
              <a href="#" className="text-black text-lg font-medium hover:underline">
                Home
              </a>
              <a href="#" className="text-black text-lg font-medium hover:underline">
                Sponsors
              </a>
              <a href="#" className="text-black text-lg font-medium hover:underline">
                Events
              </a>
              <a href="#" className="text-black text-lg font-medium hover:underline">
                The Team
              </a>
            </div>

            
            <div className="flex flex-col items-end space-y-2">
              <p className="text-black text-lg font-medium">For further queries,</p>
              <p className="text-black text-lg font-medium">
                Ayush Dhanesha: +91 9998523792
              </p>
              <p className="text-black text-lg font-medium">
                Shubhanshu Singhal: +91 8949024851
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
