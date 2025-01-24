'use client';
import Link from 'next/link';
import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { FaRegStar } from 'react-icons/fa';
import { IoBagHandleSharp, IoCloseCircle } from 'react-icons/io5';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { RiAccountCircleFill } from 'react-icons/ri';

export default function ProfileIcon() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='flex items-center justify-center relative'>
      <RiAccountCircleFill
        className='scale-[2] cursor-pointer'
        color='#d40055'
        onClick={() => setIsOpen((v) => !v)}
      />
      {isOpen && (
        <div className='absolute top-16 right-0 w-60 bg-gradient-to-b from-stone-500 to-stone-900 text-white shadow-md rounded-lg p-2 py-4'>
          <ul>
            <li>
              <Link href={'#'} className={liClassName}>
                <MdOutlineAccountCircle />
                Manage My Account
              </Link>
            </li>
            <li>
              <Link href={'#'} className={liClassName}>
                <IoBagHandleSharp />
                My Order
              </Link>
            </li>
            <li>
              <Link href={'#'} className={liClassName}>
                <IoCloseCircle />
                My Cancellations
              </Link>
            </li>
            <li>
              <Link href={'#'} className={liClassName}>
                <FaRegStar />
                My Reviews
              </Link>
            </li>
            <li>
              <Link href={'#'} className={liClassName}>
                <BiLogOut />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

const liClassName = 'flex items-center gap-2 py-1 cursor-pointer';
