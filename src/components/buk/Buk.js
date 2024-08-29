import React from 'react';
import './Buk.css'; // Ensure you have the correct path
import im1 from '../assets/bk3.png';
import im2 from '../assets/bk4.png';
import im3 from '../assets/bk7.png';
import Footer from "../footer/Footer";

const Itinerary = () => {
  const itineraryItems = [
    {
      day: 'Day 1',
      title: "Welcome to St. John's",
      description: "After a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show more",
      imageUrl: im1,
    },
    {
      day: 'Day 2',
      title: 'Relaxation & Exploration',
      description: "After a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show more",
      imageUrl: im2,
    },
    {
      day: 'Day 3',
      title: 'Farewell & Departure',
      description: "After a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show more",
      imageUrl: im3,
    },
  ];

  return (
    <>
    <div className="itinerary-container">
      <h2>Your Itinerary</h2>
      <div className="itinerary-timeline">
        {itineraryItems.map((item, index) => (
          <div key={index} className="itinerary-item">
            <div className="day-circle">
              <span>{index + 1}</span>
            </div>
            <span className="day-text">{item.day}</span>
            {index < itineraryItems.length - 1 && <div className="line"></div>}
          </div>
        ))}
      </div>
      <div className="itinerary-content">
        {itineraryItems.map((item, index) => (
          <div key={index} className="itinerary-card">
            <img src={item.imageUrl} alt={item.title} className="itinerary-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>


    <div className="map-container">
      <h2>Service Location</h2>
      <iframe
        width="100%"
        height="500"
        style={{ border: "0" }}
        loading="lazy"
        allowFullScreen
        src="https://maps.google.com/maps?width=1000&amp;height=500&amp;hl=en&amp;q=London,%20UK+(Petty%20France)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        title="Google Maps Location"
      ></iframe>
    </div>
    <Footer />
    </>
  );
};

export default Itinerary;
