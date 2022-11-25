import React, { useState } from 'react';
import styled from 'styled-components';
import { ICONS } from '../atoms/Icon';
import { COLORS } from '@healthy-app/utils/common-colors';

const Wrapper = styled.div``;

const SideMenuWrapper = styled.div`
  position: relative;
  ul {
    background-color: ${COLORS.Gray};
    width: 280px;
    position: absolute;
    top: 32px;
    right: 0;
    display: flex;
    flex-direction: column;
    z-index: 100;

    li {
      padding: 22px 32px;
      font-weight: 300;
      font-size: 18px;
      line-height: 26px;

      :not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      }
    }
  }
`;

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openSideMenu = () => {
    setIsOpen(true);
  };

  const hideSideMenu = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      {!isOpen && <ICONS.Menu onClick={openSideMenu} />}
      {isOpen && (
        <SideMenuWrapper>
          <ICONS.Close onClick={hideSideMenu} />
          <ul>
            <li>自分の記録 </li>
            <li>体重グラフ</li>
            <li>目標</li>
            <li>選択中のコース</li>
            <li>コラム一覧</li>
            <li>設定</li>
          </ul>
        </SideMenuWrapper>
      )}
    </Wrapper>
  );
};

export default SideMenu;
