import React from "react";
import Herox from "../components/Home/Herox";
import About from "../components/Home/About";
import Portal from "../components/Home/Portal";
import Infinite from "../components/subPages/Infinite";
import PastArtists from "../components/Home/PastArtists";
import Events from "../components/Home/Events";
import Legacy from "../components/Home/Legacy";
import Strip from "../components/Home/strip";
import Mascot from "../components/Home/Mascot";
import ParallaxWrapper from "../components/Home/ParallaxWrapper";
function Home() {
  return (
    <div>
      <ParallaxWrapper/>
      <Portal />
      <Infinite text="YOU'RE ON THE OTHER SIDE OF PORTAL...   WELCOME TO THE MULTIVERSE!!!" />
      <PastArtists />
      <Events />
      <Strip />
      <Legacy />
      <Strip />
      <Mascot />
    </div>
  );
}

export default Home;
