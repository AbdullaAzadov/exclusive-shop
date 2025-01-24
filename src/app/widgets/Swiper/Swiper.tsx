'use client';
import React, { FC } from 'react';
import { ISwiperItem } from './types';
import { SwiperItem } from './SwiperItem';

export interface ISwiperProps {
  data: ISwiperItem[];
}

export const Swiper: FC<ISwiperProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeItem = data[activeIndex];

  return (
    <article className='w-full h-full bg-black flex flex-col gap-4 items-center'>
      <SwiperItem data={activeItem} />
      <div className='flex gap-2 py-3'>
        {data.map((_, index) => (
          <span
            className={`block w-[0.75rem] h-[0.75rem] border-2 rounded-full cursor-pointer ${
              activeIndex === index ? 'bg-pink-700' : 'bg-gray-300'
            } hover:bg-pink-700 transition-colors`}
            key={index}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </article>
  );
};

export default Swiper;
