import React from 'react';
import Herox from './Herox';
import About from './About';
import "./forParallex.css";

const ParallaxWrapper = () => {
    return (
        <div className="parallax-container relative min-h-screen overflow-hidden">
            <div className="fixed inset-0 z-[-10] w-full h-full">
                <Herox/>
            </div>
            <div className="parallax-content relative z-10 mt-[100vh] w-full">
                <About/>
            </div>
        </div>
    )
}

export default ParallaxWrapper
