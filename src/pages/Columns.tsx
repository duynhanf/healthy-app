import React from 'react';
import { Container } from '@healthy-app/components/atoms';
import {
  ColumnList,
  RecommendedColumns,
} from '@healthy-app/components/organisms/Columns';

const Columns = () => {
  return (
    <Container>
      <RecommendedColumns />
      <ColumnList />
    </Container>
  );
};

export default Columns;
