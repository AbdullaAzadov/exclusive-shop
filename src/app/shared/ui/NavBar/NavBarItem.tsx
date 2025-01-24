import React from 'react';
import Link from 'next/link';
import { INavBarItem } from './types';

export const NavBarItem: React.FC<INavBarItem> = ({ link, label }) => {
  return (
    <Link
      href={link}
      className='hover:border-gray-600 hover:border-b text-x font-semibold transition-all'
    >
      {label}
    </Link>
  );
};

export default NavBarItem;
