import Hero from '../components/Home/Hero';
import Process from '../components/Home/Process';
import Benefits from '../components/Home/Benefits';
import Testimonials from '../components/Home/Testimonials';
import ContactCTA from '../components/Home/ContactCTA';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Update document title
    document.title = 'SoftSell - Software License Marketplace';
  }, []);

  return (
    <>
      <Hero />
      <Process />
      <Benefits />
      <Testimonials />
      <ContactCTA />
    </>
  );
}