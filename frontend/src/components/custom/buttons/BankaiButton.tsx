/* eslint-disable @typescript-eslint/no-explicit-any */

// Bankai - Bankai is the most powerful form of a sword in the Bleach Anime. I named this because with this single component I am going to handle every button of the website. That means it's the most powerful button component 🤣.

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  isPrimary?: boolean;
  variant?: any;
  asChild?: boolean;
  className?: string;
}

const BankaiButton: React.FC<ButtonProps> = ({ href, isPrimary, children, className, ...props }) => {
  return (
    <Link href={href || ''}>
      <Button className={`${isPrimary && 'bg-primary'} hover:bg-black hover:text-white text-black ${className}`} {...props}>
        {children}
      </Button>
    </Link>
  );
};

export default BankaiButton;
