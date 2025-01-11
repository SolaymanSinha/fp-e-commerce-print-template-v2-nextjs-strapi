import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React from 'react';
import BankaiButton from '../buttons/BankaiButton';
import { List, ChevronDown } from 'lucide-react';
import { fetchCategories } from '@/data/(GET REQUEST)/category';
import { Categories, Category } from '@/data/strapi-types/Category';

export default async function BottomNav() {
  const categories: Promise<Categories> = fetchCategories();

  return (
    <div className="px-mobile-layout md:px-tablet-layout lg:px-desktop-layout py-[6px] flex items-center overflow-x-scroll">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <BankaiButton className="bg-gray-200" href="" variant={'outline'}>
            <List /> All Categories <ChevronDown />
          </BankaiButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {(await categories).data.map((category: Category) => {
            return (
              <DropdownMenuItem key={category.documentId}>
                {category.title}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>

      <BankaiButton variant={'ghost'} className="font-medium">
        Home
      </BankaiButton>

      {(await categories).data.slice(0, 14).map((category: Category) => (
        <BankaiButton
          key={category.documentId}
          variant={'ghost'}
          className="font-medium"
        >
          {category.title}
        </BankaiButton>
      ))}
    </div>
  );
}
