import { SwiperMockData } from './entities/SwiperItems';
import { TimedBannerData } from './entities/TimedBanner';
import Swiper from './widgets/Swiper/Swiper';
import TimedBanner from './widgets/TimedBanner/TimedBanner';

export default function Home() {
  return (
    <div className='flex flex-col gap-16'>
      <Swiper data={SwiperMockData} />
      <TimedBanner data={TimedBannerData} />
    </div>
  );
}
