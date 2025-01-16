import Background from "../../assets/images/MacBook Air - 1.png";
import Title1 from '../../assets/images/DanceTitle.png'
import Title2 from '../../assets/images/DanceTitle2.png';
import subtitle1 from '../../assets/images/Subheading.png'
import Topleft from '../../assets/images/TopLeftimg.png'
import Topright from '../../assets/images/TopRightimg.png'
import MiddleLeft from '../../assets/images/MiddleLeftimg.png'
import MiddleRight from '../../assets/images/MiddleRightimg.png'
import BottomLeft from '../../assets/images/BottomLeftimg.png'
import BottomRight from '../../assets/images/BottomRightimg.png'
import Topleftdiv from '../../assets/images/Topleftdiv.png'
import TopRightdiv from '../../assets/images/TopRight.png'
import Streetdance from '../../assets/images/Streetdance.png'
import TalNarang from '../../assets/images/TalTarang.png'
import Razzmataaz from '../../assets/images/Razzmaatazz.png'
import Middleleftdiv from '../../assets/images/MiddleLeftdiv.png'
import Middlerightdiv from '../../assets/images/MiddleRightDiv.png'
import Bottomleftdiv from '../../assets/images/BottomleftDiv.png'
import BottomRightdiv from '../../assets/images/Bottomrightdiv.png'
import PumpItUp from '../../assets/images/PumpItUp.png'
import Letstangle from '../../assets/images/LetsTangle.png'
import mudra from '../../assets/images/Mudra.png'

