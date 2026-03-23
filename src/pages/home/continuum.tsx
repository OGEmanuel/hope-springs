import Heading from '#/components/Heading';

const continuumData = [
  {
    id: 1,
    header: 'Outpatient Mental Health Clinic (OMHC)',
    description:
      'Comprehensive psychiatric and therapeutic services including evaluations, medication management, individual therapy, family therapy, and group therapy for mood, anxiety, trauma, and co-occurring conditions.',
    subHeader: 'Psychiatric Rehabilitation Program (PRP)',
    subDescription:
      'Community-based skill-building services that support independent living, emotional regulation, employment readiness, and daily functioning for individuals with serious mental health conditions.',
  },
  {
    id: 2,
    header: 'Virtual IOP',
    description:
      'Our Online IOP delivers the same clinical structure and accountability as in-person programming through a secure, HIPAA-compliant telehealth platform — available statewide.',
    subHeader: 'Intensive Outpatient Program (IOP – Level 2.1)',
    subDescription:
      'Structured short-term treatment with multiple therapy sessions per week — appropriate for individuals who need more support than traditional therapy but do not require hospitalization.',
  },
  {
    id: 3,
    header: 'Substance Use Disorder (SUD) Treatment',
    description:
      'Confidential outpatient and intensive outpatient treatment for substance use challenges, including co-occurring mental health conditions, relapse prevention, and coordinated care.',
    subHeader: 'Health Home Services',
    subDescription:
      'Comprehensive care coordination that integrates behavioral health, primary care, medication management, and community support services for individuals with complex needs.',
  },
];

const Continuum = () => {
  return (
    <section className="bg-extra-2 flex justify-center">
      <div className="flex w-full max-w-360 flex-col gap-16 px-4 py-16 text-white md:gap-20 md:px-8 md:py-20 lg:py-30 xl:px-30">
        <Heading
          header="A Full Continuum of Outpatient Care"
          description="We offer a range of structured programs designed to meet individuals
            at their current level of need — from weekly outpatient therapy to
            intensive multi-session treatment and community-based
            rehabilitation."
          variant="h2"
          className="[&>div]:text-start [&>div]:text-white"
        />
        {continuumData.map(data => (
          <ContinuumCard data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default Continuum;

const ContinuumCard = (props: { data: (typeof continuumData)[0] }) => {
  const { data } = props;

  return (
    <div className="flex gap-10 max-lg:flex-col lg:gap-6 lg:odd:flex-row-reverse">
      <div className="flex w-full flex-col gap-5 lg:w-max lg:max-w-174.25 lg:gap-13.25">
        <div className="h-60 w-full rounded-[8px] bg-white sm:h-80 md:h-120"></div>
        <div className="flex flex-col gap-2 md:gap-5">
          <h3 className="text-xl/7 font-medium md:text-[2rem]/10">
            {data.header}
          </h3>
          <p className="leading-7 max-md:text-sm/6">{data.description}</p>
        </div>
      </div>
      <div className="lg:px-10">
        <div className="flex w-full flex-col gap-5 lg:w-max lg:max-w-100 lg:gap-13.25">
          <div className="h-60 w-full rounded-[8px] bg-white sm:h-80 md:max-lg:h-120"></div>
          <div className="flex flex-col gap-2 md:gap-5">
            <h4 className="text-xl/7 font-medium md:text-[1.75rem]/9">
              {data.subHeader}
            </h4>
            <p className="leading-7 max-md:text-sm/6">{data.subDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
