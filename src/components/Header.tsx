import { Link } from '@tanstack/react-router';
import LogoFull from './jsx-icons/logo-full';
import { Button } from './ui/button';
import { cn } from '#/lib/utils';

const navLinks = [
  { name: 'About us', href: '/about' },
  { name: 'Getting started', href: '/get-started' },
  { name: 'FAQs', href: '/faqs' },
];

export default function Header() {
  return (
    <header className="border-border flex justify-center border-b">
      <nav className="flex w-full max-w-360 items-center justify-between px-30 py-5">
        <Link to="/" className="flex basis-full justify-start">
          <LogoFull />
        </Link>
        <ul className="flex basis-full items-center justify-center gap-6">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="text-extra p-2 leading-6 font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ContactBlock />
      </nav>
    </header>
  );
}

const ContactBlock = (props: { className?: string }) => {
  const { className } = props;
  return (
    <div className={cn('flex basis-full justify-end gap-4', className)}>
      <Button variant={'outline'} asChild>
        <a href="tel:2409607515">Call 240-960-7515</a>
      </Button>
      <Button asChild>
        <Link to="/contact">Contact us</Link>
      </Button>
    </div>
  );
};
