import Heading from '#/components/Heading';

const HeroAbout = () => {
  return (
    <section className="flex justify-between gap-12 pb-20 max-lg:flex-col lg:items-center lg:gap-16 lg:pb-30">
      <Heading
        header="Our work is built on commitment to clinical excellence"
        description="We are a Maryland-licensed and CARF-accredited outpatient behavioral health provider, committed to serving adolescents and adults with respect and ethical accountability."
        cta
        variant="h2"
        className="lg:basis-full [&>*:nth-child(2)]:flex-row-reverse [&>*:nth-child(2)]:justify-end [&>div]:text-start"
      />
      <div className="h-70 w-full overflow-hidden rounded-[8px] bg-[#D9D9D9] sm:h-90 md:h-140 lg:max-w-140 lg:basis-full lg:max-xl:h-90">
        <img
          src="https://res.cloudinary.com/dl56ef7sx/image/upload/v1774317267/about-hero_gb55gg.webp"
          alt="about-hero"
          className="size-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroAbout;
