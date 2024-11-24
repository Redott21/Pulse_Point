import React from 'react';

const Hero = () => {
  return (
    <section style={heroStyles}>
      <h1 data-aos="fade-up">Welcome to Pulse Point</h1>
      <p data-aos="fade-up" data-aos-delay="200">
        Your health is our priority. Stay informed and empowered.
      </p>
      <div style={statsContainer}>
        <div data-aos="zoom-in" data-aos-delay="300" style={statCard}>
          <h2>500+</h2>
          <p>Happy Clients</p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" style={statCard}>
          <h2>30+</h2>
          <p>Expert Doctors</p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="500" style={statCard}>
          <h2>10k+</h2>
          <p>Health Tips Shared</p>
        </div>
      </div>
    </section>
  );
};

const heroStyles = {
  textAlign: 'center',
  padding: '60px 20px',
  background: 'linear-gradient(135deg, #6a0572, #9a0572)',
  color: '#fff',
};

const statsContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '30px',
};

const statCard = {
  background: '#fff',
  color: '#6a0572',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default Hero;
