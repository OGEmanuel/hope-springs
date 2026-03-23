import { Link } from '@tanstack/react-router';
import LogoFull from './jsx-icons/logo-full';

const companyLinks = [
  { name: 'About us', href: '/about' },
  { name: 'Contact us', href: '/contact' },
  { name: 'Careers', href: '/careers' },
];

const resourcesLinks = [
  { name: 'Getting started', href: '/getting-started' },
  { name: 'FAQs', href: '/faqs' },
];

const contactLinks = [
  { name: '240-960-7515', href: 'tel:2409607515' },
  { name: 'hopespring@gmail.com', href: 'mailto:hopespring@gmail.com' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center">
      <div className="w-full max-w-360 px-4 md:px-8 xl:px-30">
        <div className="pt-12 pb-8 md:pb-10">
          <LogoFull className="max-sm:hidden" />
          <LogoFull width="124.25" height="32" className="sm:hidden" />
        </div>
        <div className="border-border text-extra [&>ul>li]:text-extra-2 grid grid-cols-1 border-y py-8 text-xs/6 uppercase max-lg:gap-8 sm:grid-cols-2 sm:py-10 sm:text-sm/6 md:grid-cols-3 lg:grid-cols-4 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-3 [&>ul>li]:text-sm/6 [&>ul>li]:font-medium [&>ul>li]:normal-case [&>ul>li]:sm:text-base/7">
          <ul>
            Company
            {companyLinks.map(links => (
              <li key={links.name}>
                <Link to={links.href}>{links.name}</Link>
              </li>
            ))}
          </ul>
          <ul>
            Resources
            {resourcesLinks.map(links => (
              <li key={links.name}>
                <Link to={links.href}>{links.name}</Link>
              </li>
            ))}
          </ul>
          <ul>
            Contact
            {contactLinks.map(links => (
              <li key={links.name}>
                <Link to={links.href}>{links.name}</Link>
              </li>
            ))}
          </ul>
          <ul>
            Location
            <li>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div className="text-extra flex justify-between pt-10 pb-12 max-sm:flex-col max-sm:gap-6 max-sm:text-sm sm:items-center">
          <p className="leading-6 sm:leading-7">
            © {year} Hope Springs Behavioral Health All Right Reserved
          </p>
          <span>
            Built by{' '}
            <a
              href="https://emanueldev-v2.vercel.app/"
              target="_blank"
              className="text-primary leading-6 font-semibold underline underline-offset-4 sm:leading-7"
            >
              Emanuel
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
