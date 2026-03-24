import { Link } from '@tanstack/react-router';
import LogoFull from './jsx-icons/logo-full';
import { ContactBlock } from './Heading';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import type React from 'react';

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

export const MobileNav = (props: {
  children: React.ReactNode;
  open: boolean;
  onSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { children, open, onSetOpen } = props;

  return (
    <Sheet open={open} onOpenChange={onSetOpen}>
      <SheetTrigger className="sm:hidden">{children}</SheetTrigger>
      <SheetContent
        side="right"
        className="mt-18.25 h-[calc(100vh-73px)] w-full gap-10 border-0 px-5 [&>button]:hidden"
        overlayClassName="bg-transparent"
        showCloseButton={false}
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Navigate to the main sections of the website.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex h-full flex-col items-start justify-between pt-10">
          <ul className="flex w-full flex-col justify-center gap-6">
            {navLinks.map(link => (
              <li
                key={link.name}
                onClick={() => onSetOpen(false)}
                className="border-border border-b pb-6 last:border-b-0"
              >
                <Link
                  to={link.href}
                  className="text-primary [.active]:text-tertiary p-2 leading-6 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ContactBlock wrapperClassName="basis-auto py-6" />
        </nav>
      </SheetContent>
    </Sheet>
  );
};
