import Section from '../UI/Section';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { QuoteIcon } from '../UI/Icons';
import userImage from '../assets/user.png';

const testimonials = [
  {
    id: 1,
    content: "SoftSell made it incredibly easy to liquidate our unused enterprise licenses after our company downsized. The valuation was fair and the payment was processed quickly.",
    author: "Sarah Johnson",
    role: "CTO, TechVision Inc.",
    image: userImage,
  },
  {
    id: 2,
    content: "We had a large number of legacy CAD software licenses that we no longer needed after upgrading. SoftSell found buyers quickly and handled all the transfer details. Excellent service!",
    author: "Michael Chen",
    role: "IT Director, BuildPro Engineering",
    image: userImage,
  },
  {
    id: 3,
    content: "As a small business, every dollar counts. SoftSell helped us recoup thousands on software we weren't using. Their team was professional and the process was straightforward.",
    author: "David Williams",
    role: "Owner, Apex Solutions",
    image: userImage,
  },
  {
    id: 4,
    content: "I was skeptical about selling our unused Oracle licenses, but SoftSell exceeded expectations. They found a buyer within a week and we received payment promptly. Highly recommended.",
    author: "Jennifer Martinez",
    role: "Finance Director, DataFlow Systems",
    image: userImage,
  },
];

export default function Testimonials() {
  const [_currentSlide, _setCurrentSlide] = useState(0);
  
  return (
    <Section
      title="What Our Customers Say"
      subtitle="Hear from businesses that have successfully sold their licenses through SoftSell"
      className="bg-gray-50 dark:bg-dark-700"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.slice(0, 2).map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-dark-600 p-6 rounded-lg shadow-sm"
          >
            <QuoteIcon className="h-8 w-8 text-primary-500 mb-4" />
            <p className="text-gray-700 dark:text-gray-200 mb-4 italic">"{testimonial.content}"</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}