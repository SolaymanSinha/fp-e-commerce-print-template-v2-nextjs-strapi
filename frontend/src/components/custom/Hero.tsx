import Image from 'next/image';
import React from 'react';

// You can add call to action button. But It's a bit tricker and you have to maintain mobile, tablet, and desktop screen manually.

const Hero = () => {
  return (
    <div id="Hero" className="relative">
      <Image src={'/hero.png'} alt="Hero Image" width={1920} height={1080} />

      {/* Code to Add Call to Action Button on the hero image */}
      {/* <BankaiButton className='absolute top-1/2 left-1/2' isPrimary>Hi</BankaiButton> */}
    </div>
  );
};

export default Hero;
