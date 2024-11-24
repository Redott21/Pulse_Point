import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setBmiCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiCategory("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiCategory("Overweight");
      } else {
        setBmiCategory("Obesity");
      }
    } else {
      setBmi(null);
      setBmiCategory("");
      alert("Please enter both weight and height.");
    }
  };

  return (
    <div>
      {/* Header */}
      <header>
        <div className="logo">Pulse Point</div>
        <nav>
          <a href="#tips">Health Tips</a>
          <a href="#bmi">BMI Calculator</a>
          <a href="#faq">FAQ</a>
          <a href="#newsletter">Newsletter</a>
          <a href="#testimonials">Testimonials</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Pulse Point</h1>
        <p>Your gateway to better health and wellness.</p>
        <div className="carousel">
          <div className="quote">"Your health is your wealth."</div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section id="tips">
        <h2>Health Tips</h2>
        <input type="text" placeholder="Search health tips..." />
        <div className="tips-container">
          <div className="tip-card">Stay hydrated throughout the day.</div>
          <div className="tip-card">Exercise for at least 30 minutes daily.</div>
          <div className="tip-card">Maintain a balanced diet.</div>
          <div className="tip-card">Prioritize quality sleep.</div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section id="bmi">
        <h2>BMI Calculator</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="number"
            placeholder="Enter your weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter your height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <button type="button" onClick={calculateBMI}>
            Calculate BMI
          </button>
        </form>
        {bmi && (
          <div id="bmi-result">
            <p>Your BMI: {bmi}</p>
            <p>Category: {bmiCategory}</p>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is the best way to stay fit?</h3>
          <p>Consistency is key! Regular exercise and a balanced diet will keep you healthy.</p>
        </div>
        <div className="faq-item">
          <h3>How much water should I drink daily?</h3>
          <p>It's recommended to drink 2-3 liters of water per day for optimal hydration.</p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          <p>"Pulse Point has transformed my life for the better!"</p>
          <p>"Their tips and tools are so easy to use!"</p>
          <p>"I never knew maintaining health could be so fun!"</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Pulse Point. All rights reserved.</p>
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
      </footer>
    </div>
  );
};

export default App;
