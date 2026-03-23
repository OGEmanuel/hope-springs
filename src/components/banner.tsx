import { Link } from '@tanstack/react-router';
import { Button } from './ui/button';
import { cn } from '#/lib/utils';

const Banner = (props: { className?: string }) => {
  const { className } = props;

  return (
    <section className={cn('flex justify-center', className)}>
      <div className="custom-gradient flex w-full max-w-300 justify-center rounded-[8px] shadow-[0px_28px_48px_0px_#05201026]">
        <div className="flex w-full max-w-160 flex-col items-center gap-6 py-20 max-md:px-6 md:py-21.5">
          <div className="flex flex-col gap-4 text-center text-white">
            <h2 className="text-[1.75rem]/8 font-medium md:text-5xl/[56px]">
              Ready to Take the First Step?
            </h2>
            <p className="leading-7 font-medium max-md:text-sm/6">
              Beginning care can feel overwhelming, but you do not have to
              navigate it alone. we are available to answer questions, verify
              insurance coverage, and guide you through a simple digital intake
              process.
            </p>
          </div>
          <Button
            asChild
            className="text-primary w-max bg-white hover:bg-white"
          >
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
