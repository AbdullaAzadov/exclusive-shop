'use client';
import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

export default function CartIcon({
  onClick = () => {},
  notifications = 0,
}: {
  className?: string;
  onClick?: () => void;
  notifications?: number;
}) {
  return (
    <div className='relative cursor-pointer flex flex-col' onClick={onClick}>
      {notifications > 0 && (
        <span className='absolute top-[-4px] right-[-8px] w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center'>
          {notifications}
        </span>
      )}
      <IoCartOutline className='scale-150 flex-1' />
    </div>
  );
}
