import { Link } from '@tanstack/react-router';
import LogoFull from './jsx-icons/logo-full';

const companyLinks = [
  { name: 'About us', href: '/about' },
  { name: 'Contact us', href: '/contact' },
  { name: 'Careers', href: '/#' },
];

const resourcesLinks = [
  { name: 'Getting started', href: '/get-started' },
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
      <div className="w-full max-w-360 px-30">
        <div className="pt-12 pb-10">
          <LogoFull />
        </div>
        <div className="border-border text-extra [&>ul>li]:text-extra-2 grid grid-cols-4 border-y py-10 text-sm/6 uppercase [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-3 [&>ul>li]:text-base/7 [&>ul>li]:font-medium [&>ul>li]:normal-case">
          <ul>
            Company
            {companyLinks.map(links => (
              <li>
                <Link to={links.href}>{links.name}</Link>
              </li>
            ))}
          </ul>
          <ul>
            Resources
            {resourcesLinks.map(links => (
              <li>
                <Link to={links.href}>{links.name}</Link>
              </li>
            ))}
          </ul>
          <ul>
            Contact
            {contactLinks.map(links => (
              <li>
                <Link to={links.href}>{links.name}</Link>
              </li>
            ))}
          </ul>
          <ul>
            Location
            <li>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div className="text-extra flex items-center justify-between pt-10 pb-12 leading-7">
          <p>© {year} Hope Springs Behavioral Health All Right Reserved</p>
          <span>
            Built by{' '}
            <a
              href="https://emanueldev-v2.vercel.app/"
              target="_blank"
              className="text-primary font-semibold underline underline-offset-4"
            >
              Emanuel
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
