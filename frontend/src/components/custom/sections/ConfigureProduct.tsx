import React from 'react';
import ProductView from '../tiny-components/ProductView';
import SelectComponent from '../tiny-components/Select';
import { ImageUpload } from '../tiny-components/ImageUpload';
import { Textarea } from '@/components/ui/textarea';
import QuantityInput from '../tiny-components/QuantityInput';
import BankaiButton from '../buttons/BankaiButton';

const ConfigureProduct = () => {
  return (
    <div className="flex gap-10 mt-10 px-desktop-layout">
      <div className="flex-auto">
        <ProductView />
      </div>

      <div className="flex-1">
        <h2 className="font-bold text-3xl mb-5">Configure and Price</h2>
        <div className="flex flex-col gap-2">
          <SelectComponent
            items={['Small', 'Medium', 'Large']}
            placeholder="Select Size*"
          />
          <SelectComponent
            items={['White', 'Black', 'Red']}
            placeholder="Select Color*"
          />
          <SelectComponent
            items={['Matte', 'Glossy']}
            placeholder="Select Finish*"
          />

          <div className="mt-2">
            <ImageUpload label="Upload image of side-1*" />
          </div>

          <div className="mt-6">
            <ImageUpload label="Upload image of side-2*" />
          </div>

          <div className="mt-6">
            <Textarea placeholder="Additional information" />
          </div>

          <div className="flex gap-3 mt-2">
            <QuantityInput />
            <BankaiButton isPrimary className="text-white">
              Add to cart
            </BankaiButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigureProduct;
