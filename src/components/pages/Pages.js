import React, { useState } from 'react';
import './Pages.css';
import trainImage from '../assets/luxury-train-sec.webp'; // Update with your actual image path
import Wedding from '../assets/wedding-sec.webp';
import ayurvedic from '../assets/ayurveda-tourism-sec.webp';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Sub from "../subpart/Sub";

const sections = [
  {
    title: 'Luxury Trains',
    subtitle: 'Luxurious Rail Escapade',
    description: 'Experience The Epitome Of Luxury While Traversing India\'s Stunning Landscapes.',
    image: trainImage,
  },
  {
    title: 'Destination Weddings',
    subtitle: 'A Grand Affair',
    description: 'Celebrate Your Love In Exotic Locations With Our Tailored Wedding Packages.',
    image:Wedding , // Replace with appropriate image path
  },
  {
    title: 'Medical Tourism',
    subtitle: 'Health & Wellness',
    description: 'Rejuvenate Your Body & Soul With Our Premium Medical Tourism Packages.',
    image: ayurvedic, // Replace with appropriate image path
  },
];

const LuxuryTrains = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? sections.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === sections.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <div className="luxury-trains-container">
      <div className="content">
        <h1>{sections[activeIndex].title}</h1>
        <h2>{sections[activeIndex].subtitle}</h2>
        <p>{sections[activeIndex].description}</p>
        <a href='pages'><button className="learn-more-button">Learn More</button></a>
      </div>
      <div className="image-container">
        <img src={sections[activeIndex].image} alt={sections[activeIndex].title} />
      </div>
      <div className="navigation">
        <FaRegArrowAltCircleLeft className="nav-arrow left-arrow" onClick={handlePrev} />
        <div className="nav-buttons">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`nav-btn ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {section.title}
            </button>
          ))}
        </div>
        <FaRegArrowAltCircleRight  className="nav-arrow right-arrow" onClick={handleNext} />
      </div>
    </div>
    <Sub/>
  
    </>
   
    
  );
};

export default LuxuryTrains;