import Background1 from "../../assets/images/iPhone 14 & 15 Pro - 2.png";
import Title21 from '../../assets/images/Name.png'
import subtitle2 from '../../assets/images/Cash Prize.png'
import Topleft1 from '../../assets/images/TopLeftimg.png'
import Topright1 from '../../assets/images/Mobdancediv.png'
import MiddleLeft1 from '../../assets/images/TopRightimg.png'
import MiddleRight1 from '../../assets/images/Pump It Up.png'
import BottomLeft1 from '../../assets/images/MiddleLeftimg.png'
import BottomRight1 from '../../assets/images/BottomRightimg.png'
import Topleftdiv1 from '../../assets/images/Subtext-19.png'
import TopRightdiv1 from '../../assets/images/Subtext-20.png'
import Middleleftdiv1 from '../../assets/images/Subtext-21.png'
import Middlerightdiv1 from '../../assets/images/Cash Prize-2.png'
import Bottomleftdiv1 from '../../assets/images/Subtext-22.png'
import BottomRightdiv1 from '../../assets/images/Subtext-23.png'
import PumpItUp1 from '../../assets/images/Text-7.png'
import Letstangle1 from '../../assets/images/Event Name-2.png'
import mudra1 from '../../assets/images/Event Name-6.png'
import Streetdance1 from '../../assets/images/Event Name.png'
import TalNarang1 from '../../assets/images/Event Name-3.png'
import Razzmataaz1 from '../../assets/images/Event Name-5.png'
import Button_Component from "./Button_component";
function Page() {
    return (
        <div>
            <div className="md:block hidden">
                <div
                    className="bg-cover bg-center flex flex-col items-center pt-[6rem] max-[802px]:pt-[10rem] "
                    style={{
                        backgroundImage: `url(${Background})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        aspectRatio: "1280 / 1756",
                        position: "relative",
                    }}
                >
                    {/* Content Div */}
                    <div className=" items-center mt-[2rem]"
                        style={{
                            position: "absolute",
                            height: "84.70%",
                            width: "93.82%",
                            top: "9.62%",
                            left: "3.12%",


                        }}
                    >                  {/* Title */}
                        <div
                            style={{

                                position: "relative",
                                width: "51.71%",
                                aspectRatio: "621 / 140",
                                left: "24.23%",
                                backgroundImage: `url(${Title2})`,
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat",
                                zIndex: '1'

                            }}
                        >   {/* SubTitle */}

                        </div>
                        {/* Row1 left */}
                        <div style={{
                            position: "absolute",
                            width: "46.46%",
                            aspectRatio: "558 /354",
                            top: '14.89%',
                            backgroundImage: `url(${Topleft})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex: '1'
                        }}>
                            {/* Title topleft */}
                            <div
                                style={{

                                    position: "relative",
                                    width: "37.43%",
                                    aspectRatio: "209 /54.75",
                                    left: "3.40%",
                                    top: '64.12%',
                                    backgroundImage: `url(${Streetdance})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: '1'

                                }}
                            >  </div>
                            {/* SubTitle  topleft*/}
                            <div className="px-4" style={{

                                position: "relative",
                                width: "79.39%",
                                aspectRatio: "443 /56.2",
                                left: "5.53%",
                                top: '60.5%',
                                backgroundImage: `url(${Topleftdiv})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                zIndex: '2',
                                overflow: 'hidden',


                            }}>
                                <p className="font-rfabb align-middle 1280:text-[0.9vw] lg:text-[0.90vw] md:text-[0.7vw]  1400:text-[0.9vw] 1500:text-[0.9vw] 1600:text-[0.9vw] 1980:text-[0.9vw] text-start mt-1 ">Let the streets bear witness to electrifying<br></br> performances and exhilarating beats. Let your spirits<br></br> soar with street dance!  </p>
                            </div>

                        </div>
                        {/* Row 1 right */}
                        <div className=" " style={{
                            position: "absolute",
                            width: "51.2%",
                            aspectRatio: "615 /353",
                            top: '14.89%',
                            left: '48.79%',
                            backgroundImage: `url(${Topright})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex: '1'
                        }}>

                            {/* Title topright */}
                            <div
                                style={{

                                    position: "relative",
                                    width: "37.43%",
                                    aspectRatio: "209/ 54.74",
                                    left: "60%",
                                    top: '68.36%',
                                    backgroundImage: `url(${TalNarang})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: '1'

                                }}
                            >  </div>
                            {/* SubTitle topright */}
                            <div className="px-4" style={{

                                position: "relative",
                                width: "75.71%",
                                aspectRatio: "465 /46",
                                left: "19%",
                                top: '64.3%',
                                backgroundImage: `url(${TopRightdiv})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                zIndex: '2',
                                overflow: 'hidden'

                            }}>
                                <p className="font-rfabb text-[0.7vw] lg:text-[0.9vw] md:text-[0.9vw] 1280:text-[0.84rem] 1400:text-[0.87rem] 1500:text-[1rem] 1600:text-[1.2rem] 1980:text-[1.4rem] text-start mt-1">Duet with a partner as your symphonies collide against<br></br> each other in this competition of melodies. </p>
                            </div>

                        </div>






                        {/* Row2 left */}
                        <div className=" " style={{
                            position: "absolute",
                            width: "52.53%",
                            aspectRatio: "631 /354",
                            top: '40.58%',
                            backgroundImage: `url(${MiddleLeft})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex: '1'
                        }}>
                            {/* Title midleft */}
                            <div
                                style={{

                                    position: "relative",
                                    width: "37.43%",
                                    aspectRatio: "209 /54.75",
                                    left: "3.40%",
                                    top: '64.12%',
                                    backgroundImage: `url(${Razzmataaz})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: '1'

                                }}
                            >  </div>
                            {/* SubTitle middleleft */}
                            <div className="px-4" style={{

                                position: "relative",
                                width: "75.71%",
                                aspectRatio: "465 /46",
                                left: "6%",
                                top: '60.3%',
                                backgroundImage: `url(${Middleleftdiv})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                zIndex: '2',
                                overflow: 'hidden'

                            }}>
                                <p className="font-rfabb lg:text-[0.9vw] md:text-[0.9vw] 1280:text-[0.84rem] 1400:text-[0.97rem] 1500:text-[1rem] 1600:text-[1.2rem] 1980:text-[1.4rem]  2100:text-[1.6rem] text-start mt-1"> Set the stage on fire as you unleash the rhythm and<br /> showcase your choreography in this dance battle.</p>
                            </div>
                        </div>

                        {/* Row2 right */}
                        <div className="px-4 " style={{
                            position: "absolute",
                            width: "45.2%",
                            aspectRatio: "542 /354",
                            top: '40.55%',
                            left: '54.89%',
                            backgroundImage: `url(${MiddleRight})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex: '1'
                        }}>
                            {/* Title middleright */}
                            <div
                                style={{

                                    position: "relative",
                                    width: "37.43%",
                                    aspectRatio: "209 /54.75",
                                    left: "3.40%",
                                    top: '62.12%',
                                    backgroundImage: `url(${PumpItUp})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: '1'

                                }}
                            >  </div>
                            {/* SubTitle middleright */}
                            <div className="px-4" style={{

                                position: "relative",
                                width: "82.71%",
                                aspectRatio: "446 /60",
                                left: "7%",
                                top: '61.3%',
                                backgroundImage: `url(${Middlerightdiv})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                zIndex: '2',
                                overflow: 'hidden'

                            }}>
                                <p className="font-rfabb lg:text-[0.8vw] md:text-[0.7vw] 1280:text-[0.8vw] 1400:text-[0.8vw] 1500:text-[0.8vw] text-[0.8vw] text-start mt-1 "> Let the beats flow and your body move! Engage<br /> yourself in solo western performances where rhythm<br /> is everything.</p>
                            </div>
                        </div>

                        {/* Row3 left */}
                        <div className="" style={{
                            position: "absolute",
                            width: "46.79%",
                            aspectRatio: "562/354",
                            top: '66.27%',
                            backgroundImage: `url(${BottomLeft})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex: '1'
                        }}>
                            {/* Title bottomleft */}
                            <div
                                style={{

                                    position: "relative",
                                    width: "37.11%",
                                    aspectRatio: "209 /55.75",
                                    left: "58.89%",
                                    top: '16.12%',
                                    backgroundImage: `url(${Letstangle})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: '1'

                                }}
                            />
                            {/* SubTitle bottomleft */}
                            <div className="px-4" style={{

                                position: "absolute",
                                width: "82.71%",
                                aspectRatio: "464 /43",
                                left: "12%",
                                top: '5%',
                                backgroundImage: `url(${Bottomleftdiv})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                zIndex: '2',
                                overflow: 'hidden'

                            }}>
                                <p className="font-rfabb lg:text-[0.8vw] md:text-[0.8vw] 1280:text-[0.83vw] text-[0.8vw] text-start mt-1"> Duet with a partner as your symphonies collide against<br /> each other in this competition of melodies.</p>
                            </div>

                        </div>

                        {/* Row3 right */}
                        <div className="" style={{
                            position: "absolute",
                            width: "50.87%",
                            aspectRatio: "611/351",
                            top: '66.27%',
                            left: '49.12%',
                            backgroundImage: `url(${BottomRight})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex: '1'
                        }}>
                            {/* Title bottomright */}
                            <div
                                style={{

                                    position: "relative",
                                    width: "22.91%",
                                    aspectRatio: "140 /52.75",
                                    left: "3%",
                                    top: '62.55%',
                                    backgroundImage: `url(${mudra})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: '1'

                                }}
                            />
                            {/* SubTitle bottomright */}
                            <div className="px-4" style={{

                                position: "absolute",
                                width: "72.99%",
                                aspectRatio: "446 /60",
                                left: "10%",
                                top: '75%',
                                backgroundImage: `url(${BottomRightdiv})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                zIndex: '2',
                                overflow: 'hidden'

                            }}>
                                <p className="font-rfabb lg:text-[0.85vw] md:text-[0.8vw] 1280:text-[0.85vw]  text-[0.85vw] text-start mt-1 "> Explore the allure of the classical arts! Let light <br />descend onto the stage as you enamor yourself in<br /> elegant styles and witness the roots of dance itself!</p>
                            </div>
                        </div>


                        {/* Buttons */}
                        <div className="absolute bottom-0 w-[100%]">
                            <Button_Component showRegister={true} showRulebook={true} />
                        </div>



                    </div>
                </div>
            </div>
            <div className="md:hidden block">
                <div
                    className="min-h-screen bg-cover bg-center flex flex-col items-center"
                    style={{
                        backgroundImage: `url(${Background1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        aspectRatio: "393/ 1617",
                        position: "relative",
                    }}
                >
                    {/* Title */}
                    <div
                        style={{

                            position: "absolute",
                            width: "77.71%",
                            aspectRatio: "305/ 68.68",
                            left: "11.23%",
                            top: '2.35%',
                            backgroundImage: `url(${Title2})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex: '1'

                        }}
                    >
                    </div>
                    {/* SubTitle */}

                    <div style={{

                        position: "absolute",
                        width: "69.73%",
                        aspectRatio: "261.98 /25",
                        left: "13.53%",
                        top: '5.71%',
                        backgroundImage: `url(${subtitle2})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: '2'

                    }}>
                        <p className="font-rfabb text-[1.5rem] sm:text-[1.36rem] xs:text-[1.0rem] xxs:text-[0.85rem] xxxs:text-[0.65rem] 270:text-[0.50rem] text-center overflow-hidden"> 1 lakh cash prize + 1.5 lakh worth prizes</p>
                    </div>



                    {/*FIRST*/}
                    <div className=" " style={{
                        position: "absolute",
                        backgroundImage: `url(${Topleft1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: '93.45%',
                        aspectRatio: '358.07/204.46',
                        top: '9%'
                    }} >
                        {/* Title  */}
                        <div
                            style={{

                                position: "absolute",
                                width: "40.43%",
                                aspectRatio: "146/33.52",
                                top: '64.12%',
                                left: '2%',
                                backgroundImage: `url(${Streetdance1})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                zIndex: '1'

                            }}
                        >  </div>

                        <div className="px-4" style={{

                            position: "absolute",
                            width: "91.39%",
                            aspectRatio: "329/27",
                            left: "3.53%",
                            top: '79.5%',
                            backgroundImage: `url(${Topleftdiv1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex: '2',
                            overflow: 'hidden',


                        }}>
                            <p className="font-rfabb md:text-[0.3vw] text-[1.6vw]  sm:text-[0.78rem] xs:text-[1.6vw] xxs:text-[1.6vw] xxxs:text-[1.6vw] 270:text-[1.6vw] mt-[1%] text-start ">Let the streets bear witness to electrifying performances and exhilarating beats. Let your spirits soar with street dance! </p>
                        </div>
                    </div>

                    {/*SECOND*/}
                    <div className=" " style={{
                        position: "absolute",
                        backgroundImage: `url(${Topright1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: '93.45%',
                        aspectRatio: '358.07/204.46',
                        top: '23.2%'
                    }} >
                        {/* Title  */}
                        <div
                            style={{

                                position: "absolute",
                                width: "40.43%",
                                aspectRatio: "146/33.52",
                                top: '64.12%',
                                left: '2%',
                                backgroundImage: `url(${Letstangle1})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                zIndex: '1'

                            }}
                        >  </div>

                        <div className="px-4" style={{

                            position: "absolute",
                            width: "91.39%",
                            aspectRatio: "329/39",
                            left: "3.53%",
                            top: '77.5%',
                            backgroundImage: `url(${TopRightdiv1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex: '2',
                            overflow: 'hidden',


                        }}>
                            <p className="font-rfabb md:text-[0.8vw] sm:text-[0.78rem] xs:text-[1.9vw] xxs:text-[1.9vw] xxxs:text-[1.9vw] 270:text-[1.8vw] text-start mt-[2%] ">The classic Steve Harvey show! Come and be a witness to the recreation of one of the most popular reality shows of all time, at Family Feud: the game show!</p>
                        </div>
                    </div>


                    {/*THIRD*/}
                    <div className=" " style={{
                        position: "absolute",
                        backgroundImage: `url(${MiddleLeft1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: '93.45%',
                        aspectRatio: '358.07/204.46',
                        top: '37.4%'
                    }} >
                        {/* Title  */}
                        <div
                            style={{

                                position: "absolute",
                                width: "40.43%",
                                aspectRatio: "146/33.52",
                                top: '64.12%',
                                left: '2%',
                                backgroundImage: `url(${TalNarang1})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                zIndex: '1'

                            }}
                        >  </div>

                        <div className="px-4" style={{

                            position: "absolute",
                            width: "91.39%",
                            aspectRatio: "329/39",
                            left: "3.53%",
                            top: '76.5%',
                            backgroundImage: `url(${Middleleftdiv1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex: '2',
                            overflow: 'hidden',


                        }}>
                            <p className="font-rfabb md:text-[1.2vw] sm:text-[2vw] xs:text-[.73rem] xxs:text-[0.6rem] xxxs:text-[0.4rem] 270:text-[0.35rem] text-start mt-[2.5%]">Duet with a partner as your symphonies collide against each other in this competition of melodies.</p>
                        </div>
                    </div>

                    {/*FOURTH*/}
                    <div className=" " style={{
                        position: "absolute",
                        backgroundImage: `url(${MiddleRight1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: '93.45%',
                        aspectRatio: '358.07/204.46',
                        top: '51.8%'
                    }} >
                        {/* Title  */}
                        <div
                            style={{

                                position: "absolute",
                                width: "40.43%",
                                aspectRatio: "146/33.56",
                                top: '64.12%',
                                left: '2%',
                                backgroundImage: `url(${PumpItUp1})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                zIndex: '1'

                            }}
                        >  </div>

                        <div className="px-4" style={{

                            position: "absolute",
                            width: "81.39%",
                            aspectRatio: "329/39",
                            left: "3.53%",
                            top: '77.5%',
                            backgroundImage: `url(${Middlerightdiv1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex: '2',
                            overflow: 'hidden',


                        }}>
                            <p className=" font-rfabb md:text-[0.8rem] sm:text-[2vw] xs:text-[.73rem] xxs:text-[2vw] xxxs:text-[2vw] 270:text-[2vw] text-start mt-[2.5%] ">Let the beats flow and your body move! Engage yourself in solo western performances where rhythm is everything.</p>
                        </div>
                    </div>


                    {/*FIFTH*/}
                    <div className=" " style={{
                        position: "absolute",
                        backgroundImage: `url(${BottomLeft1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: '93.45%',
                        aspectRatio: '358.07/204.46',
                        top: '66%'
                    }} >
                        {/* Title  */}
                        <div
                            style={{

                                position: "absolute",
                                width: "40.43%",
                                aspectRatio: "146/33.56",
                                top: '64.12%',
                                left: '2%',
                                backgroundImage: `url(${Razzmataaz1})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                zIndex: '1'

                            }}
                        >  </div>

                        <div className="px-4" style={{

                            position: "absolute",
                            width: "91.39%",
                            aspectRatio: "329/28",
                            left: "3.53%",
                            top: '76.5%',
                            backgroundImage: `url(${Bottomleftdiv1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex: '2',
                            overflow: 'hidden',


                        }}>
                            <p className="font-rfabb md:text-[0.8rem] sm:text-[2vw] xs:text-[2vw] xxs:text-[2vw] xxxs:text-[2vw] 270:text-[2vw] text-start mt-[1%] ">Set the stage on fire as you unleash the rhythm and showcase your choreography in this dance battle.</p>
                        </div>
                    </div>


                    {/*SIXTH*/}
                    <div className=" " style={{
                        position: "absolute",
                        backgroundImage: `url(${BottomRight1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: '93.45%',
                        aspectRatio: '358.07/204.46',
                        top: '80.24%'
                    }} >
                        {/* Title  */}
                        <div
                            style={{

                                position: "absolute",
                                width: "40.43%",
                                aspectRatio: "105/33.53",
                                top: '50.12%',
                                left: '2%',
                                backgroundImage: `url(${mudra1})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                zIndex: '1'

                            }}
                        >  </div>

                        <div className="px-4" style={{

                            position: "absolute",
                            width: "91.39%",
                            aspectRatio: "329/39",
                            left: "3.53%",
                            top: '69.5%',
                            backgroundImage: `url(${BottomRightdiv1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex: '2',
                            overflow: 'hidden',


                        }}>
                            <p className="font-rfabb md:text-[0.8rem] sm:text-[2vw] xs:text-[2vw] xxs:text-[2vw] xxxs:text-[2vw] 270:text-[2vw] text-start mt-[1%]">Explore the allure of the classical arts! Let light descend onto the stage as you enamor yourself in elegant styles and witness the roots of dance itself!</p>
                        </div>
                    
                    </div>
                    <div className="w-[100%] absolute bottom-0 p-[5%]">
                        <Button_Component showRegister={true} showRulebook={true} />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Page;
