import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <Link
      href='/'
      className='text-3xl font-extrabold select-none cursor-pointer'
    >
      Exclusive
    </Link>
  );
}
