import React from "react";
const aws = import.meta.env.VITE_AWS;

const BgBlue = `${aws}/BlueBg.webp`;

import angeleyes from "../assets/videos/angeleyes.png";
import brb from "../assets/videos/brb.png";
import cbc from "../assets/videos/cbc.jpeg";
import coolberg from "../assets/videos/coolberg.png";
import festee from "../assets/videos/festee.png";
import freedo from "../assets/videos/freedo.png";
import instax from "../assets/videos/instax.jpg";
import krafton from "../assets/videos/krafton.png";
import noya from "../assets/videos/noya.png";
import ohi from "../assets/videos/ohi.png";
import petaindia from "../assets/videos/petaindia.jpg";
import pinkcity from "../assets/videos/pinkcity.jpg";
import rr from "../assets/videos/rr.png";
import sah from "../assets/videos/sah.png";
import stellar from "../assets/videos/stellar.png";
import ubuntufoundations from "../assets/videos/ubuntufoundations.png";
import unstop from "../assets/videos/unstop.png";
import zebronics from "../assets/videos/zebronics.png";
import placeholder from "../assets/videos/placeholder.png";

const images = [
    { name: "Pink City Heritage", title: "Cafe Partner", url: pinkcity },
    { name: "Freedo Rentals", title: "Rental Partner", url: freedo },
    { name: "Krafton", title: "Mobile Gaming Partner", url: krafton },
    { name: "RR", title: "LNMIIT Invites Rajasthan Royals on Campus", url: rr },
    { name: "Le Nirvana Studio", title: "Bob Sponsor", url: placeholder },
    { name: "BRB", title: "Munching Partner", url: brb },
    { name: "Unstop", title: "Platform Partner", url: unstop },
    { name: "Radio City 91.1 FM", title: "Radio and Media Partner", url: placeholder },
    { name: "Zebronics", title: "Audio Partner", url: zebronics },
    { name: "Coolberg", title: "Official Beverage Partner", url: coolberg },
    { name: "Noya Waters", title: "Hydration Partner", url: noya },
    { name: "Car Lust", title: "Official Car Rental Partner", url: placeholder },
    { name: "Smart and Handsome", title: "Official Self Care Partner", url: sah },
    { name: "OHI", title: "Ticketing Partner", url: ohi },
    { name: "Instax", title: "Moments Partner", url: instax },
    { name: "Pink Square", title: "Mall Partner", url: placeholder },
    { name: "Peta India", title: "Animal Rights Partner", url: petaindia },
    { name: "Ubuntu Foundations", title: "Animal Welfare Partner", url: ubuntufoundations },
    { name: "Angel Eyes", title: "Animal Welfare Partner", url: angeleyes },
    { name: "Stellar", title: "Web3 Partner", url: stellar },
    { name: "JRF ADDA", title: "Education Partner", url: placeholder },
    { name: "Festee", title: "Merchandise Partner", url: festee },
    { name: "CBC", title: "Brand Partner", url: cbc }
  ];

function Sponsors() {
    return (
        <div className="w-full min-h-screen py-10" style={{ backgroundImage: `url(${BgBlue})` }}>
            <h2 className="text-3xl font-bold text-center mb-10">Thank You to Our Sponsors!</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
                {images.map((sponsor, index) => (
                    <div key={index} className="bg-gray-400 shadow-md rounded-lg p-4 flex flex-col items-center text-center">
                        <img src={sponsor.url} alt={sponsor.name} className="w-32 h-32 object-contain mb-4" />
                        <h3 className="text-xl font-semibold">{sponsor.name}</h3>
                        <p className="text-gray-600">{sponsor.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sponsors;
