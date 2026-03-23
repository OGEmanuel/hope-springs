import { ListData } from '#/components/bordered-content';
import Heading from '#/components/Heading';

const whatToBring = [
  {
    id: 1,
    textContent: 'Government-issued photo ID',
  },
  {
    id: 2,
    textContent: 'Insurance card (if applicable)',
  },
  {
    id: 3,
    textContent: 'Current medication list',
  },
  {
    id: 4,
    textContent: 'Referral documentation (if applicable)',
  },
  {
    id: 5,
    textContent:
      'Discharge paperwork if transitioning from a higher level of care',
  },
];

const Insurance = () => {
  return (
    <section className="mb-30 flex justify-center bg-[#FAFAFA]">
      <div className="flex w-full max-w-360 gap-16 p-30">
        <div className="flex basis-full flex-col gap-6">
          <Heading
            header="Insurance & Payment"
            description="We work with eligible insurance providers in Maryland, including Medicaid and managed care plans. Coverage varies by plan and service type. Our intake team verifies benefits prior to admission whenever possible."
            variant="h2"
            className="[&>div]:text-start"
          />
          <p className="text-primary leading-7 font-medium">
            For individuals without insurance or with out-of-network coverage,
            self-pay options may be available. Please contact our office for
            current rates and payment arrangements.
          </p>
        </div>
        <div className="flex basis-full flex-col gap-6">
          <Heading
            header="What to Bring"
            description="Please have the following ready for your first appointment:"
            variant="h2"
            className="[&>div]:text-start"
          />
          <ListData data={whatToBring} />
          <p className="text-primary leading-7 font-medium">
            If you need additional support, our team can assist you by phone or
            in person.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
