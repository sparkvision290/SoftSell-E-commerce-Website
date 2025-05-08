import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import WhyChooseUs from './pages/WhyChooseUs';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-dark-800 dark:bg-dark-800 text-white">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-primary-500 font-medium">Loading SoftSell...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="why-choose-us" element={<WhyChooseUs />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;