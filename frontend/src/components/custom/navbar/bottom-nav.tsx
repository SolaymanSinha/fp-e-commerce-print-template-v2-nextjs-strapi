import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React from 'react';
import BankaiButton from '../buttons/BankaiButton';
import { List, ChevronDown } from 'lucide-react';

const BottomNav = () => {
  return (
    <div className="px-layout py-[6px] flex items-center overflow-x-scroll">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <BankaiButton className="bg-gray-200" href="" variant={'outline'}>
              <List /> All Categories <ChevronDown />
            </BankaiButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem>Electronics</DropdownMenuItem>
          <DropdownMenuItem>Fashion</DropdownMenuItem>
          <DropdownMenuItem>Business</DropdownMenuItem>
          <DropdownMenuItem>Marketing</DropdownMenuItem>
          <DropdownMenuItem>Banners</DropdownMenuItem>
          <DropdownMenuItem>Posters</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <BankaiButton variant={'ghost'} className='font-medium'>Home</BankaiButton>
      <BankaiButton variant={'ghost'} className='font-medium'>Business</BankaiButton>
      <BankaiButton variant={'ghost'} className='font-medium'>Marketing</BankaiButton>
      <BankaiButton variant={'ghost'} className='font-medium'>Stickers</BankaiButton>
      <BankaiButton variant={'ghost'} className='font-medium'>Banners</BankaiButton>
      <BankaiButton variant={'ghost'} className='font-medium'>Posters</BankaiButton>
      <BankaiButton variant={'ghost'} className='font-medium'>Packaging</BankaiButton>
      <BankaiButton variant={'ghost'} className='font-medium'>Bookmark</BankaiButton>
      <BankaiButton variant={'ghost'} className='font-medium'>Catalog Booklet</BankaiButton>
      <BankaiButton variant={'ghost'} className='font-medium'>Flyers</BankaiButton>
      <BankaiButton variant={'ghost'} className='font-medium'>Notebooks</BankaiButton>
      <BankaiButton variant={'ghost'} className='font-medium'>T-Shirts</BankaiButton>
      <BankaiButton variant={'ghost'} className='font-medium background-primary'>Business Cards</BankaiButton>
    </div>
  );
};

export default BottomNav;
