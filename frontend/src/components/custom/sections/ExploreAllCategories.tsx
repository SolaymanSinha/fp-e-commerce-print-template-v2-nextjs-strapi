import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const ExploreAllCategories = () => {
  const categories = ['Business', 'Marketing', 'Stickers', 'Banners', 'Packing', 'Posters'];
  return (
    <section>
      <h2 className='section-header'>Explore All Categories</h2>
      <div className='section-content'>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full"
        >
          <CarouselContent>
            {categories.map(category => (
              <CarouselItem key={category} className="md:basis-1/4 lg:basis-1/6">
              <div className='flex justify-center'>
              <Image
                src={'/demo-category.png'}
                alt="Hero Image"
                width={173}
                height={173}
                className='rounded-full'
              />
              </div>
              <h4 className='flex justify-center font-semibold'>{category}</h4>
            </CarouselItem>
            ))}
            
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ExploreAllCategories;
