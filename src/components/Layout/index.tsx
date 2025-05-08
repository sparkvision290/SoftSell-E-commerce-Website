import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Chatbot from '../Chatbot';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Layout() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-800 transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Chatbot toggle button */}
      <button 
        onClick={() => setChatbotOpen(prev => !prev)}
        className="fixed right-5 bottom-5 p-4 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition-all duration-300 z-40"
        aria-label="Toggle chatbot"
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chatbot panel */}
      <AnimatePresence>
        {chatbotOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed right-5 bottom-20 z-50"
          >
            <Chatbot onClose={() => setChatbotOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}