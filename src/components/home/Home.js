import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import './Home.css'; 
import video from "../assets/video1.mp4";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Footer from "../footer/Footer";
import { IoLocationOutline } from "react-icons/io5";
import { FcViewDetails } from "react-icons/fc";
import { motion } from 'framer-motion';
import img1 from "../assets/imgs1.jpeg";
import img2 from "../assets/imgs2.jpeg";
import img3 from "../assets/imgs3.jpeg";
import img4 from "../assets/imgs4.jpeg";
import img5 from "../assets/imgs5.jpeg";
import img6 from "../assets/imgs6.jpeg";
import img7 from "../assets/imgs3.jpeg";
import img8 from "../assets/imgs5.jpeg";
import img9 from "../assets/imgs2.jpeg";

const destinations = [
  { id: 1, img: img1, title: "Submarine Under Sea", location: "Australia", price: "$100" },
  { id: 2, img: img2, title: "Nature Walk", location: "Switzerland", price: "$200" },
  { id: 3, img: img3, title: "Taj Mahal", location: "Agra", price: "$300" },
  { id: 4, img: img4, title: "Tower", location: "Russia", price: "$400" },
  { id: 5, img: img5, title: "Great Barrier Reef", location: "Antarctica", price: "$500" },
  { id: 6, img: img6, title: "Monuments", location: "Egypt", price: "$600" },
  { id: 7, img: img7, title: "Eiffel Tower", location: "France", price: "$700" },
  { id: 8, img: img8, title: "Grand Canyon", location: "USA", price: "$800" },
  { id: 9, img: img9, title: "Mount Fuji", location: "Japan", price: "$900" },
];

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='overlay'>
          <video src={video} muted autoPlay loop type='video/mp4'></video>
        </div>

        <div className='homeContent'>
          <span className='textDiv'>Tours and Trip packages, Globally</span>
          <h1 className='homeTitle'>Search, compare and book 15,000+ multiday tours all over the world.</h1>

          <div className='cardDiv'>
            <div className='dataInput'>
              <label htmlFor='destination'>Search your destination:</label>
              <div className='input'>
                <input type='text' placeholder='Enter your location' id='destination' />
                <GrLocation className='icon' />
              </div>
            </div>

            <div className='dataInput'>
              <label htmlFor='date'>Select your date:</label>
              <div className='input'>
                <input type='date' placeholder='mm/dd/yyyy' id='date' />
              </div>
            </div>

            <div className='priceInput'>
              <div className='label_total'>
                <label htmlFor='price'>Max price:</label>
                <h3 className='total'>$5000</h3>
              </div>
              <div className='input'>
                <input type='range' max='5000' min='100' id='price' />
              </div>
            </div>
          </div>

          <div className='searchOptions'>
            <HiFilter className='icon' />
           <a href="/"><span>MORE FILTERS</span></a> 
          </div>

          <div className='homeFooterIcons flex'>
            <div className='rightIcons'>
              <FiFacebook className='icon' />
              <AiOutlineInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
            <div className='leftIcons'>
              <BsListTask className='icon' />
              <TbApps className='icon' />
            </div>
          </div>
        </div>
      </section>

      <section className='main container section'>
        <div className='secTitle'>
          <h3 className='title'>Most visited destinations</h3>
        </div>

        <div className='secContent'>
          {destinations.map((destination) => (
            <motion.div
              className='subsection'
              key={destination.id}
              initial={{ scale: 0.5, rotate: 0 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <img src={destination.img} alt={destination.title} />
              <h1>{destination.title}</h1>
              <IoLocationOutline />
              <span>{destination.location}</span>
              <hr></hr>

              <div className='context'>
                <div className='context1'>
                  <h3>Culture<br />Relax
                    <button className='btn1'>+1</button>
                  </h3>
                </div>
                <div className='txt'>
                  <span>{destination.price}</span>
                </div>
              </div>
              <hr></hr>
              <p>
                Travel is movement for any purpose, business or pleasure.
                Touring often but not always means a vacation trip to see 
                a different place. Depending on the context, a tour could mean 
                visiting websites that provide travel reviews, trip fares, or both.
              </p>
          <a href="/"> <button className='btn2'>DETAILS <FcViewDetails /></button></a>   
            </motion.div>
))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
