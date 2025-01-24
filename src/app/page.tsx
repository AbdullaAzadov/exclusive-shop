import { SwiperMockData } from './entities/SwiperItems';
import Swiper from './widgets/Swiper/Swiper';

export default function Home() {
  return (
    <div>
      <Swiper data={SwiperMockData} />
    </div>
  );
}
