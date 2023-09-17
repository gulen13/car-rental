import { LoadMoreBtn } from 'components/Buttons/Buttons';
import CardsList from 'components/CardsList/CardsList';
import Container from 'components/Container/Container';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selector';

const cardsPerPage = 8;

const Catalogue = () => {
  const cars = useSelector(selectCars);
  const [page, setPage] = useState(1);

  const paginatedCars = cars.slice(0, page * cardsPerPage);
  const getPage = () => {
    setPage(page + 1);
  };

  const totalPages = Math.ceil(cars.length / cardsPerPage);

  return (
    <Container>
      <CardsList cars={paginatedCars} />
      {cars.length > 0 && totalPages !== page && (
        <LoadMoreBtn onClick={getPage} />
      )}
    </Container>
  );
};

export default Catalogue;
