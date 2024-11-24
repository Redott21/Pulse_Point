import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={contactStyles}>
      <h2>Contact Us</h2>
      <form style={formStyles}>
        <input type="text" placeholder="Name" style={inputStyles} />
        <input type="email" placeholder="Email" style={inputStyles} />
        <textarea placeholder="Message" style={textareaStyles}></textarea>
        <button type="submit" style={buttonStyles}>Submit</button>
      </form>
    </section>
  );
};

const contactStyles = {
  padding: '40px 20px',
  backgroundColor: '#d9f0ff',
};

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  maxWidth: '500px',
  margin: '0 auto',
};

const inputStyles = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const textareaStyles = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  height: '100px',
};

const buttonStyles = {
  padding: '10px',
  backgroundColor: '#6a0572',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Contact;
