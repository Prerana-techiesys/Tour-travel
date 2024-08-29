import React, { useState } from "react";
import "./Contact.css";
import pic from "../assets/cont-tour.webp";
import icn from "../assets/three-icons.png";
import log1 from "../assets/logo-3.webp";
import log2 from "../assets/logo-7.webp";
import log3 from "../assets/Beyond_Escapes-53ba.webp";
import log4 from "../assets/Goncu-Turizm.webp";
import Footer from "../footer/Footer";







const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log('Form submitted:', formData);
  };
  return (
    <>
    <div className='contact'>
      <div className='cont'>
        <h1>Contact Us</h1>
      </div>
      <div className='cont-text'>
        <h3>Do You Have Any Quries ?</h3>
        <p>Contact us</p>
        <p>Keep Connect with our team</p>

        <div className="social1-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>

      </div>
      <div className='thre-icn'>
                <img src={icn} alt=''></img>
              </div>
    </div> <br></br> <br></br>
    <div className='nxt-cont'>
      <div className='pict'>
        <img src={pic} alt=''></img>
      </div>
      <div className='detil'>
        <h1> Enquiry</h1><br></br>
        <h3> For International Travels</h3><br></br>
        <p>info@internationaltravels.com</p>
        <p>B3, City Plaza, Kudmul Ranga Rao Road,<br></br>
        Kodialbail, Mangaluru – 575 003.</p><br></br><br></br>
        <h3>For Domestic Travels</h3><br></br>
        <p>info@domestictravels.com</p>
        <p>
        South India Tours from Mangaluru +91 968 668 7776<br></br>
South India Tours from Bengaluru +91 968 668 7771/3<br></br>
South India Tours from Hubballi +91 968 668 7774
        </p>
        <button className='bt'><a href="/buk">Contact Us</a></button>
      </div>
    </div><br></br>
    <div className='nt'>
      <h1>We are open from Monday to Saturday: 10AM – 6PM</h1><br></br>
    </div>
    <div className='input-form'>
      <h1>Wr<u>ite to</u> Us</h1>
      <p>For any Queries or Feedback</p> <br/>
     
      <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="E-mail*"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="subject"
          placeholder="Subject*"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          placeholder="Message*"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="captcha">6+2=?</label>
        <input
          type="text"
          name="captcha"
          placeholder=""
          value={formData.captcha}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <button type="submit" className="submit-button">Send</button>
      </div>
    </form> 
      </div>

      <div className="locations-container">
      <div className="location-card orange-card">
        <h2>MANGALURU – HEAD OFFICE</h2>
        <p>#105, City Plaza, Kudmul Ranga Rao Road,<br />
          Kodialbail, Mangaluru – 575 003.</p>
        <p>📞 +91 824 249 7051<br />
          +91 824 249 7054<br />
          +91 968 668 7776</p>
        <p>📱 WhatsApp: <br />
          +91 966 351 8877<br />
          +91 966 352 8877<br />
          +91 936 400 9424</p>
          <button className='bt'><a href="/about">VIEW ALL TOURS FROM MANGALURU</a></button>
          <button className='bt'><a href="/buk">CLICK FOR DIRECTION</a></button>

      </div>

      <div className="location-card blue-card">
        <h2>BASAVANAGUDI – BENGALURU</h2>
        <p>No. 53, 1<sup>st</sup> Floor, Sri Chambers,<br />
          Subbaramchetty Road, Nettakallappa Circle, Above Karnataka Bank,<br />
          Basavanagudi, Bengaluru – 560 004.</p>
        <p>📞 +91 802 662 1007<br />
          +91 802 662 5007</p>
        <p>📱 WhatsApp: <br />
          +91 968 668 7771</p>
          <button className='bt'><a href="/about">VIEW ALL TOURS FROM MANGALURU</a></button>
          <button className='bt'><a href="/buk">CLICK FOR DIRECTION</a></button>     
           </div>

      <div className="location-card orange-card">
        <h2>VIJAYANAGARA – BENGALURU</h2>
        <p>#2946/E, Divya Dharshana, 1<sup>st</sup> Floor,<br />
          Next to Prime Honda Show Room, Opp to Maruti Mandir,<br />
          Service Road, 2<sup>nd</sup> Stage, Vijayanagar, Bengaluru – 560 040.</p>
        <p>📞 +91 802 310 6745<br />
          +91 802 320 6104</p>
        <p>📱 WhatsApp: <br />
          +91 968 668 7773</p>
          <button className='bt'><a href="/about">VIEW ALL TOURS FROM MANGALURU</a></button>
          <button className='bt'><a href="/buk">CLICK FOR DIRECTION</a></button>
      </div>
    </div><br/><br/>
    <div className="log">
    <div className="log-slider">
<img src={log1} alt=""></img>
<img src={log2} alt=""></img>
<img src={log3} alt=""></img>
<img src={log4} alt=""></img>
</div>
    </div>

 
    <div className="venue-container">
      <div className="venue-details">
        <h2>Venue Location</h2><br></br>
        <p><strong>
        Lavaca Street, Suite 2000 Austin, TX 24141</strong></p>
        <p>📅 17 November - 22 November</p>
        <p>⏰ 8:00 am - 10:00 pm</p>
        <p>📍 Fallbrook Austin 92028, USA</p>
        <p>📞(+88) 0172 570051 </p>
        <p>📞(+88) 07 528 7584</p>

      </div>
      <div className="map-container">
        <iframe
          width="100%"
          height="400"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?width=720&amp;height=500&amp;hl=en&amp;q=Fallbrook%20California%2092028,%20USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  


<Footer />
    </>
  )
}

export default Contact