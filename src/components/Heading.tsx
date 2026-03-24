import { cn } from '#/lib/utils';
import { Link } from '@tanstack/react-router';
import { Button } from './ui/button';
import PhoneIcon from './jsx-icons/phone-icon';
import MenuHamburger from './jsx-icons/menu-hamburger';
import { MobileNav } from './Header';
import { useState } from 'react';
import CloseIcon from './jsx-icons/close';

const Heading = (props: {
  className?: string;
  header?: string;
  description: string;
  cta?: boolean;
  variant?: 'h1' | 'h2' | 'h4' | 'h5';
}) => {
  const { className, header, description, cta, variant } = props;

  return (
    <div className={cn('flex w-full max-w-160 flex-col gap-6', className)}>
      <div className="text-primary flex flex-col gap-4 text-center font-medium">
        {variant && header && variant === 'h1' ? (
          <h1 className="text-[2rem]/10 md:text-5xl/[56px]">{header}</h1>
        ) : variant === 'h2' ? (
          <h2 className="text-[2rem]/10 md:text-5xl/[56px]">{header}</h2>
        ) : variant === 'h4' ? (
          <h4 className="text-xl/7 md:text-[1.75rem]/9">{header}</h4>
        ) : (
          <h5 className="leading-6 md:text-xl/7">{header}</h5>
        )}
        <p className="leading-7 max-md:text-sm/6">{description}</p>
      </div>
      {cta && <ContactBlock className="justify-center" />}
    </div>
  );
};

export default Heading;

export const ContactBlock = (props: {
  className?: string;
  nav?: boolean;
  wrapperClassName?: string;
}) => {
  const { className, nav, wrapperClassName } = props;
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        'flex basis-full items-center justify-end gap-1',
        wrapperClassName,
      )}
    >
      {!open && (
        <div
          className={cn(
            'flex gap-4',
            className,
            nav && 'gap-2 max-md:items-center',
          )}
        >
          <Button
            variant={'outline'}
            asChild
            className={cn(
              nav && "max-md:size-10 [&_svg:not([class*='size-'])]:size-5",
            )}
          >
            {nav ? (
              <a href="tel:2409607515">
                <span className="max-lg:hidden">Call 240-960-7515</span>
                <span className="lg:hidden">
                  <PhoneIcon />
                </span>
              </a>
            ) : (
              <a href="tel:2409607515">Call 240-960-7515</a>
            )}
          </Button>
          <Button asChild className={cn(nav && 'max-md:h-10')}>
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>
      )}
      {nav && (
        <MobileNav open={open} onSetOpen={setOpen}>
          <span className="block p-2.5 lg:hidden">
            {open ? <CloseIcon /> : <MenuHamburger />}
          </span>
        </MobileNav>
      )}
    </div>
  );
};
