import { useEffect, useState } from 'react';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import { motion } from 'framer-motion';
import { QuoteIcon } from '../components/UI/Icons';
import userImage from '../assets/user.png';

export default function Testimonials() {
  useEffect(() => {
    // Update document title
    document.title = 'Testimonials | SoftSell';
  }, []);

  const testimonials = [
    {
      id: 1,
      content: "SoftSell made it incredibly easy to liquidate our unused enterprise licenses after our company downsized. The valuation was fair and the payment was processed quickly. Their customer service team was responsive and helpful throughout the entire process.",
      author: "Sarah Johnson",
      role: "CTO, TechVision Inc.",
      image: userImage,
      company: "Enterprise Software",
    },
    {
      id: 2,
      content: "We had a large number of legacy CAD software licenses that we no longer needed after upgrading. SoftSell found buyers quickly and handled all the transfer details. Excellent service! The team at SoftSell made what could have been a complex process incredibly straightforward.",
      author: "Michael Chen",
      role: "IT Director, BuildPro Engineering",
      image: userImage,
      company: "CAD Software",
    },
    {
      id: 3,
      content: "As a small business, every dollar counts. SoftSell helped us recoup thousands on software we weren't using. Their team was professional and the process was straightforward. I was amazed at how quickly they were able to find a buyer for our specialized analytics software.",
      author: "David Williams",
      role: "Owner, Apex Solutions",
      image: userImage,      company: "Analytics Software",
    },
    {
      id: 4,
      content: "I was skeptical about selling our unused Oracle licenses, but SoftSell exceeded expectations. They found a buyer within a week and we received payment promptly. Highly recommended for any business looking to recover costs on unused software investments.",
      author: "Jennifer Martinez",
      role: "Finance Director, DataFlow Systems",
      image: userImage,      company: "Database Software",
    },
    {
      id: 5,
      content: "After our merger, we had duplicate licenses for several key software products. SoftSell helped us sell the extras, which offset a significant portion of our merger costs. Their valuation was fair and the process was transparent from start to finish.",
      author: "Robert Thompson",
      role: "CIO, Integrated Solutions Group",
      image: userImage,      company: "Enterprise Software",
    },
    {
      id: 6,
      content: "SoftSell's expertise in the software license marketplace is unmatched. They knew exactly how to position our specialized engineering software licenses to get maximum value. The entire process took less than two weeks from submission to payment.",
      author: "Lisa Nakamura",
      role: "Procurement Manager, TechnoEngineering",
      image: userImage,      company: "Engineering Software",
    },
  ];

  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredTestimonials = filter 
    ? testimonials.filter(t => t.company === filter) 
    : testimonials;

  const companies = Array.from(new Set(testimonials.map(t => t.company)));

  return (
    <Section
      title="What Our Customers Say"
      subtitle="Hear from businesses that have successfully sold their licenses through SoftSell"
    >
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setFilter(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === null
              ? 'bg-primary-500 text-white'
              : 'bg-gray-100 dark:bg-dark-600 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-500'
          }`}
        >
          All
        </button>
        {companies.map(company => (
          <button
            key={company}
            onClick={() => setFilter(company)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === company
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 dark:bg-dark-600 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-500'
            }`}
          >
            {company}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTestimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card hoverable className="h-full flex flex-col">
              <Card.Body className="flex flex-col h-full">
                <QuoteIcon className="h-8 w-8 text-primary-500 mb-4" />
                <p className="text-gray-700 dark:text-gray-200 mb-6 flex-grow italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center mt-auto pt-4 border-t border-gray-100 dark:border-dark-600">
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
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}