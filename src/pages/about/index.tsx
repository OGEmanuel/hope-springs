import Banner from '#/components/banner';
import Approach from './approach';
import HeroAbout from './hero';
import Leadership from './leadership';
import Quality from './quality';
import Support from './support';

const AboutPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-360 px-4 pt-10 pb-20 md:px-8 md:pt-16.75 xl:px-30">
        <HeroAbout />
        <Approach />
        <Leadership />
        <Quality />
        <Support />
        <Banner />
      </div>
    </div>
  );
};

export default AboutPage;
