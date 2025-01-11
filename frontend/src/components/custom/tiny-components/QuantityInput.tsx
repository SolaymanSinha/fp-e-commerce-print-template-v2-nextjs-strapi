'use client';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex">
      <button className="rounded-md rounded-r-none border-r-0 -mr-1 border py-1 px-3" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
        -
      </button>
      <div className="w-12">
        <Input
          type="number"
          className="px-0 text-center appearance-none focus:outline-none custom-number-input text-black"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>
      <button className="rounded-md rounded-l-none border-l-0 -ml-1 border py-1 px-3" onClick={() => setQuantity(quantity + 1)}>
        +
      </button>
    </div>
  );
}
export default QuantityInput;