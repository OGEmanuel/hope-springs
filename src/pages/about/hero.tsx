import Heading from '#/components/Heading';

const HeroAbout = () => {
  return (
    <section className="flex items-center justify-between gap-16 pb-30">
      <Heading
        header="Our work is built on commitment to clinical excellence"
        description="We are a Maryland-licensed and CARF-accredited outpatient behavioral health provider, committed to serving adolescents and adults with respect and ethical accountability."
        cta
        variant="h2"
        className="basis-full [&>*:nth-child(2)]:flex-row-reverse [&>*:nth-child(2)]:justify-end [&>div]:text-start"
      />
      <div className="h-140 w-full max-w-140 basis-full rounded-[8px] bg-[#D9D9D9]"></div>
    </section>
  );
};

export default HeroAbout;
