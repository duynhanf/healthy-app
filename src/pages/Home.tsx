import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';

import { Container } from '@healthy-app/components/atoms';
import { Chart } from '@healthy-app/components/molecules';
import { Grid } from '@healthy-app/utils/common-components';
import {
  FoodHistory,
  LinkButtons,
} from '@healthy-app/components/organisms/Home';
import { COLORS } from '@healthy-app/utils/common-colors';

const Image = styled.img`
  object-fit: cover;
  width: 540px;
  height: 316px;

  ${down('md')} {
    width: 100%;
  }
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 316px;
  background-color: ${COLORS.Dark600};
  color: ${COLORS.Light};
`;

const Home = () => {
  return (
    <>
      <Grid tag="div">
        <Image src="/images/d01.jpg" />
        <ChartWrapper>
          <Chart />
        </ChartWrapper>
      </Grid>

      <Container>
        <LinkButtons />
        <FoodHistory />
      </Container>
    </>
  );
};

export default Home;
