import React from 'react';
import DiscountSection from './DiscountSection';
import Logo from '../Logo';
import { NavBar } from '../NavBar/NavBar';
import { HeaderLinks } from './data';
import SearchBar from '../SearchBar';
import HeartIcon from '../Icons/HeartIcon';
import CartIcon from '../Icons/CartIcon';
import ProfileIcon from '../Icons/ProfileIcon';

export default function Header() {
  return (
    <header>
      <DiscountSection />
      <nav className='flex items-center justify-between pt-10 pb-4 px-[12.5%] border-b shadow-sm border-gray-500 border-opacity-50'>
        <Logo />
        <NavBar {...HeaderLinks} />
        <article className='flex gap-8'>
          <SearchBar placeholder='What are you looking for?' />
          <HeartIcon className='scale-125' />
          <CartIcon notifications={2} />
          <ProfileIcon />
        </article>
      </nav>
    </header>
  );
}
