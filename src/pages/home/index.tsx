import Banner from '#/components/banner';
import Continuum from './continuum';
import HeroHome from './hero';
import Why from './why';

const HomePage = () => {
  return (
    <>
      <HeroHome />
      <Continuum />
      <Why />
      <Banner className="mx-4 mb-10 md:mx-8 xl:mx-30" />
    </>
  );
};

export default HomePage;
