import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className='w-full bg-gradient-to-r from-pink-400 via-red-400 to-yellow-300 shadow-lg py-4 px-8 flex items-center justify-between'>
      <div className='text-2xl font-bold text-white tracking-widest drop-shadow-lg'>
        Three Hearts
      </div>
      <nav>
        <ul className='flex gap-8 text-lg font-medium'>
          <li>
            <Link
              href='/'
              className='text-white hover:text-yellow-200 transition-colors duration-200'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/gallery'
              className='text-white hover:text-yellow-200 transition-colors duration-200'
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href='/blog'
              className='text-white hover:text-yellow-200 transition-colors duration-200'
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href='/shop'
              className='text-white hover:text-yellow-200 transition-colors duration-200'
            >
              Shop
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
