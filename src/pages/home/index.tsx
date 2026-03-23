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
      <Banner />
    </>
  );
};

export default HomePage;
