import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      <Slider {...settings}>
      <div className="text-center font-inter">
                <img src="images/sir.png" className="mx-auto w-60 h-60 border border-black  rounded-full object-contain"></img>
                <div className="text-2xl md:text-3xl font-bold mt-8">Mr. Tejash Prakash</div>
                <div className="text-xl md:text-2xl font-semibold text-red-500 mt-8">Founder | CEO</div>
                <div className="text-lg md:text-xl text-balance my-8 text-neutral-500">He is the founder of First Track Solution Technologies Private Limited and well established business person. He evokes the brightest minds to be told rising technologies.</div></div>

            <div className="text-center font-inter">
                <img src="images/about2.webp" className="mx-auto w-60 h-60 border border-black rounded-full object-cover"></img>
                <div className="text-2xl md:text-3xl font-bold mt-8">Ms. Toral Barbhaya</div>
                <div className="text-xl md:text-2xl font-semibold text-red-500 mt-8">Director | COO</div>
                <div className="text-lg md:text-xl text-balance my-8 text-neutral-500">She is the director of the company. She drives the business initiatives, 
transportation the spirit of innovation 
and eventually guaranteeing the most 
effective quality of package solutions for patrons..</div>
            </div>
            {/*
            <div className="text-center font-inter">
                    <div className="text-2xl font-bold mb-5">MR.PRABHANJAN KU. PATTNAIK</div>
                    <div className="text-xl text-orange-500 font-semibold mb-5">CO-FOUNDER</div>
                    <div className="text-balance">Prabhanjan serves as a transformational coach and trainer, aiding both individuals and corporations in achieving substantial changes in key areas such as organizational dynamics, humanistic approaches, communication, creativity, public speaking, and leadership.</div>
                </div>
                <div className="text-center font-inter">
                    <div className="text-2xl font-bold mb-5">MR.DEBASISH MAHAPATRO</div>
                    <div className="text-xl text-orange-500 font-semibold mb-5">CO-FOUNDER | CTO</div>
                    <div className="text-balance">Debasish, a tech-savvy professional, stays on the pulse of emerging software trends. He spearheads technology initiatives, fostering an atmosphere of innovation and ultimately ensuring the utmost quality in software development.</div>
                </div>
                <div className="text-center font-inter">
                    <div className="text-2xl font-bold mb-5 mt-16">MR.PARMESH PANDA</div>
                    <div className="text-xl text-orange-500 font-semibold mb-5">CO-FOUNDER</div>
                    <div className="text-balance">Parmesh exudes charisma and professionalism as a highly adept businessperson. He consistently showcases exceptional skills and unwavering dedication when addressing challenges.</div>
                </div>*/}
      </Slider>
    </div>
  );
};

export default AboutSlider;
