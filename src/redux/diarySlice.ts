import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { Column } from '@healthy-app/models/column';
import diaryService, {
  GetExercisesParams,
} from '@healthy-app/services/diary.service';
import { Diary, Exercise } from '@healthy-app/models/diary';

interface FoodState {
  exercises: Exercise[];
  diaries: Diary[];
}

const initialState: FoodState = {
  exercises: [],
  diaries: [],
};

export const getExercises = createAsyncThunk<Exercise[], GetExercisesParams>(
  'getExercises',
  async (params) => {
    return diaryService.getExercises(params);
  }
);

export const getDiaries = createAsyncThunk<Diary[], GetExercisesParams>(
  'getDiaries',
  async (params) => {
    return diaryService.getDiaries(params);
  }
);

export const diarySlice = createSlice({
  name: 'diaries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExercises.pending, (state) => {
      state.exercises = [];
    });
    builder.addCase(getExercises.fulfilled, (state, action) => {
      state.exercises = action.payload;
    });
    builder.addCase(getExercises.rejected, (state) => {
      state.exercises = [];
    });
    builder.addCase(getDiaries.pending, (state) => {
      state.diaries = [];
    });
    builder.addCase(getDiaries.fulfilled, (state, action) => {
      state.diaries = action.payload;
    });
    builder.addCase(getDiaries.rejected, (state) => {
      state.diaries = [];
    });
  },
});

export const selectExercises = (state: RootState) => state.diaries.exercises;
export const selectDiaries = (state: RootState) => state.diaries.diaries;

export default diarySlice.reducer;
