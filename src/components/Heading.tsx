import { cn } from '#/lib/utils';
import { Link } from '@tanstack/react-router';
import { Button } from './ui/button';

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
          <h1 className="text-5xl/[56px]">{header}</h1>
        ) : variant === 'h2' ? (
          <h2 className="text-5xl/[56px]">{header}</h2>
        ) : variant === 'h4' ? (
          <h4 className="text-[1.75rem]/9">{header}</h4>
        ) : (
          <h5 className="text-xl/7">{header}</h5>
        )}
        <p className="leading-7">{description}</p>
      </div>
      {cta && <ContactBlock className="justify-center" />}
    </div>
  );
};

export default Heading;

export const ContactBlock = (props: { className?: string }) => {
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
