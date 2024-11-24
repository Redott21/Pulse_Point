import React from 'react';

const Services = () => {
  const services = [
    { title: 'Personalized Health Plans', icon: '💊' },
    { title: 'Virtual Consultations', icon: '📞' },
    { title: 'Fitness Programs', icon: '🏋️' },
    { title: 'Mental Wellness', icon: '🧘' },
  ];

  return (
    <section id="services" style={sectionStyles}>
      <h2 data-aos="fade-up">Our Services</h2>
      <div style={servicesContainer}>
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            style={serviceCard}
          >
            <div style={iconStyle}>{service.icon}</div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const sectionStyles = {
  padding: '40px 20px',
  backgroundColor: '#f4f4f4',
  textAlign: 'center',
};

const servicesContainer = {
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
};

const serviceCard = {
  padding: '20px',
  borderRadius: '10px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  textAlign: 'center',
  width: '200px',
  cursor: 'pointer',
};

const iconStyle = {
  fontSize: '2rem',
  marginBottom: '10px',
};

export default Services;
