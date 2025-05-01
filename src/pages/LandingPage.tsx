
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/LandingPage.css';
import { playSound } from '../utils/sounds';

const LandingPage = () => {
  useEffect(() => {
    // Play transition sound when landing page loads
    playSound('TRANSITION');
    
    // Add scroll listeners for animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          (el as HTMLElement).classList.add('animated');
          // Play subtle sound on element animation
          playSound('CLICK');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on initial load
    setTimeout(handleScroll, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    playSound('CLICK');
  };

  return (
    <div className="landing-page page-transition">
      <Header />
      <div className="hero-section">
        <div className="hero-content">
          <h1>Meet Aetheria, Your AI Companion</h1>
          <p className="subtitle">An advanced conversational AI designed to assist, inform, and engage</p>
          <div className="cta-buttons">
            <Link to="/chat" className="btn btn-primary" onClick={handleButtonClick}>
              Start Conversation
            </Link>
            <Link to="/about" className="btn btn-outline" onClick={handleButtonClick}>
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="ai-illustration">
            <div className="circle-outer"></div>
            <div className="circle-middle"></div>
            <div className="circle-inner"></div>
            <div className="pulse-rings"></div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="animate-on-scroll">Designed for Thoughtful Interaction</h2>
        <div className="features-grid">
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon knowledge"></div>
            <h3>Expansive Knowledge</h3>
            <p>Access information across domains with detailed, nuanced responses</p>
          </div>
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon personalized"></div>
            <h3>Personalized Experience</h3>
            <p>Adapts to your preferences and communication style over time</p>
          </div>
          <div className="feature-card animate-on-scroll">
            <div className="feature-icon creative"></div>
            <h3>Creative Assistant</h3>
            <p>Help with writing, brainstorming ideas, and creative projects</p>
          </div>
        </div>
      </div>

      <div className="testimonial-section animate-on-scroll">
        <div className="testimonial">
          <p>"Aetheria has transformed how I approach my daily tasks. The conversations feel natural and the responses are impressively thoughtful."</p>
          <div className="testimonial-author">- Alex Chen, Product Designer</div>
        </div>
      </div>

      <div className="experience-section animate-on-scroll">
        <div className="experience-content">
          <h2>Experience the Future of AI Interaction</h2>
          <p>Aetheria combines cutting-edge neural networks with an intuitive interface to create meaningful conversations and assist with a wide range of tasks.</p>
          <div className="experience-stats">
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Availability</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Knowledge Domains</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-logo">AETHERIA</div>
          <div className="footer-links">
            <Link to="/about" onClick={handleButtonClick}>About</Link>
            <Link to="/settings" onClick={handleButtonClick}>Settings</Link>
            <Link to="/chat" onClick={handleButtonClick}>Chat</Link>
          </div>
          <div className="copyright">© 2025 Aetheria AI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
