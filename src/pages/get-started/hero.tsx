import Heading from '#/components/Heading';

const steps = [
  {
    id: 1,
    title: 'Contact Our Intake Team',
    description: `Call us at 240-960-7515 or use our secure contact form. Our intake coordinator will conduct a brief screening, answer your questions, verify insurance coverage, and schedule a comprehensive assessment.`,
  },
  {
    id: 2,
    title: 'Insurance Verification',
    description:
      'Before services begin, we verify your active coverage, confirm behavioral health benefits, identify copays or deductibles, and determine prior authorization requirements. We work with eligible Maryland insurance providers including Medicaid and managed care plans.',
  },
  {
    id: 3,
    title: 'Comprehensive Assessment',
    description:
      'Before services begin, we verify your active coverage, confirm behavioral health benefits, identify copays or deductibles, and determine prior authorization requirements. We work with eligible Maryland insurance providers including Medicaid and managed care plans.',
  },
  {
    id: 4,
    title: 'Personalized Treatment Plan',
    description:
      'Following your assessment, we develop a collaborative, person-centered treatment plan outlining your goals, recommended services, session frequency, and measurable objectives. Plans are reviewed regularly and adjusted as you progress.',
  },
];

const GetStartedHero = () => {
  return (
    <section className="flex justify-center pt-18 pb-16 md:pb-30">
      <div className="flex w-full max-w-360 flex-col items-center gap-20 px-4 md:gap-22 md:px-8 xl:px-30">
        <Heading
          header="Getting started"
          description="Beginning behavioral health services does not have to be complicated. Our intake process is designed to be clear, supportive, and efficient."
          cta
          variant="h1"
          className="[&>*:nth-child(2)]:justify-center"
        />
        <div className="bg-extra-2 flex flex-col gap-12 px-4 py-14 text-white max-md:-mx-4 md:w-full md:gap-30 md:rounded-[8px] md:p-20 md:shadow-[0px_28px_48px_0px_#05201026]">
          {steps.map(step => (
            <div
              key={step.id}
              className="flex w-full items-center gap-6 max-md:flex-col md:gap-24.5"
            >
              <span className="w-full text-[2rem]/10 font-medium md:max-w-31 md:text-5xl/[56px]">
                0{step.id}.
              </span>
              <span className="bg-primary block w-px self-stretch max-md:hidden"></span>
              <Heading
                header={step.title}
                description={step.description}
                className="max-w-180 flex-1 [&>div]:text-start [&>div]:text-white"
                variant="h5"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedHero;
