import React, { Suspense } from 'react';
// import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
