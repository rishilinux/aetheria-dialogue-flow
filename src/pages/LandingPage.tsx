
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page page-transition">
      <Header />
      <div className="hero-section">
        <div className="hero-content">
          <h1>Meet Aetheria, Your AI Companion</h1>
          <p className="subtitle">An advanced conversational AI designed to assist, inform, and engage</p>
          <div className="cta-buttons">
            <Link to="/chat" className="btn btn-primary">Start Conversation</Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
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
        <h2>Designed for Thoughtful Interaction</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon knowledge"></div>
            <h3>Expansive Knowledge</h3>
            <p>Access information across domains with detailed, nuanced responses</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon personalized"></div>
            <h3>Personalized Experience</h3>
            <p>Adapts to your preferences and communication style over time</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon creative"></div>
            <h3>Creative Assistant</h3>
            <p>Help with writing, brainstorming ideas, and creative projects</p>
          </div>
        </div>
      </div>

      <div className="testimonial-section">
        <div className="testimonial">
          <p>"Aetheria has transformed how I approach my daily tasks. The conversations feel natural and the responses are impressively thoughtful."</p>
          <div className="testimonial-author">- Alex Chen, Product Designer</div>
        </div>
      </div>

      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-logo">AETHERIA</div>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/chat">Chat</Link>
          </div>
          <div className="copyright">© 2025 Aetheria AI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
