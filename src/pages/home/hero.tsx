import Heading from '#/components/Heading';
import CarfLogo from '#/components/jsx-icons/carf-logo';

const HeroHome = () => {
  return (
    <section className="flex justify-center pt-10 pb-16 md:pt-18 md:pb-10">
      <div className="flex w-full max-w-360 flex-col items-center gap-12 px-4 md:gap-20 md:px-8 xl:px-30">
        <Heading
          header="Compassionate Behavioral Health Services"
          description="We provide trauma-informed outpatient mental health, psychiatric rehabilitation, and substance use treatment services for adolescents and adults."
          variant="h1"
          className="[&>*:nth-child(2)]:justify-center"
          cta
        />
        <div className="h-60 w-full rounded-[8px] bg-[#D9D9D9] sm:h-80 md:h-160"></div>
        <div className="border-border text-primary flex w-full items-center justify-between py-6.5 max-md:flex-col-reverse max-md:gap-8 md:border-t md:max-lg:gap-6 lg:pr-20">
          <p className="before:bg-tertiary relative w-full max-w-173.5 text-sm/6 font-medium before:absolute before:h-full before:w-1.5 before:rounded-[6px] md:text-lg/7">
            <span className="block pl-5.5 lg:pl-12">
              Licensed by the Maryland Behavioral Health Administration and
              accredited by CARF, our team is here to walk alongside you with
              clinical expertise and genuine care.
            </span>
          </p>
          <CarfLogo />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
