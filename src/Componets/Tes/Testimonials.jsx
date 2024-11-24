import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { quote: "Pulse Point transformed my life!", author: "John Doe" },
    { quote: "Great service and amazing health tips!", author: "Jane Smith" },
  ];

  return (
    <section id="testimonials" style={sectionStyles}>
      <h2 data-aos="fade-up">Testimonials</h2>
      <div style={testimonialsContainer}>
        {testimonials.map((test, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 200}
            style={testimonialCard}
          >
            <p>"{test.quote}"</p>
            <p>- {test.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const sectionStyles = {
  padding: '40px 20px',
  background: '#ffedcc',
};

const testimonialsContainer = {
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
};

const testimonialCard = {
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  backgroundColor: '#fff',
};

export default Testimonials;
