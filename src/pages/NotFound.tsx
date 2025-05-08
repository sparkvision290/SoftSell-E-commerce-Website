import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Update document title
    document.title = 'Page Not Found | SoftSell';
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-primary-500 mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button size="lg">
          Return to Home
        </Button>
      </Link>
    </div>
  );
}