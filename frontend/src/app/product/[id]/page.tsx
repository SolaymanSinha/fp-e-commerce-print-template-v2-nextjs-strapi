import ProductDetails from '@/components/custom/sections/ProductDetails';
import RelatedProducts from '@/components/custom/sections/RelatedProducts';
import React from 'react';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const product = (await params)?.id;
  console.log(product);

  return (
    <React.Fragment>
      <ProductDetails />
      <RelatedProducts />
    </React.Fragment>
  );
}
