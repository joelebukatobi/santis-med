import React, { Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Helmet title="Santis">
        <meta charSet="utf-8" />
      </Helmet>
      <div className="flex flex-col w-full h-full ">
        <Header />
        <div className="w-full grow">{children}</div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
