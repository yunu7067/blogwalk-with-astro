import {BlogConfigType} from '@types';
import Head from 'next/head';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  config: BlogConfigType;
}

function Layout({children, config}: LayoutProps) {
  console.log(config);
  return (
    <>
      {config.avatar?.enabled && <img src={`/${config.avatar.src}`} alt='avatar' width='64' />}
      <main>{children}</main>
    </>
  );
}

export default Layout;
