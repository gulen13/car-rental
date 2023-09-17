import { ButtonFollows, RentalButton } from './Buttons.styled';
import PropTypes from 'prop-types';

export const LoadMoreBtn = ({ onClick }) => (
  <ButtonFollows type="button" onClick={onClick}>
    Load more
  </ButtonFollows>
);

export const RentalBtn = ({ width }) => {
  return (
    <RentalButton href="tel:+380730000000" width={width}>
      Rental car
    </RentalButton>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

RentalBtn.propTypes = {
  width: PropTypes.string,
};
