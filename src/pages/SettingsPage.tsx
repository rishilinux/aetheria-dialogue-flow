
import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles/SettingsPage.css';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    theme: 'light',
    fontSize: 'medium',
    notifications: true,
    messageHistory: true,
    voiceResponses: false,
    language: 'english',
    responseStyle: 'balanced',
    apiKey: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setSettings(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setSettings(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSave = () => {
    // In a real application, this would save settings to a backend or localStorage
    console.log('Settings saved:', settings);
    
    // Show success message with animation
    const successMsg = document.getElementById('success-message');
    if (successMsg) {
      successMsg.classList.add('show');
      setTimeout(() => {
        successMsg.classList.remove('show');
      }, 3000);
    }
  };

  return (
    <div className="settings-page page-transition">
      <Header />
      
      <div className="settings-container">
        <div className="settings-header">
          <h1>Settings</h1>
          <p>Customize your AI assistant experience</p>
        </div>

        <div className="settings-grid">
          <div className="settings-sidebar">
            <div className="settings-nav">
              <a href="#appearance" className="settings-nav-item active">Appearance</a>
              <a href="#behavior" className="settings-nav-item">Behavior</a>
              <a href="#privacy" className="settings-nav-item">Privacy</a>
              <a href="#advanced" className="settings-nav-item">Advanced</a>
            </div>
          </div>

          <div className="settings-content">
            <section id="appearance" className="settings-section">
              <h2>Appearance</h2>
              
              <div className="setting-item">
                <label htmlFor="theme">Theme</label>
                <select 
                  name="theme" 
                  id="theme" 
                  value={settings.theme} 
                  onChange={handleChange}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System Default</option>
                </select>
              </div>
              
              <div className="setting-item">
                <label htmlFor="fontSize">Font Size</label>
                <select 
                  name="fontSize" 
                  id="fontSize" 
                  value={settings.fontSize} 
                  onChange={handleChange}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </section>

            <section id="behavior" className="settings-section">
              <h2>Behavior</h2>
              
              <div className="setting-item checkbox">
                <div>
                  <label htmlFor="notifications">Enable Notifications</label>
                  <p className="setting-description">Receive notifications when new messages arrive</p>
                </div>
                <input 
                  type="checkbox"
                  name="notifications"
                  id="notifications"
                  checked={settings.notifications}
                  onChange={handleChange}
                />
              </div>
              
              <div className="setting-item checkbox">
                <div>
                  <label htmlFor="voiceResponses">Voice Responses</label>
                  <p className="setting-description">Enable AI to respond with voice</p>
                </div>
                <input 
                  type="checkbox"
                  name="voiceResponses"
                  id="voiceResponses"
                  checked={settings.voiceResponses}
                  onChange={handleChange}
                />
              </div>
              
              <div className="setting-item">
                <label htmlFor="language">Language</label>
                <select 
                  name="language" 
                  id="language" 
                  value={settings.language} 
                  onChange={handleChange}
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="japanese">Japanese</option>
                </select>
              </div>
              
              <div className="setting-item">
                <label htmlFor="responseStyle">Response Style</label>
                <select 
                  name="responseStyle" 
                  id="responseStyle" 
                  value={settings.responseStyle} 
                  onChange={handleChange}
                >
                  <option value="precise">Precise & Technical</option>
                  <option value="balanced">Balanced</option>
                  <option value="casual">Casual & Conversational</option>
                </select>
              </div>
            </section>

            <section id="privacy" className="settings-section">
              <h2>Privacy</h2>
              
              <div className="setting-item checkbox">
                <div>
                  <label htmlFor="messageHistory">Save Message History</label>
                  <p className="setting-description">Keep record of conversations for future reference</p>
                </div>
                <input 
                  type="checkbox"
                  name="messageHistory"
                  id="messageHistory"
                  checked={settings.messageHistory}
                  onChange={handleChange}
                />
              </div>
              
              <div className="setting-item">
                <button className="danger-btn">Clear Conversation History</button>
                <p className="setting-description">This action cannot be undone</p>
              </div>
            </section>
            
            <section id="advanced" className="settings-section">
              <h2>Advanced</h2>
              
              <div className="setting-item">
                <label htmlFor="apiKey">Custom API Key (Optional)</label>
                <input 
                  type="password"
                  name="apiKey"
                  id="apiKey"
                  value={settings.apiKey}
                  onChange={handleChange}
                  placeholder="Enter your API key"
                />
                <p className="setting-description">For custom model usage</p>
              </div>
            </section>
            
            <div className="settings-actions">
              <button className="btn btn-primary" onClick={handleSave}>Save Changes</button>
              <button className="btn btn-outline">Reset to Defaults</button>
            </div>
            
            <div id="success-message" className="success-message">
              Settings saved successfully!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
