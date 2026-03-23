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
    <div className="border-border flex items-center gap-10 self-stretch rounded-[8px] border p-10">
      <div className="h-140 w-full max-w-140 rounded-[8px] bg-[#D9D9D9]"></div>
      <div className="flex flex-col gap-6">
        <div className="text-primary flex flex-col gap-5">
          <h3 className="text-[2rem]/10 font-medium">{header}</h3>
          <p className="leading-7">{description}</p>
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
    <ul className="flex flex-col gap-5">
      {data.map(data => (
        <li
          key={data.id}
          className="text-extra-2 flex items-center gap-4 leading-7 font-medium"
        >
          <ArrowIcon />
          {data.textContent}
        </li>
      ))}
    </ul>
  );
};
