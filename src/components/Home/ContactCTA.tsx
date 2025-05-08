import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary-500">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Turn Your Unused Licenses into Cash?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact our team today for a free valuation and get the best price for your software licenses.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700"
            >
              Get a Free Quote
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}