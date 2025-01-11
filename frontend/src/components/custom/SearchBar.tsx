import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import BankaiButton from './buttons/BankaiButton';

export function SearchBar() {
  return (
    <div className="flex w-full md:w-72 lg:min-w-96 items-center space-x-2">
      <Input
        className="text-black bg-white"
        type="email"
        placeholder="Search products here..."
      />
      <div className='relative -left-10'>
        <BankaiButton className='rounded-tl-none rounded-bl-none' isPrimary href="" type="submit">
          <Search />
        </BankaiButton>
      </div>
    </div>
  );
}
