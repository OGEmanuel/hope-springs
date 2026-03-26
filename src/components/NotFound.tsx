import { Link } from '@tanstack/react-router';
import { Button } from './ui/button';

const NotFound = () => {
  return (
    <div className="bg-foam flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="text-sea-ink text-8xl font-bold md:text-9xl">404</h1>
        <h2 className="text-palm mt-4 text-2xl font-semibold md:text-3xl">
          Page Not Found
        </h2>
        <p className="text-extra mt-4 text-lg md:text-xl">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button className="bg-lagoon hover:bg-lagoon-deep text-white">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
