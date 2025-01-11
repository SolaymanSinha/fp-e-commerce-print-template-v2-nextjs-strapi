import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DropdownProps {
  items: string[];
  placeholder: string;
  className?: string;
}

const SelectComponent: React.FC<DropdownProps> = ({ items, placeholder, className }) => {
  return (
    <div>
      <Select>
        <SelectTrigger className={`w-full h-10 ${className}`}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectComponent;
