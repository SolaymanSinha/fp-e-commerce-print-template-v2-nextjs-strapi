import React from 'react';
import QuantityInput from '../tiny-components/QuantityInput';
import BankaiButton from '../buttons/BankaiButton';
import ProductView from '../tiny-components/ProductView';

export default function ProductDetails() {
  return (
    <div className="flex justify-between w-full px-desktop-layout pt-10 gap-10">
      <div className="flex-1 w-full mx-auto">
        <ProductView />
      </div>

      <div className="flex-1">
        <div className="flex flex-col justify-center h-full">
          <div>
            <h1 className="text-4xl font-bold">Custom Mug Printing</h1>
            <p className="text-muted-foreground">
              Categories: Personalized Gifts
            </p>

            <div className="pt-5">
              <p>
                Create your own personalized mugs with high-quality printing
                that lasts. Perfect for gifting or branding, our custom mug
                printing service allows you to add photos, logos, or unique text
                to a variety of mug styles and colors. Made with durable
                ceramic, our mugs are both dishwasher and microwave safe, making
                them practical and memorable gifts for any occasion.
              </p>
            </div>
          </div>
          <div>
            <p className="text-primary font-bold py-4">$100</p>
            <div className="flex gap-3">
              <QuantityInput />
              <BankaiButton isPrimary className="text-white">
                Add to cart
              </BankaiButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
