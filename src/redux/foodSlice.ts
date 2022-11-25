import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FoodHistory } from '@healthy-app/models/food';
import foodService, {
  GetOrdersParams,
} from '@healthy-app/services/food.service';
import type { RootState } from './store';

interface FoodState {
  isLoadingFoodHistories: boolean;
  foodHistories: FoodHistory[];
}

const initialState: FoodState = {
  foodHistories: [],
  isLoadingFoodHistories: false,
};

export const getFoodHistories = createAsyncThunk<
  FoodHistory[],
  GetOrdersParams
>('getFoodHistories', async (params) => {
  return foodService.getFoodHistories(params);
});

export const foodSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFoodHistories.pending, (state) => {
      state.foodHistories = [];
      state.isLoadingFoodHistories = true;
    });
    builder.addCase(getFoodHistories.fulfilled, (state, action) => {
      state.foodHistories = action.payload;
      state.isLoadingFoodHistories = false;
    });
    builder.addCase(getFoodHistories.rejected, (state) => {
      state.foodHistories = [];
      state.isLoadingFoodHistories = false;
    });
  },
});

export const selectFoodHistories = (state: RootState) => {
  return {
    foodHistories: state.foods.foodHistories,
    isLoadingFoodHistories: state.foods.isLoadingFoodHistories,
  };
};

export default foodSlice.reducer;
