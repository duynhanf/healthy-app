import React from 'react';
import styled from 'styled-components';
import { ICONS } from '../atoms/Icon';
import { COLORS } from '@healthy-app/utils/common-colors';

const Wrapper = styled.div`
  position: relative;
`;

const IconNumber = styled.div`
  border-radius: 50%;
  background-color: ${COLORS.Primary500};
  width: 16px;
  height: 16px;
  color: white;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  text-align: center;

  position: absolute;
  top: 0;
  right: -6px;
`;
interface Props {
  notificationcount?: number;
}
const NotificationIcon: React.FC<Props> = ({ notificationcount }) => {
  return (
    <Wrapper>
      <ICONS.Info />

      {notificationcount && <IconNumber>{notificationcount}</IconNumber>}
    </Wrapper>
  );
};

export default NotificationIcon;
