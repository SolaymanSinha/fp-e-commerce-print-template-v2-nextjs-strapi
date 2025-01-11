import Link from 'next/link';
import React from 'react';
import {CircleHelp, Users, Info, ShoppingCart} from 'lucide-react'
import BankaiButton from '../buttons/BankaiButton';

const TopNavbar = () => {
  return (
    <div className='px-layout py-nav'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-5'>
          <BankaiButton className='flex gap-1' href="/#faqs" variant={'ghost'}><CircleHelp size={20} /> FAQs</BankaiButton>
          <BankaiButton className='flex gap-1' href="/#about-us" variant={'ghost'}><Users size={20} /> Contact US</BankaiButton>
          <BankaiButton className='flex gap-1' href="/#contact-us" variant={'ghost'}><Info size={20} /> About US</BankaiButton>
        </div>
        <div className='flex gap-5'>
          <Link className='relative mt-2' href={'/cart'}><ShoppingCart /><div className='rounded-full absolute -right-3 -top-2 bg-yellow-500'><span className='px-2 text-xs text-white '>0</span></div></Link>
          <BankaiButton href='/login' variant='ghost'>Log in</BankaiButton>
          <BankaiButton href='/sign-up' isPrimary>Sign up</BankaiButton>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;