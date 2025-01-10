import Background from "../../assets/images/DanceEventsBg.png";
import Title1 from '../../assets/images/DanceTitle.png'
import subtitle1 from '../../assets/images/Subheading.png'
import Topleft from '../../assets/images/TopLeftimg.png'
import Topright from '../../assets/images/TopRightimg.png'
import MiddleLeft from '../../assets/images/MiddleLeftimg.png'
import MiddleRight from '../../assets/images/MiddleRightimg.png'
import BottomLeft from '../../assets/images/BottomLeftimg.png'
import BottomRight from '../../assets/images/BottomRightimg.png'
import Topleftdiv from '../../assets/images/TopLeftdiv.png'
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
function Page() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center"
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
      <div className=" items-center"
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
                            backgroundImage: `url(${Title1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    >   {/* SubTitle */}
                        <div  style={{
                        
                        position: "relative",
                        width: "82.73%", 
                        aspectRatio: "513.91 /51.16",
                        left: "8.53%",
                        top:'90.71%' ,
                        backgroundImage: `url(${subtitle1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2'
    
                 }}>
                    <p className="font-rfabb text-[1.5rem] lg:text-[1.2rem] md:text-[0.88rem] w-[850px]:text-[1rem] 1400:text-[1.6rem] 1600:text-[1.7rem] 1980:text-[1.83rem] text-center"> 1 lakh cash prize + 1.5 lakh worth prizes</p>
                    </div>
                </div>
                    {/* Row1 left */}
                <div  style={{
                        position: "absolute",
                        width: "46.46%", 
                        aspectRatio: "558 /354",
                        top:'14.89%' ,
                        backgroundImage: `url(${Topleft})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'1'
                }}>
                    {/* Title topleft */}
                    <div
                     style={{
                        
                            position: "relative",
                            width: "37.43%", 
                            aspectRatio: "209 /54.75",
                            left: "3.40%", 
                            top:'64.12%',
                            backgroundImage: `url(${Streetdance})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    >  </div> 
                    {/* SubTitle  topleft*/}
                    <div className="px-4" style={{
                        
                        position: "relative",
                        width: "79.39%", 
                        aspectRatio: "443 /56.2",
                        left: "5.53%",
                        top:'60.5%' ,
                        backgroundImage: `url(${Topleftdiv})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className="font-rfabb 1280:text-[0.8rem] lg:text-[0.63rem] md:text-[0.48rem] 1400:text-[0.87rem] 1500:text-[0.97rem] 1600:text-[1.05rem] 1980:text-[1.26rem] 2100:text-[1.4rem] text-start ">Let the streets bear witness to electrifying<br></br> performances and exhilarating beats. Let your spirits<br></br> soar with street dance!  </p>
            </div>
                    
                </div>
                     {/* Row 1 right */}
                    <div className=" " style={{
                         position: "absolute",
                         width: "51.2%", 
                         aspectRatio: "615 /353",
                         top:'14.89%' ,
                         left:'48.79%',
                         backgroundImage: `url(${Topright})`,
                         backgroundSize: "cover",
                         backgroundRepeat: "no-repeat",
                         zIndex:'1'
                    }}>
                        {/* Title topright */}
                    <div
                     style={{
                        
                            position: "relative",
                            width: "37.43%", 
                            aspectRatio: "209/ 54.74",
                            left: "60%", 
                            top:'68.36%',
                            backgroundImage: `url(${TalNarang})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    >  </div> 
                   {/* SubTitle topright */}
                 <div className="px-4" style={{
                      
                      position: "relative",
                      width: "75.71%", 
                      aspectRatio: "465 /46",
                      left: "19%",
                      top:'64.3%' ,
                      backgroundImage: `url(${TopRightdiv})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      zIndex:'2',
                      overflow:'hidden'
  
               }}>
                  <p className="font-rfabb text-[0.7rem] lg:text-[0.7rem] md:text-[0.56rem] 1280:text-[0.84rem] 1400:text-[0.87rem] 1500:text-[1rem] 1600:text-[1.2rem] 1980:text-[1.4rem] text-start">Duet with a partner as your symphonies collide against<br></br> each other in this competition of melodies. </p>
                  </div>

     </div>

                      

                 


                     {/* Row2 left */}
                <div className=" " style={{
                        position: "absolute",
                        width: "52.53%", 
                        aspectRatio: "631 /354",
                        top:'40.58%' ,
                        backgroundImage: `url(${MiddleLeft})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'1'
                }}>
                    {/* Title midleft */}
                    <div
                     style={{
                        
                            position: "relative",
                            width: "37.43%", 
                            aspectRatio: "209 /54.75",
                            left: "3.40%", 
                            top:'64.12%',
                            backgroundImage: `url(${Razzmataaz})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    >  </div> 
                    {/* SubTitle middleleft */}
                 <div  className="px-4" style={{
                      
                      position: "relative",
                      width: "75.71%", 
                      aspectRatio: "465 /46",
                      left: "6%",
                      top:'60.3%' ,
                      backgroundImage: `url(${Middleleftdiv})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      zIndex:'2',
                      overflow:'hidden'
  
               }}>
                  <p className="font-rfabb lg:text-[0.7rem] md:text-[0.56rem] 1280:text-[0.84rem] 1400:text-[0.97rem] 1500:text-[1rem] 1600:text-[1.2rem] 1980:text-[1.4rem]  2100:text-[1.6rem] text-start"> Set the stage on fire as you unleash the rhythm and<br/> showcase your choreography in this dance battle.</p>
                  </div>
                </div>

                            {/* Row2 right */}
                    <div  className="px-4 " style={{
                         position: "absolute",
                         width: "45.2%", 
                         aspectRatio: "542 /354",
                         top:'40.55%' ,
                         left:'54.89%',
                         backgroundImage: `url(${MiddleRight})`,
                         backgroundSize: "cover",
                         backgroundRepeat: "no-repeat",
                         zIndex:'1'
                    }}>
                        {/* Title middleright */}
                        <div
                     style={{
                        
                            position: "relative",
                            width: "37.43%", 
                            aspectRatio: "209 /54.75",
                            left: "3.40%", 
                            top:'62.12%',
                            backgroundImage: `url(${PumpItUp})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    >  </div>
                             {/* SubTitle middleright */}
                    <div className="px-4" style={{
                      
                      position: "relative",
                      width: "82.71%", 
                      aspectRatio: "446 /60",
                      left: "7%",
                      top:'61.3%' ,
                      backgroundImage: `url(${Middlerightdiv})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      zIndex:'2',
                      overflow:'hidden'
  
               }}>
                  <p className="font-rfabb lg:text-[0.62rem] md:text-[0.42rem] 1280:text-[0.75rem] 1400:text-[0.85rem] 1500:text-[1rem] 1600:text-[1.0rem] 1980:text-[1.2rem]  2100:text-[1.3rem] text-start "> Let the beats flow and your body move! Engage<br/> yourself in solo western performances where rhythm<br/> is everything.</p>
                  </div>
                </div>
                
                     {/* Row3 left */}
                <div className=""  style={{
                        position: "absolute",
                        width: "46.79%", 
                        aspectRatio: "562/354",
                        top:'66.27%' ,
                        backgroundImage: `url(${BottomLeft})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'1'
                }}>
                    {/* Title bottomleft */}
                    <div
                     style={{
                        
                            position: "relative",
                            width: "37.11%", 
                            aspectRatio: "209 /55.75",
                            left: "58.89%", 
                            top:'16.12%',
                            backgroundImage: `url(${Letstangle})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    />   
                          {/* SubTitle bottomleft */}
                         <div className="px-4" style={{
                      
                      position: "absolute",
                      width: "82.71%", 
                      aspectRatio: "464 /43",
                      left: "12%",
                       top:'5%',
                      backgroundImage: `url(${Bottomleftdiv})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      zIndex:'2',
                      overflow:'hidden'
  
               }}>
                  <p className="font-rfabb lg:text-[0.72rem] md:text-[0.52rem] 1280:text-[0.83rem] 1400:text-[0.95rem] 1500:text-[1.1rem] 1600:text-[1.2rem] 1980:text-[1.4rem]  2100:text-[1.5rem] text-start"> Duet with a partner as your symphonies collide against<br/> each other in this competition of melodies.</p>
                  </div>

                </div>

                        {/* Row3 right */}
                    <div className="" style={{
                        position: "absolute",
                        width: "50.87%", 
                        aspectRatio: "611/351",
                        top:'66.27%' ,
                        left:'49.12%',
                        backgroundImage: `url(${BottomRight})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'1'
                }}>
                    {/* Title bottomright */}
                    <div
                     style={{
                        
                            position: "relative",
                            width: "22.91%", 
                            aspectRatio: "140 /52.75",
                            left: "3%", 
                            top:'62.55%',
                            backgroundImage: `url(${mudra})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    />   
                    {/* SubTitle bottomright */}
                    <div className="px-4" style={{
                      
                      position: "absolute",
                      width: "72.99%", 
                      aspectRatio: "446 /60",
                      left: "10%",
                       top:'75%',
                      backgroundImage: `url(${BottomRightdiv})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      zIndex:'2',
                      overflow:'hidden'
  
               }}>
                  <p className="font-rfabb lg:text-[0.64rem] md:text-[0.492rem] 1280:text-[0.83rem] 1400:text-[0.89rem] 1500:text-[0.93rem] 1600:text-[1.03rem] 1980:text-[1.2rem]  2100:text-[1.35rem] text-start "> Explore the allure of the classical arts! Let light <br/>descend onto the stage as you enamor yourself in<br/> elegant styles and witness the roots of dance itself!</p>
                  </div>
                    </div>
                    
                
                     {/* Buttons */}
                


    
    </div>
 </div>
  );
}

export default Page;
