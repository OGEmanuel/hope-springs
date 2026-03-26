import Heading from '#/components/Heading';
import CheckShield from '#/components/jsx-icons/check-shield';
import LinkIcon from '#/components/jsx-icons/link-icon';
import PeopleIcon from '#/components/jsx-icons/people-icon';
import PersonIcon from '#/components/jsx-icons/person-icon';
import { cn } from '#/lib/utils';

const approachData = [
  {
    id: 1,
    icon: <CheckShield />,
    header: 'Trauma-Informed',
    description:
      'We recognize that trauma shapes how individuals feel, think, and engage with treatment.',
  },
  {
    id: 2,
    icon: <PersonIcon />,
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
    icon: <LinkIcon />,
    header: 'Integrated and Coordinated',
    description:
      'We collaborate across care systems to reduce fragmentation and support continuity.',
  },
];

const Approach = () => {
  return (
    <section className="bg-extra-2 mb-20 flex flex-col items-center gap-16 px-4 pt-20 pb-20 text-white max-md:-mx-4 sm:pb-30 md:gap-30 md:rounded-[8px] md:px-20 md:shadow-[0px_28px_48px_0px_#05201026] lg:mb-51">
      <Heading
        header="Our Approach to Care"
        description="Our team of dedicated professionals is trained in the latest evidence-based practices."
        variant="h2"
        className="[&_p]:w-full [&_p]:max-w-120 [&_p]:text-center [&>div]:items-center [&>div]:gap-6 [&>div]:text-white"
      />
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2">
        {approachData.slice(0, 2).map((data, i) => (
          <ApproachCard
            key={data.id}
            data={data}
            className={cn(
              'border-primary max-md:border-primary max-md:border-b max-md:pb-12',
              i === 0
                ? 'md:border-r-[0.5px] md:pr-16'
                : 'md:border-l-[0.5px] md:pl-16',
            )}
          />
        ))}
        <hr className="border-primary col-span-2 max-md:hidden" />
        {approachData.slice(2, 4).map((data, i) => (
          <ApproachCard
            key={data.id}
            data={data}
            className={cn(
              'border-primary max-md:border-primary last:border-b-0 max-md:border-b max-md:pb-12',
              i === 0
                ? 'md:border-r-[0.5px] md:pr-16'
                : 'md:border-l-[0.5px] md:pl-16',
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
    <div className={cn('flex flex-col items-center gap-2 md:gap-4', className)}>
      {data.icon}
      <Heading
        header={data.header}
        description={data.description}
        variant="h4"
        className="[&>div]:text-white max-md:[&>div]:gap-2"
      />
    </div>
  );
};
