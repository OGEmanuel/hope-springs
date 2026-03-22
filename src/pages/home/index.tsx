import Banner from '#/components/banner';
import Continuum from './continuum';
import HeroHome from './hero';
import Why from './why';

const HomePage = () => {
  return (
    <div>
      <HeroHome />
      <Continuum />
      <Why />
      <Banner />
    </div>
  );
};

export default HomePage;
