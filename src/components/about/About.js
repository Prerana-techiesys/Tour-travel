import React, { useState, useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight, FaPaw, FaLandmark, FaHiking } from 'react-icons/fa';
import sikim from "../assets/sikkim-banner.webp";
import wildlife from "../assets/wildlife.webp";
import heritage from "../assets/heritage.webp";
import trekking from "../assets/trekking.webp";
import Footer from "../footer/Footer";
import tajmahal from "../assets/tajmahal.webp";
import hill from "../assets/hill.webp";
import ladak from "../assets/leh-ladakh-tour.webp";
import piligrim from "../assets/pilgrim.webp";
import rajasthan from "../assets/rajasthan.webp";
import himachal from "../assets/himachal.webp";
import jammuKashmir from "../assets/j&k.webp";
import goa from "../assets/goa.webp";
import Type from "../types/Type";
import pili from "../assets/pilgrim.webp";
import './About.css';

const destinations = {
  "North India": [
    { name: "Rajasthan", packages: "30+", image: rajasthan },
    { name: "Himachal", packages: "60+", image: himachal },
    { name: "Jammu & Kashmir", packages: "30+", image: jammuKashmir },
    { name: "Goa", packages: "30+", image: goa },
  ],
  "South India": [
    { name: "Kerala", packages: "30+", image: rajasthan },
    { name: "Sikkim", packages: "60+", image: himachal },
    { name: "Tamil Nadu", packages: "30+", image: jammuKashmir },
    { name: "Andhra Pradesh", packages: "30+", image: goa },
  ],
  "East India": [
    { name: "Karnataka", packages: "30+", image: rajasthan },
    { name: "Andhra Pradesh", packages: "60+", image: himachal },
    { name: "Madhya Pradesh", packages: "30+", image: jammuKashmir },
    { name: "Kerala", packages: "30+", image: goa },
  ],
  "West India": [
    { name: "West Bengal", packages: "30+", image: rajasthan },
    { name: "Delhi", packages: "60+", image: himachal },
    { name: "Jammu & Kashmir", packages: "30+", image: jammuKashmir },
    { name: "Kolkata", packages: "30+", image: goa },
  ],
  "Central India": [
    { name: "Kerala", packages: "30+", image: rajasthan },
    { name: "Gujarat", packages: "60+", image: himachal },
    { name: "Mumbai", packages: "30+", image: jammuKashmir },
    { name: "Haryana", packages: "30+", image: goa },
  ],
};

const About = () => {
  const [activeTab, setActiveTab] = useState("North India");
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const words = useMemo(() => ["Incredible India", "Holistic Vacation", "Architectural Masterpieces", "Plethora of Monuments"], []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[wordIndex];
      const isLastChar = charIndex === currentWord.length;
      const isFirstChar = charIndex === 0;

      setText(currentWord.substring(0, charIndex));
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (isLastChar && !isDeleting) {
        setIsDeleting(true);
        setTimeout(() => {}, 1000); // Pause at the end of the word
      } else if (isFirstChar && isDeleting) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, isDeleting ? 100 : 200);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    prevArrow: <FaChevronLeft className="slider-arrow prev" />,
    nextArrow: <FaChevronRight className="slider-arrow next" />,
  };

  const packageSliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <FaChevronLeft className="slider-arrow prev" />,
    nextArrow: <FaChevronRight className="slider-arrow next" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const activeDestinations = destinations[activeTab];

  return (
    <>
      <div className="homepage">
        <div className="main-slider">
          <Slider {...mainSliderSettings}>
            <div className="slide">
              <img src={sikim} alt="Sikkim Landscape" />
              <div className="slide-content">
                <h2>Best of Sikkim Tour</h2>
                <p>Tourism, travel for pleasure</p>
                <p>8 Nights - 9 Days</p>
              </div>
            </div>
            <div className="slide">
              <img src={tajmahal} alt="Taj Mahal" />
              <div className="slide-content">
                <h2>Explore the Taj Mahal</h2>
<p>Tour of duty, a period of time spent in military service</p>
                <p>5 Nights - 6 Days</p>
              </div>
            </div>
            <div className="slide">
              <img src={hill} alt="Hills" />
              <div className="slide-content">
                <h2>Hill Station Adventure</h2>
                <p>Campus tour, a journey through a college or university's campus</p>
                <p>7 Nights - 8 Days</p>
              </div>
            </div>
            <div className="slide">
              <img src={ladak} alt="Leh Ladakh" />
              <div className="slide-content">
                <h2>Leh Ladakh Expedition</h2>
                <p>Guided tour, a journey through a location, directed by a guide</p>
                <p>10 Nights - 11 Days</p>
              </div>
            </div>
            {/* Add more slides here if needed */}
          </Slider>
        </div>

        <div className="packages-section">
          <h2>Let us plan you a perfect <span className="highlight">India Holiday</span></h2>
          <p>Custom-Crafted Tour Packages for Unforgettable Holiday Experiences in India.</p>
          
          <Slider {...packageSliderSettings}>
            <div className="package-card">
              <FaPaw className="icon" />
              <h3>Wildlife</h3>
              <p>70+ Packages</p>
              <img src={wildlife} alt="Wildlife Packages" />
            </div>
            <div className="package-card">
              <FaLandmark className="icon" />
              <h3>Heritage</h3>
              <p>25+ Packages</p>
              <img src={heritage} alt="Heritage Packages" />
            </div>
            <div className="package-card">
              <FaHiking className="icon" />
              <h3>Trekking</h3>
              <p>70+ Packages</p>
              <img src={trekking} alt="Trekking Packages" />
            </div>
            <div className="package-card">
              <FaHiking className="icon" />
              <h3>Pilgrim</h3>
              <p>30+ Packages</p>
              <img src={piligrim} alt="Pilgrim Packages" />
            </div>
            {/* Add more package cards if needed */}
          </Slider>
        </div>
      </div>

      <div className="app">
        <h1>Explore Top Destinations by Region</h1>
        <Type activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="destination-cards">
          {activeDestinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <img src={destination.image} alt={destination.name} />
              <div className="destination-info">
                <h3>{destination.name}</h3>
                <p>{destination.packages} PACKAGES</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='part-3'>
        <div className='abt-change'>
          <div className='abt-txt'>
            <h1>About <span>{text}</span> </h1> 
          </div>
        </div>
        <div className='abt-img'>
          <img src={pili} alt='India Landscape' />
        </div>
      </div>

      <div className='abt-description'>
        <p>
          Interesting and Intriguing, India offers incredible holiday 
          experiences through its cultural, topography, and wildlife 
          diversity. With these amazing and unique experiences, this
          South Asian country conveniently finds its way into the 
          world tourism map as one of the finest destinations for 
          a holistic vacation. India establishes its identity as
          the country of architectural masterpieces, making it 
          an ideal travel destination to plan a heritage tour in 
          the world. While Taj Mahal makes for the major draw on
          an India tour, there are a plethora of monuments and 
          edifices in every India travel guide displaying the 
          fine architecture and grandiose of different eras in 
          the country.
        </p>
      </div>


      <Footer />
    </>
  );
};

export default About;
