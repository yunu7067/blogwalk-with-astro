/* eslint-disable @next/next/no-img-element */
import {Button} from '@com/atoms';
import {SocialButtonCollection} from '@com/organisms';
import {MoonIcon, SunIcon} from '@radix-ui/react-icons';
import {styled} from '@style/createStyles';
import {darkTheme, lightTheme} from '@style/themes';
import {BlogConfigType} from '@types';
import Head from 'next/head';
import React from 'react';
import useTheme from 'src/libs/useTheme';

interface LayoutProps {
  children: React.ReactNode;
  config: BlogConfigType;
}

const Root = styled('div', {
  color: '$fg-default',
  background: '$canvas-default',
  transition: 'background 0.25s ease, color 0.30s ease',
  minHeight: '100vh',
  height: 'fit-content',
});

const Wrapper = styled('div', {
  margin: 'auto',
  maxWidth: '70ch',
});

const Header = styled(Wrapper, {});
const Content = styled(Wrapper, {
  minHeight: '100vh',
});

function Layout({children, config}: LayoutProps) {
  const {theme, themeString, toggleTheme} = useTheme({default: config.theme, light: lightTheme, dark: darkTheme});

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
        <Header>
          <aside>{config.avatar?.enabled && <img src={`/${config.avatar.src}`} alt='avatar' width='64' />}</aside>
          {config.theme === 'auto' && (
            <Button content='icon' onClick={toggleTheme}>
              {themeString === 'light' ? <SunIcon /> : <MoonIcon />}
            </Button>
          )}
          <h1>{config.title || ''}</h1>
          <p>{config.subtitle}</p>
          <SocialButtonCollection social={config.social} />
        </Header>
        <Content>{children}</Content>
      </Root>
    </>
  );
}

export default Layout;
