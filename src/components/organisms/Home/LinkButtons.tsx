import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ICONS } from '@healthy-app/components/atoms/Icon';
import { HexagonButton } from '@healthy-app/components/molecules';
import { LINKS } from '@healthy-app/utils/common-constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 42px;
  padding-top: 42px;
  padding-bottom: 42px;
  flex-wrap: wrap;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LinkButtons: React.FC = () => {
  return (
    <Wrapper>
      {LINKS.map(({ label }, idx) => (
        <Link to="/my-record" key={idx}>
          <HexagonButton>
            <StyledDiv>
              <ICONS.Knife />
              {label}
            </StyledDiv>
          </HexagonButton>
        </Link>
      ))}
    </Wrapper>
  );
};

export default LinkButtons;
