import Background1 from '../../assets/images/TeampageMob.png';
import LeftBg1 from '../../assets/images/PurpledivMob.png';
import RightBg1 from '../../assets/images/YellowFrontMob.png';
import button1 from '../../assets/images/Pinkbtn_1.png';
import Abg1 from '../../assets/images/TeamAmob.png';
import Bbg1 from '../../assets/images/TeamBmob.png';
import Cbg1 from '../../assets/images/TeamCmob.png';
import Dbg1 from '../../assets/images/TeamDmob.png';
import Aimg1 from '../../assets/images/TeamAImg.png';
import Bimg1 from '../../assets/images/TeamBImg.png';
import Cimg1 from '../../assets/images/TeamCImg.png';
import Dimg1 from '../../assets/images/TeamDImg.png';
import Pin1 from '../../assets/images/PinMob.png';
import YellowBack1 from '../../assets/images/YellowbkMob.png';
import Thread1 from '../../assets/images/ThreadsMob.png'
import buttonback1 from '../../assets/images/Pinkbtn_back1.png'
import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

function TeamMob(){

    const [showPins, setShowPins] = useState(false);
    const [showThread, setShowThread] = useState(false);
    const [showImg, setShowImg] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
      
      if (location.pathname === "/teammob") { 
        const pinTimer = setTimeout(() => setShowPins(true), 800);
        const threadTimer = setTimeout(() => setShowThread(true), 1100);
        const ImageTimer = setTimeout(() => setShowImg(true), 500);
        return () => {
          clearTimeout(pinTimer);
          clearTimeout(threadTimer);
          clearTimeout(ImageTimer);
        };
      }
    }, [location.pathname]);
  
      return (
          //main div
          <div
  style={{
    position: 'relative',
    width: '100%',
    height: '0',
    paddingTop: `${(924 / 393) * 100}%`, 
    backgroundImage: `url(${Background1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: "no-repeat",
    zIndex: '3',
  }}
>
    {/* Purple Div */}
    <div
  style={{
    position: 'absolute',
    width: `${(306.63 / 393) * 100}%`,
    height: `${(335.05 / 924) * 100}%`,
    top: `${(133.44 / 924) * 100}%`,
    left: `${(43.6 / 393) * 100}%`,
    transform: 'rotate(0deg)', 
  }}
>
  <div
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${LeftBg1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid black',
      transform: 'rotate(0.88deg)', 
    }}
  >
    {/* Thread */}
    <div
    style={{
      position: 'absolute',
      width: `${(173 / 306.63) * 100}%`,
      height: `${(152 / 335.05) * 100}%`,
      top: `${(68 / 335.05) * 100}%`,
      left: `${(62 / 306.63) * 100}%`,
      backgroundImage: `url(${Thread1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transform: 'rotate(1.38deg)',
      zIndex: '3',
      transform: showThread ? "translateY(0)" : "translateY(-100%)",
      opacity: showThread ? 1 : 0,
      transition: "all 0.6s ease-out",
    }}
  />

  {/* Pin A */}
  <div
    style={{
      position: 'absolute',
      width: `${(55.35 / 306.63) * 100}%`,
      height: `${(55.35 / 335.05) * 100}%`,
      top: `${(31.33 / 335.05) * 100}%`,
      left: `${(35.04 / 306.63) * 100}%`,
      backgroundImage: `url(${Pin1})`,
      backgroundSize: 'cover',
      transform: 'rotate(0.88deg)',
      zIndex: '3',
      transform: showPins ? "translateY(0)" : "translateY(-50%)",
      opacity: showPins ? 1 : 0,
      transition: "all 0.5s ease-out",
    }}
  />

  {/* Pin B */}
  <div
    style={{
      position: 'absolute',
      width: `${(47.4 / 306.63) * 100}%`,
      height: `${(47.4 / 335.05) * 100}%`,
      top: `${(28.98 / 335.05) * 100}%`,
      left: `${(170.87 / 306.63) * 100}%`,
      backgroundImage: `url(${Pin1})`,
      backgroundSize: 'cover',
      transform: 'rotate(0.88deg)',
      zIndex: '3',
      transform: showPins ? "translateY(0)" : "translateY(-50%)",
      opacity: showPins ? 1 : 0,
      transition: "all 0.5s ease-out",
    }}
  />

  {/* Pin C */}
  <div
    style={{
      position: 'absolute',
      width: `${(51.16 / 306.63) * 100}%`,
      height: `${(51.16 / 335.05) * 100}%`,
      top: `${(176.85 / 335.05) * 100}%`,
      left: `${(83.82 / 306.63) * 100}%`,
      backgroundImage: `url(${Pin1})`,
      backgroundSize: 'cover',
      transform: 'rotate(0.88deg)',
      zIndex: '3',
      transform: showPins ? "translateY(0)" : "translateY(-50%)",
      opacity: showPins ? 1 : 0,
      transition: "all 0.5s ease-out",
    }}
  />

  {/* Pin D */}
  <div 
    style={{
      position: 'absolute',
      width: `${(50.83 / 306.63) * 100}%`,
      height: `${(50.83 / 335.05) * 100}%`,
      top: `${(143.35 / 335.05) * 100}%`,
      left: `${(203.17 / 306.63) * 100}%`,
      backgroundImage: `url(${Pin1})`,
      backgroundSize: 'cover',
      transform: 'rotate(0.88deg)',
      zIndex: '3',
      transform: showPins ? "translateY(0)" : "translateY(-50%)",
      opacity: showPins ? 1 : 0,
      transition: "all 0.5s ease-out",
      
    }}
  />

  {/* Team A */}
  <div 
  style={{
    position: 'absolute',
    width: `${(72.38 / 306.63) * 100}%`,
    height: `${(90.47 / 335.05) * 100}%`,
    top: `${(55.19 / 335.05) * 100}%`,
    left: `${(34.67 / 306.63) * 100}%`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1',
    transform: 'rotate(0deg)', 
  }}>
  <div 
    style={{
      width: '100%',
      height: '100%',
      backgroundImage: `url(${Abg1})`,
      backgroundSize: 'contain',
      backgroundRepeat: "no-repeat",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(7.04deg)',
    }}
  >
    <img
      src={Aimg1}
      alt="Team A Member"
      style={{
        width: '70%', 
        height: '60%', 
        position: 'absolute',
        top: '10%', 
        left: '15%',
        transform: showImg ? "translateY(0)" : "translateY(-100%)",
        opacity: showImg ? 1 : 0,
        transition: "all 0.2s ease-out",
      }}
    />

<span
    className="text-[1.15rem] top-[70%] sm-text-[1.4rem]   font-rfabb md:text-[1.6rem] xs:text-[1.2rem]  xs:top-[65%] xss:text-[1.2rem]  xxs:top-[65%] xxxs:text-[0.7rem]  xxxs:top-[65%] 270:text-[0.5rem]  "
    style={{
      position: 'absolute', 
      color: 'green',
      fontWeight: 'bold',  
      transform: 'rotate(4.79deg)', 
    }}
  >
    TEAM A
  </span>

  </div>
</div>
  {/* Team B */}
  <div 
    style={{
      position: 'absolute',
      width: `${(61.98 / 306.63) * 100}%`,
      height: `${(81.18 / 335.05) * 100}%`,
      top: `${(48.97 / 335.05) * 100}%`,
      left: `${(166.5 / 306.63) * 100}%`,
      padding: '2.22% 1.63% 1.00% 1.33%',
      backgroundImage: `url(${Bbg1})`,
      backgroundSize: 'contain',
      backgroundRepeat: "no-repeat",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(-4.32deg)',
      zIndex: '1',
    }}
  >
    <img src={Bimg1} 
    alt="Team B Member" 
    style={{ 
      width: '70%', 
        height: '60%', 
        position: 'absolute',
        top: '10%', 
        left: '15%',
       transform: showImg ? "translateY(0)" : "translateY(-100%)",
        opacity: showImg ? 1 : 0,
        transition: "all 0.2s ease-out",
       }}
        />

<span
              className=" text-[1.15rem] top-[70%] sm-text-[1.4rem]   font-rfabb md:text-[1.6rem] xs:text-[1.2rem]  xs:top-[65%] xss:text-[1.2rem]  xxs:top-[65%] xxxs:text-[0.7rem]  xxxs:top-[65%] 270:text-[0.5rem] "
              style={{
                position: 'absolute', 
                color: 'green',
                fontWeight: 'bold',
                transform: 'rotate(-6.57deg)',
              }}
            >
              TEAM B
            </span>
  </div>

  {/* Team C */}
  <div 
    style={{
      position: 'absolute',
      width: `${(66.9 / 306.63) * 100}%`,
      height: `${(83.63 / 335.05) * 100}%`,
      top: `${(201.01 / 335.05) * 100}%`,
      left: `${(66.28 / 306.63) * 100}%`,
      padding: '2.10% 2.52% 1.03% 2.08%',
      backgroundImage: `url(${Cbg1})`,
      backgroundSize: 'contain',
      backgroundRepeat: "no-repeat",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(7.72deg)',
      zIndex: '1',
    }}
  >
    <img src={Cimg1} alt="Team C Member" style=
    {{ 
        width: '70%', 
        height: '60%', 
        position: 'absolute',
        top: '10%', 
        left: '15%',
        transform: showImg ? "translateY(0)" : "translateY(-100%)",
        opacity: showImg ? 1 : 0,
        transition: "all 0.2s ease-out",
    }} />
    <span
              className="text-[1.15rem] top-[70%] sm-text-[1.4rem]   font-rfabb md:text-[1.6rem] xs:text-[1.2rem]  xs:top-[65%] xss:text-[1.2rem]  xxs:top-[65%] xxxs:text-[0.7rem]  xxxs:top-[65%] 270:text-[0.5rem]  "
              style={{
                
                position: 'absolute', 
                color: 'green',
                fontWeight: 'bold',
                transform: 'rotate(5.46deg)',
                
                
              }}
            >
              TEAM C
            </span>
  </div>

  {/* Team D */}
  <div 
    style={{
      position: 'absolute',
      width: `${(66.47 / 306.63) * 100}%`,
      height: `${(83.09 / 335.05) * 100}%`,
      top: `${(180.56 / 335.05) * 100}%`,
      left: `${(199.69 / 306.63) * 100}%`,
      padding: '2.07% 2.58% 1.50% 1.87%',
      backgroundImage: `url(${Dbg1})`,
      backgroundSize: 'contain',
      backgroundRepeat: "no-repeat",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(-8.51deg)',
      zIndex: '1',
    }}
  >
    <img src={Dimg1} alt="Team D Member" 
    style={{
        width: '70%', 
        height: '60%', 
        position: 'absolute',
        top: '10%', 
        left: '15%',
        transform: showImg ? "translateY(0)" : "translateY(-100%)",
        opacity: showImg ? 1 : 0,
        transition: "all 0.2s ease-out",
  }} />

<span
            className="text-[1.15rem] top-[70%] sm-text-[1.4rem]   font-rfabb md:text-[1.6rem] xs:text-[1.2rem]  xs:top-[65%] xss:text-[1.2rem]  xxs:top-[65%] xxxs:text-[0.7rem]  xxxs:top-[65%] 270:text-[0.5rem] "
            style={{
              
              position: 'absolute', 
              color: 'green',
              fontWeight: 'bold',
              transform: 'rotate(-10.77deg)',   
            }}
          >
            TEAM D
          </span>
  </div>
</div>
</div>
{/* Yellow Div  back*/}
<div
  style={{
    position: "absolute",
    width: `${(300.78 / 393) * 100}%`, 
    height: `${(344.85 / 924) * 100}%`, 
    top: `${(507.15 / 924) * 100}%`, 
    left: `${(41/ 393) * 100}%`, 
    gap: "0px",
    backgroundImage: `url(${YellowBack1})`,  
    zIndex: 2,
    backgroundSize: "cover",
    backgroundPosition: "top", 
  }}
></div>

{/* Yellow Div */}
<div
  className="absolute border flex flex-col justify-center items-center box-border"
  style={{
    width: `${(300.78 / 393) * 100}%`, 
    height: `${(344.85 / 924) * 100}%`, 
    top: `${(501 / 924) * 100}%`, 
    left: `${(47.22/ 393) * 100}%`, 
    backgroundImage: `url(${RightBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  }}
>
  {/* Text Div */}
  <div
    className="p-2 box-border text-start   text-[1.25rem] xs:text-[1.36rem] xxs:text-[1.06rem] xxxs:text-[0.75rem] 270:text-[0.75rem] sm:text-[1.65rem] md:text-[1.75rem]  lg:text-[2.05rem] font-vetosans"
    style={{
      width: `${(255 / 307) * 100}%`, 
      height: `${(225 / 351) * 100}%`, 
      top: `${(23 / 351) * 100}%`, 
      left: `${(22.78 / 307) * 100}%`, 
      position: 'absolute',
      
    }}
  >
    Meet the dreamers, doers, and<br></br> masterminds behind<br></br>{' '}
    <span
      className="font-rfabb   text-[1.25rem] xs:text-[1.45rem] xxs:text-[1rem] xxxs:text-[0.76rem] 270:text-[0.65rem] sm:text-[1.65rem] md:text-[1.65rem]  lg:text-[2.05rem] "
      style={{ color: 'rgba(144,0,0,1)' }}
    >
      VIVACITY'25
    </span>{' '}
    From envisioning <br></br>the cosmic threads of our<br></br> theme to weaving it into <br></br>reality,
    this team makes it all<br></br> happen. Tap to discover the <br></br>faces and stories of
    those who <br></br>bring the multiverse to life!
  </div>

  <div  
    style={{
      height: `${((351 - (23 + 225)) / 351) * 100}%`, 
      width: '100%',
    }}
  />
<div 
        style={{
          backgroundImage: `url(${buttonback1})`,
          width: `${(201.23 / 307) * 100}%`, 
          height: `${(51.78 / 351) * 100}%`, 
          top: `${(274.94 / 351) * 100}%`,
          left: `${(20.78 / 307) * 100}%`, 
          borderWidth: '6px',
          position: "absolute",
          zIndex:'3',
          backgroundSize: "cover",
           backgroundPosition: "top",
           border:'black'
        }}></div>
  {/* Button Div */}
  <button
    className="text-black  border-black "
    style={{
      backgroundImage: `url(${button1})`,
      width: `${(201.82 / 307) * 100}%`, 
      height: `${(51.78 / 351) * 100}%`, 
      top: `${(272 / 351) * 100}%`,
      left: `${(21.96 / 307) * 100}%`, 
      
      position: 'absolute',
      zIndex:'4',
      backgroundSize: "cover",
           backgroundPosition: "top",
    }}
  >
    <p className="xs:text-[1.5rem] text-[1.25rem] xxs:text-[1.357rem] xxxs:text-[1.16rem] 270:text-[0.95rem] sm:text-[1.76rem] md:text-[1.78rem]  lg:text-[2.05rem] font-rfabb">
      Meet Them!
    </p>
  </button>
</div>

</div>

      )
}

export default TeamMob;