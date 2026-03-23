import BorderedContent from '#/components/bordered-content';
import { Button } from '#/components/ui/button';
import { Link } from '@tanstack/react-router';

const supportData = [
  {
    id: 1,
    textContent: 'Depression and mood disorders',
  },
  {
    id: 2,
    textContent: 'Anxiety disorders and panic symptoms',
  },
  {
    id: 3,
    textContent: 'Bipolar disorder',
  },
  {
    id: 4,
    textContent: 'Trauma-related disorders',
  },
  {
    id: 5,
    textContent: 'Adjustment disorders',
  },
  {
    id: 6,
    textContent: 'Grief and life transitions',
  },
];

const Support = () => {
  return (
    <section className="pb-30">
      <BorderedContent
        header="We support individuals across behavioral health conditions"
        description="We work with individuals newly seeking care, transitioning from treatment, or managing long-term mental health conditions."
        data={supportData}
      >
        <Button asChild className="w-max">
          <Link to="/contact">Contact us</Link>
        </Button>
      </BorderedContent>
    </section>
  );
};

export default Support;
