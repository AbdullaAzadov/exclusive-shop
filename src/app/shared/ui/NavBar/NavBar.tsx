import React from 'react';
import NavBarItem from './NavBarItem';
import { INavBarProps } from './types';

export const NavBar: React.FC<INavBarProps> = ({ data }) => {
  return (
    <div className='flex gap-5'>
      {data.map((item) => (
        <NavBarItem key={item.link} link={item.link} label={item.label} />
      ))}
    </div>
  );
};
