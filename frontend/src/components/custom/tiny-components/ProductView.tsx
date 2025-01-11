import Image from 'next/image';
import React from 'react';

const ProductView = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Image src="/mug.avif" alt="mug" width={500} height={500} />
      </div>

      <div className="flex gap-3 mt-10">
        <Image src="/mug.avif" alt="mug" width={98} height={98} />
        <Image src="/mug.avif" alt="mug" width={98} height={98} />
        <Image src="/mug.avif" alt="mug" width={98} height={98} />
        <Image src="/mug.avif" alt="mug" width={98} height={98} />
      </div>
    </div>
  );
};

export default ProductView;
