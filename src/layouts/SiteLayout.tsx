import React from 'react';
import MainHeader from '../components/MainHeader';

const SiteLayout = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>{children}</main>
    </div>
  );
};

export default SiteLayout;
