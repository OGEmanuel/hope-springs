import Heading from '#/components/Heading';
import ContactForm from './form';

const ContactPage = () => {
  return (
    <section className="flex justify-center">
      <div className="flex w-full max-w-360 gap-6 px-4 pt-14 max-md:flex-col md:gap-16 md:px-8 xl:p-30 xl:px-30">
        <div className="flex flex-1 flex-col gap-8">
          <Heading
            header="Contact Us"
            description="Our intake team is available to answer questions, verify insurance coverage, and help you take the next step toward care."
            variant="h1"
            className="[&>div]:text-start"
          />
          <div className="flex flex-col gap-8 max-md:hidden">
            <div className="text-primary font-medium">
              <ContactCard />
              <p className="leading-7">
                Our team will respond with care, understanding, and guidance.
              </p>
            </div>
            <div className="text-primary flex flex-col gap-1 rounded-[8px] bg-[#FAFAFA] px-4 py-3">
              <p className="leading-7 font-medium">Crisis Resources</p>
              <div>
                <p className="leading-7">
                  Hope Springs is not a 24-hour emergency facility.
                </p>
                <ul>
                  <li className="leading-7">
                    Life-threatening emergency:{' '}
                    <a href="tel:911" className="font-medium">
                      {' '}
                      Call 911
                    </a>
                  </li>
                  <li className="leading-7">
                    Mental health crisis:{' '}
                    <a href="tel:988" className="font-medium">
                      {' '}
                      Call or text 988
                    </a>{' '}
                    — <span className="font-medium"> available 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-sm/6">
          <ContactForm />
          <div className="flex flex-col gap-8 md:hidden">
            <div className="text-primary font-medium">
              <ContactCard />
              <p className="leading-7">
                Our team will respond with care, understanding, and guidance.
              </p>
            </div>
            <div className="text-primary flex flex-col gap-1 rounded-[8px] bg-[#FAFAFA] px-4 py-3">
              <p className="leading-7 font-medium">Crisis Resources</p>
              <div>
                <p className="leading-7">
                  Hope Springs is not a 24-hour emergency facility.
                </p>
                <ul>
                  <li className="leading-7">
                    Life-threatening emergency:{' '}
                    <a href="tel:911" className="font-medium">
                      {' '}
                      Call 911
                    </a>
                  </li>
                  <li className="leading-7">
                    Mental health crisis:{' '}
                    <a href="tel:988" className="font-medium">
                      {' '}
                      Call or text 988
                    </a>{' '}
                    — <span className="font-medium"> available 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

export const ContactCard = () => {
  return (
    <div className="flex flex-col">
      <a href="tel:2409607515" className="w-max leading-7">
        📞 240-960-7515
      </a>
      <a
        href="mailto:info@hopespringsbehavioralhealth.com"
        className="w-max leading-7"
      >
        📧 info@hopespringsbehavioralhealth.com
      </a>
    </div>
  );
};
