import React, { useEffect } from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import {
  ImageWithTitle,
  LoadMoreButton,
} from '@healthy-app/components/molecules';
import { getColumns, selectColumns } from '@healthy-app/redux/columnSlice';
import { COLORS } from '@healthy-app/utils/common-colors';
import { useAppDispatch } from '@healthy-app/hooks';
import { Grid } from '@healthy-app/utils/common-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 234px;
  font-size: 15px;
  line-height: 22px;

  li {
    color: ${COLORS.Primary400};
  }

  ${down('md')} {
    width: 100%;
  }
`;

const ColumnWrapper = styled(Grid)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 4px;
  row-gap: 18px;
  margin-top: 56px;
  margin-bottom: 24px;
`;

const ColumnList = () => {
  const columns = useSelector(selectColumns);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getColumns({
        startRow: 1,
        endRow: 10,
      })
    );
  }, []);

  return (
    <>
      <ColumnWrapper tag="div">
        {columns.map(({ imageUrl, description, createdAt, tags }, idx) => (
          <Column key={idx}>
            <ImageWithTitle
              image={imageUrl}
              description={dayjs(createdAt).format('YYYY.MM.DD HH:mm')}
            />
            <p>{description}</p>
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>#{tag}</li>
              ))}
            </ul>
          </Column>
        ))}
      </ColumnWrapper>
      <LoadMoreButton
        text="コラムをもっと見る"
        onClick={() => {
          dispatch(
            getColumns({
              startRow: 1,
              endRow: 10,
            })
          );
        }}
      />
    </>
  );
};

export default ColumnList;
