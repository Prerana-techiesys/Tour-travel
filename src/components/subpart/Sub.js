import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import "./Sub.css";
import img1 from "../assets/delhi.webp";
import img2 from "../assets/goa.webp";
import img3 from "../assets/kerala.webp";
import img4 from "../assets/ladakh.webp";
import logo1 from "../assets/ancient-egypt-tours-logo-1.webp";
import logo2 from "../assets/ties_logo_horizontal-.webp";
import logo3 from "../assets/logo-3.webp";
import logo4 from "../assets/Beyond_Escapes-53ba.webp";
import logo5 from "../assets/nutlogocoloredhorizontal.webp";
import logo6 from "../assets/logo-7.webp";
import logo7 from "../assets/Kusadasi.webp";
import logo8 from "../assets/Goncu-Turizm.webp";
import logo9 from "../assets/Sky-Tour.webp";
import Footer from "../footer/Footer";


const suppliers = [
    {
        name: "Ancient Egypt Tours",
        tours: 200,
        rating: 5,
        logo: logo1
    },
    {
        name: "The International Ecotourism Society",
        tours: 103,
        rating: 5,
        logo: logo2
    },
    {
        name: "Chullos Travel Peru",
        tours: 59,
        rating: 5,
        logo: logo3
    },
    {
        name: "Beyond Escapes (Pvt) Ltd",
        tours: 57,
        rating: 5,
        logo: logo4
    },
    {
        name: "Responsible Travel Operadora de Tours Cia. Ltda",
        tours: 53,
        rating: 5,
        logo: logo5
    },
    {
        name: "Nordic Unique Travels",
        tours: 53,
        rating: 5,
        logo: logo6
    },
    {
        name: "Travelux Cappadocia",
        tours: 51,
        rating: 5,
        logo: logo7
    },
    {
        name: "TravelShopKusadasi",
        tours: 44,
        rating: 5,
        logo: logo8
    },
    {
        name: "Goncu Turizm",
        tours: 39,
        rating: 5,
        logo: logo9
    },
];

const Sub = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <>
            <div className="destinationss">
                <h1>Popular Destinations</h1>
                <div className="destination-flex">
                    <div className="destination">
                        <div className="image">
                            <img src={img1} alt="Europe" />
                            <div className="overlayss">Europe</div>
                        </div>
                        <div className="countries">
                            <ul>
                                <li>Austria</li>
                                <li>Croatia</li>
                                <li>U.Kingdom</li>
                                <li>Finland</li>
                                <li>France</li>
                                <li>Germany</li>
                                <li>Greece</li>
                                <li>Iceland</li>
                                <li>Italy</li>
                                <li>Netherland</li>
                                <li>Norway</li>
                                <li>Portugal</li>
                                <li>Spain</li>
                                <li>Switzerland</li>
                                <li>Turkey</li>
                            </ul>
                        </div>
                    </div>

                    <div className="destination">
                        <div className="image">
                            <img src={img2} alt="Africa" />
                            <div className="overlayss">Africa</div>
                        </div>
                        <div className="countries">
                            <ul>
                                <li>Egypt</li>
                                <li>Kenya</li>
                                <li>Morocco</li>
                                <li>Namibia</li>
                                <li>S.Africa</li>
                                <li>Tanzania</li>
                                <li>Georgia</li>
                                <li>Indonesia</li>
                                <li>South Africa</li>
                                <li>Nepal</li>
                            </ul>
                        </div>
                    </div>

                    <div className="destination">
                        <div className="image">
                            <img src={img3} alt="Asia" />
                            <div className="overlayss">Asia</div>
                        </div>
                        <div className="countries">
                            <ul>
                                <li>Bali</li>
                                <li>Bhutan</li>
                                <li>Cambodia</li>
                                <li>China</li>
                                <li>Georgia</li>
                                <li>India</li>
                                <li>China</li>
                                <li>Georgia</li>
                                <li>India</li>
                            </ul>
                        </div>
                    </div>

                    <div className="destination">
                        <div className="image">
                            <img src={img4} alt="Latin America" />
                            <div className="overlayss">Latin America</div>
                        </div>
                        <div className="countries">
                            <ul>
                                <li>Brazil</li>
                                <li>Argentina</li>
                                <li>Chile</li>
                                <li>Peru</li>
                                <li>Colombia</li>
                                <li>Mexico</li>
                                <li>Portugal</li>
                                <li>Spain</li>
                                <li>Malaysia</li>
                                <li>Turkey</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                className="suppliers-container"
                style={{ scale, opacity }}  // Apply scale and opacity based on scroll
            >
                <h2>Our Suppliers</h2>
                <div className="suppliers-grid">
                    {suppliers.map((supplier, index) => (
                        <motion.div
                            key={index}
                            className="supplier-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img src={supplier.logo} alt={supplier.name} className="supplier-logo" />
                            <h3>{supplier.name}</h3>
                            <p>⭐ {supplier.rating}/5 - {supplier.tours} Tours</p>
                        </motion.div>
                    ))}
                </div>
             <a href='pages'><motion.button
                    className="see-all-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    See all suppliers
                </motion.button></a>   
            </motion.div><br></br> <br></br>
            <Footer />        
        </>
         
    );
}

export default Sub;
