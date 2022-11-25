import styled from 'styled-components';

import { COLORS } from '@healthy-app/utils/common-colors';
import { ICONS } from '../Icon';

const StyledButton = styled.button`
  width: 48px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.0001);
  border: 1px solid ${COLORS.Gray};
  border-radius: 50%;

  position: fixed;
  bottom: 150px;
  right: 30px;
  z-index: 99;
  cursor: pointer;
`;

const GoTopButton = () => {
  const onClickHandle = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <StyledButton onClick={onClickHandle}>
      <ICONS.ChervonUp />
    </StyledButton>
  );
};

export default GoTopButton;
