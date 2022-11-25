import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import columnService, {
  GetColumnsParams,
} from '@healthy-app/services/column.service';
import { Column } from '@healthy-app/models/column';

interface FoodState {
  columns: Column[];
}

const initialState: FoodState = {
  columns: [],
};

export const getColumns = createAsyncThunk<Column[], GetColumnsParams>(
  'getColumns',
  async (params) => {
    return columnService.getColumns(params);
  }
);

export const columnSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getColumns.pending, (state) => {
      state.columns = [];
    });
    builder.addCase(getColumns.fulfilled, (state, action) => {
      state.columns = action.payload;
    });
    builder.addCase(getColumns.rejected, (state) => {
      state.columns = [];
    });
  },
});

export const selectColumns = (state: RootState) => state.columns.columns;

export default columnSlice.reducer;
