import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./Pack.css";
import Footer from "../footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoMdContacts } from "react-icons/io";
import { FaRegMap } from "react-icons/fa6";
import londonImg from '../assets/london.jpg'; // Replace with actual image paths
import bostonImg from '../assets/Boston.jpg';
import parisImg from  "../assets/paris.jpg";
import chicagoImg from '../assets/chicago.jpg';
import dubaiImg from '../assets/paris.jpg';

const FAQ = ({ FAQs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            {FAQs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(index)}>
                        <span>Q. {faq.question}</span>
                        <FontAwesomeIcon
                            icon={activeIndex === index ? faChevronUp : faChevronDown}
                            className="faq-icon"
                        />
                    </div>
                    {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
                </div>
            ))}
        </div>
    );
};

const Pack = () => {
    const FAQs = [
        {
            question: 'Are there any tour guides available during a Golden Triangle India tour?',
            answer: 'Yes, tour guides are available during a Golden Triangle India tour depending on the requirements.',
        },
        {
            question: 'Is travel insurance included in your Golden Triangle tour packages?',
            answer: 'Travel insurance is not typically included in our packages, but it can be arranged upon request.',
        },
        {
            question: 'Are there any local activities where I can participate in your tour packages?',
            answer: 'Yes, there are various local activities available, including cultural experiences and adventure sports.',
        },
        {
            question: 'What is the cancellation policy for a Golden Triangle India tour?',
            answer: 'Our cancellation policy varies depending on the timing and reason for the cancellation. Please contact us for details.',
        },
    ];

    const cities = [
        { name: 'London', img: londonImg },
        { name: 'Boston', img: bostonImg },
        { name: 'Paris', img: parisImg },
        { name: 'Chicago', img: chicagoImg },
        { name: 'Dubai', img: dubaiImg },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 30, // Adjust this value to slow down the autoplay
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

    return (
        <>
            <div className='part'>
                <h3>
                    Personalise your travel
                    planning with Trips
                </h3>
                <p>
                    Now there’s two ways to plan your trip—use AI or search on your own.
                    Either way, you’ve got more than 8 million spots <br />
                    to discover, with over one billion traveller reviews and opinions to guide you.
                </p>

                <div className='iconic'>
                    <div className='ico'>
                        <FaLocationCrosshairs />
                        <p>Get personalised recs with AI</p>
                    </div>
                    <div className='ico'>
                        <CiHeart />
                        <p>Save hotels, restaurants, and more</p>
                    </div>
                    <div className='ico'>
                        <FaRegMap />
                        <p>See your saves on your custom map</p>
                    </div>
                    <div className='ico'>
                        <IoMdContacts />
                        <p>Share and collab with your travel buds</p>
                    </div>
                </div>

                <div className='part-1'>
                    <div className='autoplay'>
                        <h1>Use AI to plan a trip to a traveller-loved spot</h1>
                        <div className="carousel-container">
                            <Slider {...settings}>
                                {cities.map((city, index) => (
                                    <div key={index} className="carousel-slide">
                                        <img src={city.img} alt={city.name} className="carousel-image" />
                                        <div className="carousel-overlay">
                                            <FaLocationDot className="location-icon" />
                                            <h2>{city.name}</h2>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pricing-table">
        <div class="pricing-card silver">
            <div class="header">
                <h3>PACK SILVER</h3>
                <h2>$14.99</h2>
                <p>month</p>
            </div>
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Many variations of passages</li>
                <li>Contrary to popular belief</li>
                <li>It is a long established fact</li>
                <li>Lorem ipsum dolor sit amet</li>
            </ul>
            <button>BUY NOW</button>
        </div>
        <div class="pricing-card gold">
            <div class="header">
                <h3>PACK GOLD</h3>
                <h2>$24.99</h2>
                <p>month</p>
            </div>
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Many variations of passages</li>
                <li>Contrary to popular belief</li>
                <li>It is a long established fact</li>
                <li>Lorem ipsum dolor sit amet</li>
            </ul>
            <button>BUY NOW</button>
        </div>
        <div class="pricing-card bronze">
            <div class="header">
                <h3>PACK BRONZE</h3>
                <h2>$4.99</h2>
                <p>month</p>
            </div>
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Many variations of passages</li>
                <li>Contrary to popular belief</li>
                <li>It is a long established fact</li>
                <li>Lorem ipsum dolor sit amet</li>
            </ul>
            <button>BUY NOW</button>
        </div>
    </div>

            {/* Render the FAQ Component */}
            <FAQ FAQs={FAQs} />
            
            <Footer />
        </>
    );
}

export default Pack;
