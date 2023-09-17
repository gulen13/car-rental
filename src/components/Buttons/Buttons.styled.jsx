import styled from '@emotion/styled';

export const ButtonFollows = styled.button`
  width: 200px;
  padding: 12px 0;
  color: #fff;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 12px;
  background: #5a7aaf;
  border: none;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  margin-top: 28px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #445c84;
  }
`;

export const LearnMoreBtn = styled.button`
  width: 274px;
  padding: 12px 0;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  margin-top: 28px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #0b44cd;
  }
`;

export const RentalButton = styled.a`
  width: ${props => props.width || 'auto'};
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #5a7aaf;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  text-decoration: none;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #445c84;
  }
`;
