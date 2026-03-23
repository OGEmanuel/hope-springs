import Heading from '#/components/Heading';

const Leadership = () => {
  return (
    <section className="flex items-center gap-16 pb-40">
      <div className="border-border flex flex-1 flex-col items-center gap-6 rounded-[8px] border p-4">
        <div className="h-100 w-full max-w-md rounded-[8px] bg-[#D9D9D9]"></div>
        <Heading
          header="Olasunkanmi (Ola) Atoki"
          description="Owner & Executive Director"
          variant="h4"
        />
      </div>
      <Heading
        header="Our Leadership"
        description="Ola Atoki brings executive leadership experience across healthcare, compliance, and behavioral health program development. He oversees organizational governance, regulatory compliance, strategic planning, and quality improvement — ensuring Hope Springs Behavioral Health upholds Maryland BHA and CARF standards across all programs."
        variant="h2"
        className="[&>div]:text-start"
      />
    </section>
  );
};

export default Leadership;
