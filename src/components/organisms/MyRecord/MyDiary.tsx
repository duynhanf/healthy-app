import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import dayjs from 'dayjs';

import { getDiaries, selectDiaries } from '@healthy-app/redux/diarySlice';
import { LoadMoreButton } from '@healthy-app/components/molecules';
import { useAppDispatch } from '@healthy-app/hooks';

const Wrapper = styled.div`
  margin-top: 56px;
`;

const DiaryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 12px;
`;

const Diary = styled.div`
  width: 195px;
  padding: 16px;
  border: 2px solid #707070;

  font-size: 12px;
  line-height: 17px;

  ${down('md')} {
    width: 100%;
  }
`;
const Time = styled.div`
  font-size: 18px;
  line-height: 22px;
`;
const Title = styled.div`
  font-size: 12px;
  line-height: 17px;
  margin-top: 8px;
`;
const Description = styled.div`
  font-size: 12px;
  line-height: 17px;
`;

const MyDiary = () => {
  const diaries = useSelector(selectDiaries);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDiaries({ startRow: 1, endRow: 10 }));
  }, []);
  return (
    <>
      <Wrapper>
        <h2>MY DIARY</h2>
        <DiaryWrapper>
          {diaries.map(({ recordedAt, title, description }, idx) => (
            <Diary key={idx}>
              <Time>{dayjs(recordedAt).format('YYYY.MM.DD HH:mm')}</Time>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </Diary>
          ))}
        </DiaryWrapper>
      </Wrapper>
      <LoadMoreButton
        text="自分の日記をもっと見る"
        onClick={() => {
          dispatch(getDiaries({ startRow: 1, endRow: 10 }));
        }}
      />
    </>
  );
};

export default MyDiary;
