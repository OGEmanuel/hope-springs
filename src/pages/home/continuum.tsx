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
      <div className="flex w-full max-w-360 flex-col gap-20 px-30 py-30 text-white">
        <div className="flex w-full max-w-160 flex-col gap-6 font-medium">
          <h2 className="text-5xl/[56px]">
            A Full Continuum of Outpatient Care
          </h2>
          <p className="leading-7">
            We offer a range of structured programs designed to meet individuals
            at their current level of need — from weekly outpatient therapy to
            intensive multi-session treatment and community-based
            rehabilitation.
          </p>
        </div>
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
    <div className="flex gap-6 odd:flex-row-reverse">
      <div className="flex w-max max-w-174.25 flex-col gap-13.25">
        <div className="h-120 w-full rounded-[8px] bg-white"></div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[2rem]/10 font-medium">{data.header}</h3>
          <p className="leading-7">{data.description}</p>
        </div>
      </div>
      <div className="px-10">
        <div className="flex w-max max-w-100 flex-col gap-13.25">
          <div className="h-80 w-full rounded-[8px] bg-white"></div>
          <div className="flex flex-col gap-5">
            <h4 className="text-[1.75rem]/9 font-medium">{data.subHeader}</h4>
            <p className="leading-7">{data.subDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
