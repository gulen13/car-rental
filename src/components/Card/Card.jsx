import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from 'redux/favoriteSlice';
import { selectFavorites } from 'redux/selector';
import PropTypes from 'prop-types';
import {
  CarImg,
  CarImgWrap,
  InfoWrapper,
  Item,
  MainInfo,
  CarInfo,
  CarText,
  ModelBlue,
  SecondaryInfo,
  SecondaryCarText,
  LearnMoreBtn,
  HeartIcon,
  IconBtn,
  HeartIconBlue,
} from './Card.styled';
import Modal from 'components/Modal/Modal';

const Card = ({
  model,
  make,
  id,
  img,
  year,
  address,
  rentalPrice,
  rentalCompany,
  type,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const inFavoritesStatus = favorites.includes(id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const incrementFavorite = () => {
    dispatch(addToFavorites(id));
  };
  const decrementFavorite = () => {
    dispatch(removeFromFavorites(id));
  };

  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  const firstFunctionality = functionalities[0];

  return (
    <div>
      <Item>
        <CarImgWrap>
          <CarImg src={img} alt={make} />
          <IconBtn
            onClick={!inFavoritesStatus ? incrementFavorite : decrementFavorite}
            type="button"
          >
            {!inFavoritesStatus ? <HeartIcon /> : <HeartIconBlue />}
          </IconBtn>
        </CarImgWrap>
        <InfoWrapper>
          <MainInfo>
            <CarInfo>
              <CarText>{make}</CarText>
              <ModelBlue>
                {model}
                <span style={{ color: 'black' }}>,</span>
              </ModelBlue>
              <CarText>{year}</CarText>
            </CarInfo>
            <CarText>{rentalPrice}</CarText>
          </MainInfo>
          <SecondaryInfo>
            <SecondaryCarText>{city}</SecondaryCarText>
            <SecondaryCarText>{country}</SecondaryCarText>
            <SecondaryCarText>{rentalCompany}</SecondaryCarText>
            <SecondaryCarText>{type}</SecondaryCarText>
            <SecondaryCarText>{make}</SecondaryCarText>
            <SecondaryCarText>{id}</SecondaryCarText>
            <SecondaryCarText>{firstFunctionality}</SecondaryCarText>
          </SecondaryInfo>
          <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn>
          {isModalOpen && (
            <Modal
              onClose={closeModal}
              key={id}
              model={model}
              make={make}
              year={year}
              rentalPrice={rentalPrice}
              address={address}
              rentalCompany={rentalCompany}
              functionalities={functionalities}
              id={id}
              type={type}
              img={img}
              fuelConsumption={fuelConsumption}
              engineSize={engineSize}
              description={description}
              accessories={accessories}
              rentalConditions={rentalConditions}
              mileage={mileage}
            />
          )}
        </InfoWrapper>
      </Item>
    </div>
  );
};

Card.propTypes = {
  model: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  rentalCompany: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
  fuelConsumption: PropTypes.string.isRequired,
  engineSize: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
  rentalConditions: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
};

export default Card;
