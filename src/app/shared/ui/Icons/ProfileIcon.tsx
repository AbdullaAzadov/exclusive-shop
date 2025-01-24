import React from 'react';
import { RiAccountCircleFill } from 'react-icons/ri';

export default function ProfileIcon() {
  return (
    <div className='flex items-center justify-center'>
      <RiAccountCircleFill
        className='scale-[2] cursor-pointer'
        color='#d40055'
      />
    </div>
  );
}
