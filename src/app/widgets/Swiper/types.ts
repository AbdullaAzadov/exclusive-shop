import { StaticImageData } from 'next/image';

export interface ISwiperItem {
  logo?: React.ReactNode;
  title: string;
  heading: string;
  img: StaticImageData;
}
