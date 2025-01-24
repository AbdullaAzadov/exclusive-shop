'use client';
import React, { FC } from 'react';
import { ITimedBanner } from './types';

type props = {
  data: ITimedBanner;
};

export const TimedBanner: FC<props> = ({ data }) => {
  const [timeLeft, setTimeLeft] = React.useState(data.timeLeft);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <article className='bg-black flex justify-between'>
      <div className='w-2/5 flex flex-col gap-6 p-16'>
        <h4 className='text-green-600 text-l font-bold'>{data.type}</h4>
        <h1 className='text-white text-4xl font-bold'>{data.title}</h1>

        <div className='flex items-center gap-4'>
          <div className='flex flex-col text-center justify-center font-bold min-w-20 min-h-20 bg-white rounded-full'>
            <p className='text-2xl'>{days}</p>
            days
          </div>
          <div className='flex flex-col text-center justify-center font-bold min-w-20 min-h-20 bg-white rounded-full'>
            <p className='text-2xl'>{hours}</p>
            hours
          </div>
          <div className='flex flex-col text-center justify-center font-bold min-w-20 min-h-20 bg-white rounded-full'>
            <p className='text-2xl'>{minutes}</p>
            minutes
          </div>
          <div className='flex flex-col text-center justify-center font-bold min-w-20 min-h-20 bg-white rounded-full'>
            <p className='text-2xl'>{seconds}</p>
            seconds
          </div>
        </div>

        <button className='bg-green-500 text-white py-3 px-6 rounded-md w-fit hover:bg-green-700 transition-colors'>
          Buy Now!
        </button>
      </div>
      <div className='flex justify-end items-center'>
        <img src={data.img} alt={data.title} />
      </div>
    </article>
  );
};

export default TimedBanner;
