import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { fetchCars } from 'redux/operations';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Favorites = lazy(() => import('../pages/Favorites'));
const Catalogue = lazy(() => import('../pages/Catalogue'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalogue />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
