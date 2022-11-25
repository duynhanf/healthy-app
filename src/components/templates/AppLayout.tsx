import React from 'react';
import { Footer, Header } from '@healthy-app/components/organisms';
import { GoTopButton } from '../atoms/Button';

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <GoTopButton />
      <Footer />
    </>
  );
};

export default AppLayout;
