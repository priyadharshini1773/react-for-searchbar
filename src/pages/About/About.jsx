import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About </h2>
            <p className='fs-17'>Book Buddy are Internet sites consecrated to the creation and preservation of electronic book collections and holdings of other kinds of materials, without the need for end users to purchase the materials they want to consult and read..</p>
            <p className='fs-17'>It provide users with access to rare and out-of-print materials that might be difficult or impossible to locate in physical libraries.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
