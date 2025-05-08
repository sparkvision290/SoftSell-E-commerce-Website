import { useEffect } from 'react';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import { motion } from 'framer-motion';
import { Upload, BarChart2, CreditCard, FileText, DollarSign, CheckSquare } from 'lucide-react';

export default function HowItWorks() {
  useEffect(() => {
    // Update document title
    document.title = 'How It Works | SoftSell';
  }, []);

  const steps = [
    {
      title: '1. Upload License',
      description: 'Submit your license details through our secure portal. We support all major software vendors.',
      icon: Upload,
      details: [
        'Complete our user-friendly upload form',
        'Securely share license keys and certificates',
        'Provide basic information about usage and terms',
        'Receive instant confirmation of submission'
      ]
    },
    {
      title: '2. Get Valuation',
      description: 'Our experts analyze your license and provide a competitive market valuation within 24 hours.',
      icon: BarChart2,
      details: [
        'Expert analysis of license value based on market demand',
        'Consideration of remaining term, version, and restrictions',
        'Detailed valuation report with explanation',
        'Fair, transparent pricing with no hidden fees'
      ]
    },
    {
      title: '3. Get Paid',
      description: 'Accept our offer and receive payment via your preferred method within 3 business days.',
      icon: CreditCard,
      details: [
        'Review and accept our competitive offer',
        'Choose your preferred payment method',
        'Complete simple transfer documentation',
        'Receive payment within 3 business days'
      ]
    },
  ];

  const additionalInfo = [
    {
      title: 'Documentation',
      description: 'We handle all the legal aspects of transferring software licenses, making the process hassle-free for you.',
      icon: FileText,
    },
    {
      title: 'Pricing',
      description: 'Our valuations are based on current market rates, ensuring you get the best possible price for your licenses.',
      icon: DollarSign,
    },
    {
      title: 'Compliance',
      description: 'All transactions comply with software vendors\' license transfer policies and applicable regulations.',
      icon: CheckSquare,
    },
  ];

  return (
    <>
      <Section
        title="How It Works"
        subtitle="Our simple three-step process makes selling your software licenses quick and easy"
      >
        <div className="grid grid-cols-1 gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center">
                  <step.icon size={48} className="text-primary-500" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="mt-1 mr-2 w-4 h-4 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                        <CheckSquare className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        title="Additional Information"
        className="bg-gray-50 dark:bg-dark-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hoverable className="h-full">
                <Card.Body>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-md bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mr-3">
                      <item.icon className="h-5 w-5 text-primary-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}