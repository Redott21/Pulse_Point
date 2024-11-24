import React from 'react';

const About = () => {
  return (
    <section id="about" style={aboutStyles}>
      <h2>About Us</h2>
      <p>
        Pulse Point is dedicated to empowering individuals with the knowledge and resources to maintain their health.
        We believe in preventive care and holistic wellness.
      </p>
    </section>
  );
};

const aboutStyles = {
  padding: '40px 20px',
  backgroundColor: '#ffedcc',
};

export default About;
