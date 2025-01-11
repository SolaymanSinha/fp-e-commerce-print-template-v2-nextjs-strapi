import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TW_LAYOUT } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';
import BankaiButton from '../buttons/BankaiButton';

// Tailwind CSS Classes
const TW_HEADER = 'text-3xl mb-5 font-bold';
const TW_INPUT_GAP = 'mt-2';
const TW_INPUT_BORDER = 'border border-border';

export const placeholders = {
  name: {
    first: 'First Name',
    last: 'Last Name',
  },
  companyName: 'Company Name',
  countryName: 'Country Name',
  streetAddress: 'Street Address',
  townOrCity: 'Town or City',
  postCode: 'Post Code / ZIP',
  phone: 'Phone Number',
  email: 'Email Address',
  note: 'Notes about your order, e.g. special notes for delivery.',
};

export default function Billing() {
  return (
    <div className={`${TW_LAYOUT} flex gap-10`}>
      <div className="flex-1">
        <BillingDetails />
      </div>

      <div className="flex-1">
        <YourOrder />
      </div>
    </div>
  );
}

export function BillingDetails() {
  return (
    <>
      <h1 className={TW_HEADER}>Billing Details</h1>
      <div className="flex justify-between gap-10">
        <Input
          className={`${TW_INPUT_BORDER}`}
          type="text"
          placeholder={placeholders.name.first}
        />
        <Input
          className={`${TW_INPUT_BORDER}`}
          type="text"
          placeholder={placeholders.name.last}
        />
      </div>

      <div>
        {Object.keys(placeholders).map((key) => {
          if (key === 'name') return null;
          const placeholder = placeholders[key as keyof typeof placeholders];

          if (typeof placeholder === 'string' && key === 'note') {
            return (
              <div key={key} className={`${TW_INPUT_GAP}`}>
                <Textarea
                  className={`${TW_INPUT_BORDER}`}
                  placeholder={placeholder}
                />
              </div>
            );
          }

          if (typeof placeholder === 'string') {
            return (
              <div key={key} className={`${TW_INPUT_GAP}`}>
                <Input
                  className={`${TW_INPUT_BORDER}`}
                  type="text"
                  placeholder={placeholder}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}

export function YourOrder() {
  return (
    <>
      <h1 className={`${TW_HEADER}`}>Your Order</h1>
      <div id='billing-table-container'>
        <table className='w-full border-collapse'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='flex gap-5 items-center'>Custom Mug Printing x 2 <Image src={'/mug.avif'} alt="mug" width={50} height={50} /></td>
              <td className='text-primary'>$100</td>
            </tr>
            <tr>
              <td className='flex gap-5 items-center'>Custom Mug Printing x 2 <Image src={'/mug.avif'} alt="mug" width={50} height={50} /></td>
              <td className='text-primary'>$100</td>
            </tr>
            <tr>
              <td className='flex gap-5 items-center'>Custom Mug Printing x 2 <Image src={'/mug.avif'} alt="mug" width={50} height={50} /></td>
              <td className='text-primary'>$100</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td className='font-bold'>Subtotal</td>
              <td className='text-primary'>$300</td>
            </tr>
            <tr>
              <td className='font-bold'>Total</td>
              <td className='text-primary'>$300</td>
            </tr>
          </tfoot>
        </table>

        <div className='flex justify-center'>
          <BankaiButton className='mt-5'>Place Order</BankaiButton>
        </div>
      </div>
    </>
  );
}
