import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { ImageWithTitle } from '@healthy-app/components/molecules';
import { Grid } from '@healthy-app/utils/common-components';
import {
  getFoodHistories,
  selectFoodHistories,
} from '@healthy-app/redux/foodSlice';
import { LoadMoreButton } from '@healthy-app/components/molecules';
import { useAppDispatch } from '@healthy-app/hooks';

const Wrapper = styled(Grid)`
  justify-content: space-between;
  gap: 8px;

  flex-wrap: wrap;
`;

const FoodHistory = () => {
  const { foodHistories, isLoadingFoodHistories } =
    useSelector(selectFoodHistories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getFoodHistories({
        startRow: 1,
        endRow: 10,
      })
    );
  }, []);

  return (
    <>
      {!isLoadingFoodHistories && (
        <Wrapper tag="div">
          {foodHistories.map(({ imageUrl, foodType }, idx) => (
            <ImageWithTitle
              image={imageUrl}
              description={`05.21.${foodType}`}
              key={idx}
            />
          ))}
        </Wrapper>
      )}

      {isLoadingFoodHistories && <div>Loading....</div>}
      <LoadMoreButton
        text="記録をもっと見る"
        onClick={() => {
          dispatch(
            getFoodHistories({
              startRow: 10,
              endRow: 20,
            })
          );
        }}
      />
    </>
  );
};

export default FoodHistory;
