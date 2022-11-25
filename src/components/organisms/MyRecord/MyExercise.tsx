import React, { useEffect } from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import { getExercises, selectExercises } from '@healthy-app/redux/diarySlice';
import { COLORS } from '@healthy-app/utils/common-colors';
import { useAppDispatch } from '@healthy-app/hooks';

const Wrapper = styled.div`
  margin-top: 56px;
  padding: 16px 24px;
  background-color: ${COLORS.Dark500};
  color: white;

  ul {
    flex-wrap: wrap;
    overflow-y: scroll;
    max-height: 200px;

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 3px;
      background: ${COLORS.Gray};
    }

    ::-webkit-scrollbar-thumb {
      background: ${COLORS.Primary300};
      border-radius: 3px;
    }
  }

  li {
    width: calc(50% - 40px);
    list-style: unset;
    border-bottom: 1px solid ${COLORS.Gray};
    margin-right: 40px;

    display: flex;
    justify-content: space-between;
    padding-top: 8px;
    padding-bottom: 2px;
  }

  ${down('md')} {
    li {
      width: 100%;
      margin-right: 0;
    }
  }
`;

const YellowText = styled.div`
  color: ${COLORS.Primary300};
`;

const ActivityText = styled.div`
  font-size: 15px;
  line-height: 22px;
`;
const CaloText = styled(YellowText)`
  font-size: 15px;
  line-height: 18px;
`;

const TimeText = styled(YellowText)`
  font-size: 18px;
  line-height: 22px;
`;

const MyExercise = () => {
  const exercises = useSelector(selectExercises);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getExercises({ startRow: 1, endRow: 10 }));
  }, []);

  return (
    <Wrapper>
      <h2>MY EXERCISE</h2>
      <div>2021.05.21</div>
      <ul>
        {exercises.map(({ recordedAt, title, burnedCalo }, idx) => (
          <li key={idx}>
            <div>
              <ActivityText>{title}</ActivityText>
              <CaloText>{burnedCalo}kcal</CaloText>
            </div>
            <TimeText>
              {dayjs(new Date()).diff(recordedAt, 'minute')} min
            </TimeText>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default MyExercise;
