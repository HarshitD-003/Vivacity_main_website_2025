// import React from "react";
// import Image1 from "../../assets/images/left1.png";
// import Image2 from "../../assets/images/top1.png";
// import Image3 from "../../assets/images/top2.png";
// import Image4 from "../../assets/images/right1.png";
// import Image5 from "../../assets/images/bottom1.png";
// import Image6 from "../../assets/images/bottom2.png";
// import Image7 from "../../assets/images/viva_logo_hero.png";
// import styles from "./Herox.module.css";
// import VivaMobile from "../../assets/images/Vivalogo_mobile.png";
// function Herox() {
//     return (
//         <div>
//             <div className="aspect-[20/13] text-center flex items-center align-center justify-center bg-yellow-200 max-[636px]:hidden">
//                 <div className="flex items-center align-center justify-center relative w-[100%] h-[100%] ">
//                     {/*

//                     <div className="absolute left-1"><img src={Image1}></img></div>
//                     <div className="absolute left-1 top-0"><img src={Image2}></img></div>

//                     */}
//                     <img src={Image7} className="w-[40%] h-auto translate-x-[-2%] translate-y-[3%]"></img>
//                     {/* fixed images*/}

//                     <div className="absolute top-[1%] left-[0%] w-[30%] h-auto">
//                         <img src={Image1} alt="" className={`w-full h-full object-cover rounded-lg`} />
//                     </div>
//                     <div className="absolute top-[0%] left-[1%] w-[57%] h-auto">
//                         <img src={Image2} alt="" className={`w-full h-full object-cover rounded-lg `} />
//                     </div>
//                     <div className="absolute top-[0%] right-[0%] w-[50%] h-auto">
//                         <img src={Image3} alt="" className={`w-full h-full object-cover rounded-lg `} />
//                     </div>
//                     <div className="absolute top-[2.5%] right-[0%] w-[30%] h-auto">
//                         <img src={Image4} alt="" className={`w-full h-full object-cover rounded-lg `} />
//                     </div>
//                     <div className="absolute bottom-[0%] left-[-1%] w-[66%] h-auto">
//                         <img src={Image5} alt="" className={`w-full h-full object-cover rounded-lg `} />
//                     </div>
//                     <div className="absolute bottom-[0%] right-[0%] w-[37%] h-auto">
//                         <img src={Image6} alt="" className={`w-full h-full object-cover rounded-lg `} />
//                     </div>
//                 </div>
//             </div>
//             <div className={`text-center flex items-center align-center justify-center w-[100vw]  ${styles.HeroMobile} aspect-[131/284] hidden max-[636px]:block`}>
//                 <div className={`text-center w-[100%] h-[100%] ${styles.HeroTop} flex items-center align-center justify-center relative`}>
//                     <div className="w-[100%] grid place-items-center relative"><img src={VivaMobile} className="w-[74%] h-auto translate-y-[-25%] "></img></div>
//                     <div className={`absolute bottom-[28.5%]  w-[100%] h-[12.5%] ${styles.RegisterStrip} flex items-center align-center justify-center font-rfabb text-[1.25rem]`}><button className={`${styles.StripButton} pt-[2.5%] pb-[2.5%] pr-[1.5%] pl-[1.5%] text-center w-[60%] h-auto max-w-[200px]`}>{`Register Now ->`}</button></div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Herox;



import React from "react";
import { motion } from "framer-motion";
import Image1 from "../../assets/images/left1.png";
import Image12 from "../../assets/images/left12.png";
import Image2 from "../../assets/images/top1.png";
import Image22 from "../../assets/images/top12.png";
import Image3 from "../../assets/images/top2.png";
import Image32 from "../../assets/images/top22.png";
import Image4 from "../../assets/images/right1.png";
import Image42 from "../../assets/images/right12.png";
import Image5 from "../../assets/images/bottom1.png";
import Image52 from "../../assets/images/bottom12.png";
import Image6 from "../../assets/images/bottom2.png";
import Image62 from "../../assets/images/bottom22.png";
import Image7 from "../../assets/images/viva_logo_hero.png";
import styles from "./Herox.module.css";
import VivaMobile from "../../assets/images/Vivalogo_mobile.png";

