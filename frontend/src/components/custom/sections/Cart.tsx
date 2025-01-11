import { TW_LAYOUT } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';
import QuantityInput from '../tiny-components/QuantityInput';
import { ChevronDown, Info } from 'lucide-react';

export default function Cart() {
  return (
    <div className={`${TW_LAYOUT}`}>
      <h1 className="text-4xl font-bold">View Cart</h1>

      <div className="flex gap-10 mt-5">
        <div className="flex-auto flex flex-col gap-5">
          <CartElement />
          <CartElement />
          <CartElement />
        </div>
        <div className="flex-1">
          <Total />
        </div>
      </div>
    </div>
  );
}

export function CartElement() {
  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="font-medium">Product Details</th>
          <th className="font-medium">Quantity</th>
          <th className="font-medium">Total</th>
          <th className="font-medium">Price</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border border-border rounded-lg">
          <td className="flex gap-5 items-center py-3 px-2">
            <Image src={'/mug.avif'} alt="mug" width={90} height={90} />
            Product Name
          </td>
          <td>
            <QuantityInput />
          </td>
          <td className="">$100.00</td>
          <td className="">$100.00</td>
        </tr>
      </tbody>
    </table>
  );
}

export function Total() {
  return (
    <div className='border border-border rounded-sm p-5 mt-6'>
      <h3 className="text-2xl font-medium">Total</h3>

      <div className='flex justify-between mb-3 mt-5'>
        <p>Sub-total: </p>
        <p>$100.00</p>
      </div>

      <div className='flex justify-between mb-3'>
        <p>Delivery</p>
        <p><Info /></p>
      </div>

      <div className='flex justify-between'>
        <p>Standard delivery (Free)</p>
        <ChevronDown />
      </div>
    </div>
  );
}
