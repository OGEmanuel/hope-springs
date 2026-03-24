import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '#/components/ui/accordion';

const faqsData = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'We provide Outpatient Mental Health (OMHC), Psychiatric Rehabilitation (PRP), Intensive Outpatient (IOP – Level 2.1), Virtual IOP, Substance Use Disorder treatment, and Health Home care coordination services — all in accordance with Maryland Behavioral Health Administration regulations.',
  },
  {
    id: 2,
    question: 'Who do you serve?',
    answer:
      'We serve adolescents and adults throughout Maryland experiencing mental health or substance use challenges. Services are individualized based on clinical assessment and medical necessity.',
  },
  {
    id: 3,
    question: 'How long does treatment last?',
    answer:
      'It depends on the level of care and your individual progress. IOP typically runs 9–12 weeks; PRP is based on functional progress; outpatient therapy varies by individual goals. All treatment plans are reviewed regularly.',
  },
  {
    id: 4,
    question: 'What is the difference between OMHC and PRP?',
    answer:
      'OMHC focuses on clinical treatment — therapy and medication management. PRP focuses on skill-building and functional rehabilitation in real-world settings. Many individuals participate in both simultaneously.',
  },
  {
    id: 5,
    question: "What if I'm in crisis?",
    answer:
      'If you are experiencing a life-threatening emergency, call 911. For emotional distress or mental health crisis support, call or text 988 (Suicide & Crisis Lifeline), available 24/7. Hope Springs Behavioral Health is not a 24-hour emergency facility.',
  },
  {
    id: 6,
    question: 'Do you accept insurance?',
    answer:
      'Yes. We work with eligible insurance providers in Maryland, including Medicaid and managed care plans. Our intake team verifies benefits prior to admission whenever possible. Self-pay options may also be available.',
  },
  {
    id: 7,
    question: 'Can family members be involved in treatment?',
    answer:
      'Yes. We work with eligible insurance providers in Maryland, including Medicaid and managed care plans. Our intake team verifies benefits prior to admission whenever possible. Self-pay options may also be available.',
  },
];

const Faqs = () => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="flex w-full max-w-200 flex-col gap-8"
    >
      {faqsData.map(data => (
        <AccordionItem
          value={`item-${data.id}`}
          className="text-primary flex flex-col gap-3 border-black/10"
        >
          <AccordionTrigger className="p-0 text-base/6 font-medium hover:no-underline md:text-xl/7">
            {data.question}
          </AccordionTrigger>
          <AccordionContent className="leading-7">
            {data.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faqs;
