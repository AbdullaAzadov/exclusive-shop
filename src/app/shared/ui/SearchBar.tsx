import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

export default function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className='relative'>
      <input
        type='text'
        placeholder={placeholder}
        className='bg-gray-100 px-4 py-2 pr-10'
      />
      <IoSearchOutline className='absolute top-[50%] translate-y-[-50%] right-4 scale-125' />
    </div>
  );
}
