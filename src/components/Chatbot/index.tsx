import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { cn } from '../../utils/cn';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ChatbotProps {
  onClose: () => void;
}

export default function Chatbot({ onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Suggested questions
  const suggestedQuestions = [
    'How do I sell my license?',
    'What types of licenses do you accept?',
    'How long does the process take?',
    'How is the valuation determined?'
  ];

  useEffect(() => {
    // Add initial welcome message
    setMessages([
      {
        id: '1',
        role: 'bot',
        content: '👋 Hi there! I\'m the SoftSell AI assistant. How can I help you with selling your software licenses today?',
        timestamp: new Date()
      }
    ]);
    
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateResponse = (question: string): string => {
    // Simple response logic based on the question
    if (question.toLowerCase().includes('sell') || question.toLowerCase().includes('license')) {
      return 'To sell your license, simply click "Get Started" and complete our secure license upload form. We\'ll take care of the valuation and find buyers for you.';
    } else if (question.toLowerCase().includes('types') || question.toLowerCase().includes('accept')) {
      return 'We accept most major software licenses including Microsoft, Adobe, Oracle, AutoCAD, and many more. If you\'re unsure, just upload your license details and we\'ll let you know.';
    } else if (question.toLowerCase().includes('long') || question.toLowerCase().includes('time') || question.toLowerCase().includes('process')) {
      return 'Our process typically takes 3-5 business days from submission to payment. The valuation is completed within 24 hours, and once you accept our offer, payment is processed within 3 business days.';
    } else if (question.toLowerCase().includes('valuation') || question.toLowerCase().includes('worth') || question.toLowerCase().includes('value')) {
      return 'Our valuation is based on current market rates, license type, remaining term, and demand. We use proprietary algorithms and market data to ensure you get the best possible price for your license.';
    } else {
      return 'Thanks for your question. Our team specializes in buying and selling software licenses at competitive prices. Can you provide more details about what you\'re looking for?';
    }
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot typing
    setTimeout(() => {
      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: generateResponse(input),
        timestamp: new Date()
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: question,
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    
    // Simulate bot typing
    setTimeout(() => {
      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: generateResponse(question),
        timestamp: new Date()
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  return (
    <div className="w-full sm:w-96 h-[500px] flex flex-col bg-white dark:bg-dark-700 rounded-lg shadow-xl overflow-hidden border border-gray-200 dark:border-dark-600">
      {/* Header */}
      <div className="px-4 py-3 bg-primary-500 text-white flex justify-between items-center">
        <h3 className="font-semibold">SoftSell Support</h3>
        <button 
          onClick={onClose}
          className="p-1 rounded-full hover:bg-primary-600 transition-colors"
        >
          <X size={18} />
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-dark-800">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "max-w-[80%] rounded-lg p-3 mb-3",
              message.role === 'user'
                ? "ml-auto bg-primary-500 text-white"
                : "bg-white dark:bg-dark-600 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-dark-700"
            )}
          >
            <p>{message.content}</p>
            <div 
              className={cn(
                "text-xs mt-1",
                message.role === 'user' ? "text-primary-100" : "text-gray-500"
              )}
            >
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex gap-1 max-w-[80%] rounded-lg p-3 mb-3 bg-white dark:bg-dark-600 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-dark-700">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Suggested questions */}
      {messages.length < 3 && (
        <div className="p-3 bg-gray-100 dark:bg-dark-700 border-t border-gray-200 dark:border-dark-600">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
            Try asking:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="text-xs px-3 py-1.5 bg-white dark:bg-dark-600 text-gray-800 dark:text-gray-200 rounded-full border border-gray-200 dark:border-dark-500 hover:bg-gray-50 dark:hover:bg-dark-500 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Input */}
      <div className="p-3 border-t border-gray-200 dark:border-dark-600 bg-white dark:bg-dark-700 flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 py-2 px-3 bg-gray-100 dark:bg-dark-600 border border-transparent focus:border-primary-500 dark:text-white rounded-l-md focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          disabled={input.trim() === ''}
          className={cn(
            "py-2 px-4 bg-primary-500 text-white rounded-r-md",
            input.trim() === '' ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-600"
          )}
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}