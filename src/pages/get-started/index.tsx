import Banner from '#/components/banner';
import GetStartedHero from './hero';
import Insurance from './insurance';

const GetStartedPage = () => {
  return (
    <>
      <GetStartedHero />
      <Insurance />
      <Banner className="mx-4 mb-20 md:mx-8 xl:mx-30" />
    </>
  );
};

export default GetStartedPage;
