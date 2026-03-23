import BorderedContent from '#/components/bordered-content';
import Heading from '#/components/Heading';
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
      <div className="flex w-full max-w-360 flex-col items-center gap-10 px-4 py-20 md:gap-20 md:px-8 xl:px-30 xl:py-30">
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
      </div>
    </section>
  );
};

export default Why;
