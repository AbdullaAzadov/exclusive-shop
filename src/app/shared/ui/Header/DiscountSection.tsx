import React from 'react';

export default function DiscountSection() {
  return (
    <article className='bg-black text-white flex items-center justify-end py-3 gap-2 px-[12.5%] relative min-h-12'>
      <p className='absolute left-[50%] translate-x-[-50%]'>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
        <a href='#' className='underline'>
          ShopNow
        </a>
      </p>
    </article>
  );
}
