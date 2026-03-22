import { ContactBlock } from '#/components/Header';
import CarfLogo from '#/components/jsx-icons/carf-logo';

const HeroHome = () => {
  return (
    <section className="flex justify-center pt-18 pb-10">
      <div className="flex w-full max-w-360 flex-col items-center gap-20 px-30">
        <div className="flex w-full max-w-160 flex-col gap-6">
          <div className="text-primary flex flex-col gap-4 text-center font-medium">
            <h1 className="text-5xl/[56px]">
              Compassionate Behavioral Health Services
            </h1>
            <p className="leading-7">
              We provide trauma-informed outpatient mental health, psychiatric
              rehabilitation, and substance use treatment services for
              adolescents and adults.
            </p>
          </div>
          <ContactBlock className="justify-center" />
        </div>
        <div className="h-160 w-full rounded-[8px] bg-[#D9D9D9]"></div>
        <div className="border-border text-primary flex w-full items-center justify-between border-t py-6.5 pr-20">
          <p className="before:bg-tertiary relative w-full max-w-173.5 text-lg/7 font-medium before:absolute before:h-full before:w-1.5 before:rounded-[6px]">
            <span className="block pl-12">
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
