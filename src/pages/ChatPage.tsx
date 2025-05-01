
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Send, Plus, Settings } from 'lucide-react';
import Header from '../components/Header';
import { ScrollArea } from '../components/ui/scroll-area';
import { playSound } from '../utils/sounds';
import '../styles/ChatPage.css';

// Message types
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello, I am Aetheria. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Auto scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Focus input on load
  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Play click sound
    playSound('CLICK');
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate AI typing
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = generateResponse(inputValue);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
      
      // Play message sound
      playSound('MESSAGE');
    }, 1500);
  };

  const handleNewChat = () => {
    playSound('TRANSITION');
    setMessages([{
      id: '1',
      role: 'assistant',
      content: 'Hello, I am Aetheria. How can I assist you today?',
      timestamp: new Date()
    }]);
  };

  // Very simple response generation - in a real app this would connect to an actual AI service
  const generateResponse = (userInput: string): string => {
    const userInputLower = userInput.toLowerCase();
    
    if (userInputLower.includes('hello') || userInputLower.includes('hi')) {
      return 'Hello! How can I help you today?';
    } else if (userInputLower.includes('help')) {
      return 'I\'d be happy to help. Could you please provide more details about what you need assistance with?';
    } else if (userInputLower.includes('settings')) {
      return 'You can access settings by clicking on the Settings link in the navigation menu, or I can redirect you there if you\'d like.';
    } else if (userInputLower.includes('about')) {
      return 'To learn more about my capabilities and design philosophy, please visit the About page through the navigation menu.';
    } else if (userInputLower.includes('thank')) {
      return 'You\'re welcome! Is there anything else I can help you with?';
    } else {
      return 'That\'s an interesting question. In a complete implementation, I would provide a thoughtful and helpful response based on my training data and your context.';
    }
  };

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chat-page page-transition">
      <Header />
      
      <div className="chat-container">
        <div className="chat-sidebar">
          <div className="chat-title">
            <h2>Conversations</h2>
            <button 
              className="new-chat-btn"
              onClick={handleNewChat}
              aria-label="Start a new chat"
            >
              <Plus size={16} />
              <span>New Chat</span>
            </button>
          </div>
          
          <ScrollArea className="conversation-list">
            <div className="conversation-item active">
              <div className="conversation-icon">
                <MessageCircle size={16} />
              </div>
              <div className="conversation-info">
                <div className="conversation-name">Current Chat</div>
                <div className="conversation-preview">
                  {messages.length > 1 
                    ? messages[messages.length - 1].content.substring(0, 30) + (messages[messages.length - 1].content.length > 30 ? '...' : '') 
                    : 'New conversation'}
                </div>
              </div>
            </div>
            <div className="conversation-item">
              <div className="conversation-icon">
                <MessageCircle size={16} />
              </div>
              <div className="conversation-info">
                <div className="conversation-name">Previous Chat</div>
                <div className="conversation-preview">How can I learn more about AI?</div>
              </div>
            </div>
          </ScrollArea>
          
          <div className="sidebar-footer">
            <button 
              className="settings-btn" 
              onClick={() => {
                playSound('CLICK');
                navigate('/settings');
              }}
            >
              <Settings size={18} />
              <span>Settings</span>
            </button>
          </div>
        </div>
        
        <div className="chat-main">
          <ScrollArea className="messages-container">
            <div className="messages-wrapper">
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
                >
                  <div className="message-bubble">
                    <div className="message-content">{message.content}</div>
                    <div className="message-time">{formatTime(message.timestamp)}</div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="message assistant-message">
                  <div className="message-bubble typing">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          <form className="chat-input-container" onSubmit={handleSendMessage}>
            <input 
              type="text" 
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message here..."
              className="chat-input"
            />
            <button 
              type="submit" 
              className="send-button"
              disabled={!inputValue.trim()}
            >
              <Send size={18} />
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
