import React from 'react';
import TopNavbar from './top-nav';
import MiddleNav from './middle-nav';
import BottomNav from './bottom-nav';

const Navbar = () => {
  return (
    <nav>
      <TopNavbar />
      <MiddleNav />
      <BottomNav />
    </nav>
  );
};

export default Navbar;
