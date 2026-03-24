import Heading from '#/components/Heading';

const Leadership = () => {
  return (
    <section className="flex gap-12 pb-40 max-md:flex-col-reverse md:items-center lg:gap-16">
      <div className="border-border flex flex-col items-center gap-6 rounded-[8px] border px-2 pt-2 pb-6 md:p-4 md:max-xl:basis-full xl:flex-1">
        <div className="h-70 w-full rounded bg-[#D9D9D9] sm:h-80 md:h-100 md:max-w-md md:rounded-[8px]"></div>
        <Heading
          header="Olasunkanmi (Ola) Atoki"
          description="Owner & Executive Director"
          variant="h4"
          className="max-md:[&>div]:gap-2"
        />
      </div>
      <Heading
        header="Our Leadership"
        description="Ola Atoki brings executive leadership experience across healthcare, compliance, and behavioral health program development. He oversees organizational governance, regulatory compliance, strategic planning, and quality improvement — ensuring Hope Springs Behavioral Health upholds Maryland BHA and CARF standards across all programs."
        variant="h2"
        className="md:max-xl:basis-full [&>div]:text-start"
      />
    </section>
  );
};

export default Leadership;
