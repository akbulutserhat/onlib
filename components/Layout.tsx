import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Navigation from './Navigation';
import Style from '../styles/layout.module.scss';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <div className={Style.layout}>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.3/css/all.css'
          integrity='sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk'
          crossOrigin='anonymous'></link>
      </Head>
      <Header></Header>
      <main className='container'>{children}</main>
    </div>
    <Navigation></Navigation>
  </>
);

export default Layout;
