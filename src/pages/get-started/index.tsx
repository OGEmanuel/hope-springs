import Banner from '#/components/banner';
import GetStartedHero from './hero';
import Insurance from './insurance';

const GetStartedPage = () => {
  return (
    <>
      <GetStartedHero />
      <Insurance />
      <Banner className="mb-20" />
    </>
  );
};

export default GetStartedPage;
