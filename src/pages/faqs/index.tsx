import Banner from '#/components/banner';
import Faqs from './faqs';
import FaqsHero from './hero';

const FaqsPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-360 flex-col items-center gap-30.75 px-4 pt-16.75 pb-20 md:px-8 xl:px-30">
        <FaqsHero />
        <Faqs />
        <Banner className="w-full" />
      </div>
    </div>
  );
};

export default FaqsPage;
