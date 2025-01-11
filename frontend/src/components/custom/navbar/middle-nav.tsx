import Image from 'next/image';
import React from 'react';
import { SearchBar } from '../SearchBar';
import { PhoneOutgoing } from 'lucide-react';

const MiddleNav = () => {
  return (
    <div>
      {/* Tablet and Desktop Version */}
      <div className="bg-black md:px-tablet-layout lg:px-desktop-layout md:flex justify-between text-white items-center hidden md:visible">
        <div className="">
          <Image src={'/logo.png'} alt="logo" width={168} height={74} />
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="flex items-center">
          <div>
            <div>
              <span>Support 24/7</span>
            </div>
            <div className="text-white flex items-center">
              <PhoneOutgoing /> <span>347-289-3281</span>
            </div>
          </div>
          <div>
            <Image
              src={'/help-line.png'}
              alt="Help Line"
              width={86}
              height={86}
            />
          </div>
        </div>
      </div>

      {/* Mobiel Version */}
      <div className="md:hidden">
        <div className="flex justify-between bg-black px-mobile-layout py-2 mb-2">
          <div className="">
            <Image src={'/logo.png'} alt="logo" width={125} height={74} />
          </div>
          <div className="flex items-center gap-2">
            <div>
              <div>
                <span className="text-white">Support 24/7</span>
              </div>
              <div className="flex items-center text-white">
                <PhoneOutgoing size={20} />{' '}
                <span className="ml-2">347-289-3281</span>
              </div>
            </div>
            <div>
              <Image
                src={'/help-line.png'}
                alt="Help Line"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className="w-full px-mobile-layout">
          <div className="flex justify-center">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
