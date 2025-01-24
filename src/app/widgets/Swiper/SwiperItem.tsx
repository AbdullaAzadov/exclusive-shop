import React, { FC } from 'react';
import { ISwiperItem } from './types';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

interface SwiperItemProps {
  data: ISwiperItem;
}

export const SwiperItem: FC<SwiperItemProps> = ({ data }) => {
  return (
    <div className='text-white w-[65%] flex justify-between py-4 select-none'>
      <div className='w-2/5'>
        <div>
          <p className='flex items-center gap-2 font-thin'>
            {data.logo}
            {data.title}
          </p>
        </div>
        <h1 className='text-[2.75rem] font-bold mt-4 mb-6'>{data.heading}</h1>
        <Link
          href='#'
          className='flex items-center gap-2 border-gray-500 border-b w-fit'
        >
          Shop Now <BsArrowRight className='w-5 h-5' />
        </Link>
      </div>
      <div>
        <Image src={data.img} alt={data.title} />
      </div>
    </div>
  );
};
