import {Button} from '@com/atoms';
import {LightningBoltIcon, MoonIcon, SunIcon} from '@radix-ui/react-icons';
import {styled} from '@style/createStyles';
import {darkTheme, lightTheme} from '@style/themes';
import {BlogConfigType} from '@types';
import Head from 'next/head';
import React, {useState} from 'react';
import useTheme from 'src/libs/useTheme';

interface LayoutProps {
  children: React.ReactNode;
  config: BlogConfigType;
}

const Root = styled('div', {
  backgroundColor: '$colors$loContrast',
  color: '$colors$hiContrast',
  transition: 'background 0.25s ease, color 0.30s ease',

  minHeight: '100vh',
  height: 'fit-content',
});

function Layout({children, config}: LayoutProps) {
  const {theme, themeString, toggleTheme} = useTheme({default: config.theme, light: lightTheme, dark: darkTheme});
  // console.debug(config);

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name='description' content='Generated by create next app' />
        {config.subtitle && <meta name='description' content={config.subtitle} />}

        {/* Open Graph Metatag */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={config.baseurl} />
        <meta property='og:title' content={config.title} />
        {config.avatar.enabled && <meta property='og:image' content={config.avatar.src} />}
        {config.subtitle && <meta property='og:description' content={config.subtitle} />}
        <meta property='og:site_name' content={config.title} />
        <meta property='og:locale' content={config.locale.languageCode} />

        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Root className={theme}>
        {config.theme === 'auto' && (
          <Button onClick={toggleTheme}>{themeString === 'light' ? <SunIcon /> : <MoonIcon />}</Button>
        )}
        <aside>{config.avatar?.enabled && <img src={`/${config.avatar.src}`} alt='avatar' width='64' />}</aside>
        <main>{children}</main>
      </Root>
    </>
  );
}

export default Layout;
