import BorderedContent from '#/components/bordered-content';
import Heading from '#/components/Heading';
import ArrowIcon from '#/components/jsx-icons/arrow-icon-2';
import { Button } from '#/components/ui/button';
import { Link } from '@tanstack/react-router';

const whyData = [
  {
    id: 1,
    textContent: 'Trauma-informed and culturally responsive care',
  },
  {
    id: 2,
    textContent: 'Licensed by the Maryland Behavioral Health Administration',
  },
  {
    id: 3,
    textContent: 'Person-centered treatment planning',
  },
  {
    id: 4,
    textContent: 'CARF-accredited programs',
  },
  {
    id: 5,
    textContent: 'In-person and telehealth options statewide',
  },
  {
    id: 6,
    textContent: 'Strict HIPAA and 42 CFR Part 2 confidentiality standards',
  },
];

const Why = () => {
  return (
    <section className="flex justify-center">
      <div className="flex w-full max-w-360 flex-col items-center gap-20 p-30">
        <Heading
          header="Why Choose Hope Springs Behavioral Health"
          description="We prioritize physical and emotional safety, build trust through
            transparency, and actively involve individuals in shared
            decision-making throughout."
          variant="h2"
        />
        <BorderedContent
          header="Choosing a behavioral health provider is an important decision"
          description="We are committed to clinical excellence, transparency, and ethical service delivery."
          data={whyData}
        >
          <Button asChild className="w-max">
            <Link to="/contact">Contact us</Link>
          </Button>
        </BorderedContent>
        {/* <div className="border-border flex items-center gap-10 self-stretch rounded-[8px] border p-10">
          <div className="h-140 w-full max-w-140 rounded-[8px] bg-[#D9D9D9]"></div>
          <div className="flex flex-col gap-6">
            <div className="text-primary flex flex-col gap-5">
              <h3 className="text-[2rem]/10 font-medium">
                Choosing a behavioral health provider is an important decision
              </h3>
              <p className="leading-7">
                We are committed to clinical excellence, transparency, and
                ethical service delivery.
              </p>
            </div>
            <ul className="flex flex-col gap-5">
              {whyData.map(data => (
                <li
                  key={data.id}
                  className="text-extra-2 flex items-center gap-4 leading-7 font-medium"
                >
                  <ArrowIcon />
                  {data.why}
                </li>
              ))}
            </ul>
            <Button asChild className="w-max">
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Why;
