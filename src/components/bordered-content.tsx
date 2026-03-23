import ArrowIcon from './jsx-icons/arrow-icon-2';

interface BorderedContentProps {
  header: string;
  description: string;
  data: { id: number; textContent: string }[];
  children?: React.ReactNode;
}

const BorderedContent = (props: BorderedContentProps) => {
  const { header, description, data, children } = props;

  return (
    <div className="border-border flex items-center gap-10 self-stretch rounded-[8px] max-lg:flex-col lg:border lg:p-10">
      <div className="h-60 w-full rounded-[8px] bg-[#D9D9D9] sm:h-90 md:h-100 lg:h-140 lg:max-w-140"></div>
      <div className="flex w-full flex-col gap-6">
        <div className="text-primary flex flex-col gap-5">
          <h3 className="text-xl/7 font-medium md:text-[2rem]/10">{header}</h3>
          <p className="leading-7 max-md:text-sm/6">{description}</p>
        </div>
        <ListData data={data} />
        {children}
      </div>
    </div>
  );
};

export default BorderedContent;

export const ListData = (props: {
  data: { id: number; textContent: string }[];
}) => {
  const { data } = props;
  return (
    <ul className="flex flex-col gap-5 sm:w-full">
      {data.map(data => (
        <li
          key={data.id}
          className="text-extra-2 flex items-center gap-4 leading-7 font-medium max-md:text-sm/6"
        >
          <ArrowIcon className="shrink-0" />
          {data.textContent}
        </li>
      ))}
    </ul>
  );
};
