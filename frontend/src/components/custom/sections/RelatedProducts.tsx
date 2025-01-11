import Image from 'next/image';
import React from 'react';
import BankaiButton from '../buttons/BankaiButton';

const RelatedProducts = () => {
  const featuredCategories = ['Business', 'Marketing', 'Stickers', 'Banners', 'Packing', 'Posters', 'Booklet', 'Books', 'Comics', 'Notebooks'];
  return (
    <section>
      <h2 className='section-header'>Related Products</h2>
      <div className="section-content w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {
          featuredCategories.map(category => (
            <div key={category} className='relative'>
              <Image src={'/bookmark.png'} alt="Hero Image" width={325} height={325} className='w-full' />
              <BankaiButton className='absolute bottom-0 rounded-none w-full'>{category}</BankaiButton>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default RelatedProducts;