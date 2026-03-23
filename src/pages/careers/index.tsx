import Banner from '#/components/banner';
import Heading from '#/components/Heading';
import { ContactCard } from '../contact';
import CareersForm from './form';

const CareersPage = () => {
  return (
    <section className="flex justify-center">
      <div className="flex w-full max-w-360 flex-col gap-30 p-30">
        <div className="flex flex-1 gap-16">
          <div className="flex flex-col gap-8">
            <Heading
              header="Join the team"
              description="We are searching for committed individuals who want to serve others with respect and compassion. If you believe in meaningful service, this is the place for you."
              variant="h1"
              className="[&>div]:text-start"
            />
            <ContactCard />
          </div>
          <CareersForm />
        </div>
        <Banner className="w-full" />
      </div>
    </section>
  );
};

export default CareersPage;