function Herox() {
    return (
        <div className="overflow-hidden">
            <div className="aspect-[20/13] text-center flex items-center align-center justify-center bg-yellow-200 max-[636px]:hidden">
                <div className="flex items-center align-center justify-center relative w-[100%] h-[100%]">
                    <img
                        src={Image7}
                        className="w-[40%] h-auto translate-x-[-2%] translate-y-[3%]"
                        alt="Viva Logo"
                    />

                    <motion.div
                        className="absolute top-[2.7%] left-[-0.9%] w-[31%] h-full overflow-hidden "
                        whileHover="hover"
                    >
                        <motion.img
                            src={Image1}
                            className="w-[98.1%] absolute top-[-3.8%] h-full object-contain z-10 "
                            alt=""
                            variants={{
                                hover: { x: 10, y: 10 }
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <div
                            className="absolute inset-0 z-20"
                            style={{
                                backgroundImage: `url(${Image12})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    </motion.div>

                    <motion.div
                        className="absolute top-[0%] left-[0.7%] w-[56%] h-full overflow-hidden "
                        whileHover="hover"
                    >
                        <motion.img
                            src={Image2}
                            className="w-[99.6%] absolute top-[-31.1%] h-full object-contain z-10 pointer-events-auto"
                            alt=""
                            variants={{
                                hover: { x: 10, y: 10 }
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <div
                            className="absolute inset-0 z-20"
                            style={{
                                backgroundImage: `url(${Image22})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    </motion.div>

                    <motion.div
                        className="absolute top-[0%] right-[1.8%] w-[50%] h-full overflow-hidden"
                        whileHover="hover"
                    >
                        <motion.img
                            src={Image3}
                            className="w-[99.9%] absolute right-[-0.8%] top-[-30.1%] h-full object-contain z-10"
                            alt=""
                            variants={{
                                hover: { x: 10, y: 10 }
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <div
                            className="absolute inset-0 z-20"
                            style={{
                                backgroundImage: `url(${Image32})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    </motion.div>

                    <motion.div
                        className="absolute top-[0.5%] right-[-0.5%] w-[32%] h-full overflow-hidden"
                        whileHover="hover"
                    >
                        <motion.img
                            src={Image4}
                            className="w-[100%] absolute right-[-0.8%] top-[-17.3%] h-full object-contain z-10"
                            alt=""
                            variants={{
                                hover: { x: -10, y: -10 }
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <div
                            className="absolute inset-0 z-20"
                            style={{
                                backgroundImage: `url(${Image42})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-[-59%] left-[-1.7%] w-[68%] h-full overflow-hidden"
                        whileHover="hover"
                    >
                        <motion.img
                            src={Image52}
                            className="w-[95%] absolute right-[1.2%] top-[-30.5%] h-full object-contain z-20"
                            alt=""
                        />
                        <motion.div
                            className="absolute inset-0 z-10"
                            style={{
                                backgroundImage: `url(${Image5})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                            }}
                            variants={{
                                hover: { x: -10, y: -10 }
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    <motion.div
                        className="absolute top-[61%] right-[0%] w-[35%] h-full overflow-hidden"
                        whileHover="hover"
                    >
                        <motion.img
                            src={Image6}
                            className="w-[100%] absolute right-[-1%] top-[-30.2%] h-full object-contain z-10"
                            alt=""
                            variants={{
                                hover: { x: 10, y: -10 }
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <div
                            className="absolute inset-0 z-20"
                            style={{
                                backgroundImage: `url(${Image62})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    </motion.div>
                </div>
            </div>

            <div className={`text-center flex items-center align-center justify-center w-[100vw] ${styles.HeroMobile} aspect-[131/284] hidden max-[636px]:block`}>
                <div className={`text-center w-[100%] h-[100%] ${styles.HeroTop} flex items-center align-center justify-center relative`}>
                    <div className="w-[100%] grid place-items-center relative">
                        <img
                            src={VivaMobile}
                            className="w-[74%] h-auto translate-y-[-25%]"
                            alt="Viva Mobile"
                        />
                    </div>
                    <div className={`absolute bottom-[28.5%] w-[100%] h-[12.5%] ${styles.RegisterStrip} flex items-center align-center justify-center font-rfabb text-[1.25rem]`}>
                        <button className={`${styles.StripButton} pt-[2.5%] pb-[2.5%] pr-[1.5%] pl-[1.5%] text-center w-[60%] h-auto max-w-[200px]`}>
                            {`Register Now ->`}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Herox;

