import React from 'react';
import './Footer.css';
import vid from '../assets/video.mp4';

const Footer = () => {
  return (
    <div className="footer">
      <div className="video-background">
        <video src={vid} muted autoPlay loop type="video/mp4"></video>
        <div className="overlay">
          <div className="subscribe">
            <h3>Keep in Touch</h3>
            <div className="form">
              <input type="email" placeholder="Enter Email Address" />
              <button type="submit">SEND</button>
            </div>
          </div>
          <div className="footer-content">
            <div className="left">
              <h4>Travel.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing
              elit Ut enim ad minim veniam.</p>
              <div className="social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
            <div className="right">
              <div className="column">
                <h5>OUR AGENCY</h5>
                <ul>
                <a href='packing'><li>Services</li></a> 
                 <a href='/'><li>Agency</li></a>   
                 <a href='about'><li>Tourism</li></a>  
                 <a href='pack'><li>Payment</li></a>           
                 
                  
                </ul>
              </div>
              <div className="column">
                <h5>PARTNERS</h5>
                <ul>
                <a href='book'><li>Booking</li></a>           
                <a href='contact'><li>RentalCar</li></a>           
                <a href='contact'><li>HostelWorld</li></a>           
                <a href='packing'><li>TripAdvisor</li></a>           
                </ul>
              </div>
              <div className="column">
                <h5>LAST MINUTE</h5>
                <ul>
                <a href='sub'><li>London</li></a>           
                <a href='sub'><li>California</li></a>           
                <a href='sub'><li>Indonesia</li></a>           
                <a href='sub'><li>Europe</li></a>           
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom-bar">
            <span>BEST TRAVEL WEBSITE THEME</span>
            <span>COPYRIGHT RESERVED © BESTSHOP 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
