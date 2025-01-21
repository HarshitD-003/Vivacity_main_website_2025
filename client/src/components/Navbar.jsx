// import React, { useState, useEffect } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import NavImage from "../assets/images/nav_logo.webp";
// import register from "../assets/images/register_button.webp";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const location = useLocation();

//     useEffect(() => {
//         const handleScroll = () => {
//             const offset = window.scrollY;
//             setScrolled(offset > 50);
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location.pathname]);

//     const handleLinkClick = () => {
//         setIsOpen(false);
//     };

//     return (
//         <nav className={`
//             fixed w-full top-0 z-50
//             transition-all duration-300 ease-in-out
//             ${scrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-[#17153a]'}
//         `}>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6">
//                 <div className="flex items-center justify-between md:justify-around h-16 sm:h-18 md:h-20">
//                     {/* Logo */}
//                     <div className="flex-shrink-0 ">
//                         <Link
//                             to="/"
//                             onClick={handleLinkClick}
//                         >
//                             <img className='w-32 md:w-40' src={NavImage} />
//                         </Link>
//                     </div>

//                     <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
//                         {['HOME', 'EVENTS', 'SPONSORS', 'OUR\u00A0TEAM'].map((item) => (
//                             <NavLink
//                                 key={item}
//                                 to={`/${item}`}
//                                 onClick={handleLinkClick}
//                                 className={({ isActive }) => `
//                                     relative group px-2 py-2 md:px-3
//                                     text-base md:text-lg
//                                     font-medium transition-all duration-300
//                                     ${isActive ? 'text-orange-400' : 'text-white hover:text-orange-300'}
//                                 `}
//                             >
//                                 {item}
//                             </NavLink>
//                         ))}
//                     </div>
//                     <div className='hidden lg:flex'>
//                         <Link to="/">
//                             <span className='bg-transparent text-white border-2 h-10 w-28 p-[9px] px-3 rounded-[25px] text-center'>
//                                Register Now
//                             </span>
//                         </Link>
//                     </div>

//                     <div className="lg:hidden">
//                         <button
//                             className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-300 transition-colors duration-300 focus:outline-none"
//                             onClick={() => setIsOpen(!isOpen)}
//                             aria-expanded={isOpen}
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             {isOpen ? <X size={24} /> : <Menu size={24} />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className={`
//                 lg:hidden
//                 transition-all duration-300 ease-in-out
//                 ${isOpen ? 'max-h-96  opacity-80' : 'max-h-0 opacity-0 overflow-hidden'}
//                 ${scrolled ? 'bg-black/90 backdrop-blur-sm ' : 'bg-[#17153a]'}
//             `}>
//                 <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6n">
//                     {['Home', 'Events', 'Sponsors','Our\u00A0Team'].map((item) => (
//                         <NavLink
//                             key={item}
//                             to={`/${item}`}
//                             onClick={handleLinkClick}
//                             className={({ isActive }) => `
//                                 block px-3 py-2 rounded-md text-base font-medium
//                                 transition-all duration-300 ease-in-out
//                                 ${isActive
//                                     ? 'bg-gray-900 text-orange-400'
//                                     : 'text-white hover:bg-gray-700 hover:text-orange-300'}
//                             `}
//                         >
//                             {item}
//                         </NavLink>
//                     ))}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import NavImage from "../assets/images/nav_logo.webp";
import SmallNavImg from "../assets/images/small_viva_img.webp";

const navItems = [
  { Name: "HOME", Link: "/" },
  { Name: "EVENTS", Link: "/events" },
  { Name: "SPONSORS", Link: "/sponsors" },
  { Name: "OUR TEAM", Link: "/OurTeam" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav
        className={`absolute w-full top-0 z-50 transition-all duration-300 ease-in-out
            ${
              scrolled
                ? "bg-black/90 backdrop-blur-sm shadow-lg"
                : "bg-[#04091D]"
            }
        `}
      >
        <div className="max-w-full mx-auto sm:px-6">
          <div className="flex items-center justify-between pl-9 pr-9 xl:pl-10 xl:pr-10 py-2  sm:h-18 md:h-24">
            <div className="sm:hidden block  smallNav">
              <img src={SmallNavImg} alt="" />
            </div>
            <div className="flex-shrink-0 hidden sm:block ">
              <Link to="/" onClick={handleLinkClick}>
                <img className="w-32 md:w-40" src={NavImage} />
              </Link>
            </div>

            <div className="hidden lg:flex items-center font-rfabb space-x-4 xl:space-x-10 text-2xl">
              {navItems.map((item) => (
                <NavLink
                  key={item.Name}
                  to={`${item.Link}`}
                  onClick={handleLinkClick}
                  className={({ isActive }) => `
                                    relative group px-2 py-2 md:px-3
                                    text-base md:text-lg
                                    font-medium transition-all duration-300
                                    ${
                                      isActive
                                        ? "text-orange-400"
                                        : "text-white hover:text-orange-300"
                                    }
                                `}
                >
                  {item.Name}
                </NavLink>
              ))}
            </div>
            <div className="hidden font-rfabb lg:flex">
              <Link to="/NormalRegistration">
                <span className="bg-transparent w-fit text-white border-2 border-blue-500 h-9 p-[2px] px-3 rounded-[25px] text-center flex items-center gap-2 hover:bg-white/10 transition-all duration-300 text-xl">
                  Register Now -&gt;
                </span>
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                className="inline-flex border-2 border-blue-500 items-center justify-center p-1 rounded-xl text-white hover:text-orange-300 transition-colors duration-300 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X size={35} /> : <Menu size={35} />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`
                lg:hidden top-[0]
                transition-all duration-300 ease-in-out
                ${
                  isOpen
                    ? "max-h-96  opacity-80"
                    : "max-h-0 opacity-0 overflow-hidden"
                }
                ${scrolled ? "bg-black/90 backdrop-blur-sm " : "bg-[#04091D]"}
            `}
        >
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6n">
            {navItems.map((item) => (
              <NavLink
                key={item.Name}
                to={`${item.Link}`}
                onClick={handleLinkClick}
                className={({ isActive }) => `
                                block px-3 py-2 rounded-md text-base font-medium
                                transition-all duration-300 ease-in-out
                                ${
                                  isActive
                                    ? "bg-gray-900 text-orange-400"
                                    : "text-white hover:bg-gray-700 hover:text-orange-300"
                                }
                            `}
              >
                {item.Name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
