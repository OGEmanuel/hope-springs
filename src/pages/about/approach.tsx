import Heading from '#/components/Heading';
import PeopleIcon from '#/components/jsx-icons/people-icon';
import { cn } from '#/lib/utils';

const approachData = [
  {
    id: 1,
    icon: <PeopleIcon />,
    header: 'Trauma-Informed',
    description:
      'We recognize that trauma shapes how individuals feel, think, and engage with treatment.',
  },
  {
    id: 2,
    icon: <PeopleIcon />,
    header: 'Person-Centered',
    description:
      'Treatment plans are not imposed — they are built collaboratively.',
  },
  {
    id: 3,
    icon: <PeopleIcon />,
    header: 'Community-Based',
    description:
      'Through our PRP and outpatient services, we focus on practical skill development across real-world environments.',
  },
  {
    id: 4,
    icon: <PeopleIcon />,
    header: 'Integrated and Coordinated',
    description:
      'We collaborate across care systems to reduce fragmentation and support continuity.',
  },
];

const Approach = () => {
  return (
    <section className="bg-extra-2 mb-51 flex flex-col items-center gap-30 rounded-[8px] px-20 pt-20 pb-30 text-white shadow-[0px_28px_48px_0px_#05201026]">
      <Heading
        header="Our Approach to Care"
        description="Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
        variant="h2"
        className="[&>div]:gap-6 [&>div]:text-white"
      />
      <div className="grid grid-cols-2 gap-y-16">
        {approachData.slice(0, 2).map((data, i) => (
          <ApproachCard
            key={data.id}
            data={data}
            className={cn(
              'border-primary',
              i === 0 ? 'border-r-[0.5px] pr-16' : 'border-l-[0.5px] pl-16',
            )}
          />
        ))}
        <hr className="border-primary col-span-2" />
        {approachData.slice(2, 4).map((data, i) => (
          <ApproachCard
            key={data.id}
            data={data}
            className={cn(
              'border-primary',
              i === 0 ? 'border-r-[0.5px] pr-16' : 'border-l-[0.5px] pl-16',
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default Approach;

const ApproachCard = (props: {
  data: (typeof approachData)[0];
  className?: string;
}) => {
  const { data, className } = props;

  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      {data.icon}
      <Heading
        header={data.header}
        description={data.description}
        variant="h4"
        className="[&>div]:text-white"
      />
    </div>
  );
};
