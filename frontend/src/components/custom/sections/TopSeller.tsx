import Image from 'next/image';
import React from 'react';
import BankaiButton from '../buttons/BankaiButton';

const TopSeller = () => {
  const products = [
    {
      title: 'T-shirt Printing',
      image: '/bookmark.png',
    },
    {
      title: 'Business Cards',
      image: '/bookmark.png',
    },
    {
      title: 'A-Sign',
      image: '/bookmark.png',
    },
    {
      title: 'Car Magnet',
      image: '/bookmark.png',
    },
    {
      title: 'Carbonless Forms',
      image: '/bookmark.png',
    },
    {
      title: 'CD Sleeves',
      image: '/bookmark.png',
    },
  ];
  return (
    <section>
      <h2 className="section-header">Top Sellers</h2>

      <div className="bg-pink-50 section-content rounded-md">
        <div className="container mx-auto px-4 py-5">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-4 px-20 text-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Top-Selling Print Solutions
              </h3>
              <p className="text-lg text-gray-600">
                Discover Our Most Popular Products – Quality Prints Delivered
                Fast & Reliable
              </p>
            </div>
            <div className="relative aspect-square md:aspect-[4/3]">
              <Image
                src="/flyer.avif"
                alt="Featured print product"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto mt-5">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent w-full pb-4">
                <div className='flex justify-center'>
                  <BankaiButton
                    className=" hover:bg-black rounded-3xl"
                    isPrimary
                  >
                    {product.title}
                  </BankaiButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TopSeller;
