import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Container } from '@healthy-app/components/atoms';
import { Chart } from '@healthy-app/components/molecules';
import {
  MyDiary,
  MyExercise,
  RecommendedLinks,
} from '@healthy-app/components/organisms/MyRecord';
import { COLORS } from '@healthy-app/utils/common-colors';

const BodyRecord = styled.div`
  background-color: ${COLORS.Dark500};
  color: white;
  padding: 16px 24px;
  margin-top: 56px;
`;

const BodyRecordTitle = styled.div`
  font-size: 15px;
  line-height: 18px;
  padding-bottom: 16px;

  span {
    font-size: 22px;
    line-height: 27px;
  }
`;

const MyRecord = () => {
  const { t } = useTranslation();
  const recommendedLinks = [
    {
      label: 'BODY RECORD',
      description: '自分のカラダの記録',
      image: '/images/MyRecommend-1.jpg',
    },
    {
      label: 'MY EXERCISE',
      description: '自分の運動の記録',
      image: '/images/MyRecommend-2.jpg',
    },
    {
      label: 'MY DIARY',
      description: '自分の日記',
      image: '/images/MyRecommend-3.jpg',
    },
  ];

  return (
    <Container>
      <RecommendedLinks links={recommendedLinks} />

      <BodyRecord>
        <BodyRecordTitle>
          {t('body_record')} <span>2021.05.21</span>{' '}
        </BodyRecordTitle>
        <div style={{ width: '100%', height: 316 }}>
          <Chart />
        </div>
      </BodyRecord>

      <MyExercise />

      <MyDiary />
    </Container>
  );
};

export default MyRecord;
