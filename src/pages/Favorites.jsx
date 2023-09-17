import { LoadMoreBtn } from 'components/Buttons/Buttons';
import CardsList from 'components/CardsList/CardsList';
import Container from 'components/Container/Container';
import NotFound from 'components/NotFound/NotFound';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCars, selectFavorites } from 'redux/selector';

const cardsPerPage = 8;

const Favorites = () => {
  const [page, setPage] = useState(1);
  const favorites = useSelector(selectFavorites);
  const cars = useSelector(selectCars);

  const favoriteCars = cars.filter(car => favorites.includes(car.id));
  const paginatedCars = favoriteCars.slice(0, page * cardsPerPage);
  const getPage = () => setPage(page + 1);
  const totalPages = Math.ceil(favoriteCars.length / cardsPerPage);

  return (
    <Container>
      <CardsList cars={paginatedCars} />
      {favoriteCars.length > 0 ? (
        totalPages !== page && <LoadMoreBtn onClick={getPage} />
      ) : (
        <NotFound text={'No cars in Favorites yet....'} />
      )}
    </Container>
  );
};

export default Favorites;
