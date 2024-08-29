import React from 'react';
import "./Book.css";
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';
import bk1 from "../assets/bk1.png";
import bk2 from "../assets/bk2.png";
import bk3 from "../assets/bk3.png";
import bk4 from "../assets/bk4.png";
import bk5 from "../assets/bk6.png";
import bk6 from "../assets/bk7.png";
import Buk from "../buk/Buk";

const Book = () => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1.2 }}
    >
      <div className='tour-details'>
        <h1>Tour Details</h1>
        <div className='content1'>
          <div className='price'>
            <h2>Price</h2>
            <p>620$</p>
            <span>7 Days Tour on 2 person</span>
          </div>
          <div className='hotel'>
            <h2>5 Star</h2>
            <p>Hotel</p>
            <span>Hotels to choose</span>
          </div>
          <div className='flight'>
            <h2>Flight date</h2>
            <p>17</p>
            <span>September or later</span>
          </div>
        </div>
        <div className='search-bar'>
          <input type='text' placeholder='Enter Destination' />
          <input type='text' placeholder='Where From?' />
          <input type='date' placeholder='Departing' />
          <input type='date' placeholder='Returning' />
          <input type='text' placeholder='Travel Type' />
          <button>Search</button>
        </div>
      </div>

      <div className='hh'>
        <h1> Just booked! Get your spot before it's too late</h1>
        <div className='book1'>
          <div className='bkk1'>
            <img className='bk1' src={bk1} alt='' />
            <img className='bk2' src={bk2} alt='' />
          </div>
          <div className='bkk2'>
            <img src={bk3} alt='' />
            <img src={bk4} alt='' />
            <img src={bk5} alt='' />
            <img src={bk6} alt='' />
          </div>
        </div>

        <div className='bo'>
          <h2>Fill Booking Details</h2>
        
        <div className="form-container">
          <form action="#" method="POST">
            <div className="form-group">
              <label htmlFor="name">
                <i className="fas fa-user"></i> Name
              </label>
              <input type="text" id="name" name="name" placeholder="Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Email
              </label>
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                <i className="fas fa-phone"></i> Phone
              </label>
              <input type="tel" id="phone" name="phone" placeholder="Phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="departing">
                <i className="fas fa-plane-departure"></i> Departing
              </label>
              <input type="date" id="departing" name="departing" required />
            </div>

            <div className="form-group">
              <label htmlFor="returning">
                <i className="fas fa-plane-arrival"></i> Returning
              </label>
              <input type="date" id="returning" name="returning" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <i className="fas fa-comment"></i> Message
              </label>
              <textarea id="message" name="message" placeholder="Type" rows="4" required></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Book Now
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
      </div>
    </motion.div>
    <div class="included-section">
  <h2>Included</h2>
  <div class="included-grid">
    <div class="included-item">
      <div class="icon"><i class="fas fa-utensils"></i></div>
      <h3>Food</h3>
      <p>3 breakfasts, 3 dinners</p>
    </div>
    <div class="included-item">
      <div class="icon"><i class="fas fa-hotel"></i></div>
      <h3>Accommodations</h3>
      <p>3 nights in a hotel</p>
    </div>
    <div class="included-item">
      <div class="icon"><i class="fas fa-bus-alt"></i></div>
      <h3>Transportation</h3>
      <p>2 boat rides, 1 car ride</p>
    </div>
    <div class="included-item">
      <div class="icon"><i class="fas fa-glass-martini-alt"></i></div>
      <h3>Drinks</h3>
      <p>Water, tea, coffee, beer</p>
    </div>
    <div class="included-item">
      <div class="icon"><i class="fas fa-ticket-alt"></i></div>
      <h3>Tickets</h3>
      <p>Entrance fee</p>
    </div>
    <div class="included-item">
      <div class="icon"><i class="fas fa-hiking"></i></div>
      <h3>Equipment</h3>
      <p>Outdoor gear, safety</p>
    </div>
  </div>
</div>
<Buk />

    </>
  );
};

export default Book;
