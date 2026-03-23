import { Link } from '@tanstack/react-router';
import LogoFull from './jsx-icons/logo-full';
import { ContactBlock } from './Heading';

const navLinks = [
  { name: 'About us', href: '/about' },
  { name: 'Getting started', href: '/getting-started' },
  { name: 'FAQs', href: '/faqs' },
];

export default function Header() {
  return (
    <header className="border-border fixed z-50 flex w-full justify-center border-b bg-white">
      <nav className="flex w-full max-w-360 items-center justify-between p-4 md:px-8 md:py-4 xl:px-30 xl:py-5">
        <Link to="/" className="flex basis-full justify-start">
          <LogoFull className="max-md:hidden" />
          <LogoFull width="124.25" height="32" className="md:hidden" />
        </Link>
        <ul className="flex basis-full items-center justify-center max-lg:hidden lg:gap-6">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="text-extra [.active]:text-tertiary p-2 leading-6 font-medium transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ContactBlock nav />
      </nav>
    </header>
  );
}
