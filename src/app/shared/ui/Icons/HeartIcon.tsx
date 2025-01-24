'use client';
import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

type Props = {
  className?: string;
};

export const HeartIcon: React.FC<Props> = ({ className = '' }) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <span
      className='flex items-center justify-center'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <FaHeart className={`cursor-pointer ${className}`} color='red' />
      ) : (
        <FaRegHeart className={`cursor-pointer ${className}`} />
      )}
    </span>
  );
};

export default HeartIcon;
