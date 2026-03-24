import Heading from '#/components/Heading';
import GoldBadge from '#/components/jsx-icons/gold-badge';

const Quality = () => {
  return (
    <section className="flex flex-col items-center gap-12 pb-20 md:gap-20 md:pb-40">
      <Heading
        header="Quality, Compliance & Accountability"
        description="As a Maryland-licensed and CARF-accredited provider, we operate under structured quality improvement processes that include outcome tracking, clinical supervision audits, client satisfaction monitoring, and regular compliance reviews."
        variant="h2"
        className="max-w-164"
      />
      <GoldBadge />
      <Heading
        description="Our programs follow COMAR 10.63 regulations and are continually evaluated for effectiveness, safety, and regulatory compliance. We are committed not only to providing services — but to providing services that demonstrate measurable impact."
        className="max-w-164"
      />
    </section>
  );
};

export default Quality;
