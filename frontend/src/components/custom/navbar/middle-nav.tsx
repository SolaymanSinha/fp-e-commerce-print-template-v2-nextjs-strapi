import Image from 'next/image';
import React from 'react';
import { SearchBar } from '../SearchBar';
import {PhoneOutgoing} from 'lucide-react'

const MiddleNav = () => {
  return (
    <div className='bg-black px-layout flex justify-between text-white items-center'>
      <div className=''>
        <Image src={'/logo.png'} alt="logo" width={168} height={74} />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className='flex items-center'>
        <div>
          <div><span>Support 24/7</span></div>
          <div className='text-white flex items-center'><PhoneOutgoing /> <span>347-289-3281</span></div>
        </div>
        <div>
          <Image src={'/help-line.png'} alt="Help Line" width={86} height={86} />
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;