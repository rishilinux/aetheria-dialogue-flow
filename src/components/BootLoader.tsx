
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BootLoader.css';

const BootLoader = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate('/landing'), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="boot-loader">
      <div className="logo">
        <div className="circle pulse"></div>
        <h1>AETHERIA</h1>
      </div>
      <div className="loader-bar-container">
        <div className="loader-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="loader-text">
        <p>Initializing AI protocols... {progress}%</p>
        <div className="system-text">
          <span>System:</span> {getLoadingMessage(progress)}
        </div>
      </div>
    </div>
  );
};

// Helper function to get loading messages based on progress
function getLoadingMessage(progress: number): string {
  if (progress < 20) return 'Loading core modules...';
  if (progress < 40) return 'Initializing neural networks...';
  if (progress < 60) return 'Connecting to knowledge base...';
  if (progress < 80) return 'Calibrating response algorithms...';
  if (progress < 95) return 'Fine-tuning conversation matrix...';
  return 'AI Assistant ready!';
}

export default BootLoader;
