import React from 'react';
import styled from 'styled-components';

import { RECOMMENDEDCOLUMNS } from '@healthy-app/utils/common-constants';
import { COLORS } from '@healthy-app/utils/common-colors';
import { Grid } from '@healthy-app/utils/common-components';

const RecommendedWrapper = styled(Grid)`
  display: flex;
  justify-content: space-between;

  gap: 16px;
  margin-top: 56px;
`;

const RecommendedColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: ${COLORS.Dark600};

  h3 {
    color: ${COLORS.Primary300};
    text-transform: uppercase;
  }

  p {
    border-top: 1px ${COLORS.Light} solid;
    color: ${COLORS.Light};
  }
`;

const RecommendedColumns = () => {
  return (
    <RecommendedWrapper tag="div">
      {RECOMMENDEDCOLUMNS.map(({ title, description }, idx) => (
        <RecommendedColumn key={idx}>
          <h3>{title}</h3>
          <p>{description}</p>
        </RecommendedColumn>
      ))}
    </RecommendedWrapper>
  );
};

export default RecommendedColumns;
