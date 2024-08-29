import React from 'react';
import "./Packing.css";
import Pack from "../pack/Pack";

const Packing = () => {
  return (
    <>
    <section>
     
      <div className='wave wave1'></div>
      <div className='wave wave2'></div>
      <div className='wave wave3'></div>
      <div className='wave wave4'></div>

      <div className='text'>
        <h1>Package Offers</h1>
        <p>A package deal outside of financial trading can also refer
          to a project or an agreement that involves multiple related
          items or offers that constitute multiple benefits. For example,
          a person going on a trip might need a plane ticket, a hotel booking,
          and a rental car individually, all for the cost of $1,500.</p>
          <a href='pack'><button className='btnn'>More Details</button></a> 

         
      </div>
    
      <div className="floating-icons1">
        <div className="icon1" style={{ animationDelay: '0s' }}>
          <i className="fab fa-facebook-f"></i>
        </div>
        <div className="icon1" style={{ animationDelay: '1s' }}>
          <i className="fab fa-twitter"></i>
        </div>
        <div className="icon1" style={{ animationDelay: '2s' }}>
          <i className="fab fa-instagram"></i>
        </div>
        <div className="icon1" style={{ animationDelay: '3s' }}>
          <i className="fab fa-linkedin-in"></i>
        </div>

      </div>
     
    </section>
    <Pack />
    </>
   
   
   

   
  )
}

export default Packing;
